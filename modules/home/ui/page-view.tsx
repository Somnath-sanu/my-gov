"use client";

import { FINANCIAL_YEARS, STATES_LIST } from "@/constants";
import { useGeolocation } from "@/hooks/useGeolocation";
import { fetchMgnregaData } from "@/services/data";
import { MGNREGAData } from "@/types";
import { useState, useEffect, useCallback } from "react";
import { Header } from "./components/header";
import { SelectorPanel } from "./components/selector";
import { Dashboard } from "./components/dashboard";
import { Footer } from "./components/footer";

export const PageView = () => {
  const [allData, setAllData] = useState<MGNREGAData[]>([]);
  const [filteredData, setFilteredData] = useState<MGNREGAData[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>(FINANCIAL_YEARS[0]); // Default to the most recent year
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const { position, error: geoError } = useGeolocation();

  /**
   * Free trial accounts have a hard limit of 2,500 requests per day for testing purposes.
   * Free trial accounts are limited to one request per second.
    If you exceed that rate you may see a 429 - too many requests response.
  */

  // useEffect(() => {
  //   console.error("Geolocation Error :", geoError);
  // }, [geoError]);

  useEffect(() => {
    const detectDistrict = async () => {
      if (!position) return;
      try {
        const { latitude, longitude } = position;
        const res = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.NEXT_PUBLIC_OPENCAGE_KEY}`
        );
        const data = await res.json();

        const components = data?.results?.[0]?.components;
        const district =
          components?.county?.replace(" district", "") || components?.city;
        const state = components?.state;

        console.log("Detected:", { state, district });

        // Optional: auto-set if within India & data available
        if (state && district && STATES_LIST.includes(state.toUpperCase())) {
          setSelectedState(state.toUpperCase());
          setSelectedDistrict(district.toUpperCase());
        }
      } catch (err) {
        console.error("Reverse geocoding failed:", err);
      }
    };

    detectDistrict();
  }, [position]);

  const loadData = useCallback(
    async (state: string, year: string, forceRefresh = false) => {
      if (!state || !year) {
        setAllData([]);
        setDistricts([]);
        setLastUpdated(null);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const { data, timestamp } = await fetchMgnregaData(
          state,
          year,
          forceRefresh
        );
        const uniqueDistricts = [
          ...new Set(data.map((item) => item.district_name)),
        ].sort();
        setAllData(data);
        setDistricts(uniqueDistricts);
        setLastUpdated(timestamp);
      } catch (err) {
        setError("Failed to load data. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    if (selectedState && selectedYear) {
      loadData(selectedState, selectedYear);
    } else {
      setAllData([]);
      setDistricts([]);
      setSelectedDistrict("");
    }
  }, [selectedState, selectedYear, loadData]);

  useEffect(() => {
    if (selectedDistrict) {
      setFilteredData(
        allData.filter((d) => d.district_name === selectedDistrict)
      );
    } else {
      setFilteredData([]);
    }
  }, [selectedDistrict, allData]);

  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setSelectedDistrict(""); // Reset district when state changes
    setFilteredData([]);
  };

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setSelectedDistrict(""); // Reset district when year changes
    setFilteredData([]);
  };

  const handleRefresh = () => {
    if (selectedState && selectedYear) {
      loadData(selectedState, selectedYear, true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Header />
      <main className="grow container mx-auto p-4 md:p-6 lg:p-8">
        <SelectorPanel
          years={FINANCIAL_YEARS}
          selectedYear={selectedYear}
          onYearChange={handleYearChange}
          states={STATES_LIST}
          selectedState={selectedState}
          onStateChange={handleStateChange}
          districts={districts}
          selectedDistrict={selectedDistrict}
          onDistrictChange={setSelectedDistrict}
          onRefresh={handleRefresh}
          lastUpdated={lastUpdated}
          loading={loading}
        />
        <Dashboard
          districtData={filteredData.length > 0 ? filteredData[0] : null}
          allDistrictData={allData}
          loading={loading}
          error={error}
          selectedState={selectedState}
          selectedDistrict={selectedDistrict}
        />
      </main>
      <Footer />
    </div>
  );
};
