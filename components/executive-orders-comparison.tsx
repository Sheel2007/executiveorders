"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data for recent presidents
const data = [
  {
    name: "First Year",
    Bush: 54,
    Obama: 39,
    Trump: 55,
    Biden: 77,
    "Trump (2nd Term)": 151,
  },
  {
    name: "Second Year",
    Bush: 31,
    Obama: 35,
    Trump: 35,
    Biden: 29,
    "Trump (2nd Term)": 0,
  },
  {
    name: "Third Year",
    Bush: 41,
    Obama: 34,
    Trump: 63,
    Biden: 8,
    "Trump (2nd Term)": 0,
  },
  {
    name: "Fourth Year",
    Bush: 52,
    Obama: 31,
    Trump: 69,
    Biden: 0,
    "Trump (2nd Term)": 0,
  },
]

export default function ExecutiveOrdersComparison() {
  return (
    <ChartContainer
      config={{
        Bush: {
          label: "Bush",
          color: "#f97316",
        },
        Obama: {
          label: "Obama",
          color: "#8b5cf6",
        },
        Trump: {
          label: "Trump (1st Term)",
          color: "#ef4444",
        },
        Biden: {
          label: "Biden",
          color: "#3b82f6",
        },
        "Trump (2nd Term)": {
          label: "Trump (2nd Term)",
          color: "#22c55e",
        },
      }}
      className="h-[400px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent indicator="bar" formatValue={(value) => `${value} orders`} />} />
          <Legend />
          <Bar dataKey="Bush" fill="var(--color-Bush)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Obama" fill="var(--color-Obama)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Trump" fill="var(--color-Trump)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Biden" fill="var(--color-Biden)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Trump (2nd Term)" fill="#22c55e" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
