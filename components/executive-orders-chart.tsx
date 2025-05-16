"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "F. Roosevelt", count: 3467, party: "Democratic" },
  { name: "Truman", count: 894, party: "Democratic" },
  { name: "Eisenhower", count: 492, party: "Republican" },
  { name: "Kennedy", count: 214, party: "Democratic" },
  { name: "L.B. Johnson", count: 324, party: "Democratic" },
  { name: "Nixon", count: 346, party: "Republican" },
  { name: "Ford", count: 169, party: "Republican" },
  { name: "Carter", count: 320, party: "Democratic" },
  { name: "Reagan", count: 381, party: "Republican" },
  { name: "Bush", count: 165, party: "Republican" },
  { name: "Clinton", count: 364, party: "Democratic" },
  { name: "G.W. Bush", count: 291, party: "Republican" },
  { name: "Obama", count: 276, party: "Democratic" },
  { name: "Trump", count: 220, party: "Republican" },
  { name: "Biden", count: 114, party: "Democratic" }, // As of data collection
  { name: "Trump", count: 151, party: "Republican" },
]

export default function ExecutiveOrdersChart() {
  return (
    <ChartContainer
      config={{
        count: {
          label: "Executive Orders",
          color: "hsl(var(--chart-1))",
        },
        democratic: {
          label: "Democratic",
          color: "#3b82f6",
        },
        republican: {
          label: "Republican",
          color: "#ef4444",
        },
      }}
      className="h-[500px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data.map((item) => ({
            ...item,
            fill: item.party === "Democratic" ? "var(--color-democratic)" : "var(--color-republican)",
          }))}
          margin={{ top: 20, right: 30, left: 40, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} tick={{ fontSize: 12 }} />
          <YAxis />
          <ChartTooltip
            content={
              <ChartTooltipContent
                indicator="bar"
                formatValue={(value) => `${value} orders`}
                formatLabel={(label) => `President ${label}`}
              />
            }
          />
          <Bar dataKey="count" fill="var(--color-count)" radius={[4, 4, 0, 0]} fillOpacity={0.9} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
