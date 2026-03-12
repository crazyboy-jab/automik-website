import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AutomiK - Tech Automation Agency | WhatsApp Automation & n8n Workflows',
  description: 'Stop losing leads. Automate your growth with WhatsApp Business API, n8n workflows, Web Development, and Custom SaaS solutions.',
  keywords: 'WhatsApp automation, n8n workflows, automation agency, web development, SaaS',
  authors: [{ name: 'AutomiK' }],
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
  openGraph: {
    title: 'AutomiK - Tech Automation Agency',
    description: 'Stop losing leads. Automate your growth with WhatsApp & Custom SaaS.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutomiK - Tech Automation Agency',
    description: 'Stop losing leads. Automate your growth.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-950">
          {children}
        </div>
      </body>
    </html>
  )
}

