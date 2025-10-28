import React from "react";
import { MGNREGAData } from "@/types";
import { KpiCard } from "./kpiCard";
import { DistrictComparisonChart } from "./districtComparasionChart";
import { kpiMetrics } from "./kpiConfig";
import { useLocalization } from "@/contexts/localizationContext";

interface DashboardProps {
  districtData: MGNREGAData | null;
  allDistrictData: MGNREGAData[];
  loading: boolean;
  error: string | null;
  selectedState: string;
  selectedDistrict: string;
}

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-500"></div>
  </div>
);

export const Dashboard = ({
  districtData,
  allDistrictData,
  loading,
  error,
  selectedState,
  selectedDistrict,
}: DashboardProps) => {
  const { t } = useLocalization();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="text-center p-8 bg-red-100 text-red-700 rounded-lg">
        {t("error")} {error}
      </div>
    );
  }

  if (!selectedState) {
    return (
      <div className="text-center p-8 bg-blue-100 text-blue-700 rounded-lg">
        {t("selectStatePrompt")}
      </div>
    );
  }

  if (!selectedDistrict) {
    return (
      <div className="text-center p-8 bg-blue-100 text-blue-700 rounded-lg">
        {t("selectDistrictPrompt")}
      </div>
    );
  }

  if (!districtData) {
    return (
      <div className="text-center p-8 bg-yellow-100 text-yellow-700 rounded-lg">
        {t("noData")}
      </div>
    );
  }

  return (
    <div className="space-y-6 md:space-y-8">
      <h2 className="text-xl md:text-2xl font-bold text-slate-700 border-b-2 border-teal-200 pb-2">
        {t("dashboardTitle")}: {districtData.district_name}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {kpiMetrics.map((metric) => (
          <KpiCard
            key={metric.key}
            metric={metric}
            value={districtData[metric.key] as string | null}
          />
        ))}
      </div>

      {allDistrictData.length > 0 && (
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">
            {t("comparisonChartTitle")}
          </h3>
          <DistrictComparisonChart
            data={allDistrictData}
            selectedDistrict={selectedDistrict}
          />
        </div>
      )}
    </div>
  );
};
