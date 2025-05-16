"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data - in a real implementation, this would be more comprehensive
const data = [
  { year: "1900", count: 51 },
  { year: "1905", count: 42 },
  { year: "1910", count: 75 },
  { year: "1915", count: 115 },
  { year: "1920", count: 89 },
  { year: "1925", count: 125 },
  { year: "1930", count: 99 },
  { year: "1935", count: 247 },
  { year: "1940", count: 186 },
  { year: "1945", count: 139 },
  { year: "1950", count: 89 },
  { year: "1955", count: 58 },
  { year: "1960", count: 62 },
  { year: "1965", count: 55 },
  { year: "1970", count: 72 },
  { year: "1975", count: 89 },
  { year: "1980", count: 69 },
  { year: "1985", count: 48 },
  { year: "1990", count: 57 },
  { year: "1995", count: 50 },
  { year: "2000", count: 39 },
  { year: "2005", count: 46 },
  { year: "2010", count: 42 },
  { year: "2015", count: 36 },
  { year: "2020", count: 69 },
  { year: "2023", count: 29 },
]

export default function ExecutiveOrdersByYearChart() {
  return (
    <ChartContainer
      config={{
        count: {
          label: "Executive Orders",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[400px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} />
          <YAxis />
          <ChartTooltip
            content={
              <ChartTooltipContent
                indicator="area"
                formatValue={(value) => `${value} orders`}
                formatLabel={(label) => `Year ${label}`}
              />
            }
          />
          <Area
            type="monotone"
            dataKey="count"
            stroke="var(--color-count)"
            fill="var(--color-count)"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
