import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import type { MGNREGAData } from "@/types";
import { useLocalization } from "@/contexts/localizationContext";

interface ChartProps {
  data: MGNREGAData[];
  selectedDistrict: string;
}

export const DistrictComparisonChart = ({
  data,
  selectedDistrict,
}: ChartProps) => {
  const { t } = useLocalization();
  const chartData = data.map((d) => ({
    name: d.district_name,
    value: Number.parseFloat(
      d.Average_days_of_employment_provided_per_Household || "0"
    ),
  }));

  const interval = Math.ceil(chartData.length / 15) - 1; // Show ~15 labels max

  return (
    <div style={{ width: "100%", height: 600, minHeight: 600 }}>
      <ResponsiveContainer>
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 100,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={100}
            interval={interval}
          />
          <YAxis
            label={{
              value: t("comparisonChartYAxis"),
              angle: -90,
              position: "insideLeft",
              offset: 10,
            }}
          />
          <Tooltip
            formatter={(value: number) => [
              `${value} days`,
              t("avgDaysEmployment"),
            ]}
            labelStyle={{ color: "#333" }}
            itemStyle={{ fontWeight: "bold" }}
          />
          <Legend formatter={() => t("yourDistrict")} />
          <Bar dataKey="value">
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.name === selectedDistrict ? "#14b8a6" : "#a7f3d0"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
