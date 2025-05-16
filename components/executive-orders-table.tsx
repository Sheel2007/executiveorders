"use client"

import { Button } from "@/components/ui/button"

export default function ExecutiveOrdersTable() {
  return (
    <div className="flex justify-center py-8">
      <Button asChild size="lg">
        <a
          href="https://www.federalregister.gov/presidential-documents/executive-orders"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Executive Orders on Federal Register
        </a>
      </Button>
    </div>
  )
}
