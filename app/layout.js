"use client";

import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Geist, Geist_Mono } from "next/font/google";
import { HeroUIProvider } from "@heroui/react";
import { AuthContextProvider } from "@/contexts/AuthContext";
import CustomCursor from "./components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
        <Toaster />
        <CustomCursor />
        <HeroUIProvider theme="light">
          <AuthContextProvider>
            {children}
          </AuthContextProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
}
