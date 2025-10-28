import { KpiMetric } from "@/types";
import React from "react";
import { Tooltip } from "./tooltip";
import { useLocalization } from "@/contexts/localizationContext";

interface KpiCardProps {
  metric: KpiMetric;
  value: string | null;
}

const formatValue = (
  value: string | null,
  format: KpiMetric["format"]
): string => {
  if (value === null || value === undefined || value.trim() === "")
    return "N/A";

  const num = parseFloat(value);
  if (isNaN(num)) return "N/A";

  switch (format) {
    case "number":
      return new Intl.NumberFormat("en-IN").format(num);
    case "currency":
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
      }).format(num);
    case "days":
      return `${num.toFixed(2)}`;
    case "percentage":
      return `${num.toFixed(2)}%`;
    default:
      return value;
  }
};

export const KpiCard: React.FC<KpiCardProps> = ({ metric, value }) => {
  const { t } = useLocalization();

  return (
    <div
      className={`bg-white p-4 rounded-lg shadow-sm border-l-4 ${metric.color}`}
    >
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-slate-600 text-sm md:text-base">
          {t(metric.labelKey)}
        </h3>
        <Tooltip text={t(metric.tooltipKey)}>
          <div className="text-slate-400 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          
        </Tooltip>
      </div>
      <div className="flex items-end justify-between mt-2">
        <div className="text-2xl md:text-2xl font-bold text-slate-800">
          {formatValue(value, metric.format)}
          {metric.format === "days" && (
            <span className="text-lg text-slate-500 ml-1">days</span>
          )}
        </div>
        <div className="text-slate-400">{metric.icon}</div>
      </div>
    </div>
  );
};
