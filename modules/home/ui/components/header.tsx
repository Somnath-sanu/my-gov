import { useLocalization } from "@/contexts/localizationContext";
import { Language } from "@/types";

export const Header = () => {
  const { language, setLanguage, t } = useLocalization();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-teal-600">
            {t("appTitle")}
          </h1>
          <p className="text-sm md:text-base text-slate-500">
            {t("appSubtitle")}
          </p>
        </div>
        <div className="flex items-center space-x-1 border border-slate-300 rounded-full p-1">
          <button
            onClick={() => handleLanguageChange("en")}
            className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors ${
              language === "en"
                ? "bg-teal-600 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => handleLanguageChange("hi")}
            className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors ${
              language === "hi"
                ? "bg-teal-600 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            HI
          </button>
        </div>
      </div>
    </header>
  );
};
