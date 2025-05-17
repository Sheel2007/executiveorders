import Link from "next/link"
import { ArrowLeft, BookOpen, Scale, Landmark } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Analysis() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-slate-50 border-b">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Presidential Power Research
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-slate-600 hover:text-slate-900">
              Home
            </Link>
            <Link href="/historical-data" className="text-slate-600 hover:text-slate-900">
              Historical Data
            </Link>
            <Link href="/case-studies" className="text-slate-600 hover:text-slate-900">
              Case Studies
            </Link>
            <Link href="/analysis" className="font-medium">
              Analysis
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button asChild variant="ghost" size="sm" className="mb-4">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
            <h1 className="text-4xl font-bold mb-4">Constitutional Analysis</h1>
            <p className="text-xl text-slate-600 max-w-3xl mb-6">
              The implications of executive orders and its impact on the separation of
              powers.
            </p>
          </div>

          {/* Separation of Powers Section */}
          <section className="space-y-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Scale className="mr-3 h-6 w-6" />
                  Separation of Powers: Constitutional Framework
                </h2>
                <div className="prose max-w-none">
                  <p>
                    The U.S. government is built on three branches: Congress. Each branch, which is equally powerful, has a role in making laws. This system is called checks and balances.
                  </p>
                  <p>
                    Executive orders are rules made by the President. The Constitution doesn't mention them directly, but presidents use them to help carry out laws passed by Congress.
                  </p>
                  <p>
                    However, executive orders are being more oftenly used to make new laws. This is Congress's job, not the President's.
                  </p>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Key Supreme Court Cases</CardTitle>
                  <CardDescription>Important decisions about executive power</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-bold">Youngstown v. Sawyer (1952)</h3>
                    <p className="text-sm text-slate-600">
                      The Court said President Truman couldn't take over steel mills. Presidents can't go against Congress.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold">INS v. Chadha (1983)</h3>
                    <p className="text-sm text-slate-600">
                      Congress can't take shortcuts to block executive actions. Each branch must follow its own rules.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold">Clinton v. City of New York (1998)</h3>
                    <p className="text-sm text-slate-600">
                      The President can't change laws passed by Congress.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold">Biden v. Nebraska (2023)</h3>
                    <p className="text-sm text-slate-600">
                      The President can't forgive student loans without Congress's approval.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Executive Orders and Congress</CardTitle>
                <CardDescription>
                  How presidents use executive orders when Congress can't agree
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>When Congress is stuck, presidents use executive orders to get things done.</li>
                  <li>This can help move policy forward, but sometimes goes too far.</li>
                </ul>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-bold">Examples</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                      <li>Obama: DACA (immigration) after Congress didn't pass the DREAM Act</li>
                      <li>Trump: Travel ban and border wall funding</li>
                      <li>Biden: Tried to extend eviction ban</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-bold">Environmental Policy</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                      <li>Obama: Clean Power Plan</li>
                      <li>Trump: Rolled back environmental rules</li>
                      <li>Biden: Rejoined Paris Agreement</li>
                    </ul>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Executive orders are faster than laws, but can be reversed by the next president.</li>
                  <li>They can skip Congress, which raises questions about democracy</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Historical Evolution Section */}
          <section className="space-y-6 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Historical Evolution</CardTitle>
                  <CardDescription>How executive power has changed over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Presidents have used executive orders since George Washington's presidency.</li>
                    <li>Early orders were simpler, but they became more important for bigger policies over time.</li>
                    <li>Recently, presidents have used them for major issues like immigration, the environment, and the economy.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>The Future of Executive Power</CardTitle>
                  <CardDescription>Trends and challenges ahead</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Presidents will likely keep using executive orders, especially when Congress is divided.</li>
                    <li>This can help get things done, but may upset the balance of power.</li>
                    <li>It's important for everyone to understand how executive orders work and their limits.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Research Conclusions Section */}
          <div className="mt-12 bg-slate-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Research Conclusions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2">Key Findings</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Executive orders have changed over time from tools to a substitute for legislation</li>
                  <li>Their use increases during crisis or when the government is divided and Congress is unable to act fast</li>
                  <li>Recent presidents also face more pressure to act on big issues</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Implications</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>The balance of power is being disrupted by the executive branch </li>
                  <li>Judicial review remains very important for keeping the balance of power</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
