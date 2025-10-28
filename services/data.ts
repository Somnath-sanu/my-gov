import { MGNREGAData } from "../types";
import { API_BASE_URL, API_PARAMS, CACHE_DURATION } from "../constants";

const CACHE_KEY_PREFIX = "mgnregaDataCache";

interface CachedData {
  timestamp: number;
  data: MGNREGAData[];
}

export const fetchMgnregaData = async (
  stateName: string,
  year: string,
  forceRefresh: boolean = false
): Promise<{ data: MGNREGAData[]; timestamp: Date }> => {
  if (!stateName || !year) {
    return { data: [], timestamp: new Date() };
  }

  if (!process.env.NEXT_PUBLIC_API_KEY) {
    throw new Error("API key is not defined in environment variables.");
  }

  const CACHE_KEY = `${CACHE_KEY_PREFIX}_${stateName.toUpperCase()}_${year}`;
  const cachedItem = localStorage.getItem(CACHE_KEY);

  if (cachedItem && !forceRefresh) {
    try {
      const { timestamp, data }: CachedData = JSON.parse(cachedItem);
      const isCacheValid = Date.now() - timestamp < CACHE_DURATION;
      if (isCacheValid) {
        console.log(`Returning cached data for ${stateName} (${year}).`);
        return { data, timestamp: new Date(timestamp) };
      }
    } catch (error) {
      console.error("Error parsing cached data:", error);
    }
  }

  console.log(`Fetching fresh data for ${stateName} (${year}) from API.`);
  const url = new URL(API_BASE_URL);
  url.searchParams.append("api-key", process.env.NEXT_PUBLIC_API_KEY);

  const dynamicParams = {
    ...API_PARAMS,
    "filters[state_name]": stateName.toUpperCase(),
    "filters[fin_year]": year,
  };

  Object.entries(dynamicParams).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const result = await response.json();
  const data = result.records as MGNREGAData[];

  const newTimestamp = Date.now();
  const newCachedData: CachedData = {
    timestamp: newTimestamp,
    data,
  };
  // caching the fetched data
  localStorage.setItem(CACHE_KEY, JSON.stringify(newCachedData));

  return { data, timestamp: new Date(newTimestamp) };
};
