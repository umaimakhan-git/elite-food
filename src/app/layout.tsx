import type { Metadata } from "next";

import "./globals.css";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer1 from "@/components/Footer1";
import Footer from "@/components/Footer2";


export const metadata: Metadata = {
  title: "Elite Food Restaurant",
  description: "Online Food Ordering Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <html lang="en">
      <body
>
        <TopHeader />
        <Navbar />
        
        {children}
        <Footer1 />
        <Footer />
      </body>
    </html>
  
  );
}
