import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

// Configure Plus Jakarta Sans with local files
const jakarta = localFont({
  variable: '--font-jakarta',
  src: [
    {
      path: '../assets/fonts/PlusJakartaSans-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PlusJakartaSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PlusJakartaSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PlusJakartaSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PlusJakartaSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PlusJakartaSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PlusJakartaSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  fallback: ['system-ui', 'sans-serif'],
  preload: true,
  display: 'swap',
});

// Define interface for metadata params
// interface MetadataProps {
//   params: {
//     [key: string]: string | string[] | undefined;
//   };
//   searchParams?: { [key: string]: string | string[] | undefined };
// }

// Generate metadata with dynamic title based on route
// export async function generateMetadata({ params, searchParams }: MetadataProps): Promise<Metadata> {
//   return {
//     title: {
//       template: '%s | Somo Distributors',
//       default: 'Somo Distributors',
//     },
//     description: "Your trusted distribution partner",
//     authors: [{ name: "Somo Distributors" }],
//     keywords: ["distribution", "somo", "business"],
//     metadataBase: new URL('https://your-domain.com'),
//     openGraph: {
//       title: 'Somo Distributors',
//       description: 'Your trusted distribution partner',
//       siteName: 'Somo Distributors',
//       locale: 'en_US',
//       type: 'website',
//     },
//     icons: [
//       {
//         url: '/favicon.ico',
//         sizes: 'any',
//       },
//     ],
//   };
// }

export const metadata: Metadata = {
  title: {
    template: '%s | Somo Transporters Ltd ',
    default: 'Somo Transporters Ltd ',
  },
  description: "Your trusted distribution partner",
  authors: [{ name: "Somo Distributors" }],
  keywords: ["distribution", "somo", "business", "logistics", "cargo"],
  openGraph: {
    title: 'Somo Transporters Ltd ',
description: 'LET IT FLOW ALL THE WAY | SAFETY FIRST',
    siteName: 'Somo Transporters Ltd ',
    locale: 'en_ke',
    type: 'website',
    url: 'https://www.somotransporters.co.ke/', // Update with your actual domain
  },
  facebook  : {
    appId: 'https://www.facebook.com/share/18QsQoidbb/?mibextid=qi2Omg', // Update with your actual Facebook App ID
  },
  icons: [
    {
      url: '/favicon.ico',
      sizes: 'any',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} antialiased`}>
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