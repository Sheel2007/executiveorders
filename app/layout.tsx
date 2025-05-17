"use client"

import "./globals.css"
import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [menuOpen, setMenuOpen] = React.useState(false)
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, padding: 0 }}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <header className="bg-slate-50 border-b w-full m-0 p-0">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center w-full m-0 p-0">
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
              <Button variant="outline" className="md:hidden" onClick={() => setMenuOpen(true)}>
                Menu
              </Button>
              <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                <SheetContent side="left" className="p-0 w-64" aria-labelledby="mobile-menu-title">
                  <span id="mobile-menu-title" className="sr-only">Main Menu</span>
                  <nav className="flex flex-col space-y-4 p-6">
                    <Link href="/" className="font-medium" onClick={() => setMenuOpen(false)}>
                      Home
                    </Link>
                    <Link href="/historical-data" className="text-slate-600 hover:text-slate-900" onClick={() => setMenuOpen(false)}>
                      Historical Data
                    </Link>
                    <Link href="/case-studies" className="text-slate-600 hover:text-slate-900" onClick={() => setMenuOpen(false)}>
                      Case Studies
                    </Link>
                    <Link href="/analysis" className="text-slate-600 hover:text-slate-900" onClick={() => setMenuOpen(false)}>
                      Analysis
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
