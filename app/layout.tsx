import type { Metadata } from "next"
import { Caveat } from "next/font/google"

import "./globals.css"

const caveat = Caveat({ subsets: ["latin"] })

export interface LayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Praveen MSP",
  description: "Hey there! this is Praveen!",
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={caveat.className}>{children}</body>
    </html>
  )
}
