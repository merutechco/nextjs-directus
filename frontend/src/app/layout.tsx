import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigationbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Company Name",
  description: "Company description goes here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigationbar/>
				{children}
      </body>
    </html>
  );
}
