"use client";

import { RelayEnvironmentProvider } from "react-relay";
import { Inter } from "next/font/google";

import { getCurrentEnvironment } from "@/relay/environment";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const environment = getCurrentEnvironment();

  return (
    <html lang="en">
      <RelayEnvironmentProvider environment={environment}>
        <body className={`${inter.className}`}>{children}</body>
      </RelayEnvironmentProvider>
    </html>
  );
}
