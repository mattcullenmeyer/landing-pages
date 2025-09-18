import type React from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Gauge,
  Cloud,
  Plug,
  Zap,
  Shield,
  Table,
  ArrowRight,
  Activity,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import WaitlistForm from '@/components/waitlist-form';

export default function Page() {
  return (
    <>
      <Hero />
      <Problem />
      <Benefits />
      <HowItWorks />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50/60 via-transparent to-transparent" />
      <div className="container mx-auto grid items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-20">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center md:text-left">
            Make Google Sheets fast, no matter how big your model gets
          </h1>
          <p className="text-lg text-gray-700">
            Escapehatch offloads formula calculations to the cloud so your
            spreadsheets stay fast and responsive, even with massive datasets
            and complex formulas.
          </p>
          <div className="max-w-md">
            <WaitlistForm />
            <p className="mt-2 text-xs text-gray-700">
              No spam. Connect with the founder. Get early access.
            </p>
          </div>
        </div>
        <div className="relative">
          <VisualSheet />
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section id="why" className="border-b bg-muted/30">
      <div className="container mx-auto grid items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div className="space-y-3">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-medium">
              <Shield
                className="h-3.5 w-3.5 text-emerald-600"
                aria-hidden="true"
              />
              Why Escapehatch
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-center md:text-left">
            Spreadsheets shouldn&apos;t grind to a halt
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Large datasets and complex formulas can turn simple edits into
              multi-second delays.
            </p>
            <p>
              Escapehatch removes the bottlenecks so you can keep working at
              full speed.
            </p>
          </div>
        </div>
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <ProgressComparison />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="benefits" className="border-b">
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-3 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted px-3 py-1 text-xs font-medium">
            <Gauge
              className="h-3.5 w-3.5 text-emerald-600"
              aria-hidden="true"
            />
            What you get
          </div>
          <h2 className="text-3xl font-bold tracking-tight">
            Work at the speed of thought
          </h2>
          <p className="mx-auto max-w-2xl text-gray-700">
            Keep your existing workflows while eliminating lag from large models
            and complex formulas.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Benefit
            icon={
              <Zap className="h-5 w-5 text-emerald-600" aria-hidden="true" />
            }
            title="Instant Calculations"
            body="No more waiting for Sheets to finish crunching."
          />
          <Benefit
            icon={
              <Gauge className="h-5 w-5 text-emerald-600" aria-hidden="true" />
            }
            title="Stable Performance"
            body="Your browser stays responsive, no matter the workload."
          />
          <Benefit
            icon={
              <Table className="h-5 w-5 text-emerald-600" aria-hidden="true" />
            }
            title="Keep Using Sheets"
            body="No switching tools or learning a new formula language."
          />
        </div>
      </div>
    </section>
  );
}

function Benefit({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-lg border bg-background p-5">
      <div className="flex items-start gap-3">
        <div className="mt-0.5">{icon}</div>
        <div>
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-gray-700">{body}</p>
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b bg-muted/30">
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-3 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-medium">
            <Cloud
              className="h-3.5 w-3.5 text-emerald-600"
              aria-hidden="true"
            />
            How it works
          </div>
          <h2 className="text-3xl font-bold tracking-tight">
            Under the hood, without the overhead
          </h2>
          <p className="mx-auto max-w-2xl text-gray-700">
            Our browser extension connects your Workbook to our powerful cloud
            calculator so your Sheets stay snappy.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          <Step
            index={1}
            icon={
              <Plug className="h-6 w-6 text-emerald-600" aria-hidden="true" />
            }
            title="Install the Extension"
            body="Escapehatch connects securely to your Google Sheets with Google OAuth."
          />
          <Step
            index={2}
            icon={
              <Shield className="h-6 w-6 text-emerald-600" aria-hidden="true" />
            }
            title="Detect & Offload"
            body="When you make an edit, Escapehatch instantly detects the change and notifies our cloud service."
          />
          <Step
            index={3}
            icon={
              <Zap className="h-6 w-6 text-emerald-600" aria-hidden="true" />
            }
            title="Lightning-Fast Recalculation"
            body="Our powerful calculation engine crunches the numbers and updates your sheet, often in milliseconds."
          />
        </div>
      </div>
    </section>
  );
}

function Step({
  index,
  icon,
  title,
  body,
}: {
  index: number;
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="relative rounded-lg border bg-background p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 font-semibold text-emerald-700">
          {index}
        </div>
        <div className="rounded-md bg-emerald-50 p-2">{icon}</div>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-700">{body}</p>
    </div>
  );
}

function FinalCTA() {
  return (
    <section id="join" className="py-16">
      <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-[1fr,420px]">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Turn your slow sheets into high-performance tools
          </h2>
          <p className="max-w-2xl text-gray-700">
            Join the waitlist to connect with the founder and get early access.
          </p>
        </div>
        <div className="max-w-md md:justify-self-end">
          <WaitlistForm />
          <p className="mt-2 text-xs text-gray-700">
            We&apos;ll only use your email to send updates about Escapehatch.
          </p>
        </div>
      </div>
    </section>
  );
}

function VisualSheet() {
  const cells = Array.from({ length: 18 });
  return (
    <div
      role="img"
      aria-label="Calculation pipeline from sheet edit to cloud recalculation and instant update"
      className="mx-auto w-full max-w-[640px] rounded-xl border bg-background p-3 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div className="text-xs font-medium">Calculation pipeline</div>
        <div className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px]">
          <Zap className="h-3 w-3 text-emerald-600" aria-hidden="true" />
          <span>Realtime</span>
        </div>
      </div>

      {/* Revert external spacing between cards */}
      <div className="mt-3 grid grid-cols-[1fr,auto,1fr,auto,1fr] items-stretch gap-3">
        {/* Stage 1: Edit detected (single-cell highlight) */}
        <div className="rounded-lg border p-3 md:p-4">
          <div className="flex items-center gap-2 text-[11px] font-medium">
            <Activity
              className="h-3.5 w-3.5 text-emerald-600"
              aria-hidden="true"
            />
            <span>Edit detected</span>
          </div>
          <div className="mt-3 grid grid-cols-6 gap-px rounded-md bg-muted p-px">
            {cells.map((_, i) => {
              const changed = i === 7; // highlight exactly one cell
              return (
                <div
                  key={i}
                  className={
                    'h-5 bg-background ' +
                    (changed ? 'bg-emerald-50 ring-1 ring-emerald-200' : '')
                  }
                />
              );
            })}
          </div>
          <div className="mt-3 text-[10px] text-gray-700">Sheet</div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center justify-center">
          <ArrowRight className="h-4 w-4 text-gray-700" aria-hidden="true" />
        </div>

        {/* Stage 2: Cloud compute — more internal spacing */}
        <div className="rounded-lg border p-3 md:p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[11px] font-medium">
              <Cloud
                className="h-3.5 w-3.5 text-emerald-600"
                aria-hidden="true"
              />
              <span>Cloud recalc</span>
            </div>
            <div className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-medium text-emerald-700">
              <Zap className="h-3 w-3" aria-hidden="true" />
              34ms
            </div>
          </div>
          <div
            className="mt-3 h-2 w-full rounded-full bg-muted"
            aria-hidden="true"
          >
            <div className="h-2 w-[85%] rounded-full bg-emerald-600" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded border bg-background px-2 py-0.5 text-[10px]">
              SUM/ARRAY
            </div>
            <div className="rounded border bg-background px-2 py-0.5 text-[10px]">
              LOOKUPS
            </div>
            <div className="rounded border bg-background px-2 py-0.5 text-[10px]">
              JOINS
            </div>
          </div>
          <div className="mt-3 text-[10px] text-gray-700">
            Secure, scalable compute
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center justify-center">
          <ArrowRight className="h-4 w-4 text-gray-700" aria-hidden="true" />
        </div>

        {/* Stage 3: Instant update — more internal spacing */}
        <div className="rounded-lg border p-3 md:p-4">
          <div className="flex items-center gap-2 text-[11px] font-medium">
            <CheckCircle2
              className="h-3.5 w-3.5 text-emerald-600"
              aria-hidden="true"
            />
            <span>Instant update</span>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-4 md:gap-5 text-[12px]">
            <div className="inline-flex items-center gap-2 whitespace-nowrap">
              <span
                className="inline-block h-2 w-2 rounded-full bg-emerald-600"
                aria-hidden="true"
              />
              <span>Values refreshed</span>
            </div>
            <div className="inline-flex items-center gap-2 whitespace-nowrap">
              <span
                className="inline-block h-2 w-2 rounded-full bg-emerald-600"
                aria-hidden="true"
              />
              <span>Dependent cells resolved</span>
            </div>
            <div className="inline-flex items-center gap-2 whitespace-nowrap">
              <span
                className="inline-block h-2 w-2 rounded-full bg-emerald-600"
                aria-hidden="true"
              />
              <span>Browser remains responsive</span>
            </div>
          </div>
          <div className="mt-3 text-[10px] text-gray-700">
            Milliseconds to visible change
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3 text-[10px] text-gray-700">
        <div className="inline-flex items-center gap-1">
          <Shield className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
          OAuth-secured
        </div>
        <div>•</div>
        <div>Encrypted in transit</div>
        <div>•</div>
        <div>No formula changes required</div>
      </div>
    </div>
  );
}

function ProgressComparison() {
  return (
    <div
      className="grid gap-6 md:grid-cols-2"
      aria-label="Performance comparison"
    >
      <div className="rounded-lg border p-5">
        <div className="flex items-center gap-2">
          <Activity
            className="h-4 w-4 text-amber-600 animate-pulse"
            aria-hidden="true"
          />
          <h3 className="font-medium">Without Escapehatch</h3>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          Edits trigger blocking recalculation.
        </p>
        <div
          className="mt-4 h-2 w-full rounded-full bg-muted"
          aria-hidden="true"
        >
          <div className="h-2 w-3/12 rounded-full bg-amber-500" />
        </div>
        <div className="mt-2 text-xs text-muted-foreground">Recalculating…</div>
      </div>

      <div className="rounded-lg border p-5">
        <div className="flex items-center gap-2">
          <CheckCircle2
            className="h-4 w-4 text-emerald-600"
            aria-hidden="true"
          />
          <h3 className="font-medium">With Escapehatch</h3>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          Edits are offloaded to the cloud.
        </p>
        <div
          className="mt-4 h-2 w-full rounded-full bg-muted"
          aria-hidden="true"
        >
          <div className="h-2 w-full rounded-full bg-emerald-600" />
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          Updated in 34ms
        </div>
      </div>
    </div>
  );
}
