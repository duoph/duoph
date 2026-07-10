import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://www.duoph.in";
const siteName = "Duoph Technologies";
const title = "Duoph Technologies | Software, Websites & Digital Growth";
const description =
  "Duoph Technologies helps businesses scale with custom software, websites, ERP/CRM, branding, and digital marketing. Book a free consultation.";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#18704E" },
    { media: "(prefers-color-scheme: dark)", color: "#050f0b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  applicationName: siteName,
  keywords: [
    "Duoph Technologies",
    "Duoph",
    "website development company",
    "software development",
    "custom ERP",
    "CRM software",
    "digital marketing agency",
    "branding agency",
    "business automation",
    "web design India",
    "UAE web development",
    "mobile app development",
    "SEO services",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  classification: "Business Software & Digital Services",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_AE", "en_GB"],
    url: siteUrl,
    siteName,
    title: "Duoph Technologies | Technology That Moves Businesses Forward",
    description:
      "Custom software, websites, and digital growth systems for SMEs, startups, and growing brands across India, UAE, and beyond.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duoph Technologies | Technology That Moves Businesses Forward",
    description:
      "Software, websites, branding, and marketing built for business growth. Book a free consultation.",
    creator: "@duoph",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    shortcut: ["/icon"],
  },
  appleWebApp: {
    capable: true,
    title: "Duoph",
    statusBarStyle: "black-translucent",
  },
  other: {
    "msapplication-TileColor": "#18704E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} antialiased`}>
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute top-1/3 left-0 h-44 w-44 -translate-x-1/2 rounded-full bg-[#18704E]/18 blur-3xl md:h-56 md:w-56" />
          <div className="absolute top-2/3 right-0 h-44 w-44 translate-x-1/2 rounded-full bg-[#18704E]/18 blur-3xl md:h-56 md:w-56" />
        </div>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
