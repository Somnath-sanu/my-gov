import React from "react";

export interface MGNREGAData {
  _id: number;
  fin_year: string;
  state_name: string;
  district_name: string;
  month: string;
  Approved_Labour_Budget: string | null;
  Average_Wage_rate_per_day_per_person: string | null;
  Average_days_of_employment_provided_per_Household: string | null;
  Number_of_Completed_Works: string | null;
  Total_Exp: string | null;
  Total_Households_Worked: string | null;
  Total_Individuals_Worked: string | null;
  Women_Persondays: string | null;
  percent_of_Expenditure_on_Agriculture_Allied_Works: string | null;
  percentage_payments_gererated_within_15_days: string | null;
}

export type KpiMetric = {
  key: keyof MGNREGAData;
  labelKey: string;
  icon: React.ReactNode;
  tooltipKey: string;
  format: "number" | "currency" | "days" | "percentage";
  color: string;
};

export type Language = "en" | "hi";

export type Translations = {
  [key: string]: {
    en: string;
    hi: string;
  };
};

export interface LocalizationContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}
