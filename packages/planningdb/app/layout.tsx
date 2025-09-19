import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'PlanningDB',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#F9F7F0" />
        <link rel="canonical" href="https://planningdb.com" />
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
        <Script
          id="google-tag"
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17421563344"
        ></Script>
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17421563344');
          `}
        </Script>
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
