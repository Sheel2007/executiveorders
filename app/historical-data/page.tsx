import Link from "next/link"
import { ArrowLeft, Download, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ExecutiveOrdersChart from "@/components/executive-orders-chart"
import ExecutiveOrdersByYearChart from "@/components/executive-orders-by-year-chart"
import ExecutiveOrdersTable from "@/components/executive-orders-table"
import ExecutiveOrdersComparison from "@/components/executive-orders-comparison"

export default function HistoricalData() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button asChild variant="ghost" size="sm" className="mb-4">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
            <h1 className="text-4xl font-bold mb-4">Historical Executive Order Data</h1>
            <p className="text-xl text-slate-600 max-w-3xl mb-6">
              Explore the historical trends of executive orders across different presidencies and time periods.
            </p>
          </div>

          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>Executive Orders by President</CardTitle>
                    <CardDescription>
                      Total number of executive orders issued by each president since 1900
                    </CardDescription>
                  </div>
                  {/* <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="mr-2 h-4 w-4" />
                      Download Data
                    </Button>
                  </div> */}
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[500px]">
                  <ExecutiveOrdersChart />
                </div>
                <div className="mt-6 text-slate-600">
                  <p className="mb-4">
                    The chart reveals significant variations in executive order usage across presidencies. Franklin D. Roosevelt stands out with the highest number of executive orders.
                  </p>
                  <p>
                    In contrast, modern presidents have generally issued fewer executive orders, though their impact and scope have often been more substantial. This trend suggests a shift from quantity to quality in executive order usage.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Executive Orders by Year (1900-2023)</CardTitle>
                <CardDescription>
                  Annual count of executive orders showing historical trends and patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ExecutiveOrdersByYearChart />
                </div>
                <div className="mt-6 text-slate-600">
                  <p className="mb-4">
                    This graph shows the number of executive orders issued by year. The graph shows clear spikes in executive order usage during periods of national crisis and transition. These peaks occur during World War II, the early years of the Cold War, and the COVID-19 pandemic.
                  </p>
                  <p>
                    The data also shows that Franklin D. Roosevelt issued the most executive orders of any president and that the number of executive orders has generally decreased since then.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Presidential Comparison</CardTitle>
                <CardDescription>Compare executive order usage between different administrations</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="recent">
                  <TabsContent value="recent">
                    <div className="h-[400px]">
                      <ExecutiveOrdersComparison />
                    </div>
                    <div className="mt-6 text-slate-600">
                      <p className="mb-4">
                        This graph shows the number of executive orders issued by each of the last 5 presidents by year.
                      </p>
                      <p>
                        The biggest takeaway from this graph is that Trump's second term has started with an extremely high number of executive orders (151) and he is not even half way through his first year. This suggests that he is being more aggressive use of executive power. This trend may indicate a shift in how presidents are using executive orders to implement their policy agendas, particularly in trying to get around Congress.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>Executive Orders Database</CardTitle>
                    <CardDescription>Searchable database of executive orders with filtering options</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ExecutiveOrdersTable />
              </CardContent>
            </Card>
          </div>

          {/* <div className="mt-12 bg-slate-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Research Notes</h2>
            <p className="mb-4">
              The data presented on this page has been compiled from multiple authoritative sources, including the
              Federal Register and the American Presidency Project at UC Santa Barbara.
            </p>
            <p className="mb-4">
              Notable patterns include significant increases in executive order usage during periods of national crisis,
              such as the Great Depression, World War II, and more recently, the COVID-19 pandemic.
            </p>
            <p>
              While the raw number of executive orders has generally decreased since the mid-20th century, this research
              project examines whether the scope and impact of individual orders has increased, potentially indicating a
              shift in how presidential power is exercised.
            </p>
          </div> */}
        </div>
      </main>
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-300">
            © {new Date().getFullYear()} Presidential Power Research. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
