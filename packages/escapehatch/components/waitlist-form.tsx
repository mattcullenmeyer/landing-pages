"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Loader2 } from 'lucide-react'

export default function WaitlistForm({
  cta = "Join waitlist",
  ariaLabel = "Join waitlist",
  className,
}: {
  cta?: string
  ariaLabel?: string
  className?: string
}) {
  const { toast } = useToast()
  const [email, setEmail] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Please enter a valid email",
        description: "Example: alex@example.com",
        variant: "destructive",
      })
      return
    }
    setIsLoading(true)
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong")
      }
      toast({
        title: "You’re on the list!",
        description: "We’ll email you as soon as invites go out.",
      })
      setEmail("")
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to join waitlist"
      toast({
        title: "Could not join waitlist",
        description: message,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className={cn("flex gap-2", className)} aria-label={ariaLabel}>
      <div className="sr-only" id="waitlist-label">
        Join waitlist form
      </div>
      <Input
        type="email"
        name="email"
        autoComplete="email"
        placeholder="you@example.com"
        aria-labelledby="waitlist-label"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1"
        required
      />
      <Button
        type="submit"
        className="bg-emerald-600 text-white hover:bg-emerald-700"
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Joining…
          </span>
        ) : (
          cta
        )}
      </Button>
    </form>
  )
}
