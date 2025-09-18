import type React from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';

export const LayoutHeader = () => (
  <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
    <div className="container mx-auto flex h-14 items-center justify-between px-4">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Zap className="h-5 w-5 text-emerald-500" aria-hidden="true" />
        <span className="sr-only">Escapehatch</span>
        <span>Escapehatch</span>
      </Link>

      <nav className="flex items-center gap-4 text-sm">
        <Link
          href="#why"
          className="hover:underline underline-offset-4 hidden sm:inline"
        >
          Why Escapehatch
        </Link>
        <Link
          href="#benefits"
          className="hover:underline underline-offset-4 hidden sm:inline"
        >
          What you get
        </Link>
        <Link
          href="#how-it-works"
          className="hover:underline underline-offset-4 hidden sm:inline"
        >
          How it works
        </Link>
        {/* <Link
            href="#join"
            className={cn(
              'inline-flex items-center gap-1 rounded-md px-2 py-1 text-emerald-600 hover:text-emerald-700'
            )}
          >
            Join waitlist <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link> */}
      </nav>
    </div>
  </header>
);
