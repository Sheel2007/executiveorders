import Link from "next/link"
import { ArrowRight, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import ExecutiveOrdersChart from "@/components/executive-orders-chart"
import { sources } from "../src/data/sources"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-slate-50 border-b">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Executive Orders Research
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="font-medium">
              Home
            </Link>
            <Link href="/historical-data" className="text-slate-600 hover:text-slate-900">
              Historical Data
            </Link>
            <Link href="/case-studies" className="text-slate-600 hover:text-slate-900">
              Case Studies
            </Link>
            <Link href="/analysis" className="text-slate-600 hover:text-slate-900">
              Analysis
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Executive Orders</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Investigating how presidents have used executive orders throughout history
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/historical-data">
                  View Graphs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Chart Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Executive Orders Over Time</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12 text-center">
              The chart below shows the number of executive orders issued by each president since 1900, revealing
              important patterns in presidential power.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ExecutiveOrdersChart />
            </div>
            <div className="mt-8 text-center">
              <Button asChild>
                <Link href="/historical-data">
                  Explore Full Dataset <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Modern Politics Section */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Executive Orders in Modern Politics</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Bypassing Congressional Gridlock</h3>
            <p className="text-lg text-slate-600 mb-6">
              Recently, presidents have used executive orders as a way to pass legislation 
              when Congress fails to pass it. This trend has raised important questions about the
              separation of powers and whether the executive branch should be able to do this.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="font-bold text-lg mb-2">Policy Implementation Without Legislation</h4>
                <p className="text-slate-600">
                  President Obama's DACA program,
                  President Trump's travel ban, and President Biden's student loan forgiveness plan are all
                  examples of policy initiatives achieved through executive action after Congress failed to pass
                  the related legislation.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Reversing Predecessor's Actions</h4>
                <p className="text-slate-600">
                  Recent presidents have also used executive orders to quickly reverse their predecessor's policies.
                  This has created a pattern where policies change with each time the administration changes. The Paris Climate Agreement, immigration policies, and
                  environmental regulations have all been subject to this.
                </p>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Constitutional Concerns</h3>
            <p className="text-lg text-slate-600 mb-6">
              While the number of executive orders has generally decreased since the mid-20th century, their scope and
              policy impact have increased. This has raised questions about the balance of power between branches
              of government.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-2">Judicial Limitations</h4>
                <p className="text-slate-600">
                  The courts have also been involved to determine the whether these of executive orders are constitutional.
                  Recent examples include the Supreme Court's decisions on Trump's travel ban, Obama's immigration
                  actions, and Biden's student loan forgiveness plan.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Democratic Implications</h4>
                <p className="text-slate-600">
                  While executive orders allow for quick policy implementation, they bypass the
                  legislative process. This tension between efficiency and democratic representation remains a debated topic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Methodology & Data Sources Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Research Methodology</h2>
              <p className="text-lg text-slate-600 mb-4">
                This project analyzes data from multiple sources including the Federal Register, the American Presidency Project, and official White House records.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                The goal was to understand how executive actions have evolved by examining both quantitative trends and qualitative content of executive orders.
              </p>
              <div className="bg-white p-6 rounded-lg shadow mt-8 max-w-xl">
                <h3 className="text-xl font-bold mb-2">Disclaimer</h3>
                <p className="text-slate-600 mb-2 text-base">
                  This website was made for a school project. It was created for educational purposes and is not an official government website.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-slate-100 p-8 rounded-lg shadow-md max-w-2xl w-full">
                <h2 className="text-3xl font-bold mb-6 text-center">Data Sources</h2>
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-2">Primary Sources</h3>
                  <ul className="space-y-4 mb-6">
                    {sources.primary.map((source) => (
                      <li key={source.url} className="flex flex-col">
                        <div className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-slate-700 mr-2 mt-0.5" />
                          <a
                            href={source.url}
                            className="text-slate-700 hover:text-slate-900 hover:underline font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {source.title}
                          </a>
                        </div>
                        {source.description && (
                          <span className="ml-7 text-slate-500 text-sm">{source.description}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <h3 className="font-semibold text-lg mb-2">Secondary Sources</h3>
                  <ul className="space-y-4">
                    {sources.secondary.map((source) => (
                      <li key={source.url} className="flex flex-col">
                        <div className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-slate-700 mr-2 mt-0.5" />
                          <a
                            href={source.url}
                            className="text-slate-700 hover:text-slate-900 hover:underline font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {source.title}
                          </a>
                        </div>
                        {source.description && (
                          <span className="ml-7 text-slate-500 text-sm">{source.description}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
