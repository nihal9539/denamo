import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delano Company Limited - Worldwide Architectural & Design Solutions",

  description:
    "Delano Company Limited specializes in Architectural Design, Interior Design, Engineering, Hospitality Management, Hotel Operation, and Real Estate Development worldwide.",

  keywords:
    "Delano Company Limited, Architectural Design, Interior Design, Engineering, Hospitality Management, Real Estate Development, Hotel Operation, Design Innovation, Construction Management, Residential Projects, Commercial Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/logo.jpg" />
        {/* Meta Tags for SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Delano Company Limited" />
        <meta name="robots" content="index, follow" />
      </head>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <div className="">{children}</div>
          <Footer />
        </body>
      </html>
    </>
  );
}
