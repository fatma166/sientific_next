'use client' // Error boundaries must be Client Components

import { ClientLink, ErrorMessage } from "@/components/shared"
import { Button } from "@/components/ui"
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center bg-bg">
      <div className="container">
        <div className="max-w-lg mx-auto rounded-lg p-6">

          <ErrorMessage error={error} />
          <ClientLink href="/" className="block">
            <Button block  > Go Home </Button>
          </ClientLink>
        </div>
      </div>
    </div>
  )
}