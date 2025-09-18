import Link from 'next/link';

export const LayoutFooter = () => (
  <footer className="border-t">
    <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-gray-700 sm:flex-row">
      <div className="flex items-center gap-2">
        <p>&copy; {new Date().getFullYear()} Escapehatch</p>
        {/* . All rights reserved. */}
        <span className="hidden sm:inline">|</span>
        <Link href="/privacy" className="hover:underline underline-offset-4">
          Privacy
        </Link>
        <span className="hidden sm:inline">|</span>
        <Link href="/terms" className="hover:underline underline-offset-4">
          Terms
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <a
          href="mailto:hello@escapehatch.tech"
          className="hover:underline underline-offset-4"
        >
          hello@escapehatch.tech
        </a>
        <span className="hidden sm:inline">|</span>
        <a
          href="tel:720-237-6128"
          className="hover:underline underline-offset-4"
        >
          720-237-6128
        </a>
        {/* <Link href="#" className="hover:underline underline-offset-4">
            Privacy
          </Link>
          <Link href="#" className="hover:underline underline-offset-4">
            Terms
          </Link> */}
      </div>
    </div>
  </footer>
);
