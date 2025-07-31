import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Cegah Stunting - Panduan Lengkap Pencegahan Stunting pada Bayi dan Balita",
  description:
    "Pelajari cara mencegah stunting pada bayi dan balita dengan panduan lengkap dari kehamilan hingga 1000 hari pertama kehidupan.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
