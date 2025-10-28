"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import { Language, LocalizationContextType } from "../types";
import { I18N_STRINGS } from "../constants";

const LocalizationContext = createContext<LocalizationContextType | undefined>(
  undefined
);

export const LocalizationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    const entry = I18N_STRINGS[key];
    if (entry) {
      return entry[language] || entry.en;
    }
    return key;
  };

  return (
    <LocalizationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error(
      "useLocalization must be used within a LocalizationProvider"
    );
  }
  return context;
};
