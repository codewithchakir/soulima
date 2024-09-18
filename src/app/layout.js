import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";
import Providers from "./Providers";

import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Soulima",
  description: "the best movie library to search and track your favorite movies and tv shows",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* attribute="class" */}
        <Providers defaultTheme="system" >
        <Header />
        <NavBar />
        {children}
        </Providers>
      </body>
    </html>
  );
}
