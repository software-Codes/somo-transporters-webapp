import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Somo Transporters Ltd",
    default: "Somo Transporters Ltd",
  },
  description:
    "Leading East African logistics provider specializing in petroleum products transportation. LET IT FLOW ALL THE WAY | SAFETY FIRST",
  authors: [{ name: "Somo Transporters Ltd" }],
  keywords: [
    "petroleum transport",
    "logistics",
    "East Africa",
    "cargo",
    "LPG transport",
    "Somo Transporters",
  ],
  openGraph: {
    title: "Somo Transporters Ltd",
    description: "LET IT FLOW ALL THE WAY | SAFETY FIRST",
    siteName: "Somo Transporters Ltd",
    locale: "en_KE",
    type: "website",
    url: "https://www.somotransporters.co.ke/",
  },
  icons: [{ url: "/favicon.ico", sizes: "any" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
