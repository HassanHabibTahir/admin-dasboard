"use client";
import { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import React, { useEffect } from "react";
import Layout from "@/pages/layout/Layout";
import useStore from "@/store/index";

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
  useEffect(() => {
    useStore.persist.rehydrate();
  }, []);

  const { theme } = useStore((state: any) => state);

  return (
    <html data-theme={theme} lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
