import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Duoph | Future-Driven Digital Marketing Agency",
  description: "Duoph is a growth-focused digital partner specializing in web development, mobile apps, and data-driven marketing.",
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
          <div className="absolute left-0 top-1/3 h-44 w-44 -translate-x-1/2 rounded-full bg-[#18704E]/25 blur-3xl md:h-56 md:w-56" />
          <div className="absolute right-0 top-2/3 h-44 w-44 translate-x-1/2 rounded-full bg-[#18704E]/25 blur-3xl md:h-56 md:w-56" />
        </div>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
