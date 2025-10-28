import { Translations } from "./types";

export const API_BASE_URL =
  "https://api.data.gov.in/resource/ee03643a-ee4c-48c2-ac30-9f2ff26ab722";
export const API_PARAMS = {
  format: "json",
  limit: "1000", // Fetch more records to ensure all districts are covered
};

const generateFinancialYears = (startYear: number): string[] => {
  const currentYear = new Date().getFullYear();
  const endYear = new Date().getMonth() >= 3 ? currentYear + 1 : currentYear;
  const years: string[] = [];
  for (let year = startYear; year < endYear; year++) {
    years.push(`${year}-${year + 1}`);
  }
  return years.reverse();
};

export const FINANCIAL_YEARS = generateFinancialYears(2018);

export const STATES_LIST = [
  "ANDAMAN AND NICOBAR ISLANDS",
  "ANDHRA PRADESH",
  "ARUNACHAL PRADESH",
  "ASSAM",
  "BIHAR",
  "CHANDIGARH",
  "CHHATTISGARH",
  "DADRA AND NAGAR HAVELI",
  "GOA",
  "GUJARAT",
  "HARYANA",
  "HIMACHAL PRADESH",
  "JAMMU AND KASHMIR",
  "JHARKHAND",
  "KARNATAKA",
  "KERALA",
  "LADAKH",
  "LAKSHADWEEP",
  "MADHYA PRADESH",
  "MAHARASHTRA",
  "MANIPUR",
  "MEGHALAYA",
  "MIZORAM",
  "NAGALAND",
  "ODISHA",
  "PUDUCHERRY",
  "PUNJAB",
  "RAJASTHAN",
  "SIKKIM",
  "TAMIL NADU",
  "TELANGANA",
  "TRIPURA",
  "UTTAR PRADESH",
  "UTTARAKHAND",
  "WEST BENGAL",
].sort();

// Cache duration in milliseconds (e.g., 6 hours)
export const CACHE_DURATION = 6 * 60 * 60 * 1000;

export const I18N_STRINGS: Translations = {
  // Header
  appTitle: { en: "Our Voice, Our Rights", hi: "हमारी आवाज़, हमारे अधिकार" },
  appSubtitle: {
    en: "MGNREGA Performance Dashboard",
    hi: "मनरेगा प्रदर्शन डैशबोर्ड",
  },
  // Selector
  selectYear: { en: "Select Financial Year", hi: "वित्तीय वर्ष चुनें" },
  selectState: { en: "Select Your State", hi: "अपना राज्य चुनें" },
  selectDistrict: { en: "Select Your District", hi: "अपना जिला चुनें" },
  punjab: { en: "Punjab", hi: "पंजाब" },
  refreshData: { en: "Refresh Data", hi: "डेटा रिफ्रेश करें" },
  lastUpdated: { en: "Data as of:", hi: "डेटा इस समय का है:" },
  // Dashboard
  dashboardTitle: {
    en: "District Performance",
    hi: "जिला प्रदर्शन",
  },
  selectStatePrompt: {
    en: "Please select a state above to view data.",
    hi: "डेटा देखने के लिए कृपया ऊपर एक राज्य चुनें।",
  },
  selectDistrictPrompt: {
    en: "Please select a district above to see the data.",
    hi: "डेटा देखने के लिए कृपया ऊपर एक जिला चुनें।",
  },
  noData: {
    en: "No data available for this district.",
    hi: "इस जिले के लिए कोई डेटा उपलब्ध नहीं है।",
  },
  loading: { en: "Loading data...", hi: "डेटा लोड हो रहा है..." },
  error: { en: "Could not load data.", hi: "डेटा लोड नहीं हो सका।" },
  comparisonChartTitle: {
    en: "Avg. Days of Employment per Household",
    hi: "प्रति परिवार औसत रोजगार के दिन",
  },
  comparisonChartYAxis: { en: "Days", hi: "दिन" },
  yourDistrict: { en: "Your District", hi: "आपका जिला" },
  // KPIs
  totalHouseholdsWorked: { en: "Households Employed", hi: "नियोजित परिवार" },
  totalIndividualsWorked: { en: "People Employed", hi: "नियोजित व्यक्ति" },
  avgDaysEmployment: { en: "Avg. Days of Work", hi: "औसत कार्य दिवस" },
  avgWageRate: { en: "Average Daily Wage", hi: "औसत दैनिक मजदूरी" },
  womenPersondays: { en: "Women's Workdays", hi: "महिला कार्यदिवस" },
  completedWorks: { en: "Works Completed", hi: "पूर्ण कार्य" },
  timelyPayments: { en: "On-Time Payments", hi: "समय पर भुगतान" },
  agriExpenditure: { en: "Farm-related Spending", hi: "कृषि संबंधी खर्च" },
  // Tooltips
  totalHouseholdsWorkedTooltip: {
    en: "Total number of families who received work.",
    hi: "काम पाने वाले परिवारों की कुल संख्या।",
  },
  totalIndividualsWorkedTooltip: {
    en: "Total number of people who received work.",
    hi: "काम पाने वाले लोगों की कुल संख्या।",
  },
  avgDaysEmploymentTooltip: {
    en: "Average number of days of work given to each family.",
    hi: "प्रत्येक परिवार को दिए गए काम के दिनों की औसत संख्या।",
  },
  avgWageRateTooltip: {
    en: "Average money earned by a person for one day of work.",
    hi: "एक व्यक्ति द्वारा एक दिन के काम के लिए कमाया गया औसत पैसा।",
  },
  womenPersondaysTooltip: {
    en: "Total days of work done by women.",
    hi: "महिलाओं द्वारा किए गए काम के कुल दिन।",
  },
  completedWorksTooltip: {
    en: "Total number of projects finished in the district.",
    hi: "जिले में पूरी हुई परियोजनाओं की कुल संख्या।",
  },
  timelyPaymentsTooltip: {
    en: "Percentage of payments made to workers within 15 days.",
    hi: "15 दिनों के भीतर श्रमिकों को किए गए भुगतान का प्रतिशत।",
  },
  agriExpenditureTooltip: {
    en: "Percentage of money spent on farming and related works.",
    hi: "खेती और संबंधित कार्यों पर खर्च किए गए धन का प्रतिशत।",
  },
};
