import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { InteractivePixelOverlay } from '@/components/ui/interactive-pixel-overlay'
import { KonamiCode } from '@/components/ui/konami-code'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://austinkonig.vercel.app/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Austin Konig',
    template: '%s | Austin Konig'
  },
  description:  'Austin Konig - Building at the intersection of engineering, product, and creative direction.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className="bg-zinc-50 tracking-tight antialiased dark:bg-zinc-900 dot-background"
      >
        <InteractivePixelOverlay />
        <KonamiCode />
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          storageKey="theme"
          defaultTheme="dark"
        >
          <div className="flex min-h-screen w-full flex-col font-['PPMondwest','PPNeueBit',Arial,sans-serif] text-[113%] lg:text-[135%]">
            <div className="relative mx-auto lg:mx-0 lg:ml-8 w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
