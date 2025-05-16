import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CaseStudies() {
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
            <Link href="/case-studies" className="font-medium">
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

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button asChild variant="ghost" size="sm" className="mb-4">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
            <h1 className="text-4xl font-bold mb-4">Executive Order Case Studies</h1>
            <p className="text-xl text-slate-600 max-w-3xl mb-6">
              In-depth analysis of significant executive orders from recent administrations, examining their policy
              impact and congressional context.
            </p>
          </div>

          <Tabs defaultValue="biden">
            <TabsList className="mb-8 flex flex-wrap">
              <TabsTrigger value="biden">Biden Administration</TabsTrigger>
              <TabsTrigger value="trump">Trump Administration</TabsTrigger>
              <TabsTrigger value="obama">Obama Administration</TabsTrigger>
              <TabsTrigger value="bush">Bush Administration</TabsTrigger>
            </TabsList>

            <TabsContent value="biden" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center text-sm text-slate-500 mb-2">
                      <Calendar className="mr-2 h-4 w-4" />
                      January 20, 2021
                    </div>
                    <CardTitle>Executive Order 13985: Advancing Racial Equity</CardTitle>
                    <CardDescription>
                      Addressing systemic racism and advancing equity across federal agencies
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      This executive order was one of Biden's first actions as president. It
                      made it a priority to advance equity for all, including people of color and others historically
                      marginalized groups.
                    </p>
                    <p className="text-slate-600">
                      The order directed federal agencies to assess whether their programs and policies create
                      barriers to opportunities for underserved communities.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center text-sm text-slate-500 mb-2">
                      <Calendar className="mr-2 h-4 w-4" />
                      January 20, 2021
                    </div>
                    <CardTitle>Executive Order 13990: Protecting Public Health and Environment</CardTitle>
                    <CardDescription>
                      Reversing Trump-era environmental policies and addressing climate change
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      This executive order revoked many of President Trump's actions related to environmental
                      regulation, including the permit for the Keystone XL pipeline and many orders that had weakened
                      climate policies.
                    </p>
                    <p className="text-slate-600">
                      The order represented a policy shift on climate change and environmental protection, areas where
                      Congress had been unable to pass legislation. This executive action also reversed the previous president's actions.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <div className="flex items-center text-sm text-slate-500 mb-2">
                    <Calendar className="mr-2 h-4 w-4" />
                    August 24, 2022
                  </div>
                  <CardTitle>Executive Action on Student Loan Debt Relief</CardTitle>
                  <CardDescription>
                    An attempt to forgive student loan debt through executive action
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    This executive action (not an executive order) announced a plan to cancel up to
                    $20,000 in federal student loan debt for eligible borrowers.
                  </p>
                  <p className="text-slate-600 mb-4">
                    This case study is important because it represents a
                    policy implemented through executive action after Congress failed to pass the related legislation.
                  </p>
                  <p className="text-slate-600">
                    The Supreme Court ultimately struck down this executive action in Biden v. Nebraska (2023), ruling
                    that the administration had exceeded its authority. This case shows the constitutional limits
                    of executive power and how the executive branch can overstep its bounds through executive orders and actions.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trump" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center text-sm text-slate-500 mb-2">
                      <Calendar className="mr-2 h-4 w-4" />
                      January 27, 2017
                    </div>
                    <CardTitle>Executive Order 13769: Travel Ban</CardTitle>
                    <CardDescription>Restricting travel from several predominantly Muslim countries</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      This executive order suspended entry of citizens from seven
                      predominantly Muslim countries for 90 days and indefinitely barred Syrian refugees.
                    </p>
                    <p className="text-slate-600">
                      This order bypassed normal legislative processes for immigration policy and faced
                      multiple legal challenges before a modified version was upheld by the Supreme Court.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center text-sm text-slate-500 mb-2">
                      <Calendar className="mr-2 h-4 w-4" />
                      January 25, 2017
                    </div>
                    <CardTitle>Executive Order 13767: Border Wall</CardTitle>
                    <CardDescription>Directing the construction of a wall along the US-Mexico border</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      This executive order directed the government to begin the construction of a
                      physical wall along the US-Mexico border, which was one of President Trump's campaign promises.
                    </p>
                    <p className="text-slate-600">
                      When Congress refused to to fund the construction of the wall, President Trump later
                      declared a national emergency and tried to divert military funds for the project. This led many to question
                      whether the executive branch had the power to commission a wall.
                    </p>
                  </CardContent>
                  {/* <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/case-studies/trump/13767">
                        Read Full Analysis <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter> */}
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="obama" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center text-sm text-slate-500 mb-2">
                      <Calendar className="mr-2 h-4 w-4" />
                      June 15, 2012
                    </div>
                    <CardTitle>DACA (Deferred Action for Childhood Arrivals)</CardTitle>
                    <CardDescription>
                      Protecting undocumented immigrants who arrived as children from deportation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      While technically not anexecutive order,
                      DACA allowed some undocumented immigrants who entered the country as children to be protected from
                      deportation and become eligible for a work permit.
                    </p>
                    <p className="text-slate-600">
                      After Congress failed to pass the DREAM Act multiple times, Obama implemented this policy through
                      executive action. This case study shows executive action as a way to bypass Congress.
                    </p>
                  </CardContent>
                  {/* <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/case-studies/obama/daca">
                        Read Full Analysis <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter> */}
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center text-sm text-slate-500 mb-2">
                      <Calendar className="mr-2 h-4 w-4" />
                      November 20, 2014
                    </div>
                    <CardTitle>Executive Actions on Immigration</CardTitle>
                    <CardDescription>Expanding deferred action for undocumented immigrants</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      This series of executive actions expanded DACA and create a new program called Deferred
                      Action for Parents of Americans (DAPA) to protect certain undocumented parents from deportation.
                    </p>
                    <p className="text-slate-600">
                      These actions were challenged in court, and was eventually struck down. This case shows that 
                      even if the executive branch oversteps, the judicial branch can keep it in check. However, this 
                      could results in the judicial branch becoming more politicized.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="bush" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center text-sm text-slate-500 mb-2">
                      <Calendar className="mr-2 h-4 w-4" />
                      November 13, 2001
                    </div>
                    <CardTitle>Military Order: Detention of Terrorists</CardTitle>
                    <CardDescription>Creating military tribunals for suspected terrorists</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      After 9/11 President Bush authorized the trial by military commission of non-citizens suspected of terrorism.
                    </p>
                    <p className="text-slate-600">
                      This order greatly expanded executive power and was later
                      challenged in Hamdan v. Rumsfeld, where the Supreme Court ruled that the military commissions
                      violated both U.S. law and the Geneva Conventions.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center text-sm text-slate-500 mb-2">
                      <Calendar className="mr-2 h-4 w-4" />
                      May 20, 2002
                    </div>
                    <CardTitle>Executive Order 13269: Expedited Naturalization</CardTitle>
                    <CardDescription>
                      Providing expedited citizenship for non-citizen military personnel
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                    This order allowed certain service members to bypass certain residency 
                    requirements and physical presence requirements, allowing them to become U.S. 
                    citizens faster. 
                    </p>
                    <p className="text-slate-600">
                      Unlike other executive orders in this study, this one had broad bipartisan support and worked
                      within existing statutory authority, showing a less controversial use of executive power. However, just 
                      because it was supported by both parties, doesn't mean it was constitutional.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
