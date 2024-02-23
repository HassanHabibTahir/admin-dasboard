"use client";
import { Metadata } from "next";
import { useTheme } from 'next-themes'
import { Inter } from "next/font/google";
import "./globals.css";
import React, { useEffect } from "react";
import Layout from "@/pages/layout/Layout";
import { ThemeProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "XStore",
//   description: "XStore is a top-notch high-tech online marketplace.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html  lang="en">
      <body className={inter.className}>
        <ThemeProvider>
        <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
