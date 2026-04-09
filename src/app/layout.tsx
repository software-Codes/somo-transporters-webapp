import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://www.somotransporter.co.ke";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | Somo Transporters Ltd",
    default: "Somo Transporters Ltd | Petroleum & Logistics Transport East Africa",
  },
  description:
    "Somo Transporters Ltd is East Africa's leading petroleum products transporter. Specializing in bulk petroleum, LPG, and dry cargo transport across Kenya, Uganda, Tanzania, Rwanda & South Sudan since 2006.",
  authors: [{ name: "Somo Transporters Ltd", url: BASE_URL }],
  creator: "Somo Transporters Ltd",
  publisher: "Somo Transporters Ltd",
  keywords: [
    "petroleum transport Kenya",
    "fuel transport East Africa",
    "LPG transport Kenya",
    "bulk petroleum haulage",
    "dry cargo transport",
    "logistics company Kenya",
    "cross border transport East Africa",
    "tanker truck Kenya",
    "petroleum logistics Uganda",
    "fuel delivery Tanzania",
    "HSSE compliant transporter",
    "Somo Transporters",
    "somotransporter",
    "cargo transport Nakuru",
    "oil transport company Kenya",
    "petroleum haulage company",
    "East Africa logistics",
    "freight services Kenya",
  ],
  category: "Transportation & Logistics",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: BASE_URL,
    siteName: "Somo Transporters Ltd",
    title: "Somo Transporters Ltd | Petroleum & Logistics Transport East Africa",
    description:
      "East Africa's trusted petroleum products transporter since 2006. Bulk petroleum, LPG & dry cargo transport across Kenya, Uganda, Tanzania, Rwanda & South Sudan.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Somo Transporters Ltd - East Africa Petroleum Transport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Somo Transporters Ltd | Petroleum & Logistics Transport East Africa",
    description:
      "East Africa's trusted petroleum products transporter since 2006. Bulk petroleum, LPG & dry cargo transport.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          enableSystem
          defaultTheme="system"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
