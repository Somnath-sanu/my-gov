import { useLocalization } from "@/contexts/localizationContext";
import React from "react";

interface SelectorPanelProps {
  years: string[];
  selectedYear: string;
  onYearChange: (year: string) => void;
  states: string[];
  selectedState: string;
  onStateChange: (state: string) => void;
  districts: string[];
  selectedDistrict: string;
  onDistrictChange: (district: string) => void;
  onRefresh: () => void;
  lastUpdated: Date | null;
  loading: boolean;
}

const RefreshIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4v5h5M20 20v-5h-5M4 4a14.95 14.95 0 0114.6-2.5M20 20a14.95 14.95 0 01-14.6 2.5"
    />
  </svg>
);

const toTitleCase = (str: string) => {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

export const SelectorPanel: React.FC<SelectorPanelProps> = ({
  years,
  selectedYear,
  onYearChange,
  states,
  selectedState,
  onStateChange,
  districts,
  selectedDistrict,
  onDistrictChange,
  onRefresh,
  lastUpdated,
  loading,
}) => {
  const { t } = useLocalization();

  return (
    <section className="bg-white p-4 md:p-6 rounded-lg shadow-sm mb-6 md:mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div>
          <label
            htmlFor="year-select"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            {t("selectYear")}
          </label>
          <select
            id="year-select"
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="state-select"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            {t("selectState")}
          </label>
          <select
            id="state-select"
            value={selectedState}
            onChange={(e) => onStateChange(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="">-- {t("selectState")} --</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {toTitleCase(state)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="district-select"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            {t("selectDistrict")}
          </label>
          <select
            id="district-select"
            value={selectedDistrict}
            onChange={(e) => onDistrictChange(e.target.value)}
            disabled={!selectedState || districts.length === 0}
            className="w-full bg-white border border-slate-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500 disabled:bg-slate-100 disabled:cursor-not-allowed"
          >
            <option value="">-- {t("selectDistrict")} --</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500">
        <button
          onClick={onRefresh}
          disabled={loading || !selectedState}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed"
        >
          <RefreshIcon />
          {loading ? t("loading") : t("refreshData")}
        </button>
        {lastUpdated && (
          <p className="mt-2 sm:mt-0">
            {t("lastUpdated")} {lastUpdated.toLocaleString()}
          </p>
        )}
      </div>
    </section>
  );
};
