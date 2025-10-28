import { KpiMetric } from "@/types";
import React from "react";

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-8 h-8">{children}</div>
);

const PeopleIcon = () => (
  <IconWrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  </IconWrapper>
);
const PersonIcon = () => (
  <IconWrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  </IconWrapper>
);
const CalendarIcon = () => (
  <IconWrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  </IconWrapper>
);
const RupeeIcon = () => (
  <IconWrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 8h6m-5 4h4m5 4h-4.293a1 1 0 01-.707-.293l-3.414-3.414a1 1 0 00-.707-.293H6.414a1 1 0 00-.707.293l-3.414 3.414A1 1 0 002 18.586V5a2 2 0 012-2h16a2 2 0 012 2v13.586a1 1 0 01-.293.707l-3.414-3.414a1 1 0 00-.707-.293H16"
      />
    </svg>
  </IconWrapper>
);
const WomanIcon = () => (
  <IconWrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-2a3 3 0 00-3-3H9m6 0v2"
      />
    </svg>
  </IconWrapper>
);
const CheckIcon = () => (
  <IconWrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </IconWrapper>
);
const ClockIcon = () => (
  <IconWrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </IconWrapper>
);
const PlantIcon = () => (
  <IconWrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.121 15.879A3 3 0 0112.02 17.512a3 3 0 01-2.1-1.633m13.298-2.68a3 3 0 01-2.1 1.633 3 3 0 01-4.202-2.101m-2.1-4.202a3 3 0 01-1.633-2.1 3 3 0 011.633-2.1M3.402 8.798a3 3 0 012.1-1.633 3 3 0 014.202 2.1m2.1 4.202a3 3 0 011.633 2.1 3 3 0 01-1.633 2.1"
      />
    </svg>
  </IconWrapper>
);

export const kpiMetrics: KpiMetric[] = [
  {
    key: "Total_Households_Worked",
    labelKey: "totalHouseholdsWorked",
    icon: <PeopleIcon />,
    tooltipKey: "totalHouseholdsWorkedTooltip",
    format: "number",
    color: "border-blue-500",
  },
  {
    key: "Total_Individuals_Worked",
    labelKey: "totalIndividualsWorked",
    icon: <PersonIcon />,
    tooltipKey: "totalIndividualsWorkedTooltip",
    format: "number",
    color: "border-sky-500",
  },
  {
    key: "Average_days_of_employment_provided_per_Household",
    labelKey: "avgDaysEmployment",
    icon: <CalendarIcon />,
    tooltipKey: "avgDaysEmploymentTooltip",
    format: "days",
    color: "border-green-500",
  },
  {
    key: "Average_Wage_rate_per_day_per_person",
    labelKey: "avgWageRate",
    icon: <RupeeIcon />,
    tooltipKey: "avgWageRateTooltip",
    format: "currency",
    color: "border-amber-500",
  },
  {
    key: "Women_Persondays",
    labelKey: "womenPersondays",
    icon: <WomanIcon />,
    tooltipKey: "womenPersondaysTooltip",
    format: "number",
    color: "border-pink-500",
  },
  {
    key: "Number_of_Completed_Works",
    labelKey: "completedWorks",
    icon: <CheckIcon />,
    tooltipKey: "completedWorksTooltip",
    format: "number",
    color: "border-indigo-500",
  },
  {
    key: "percentage_payments_gererated_within_15_days",
    labelKey: "timelyPayments",
    icon: <ClockIcon />,
    tooltipKey: "timelyPaymentsTooltip",
    format: "percentage",
    color: "border-purple-500",
  },
  {
    key: "percent_of_Expenditure_on_Agriculture_Allied_Works",
    labelKey: "agriExpenditure",
    icon: <PlantIcon />,
    tooltipKey: "agriExpenditureTooltip",
    format: "percentage",
    color: "border-lime-500",
  },
];
