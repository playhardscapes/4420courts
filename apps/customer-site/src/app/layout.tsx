import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "4420 Courts - Your Guide to Backyard Pickleball Courts",
  description: "Learn everything you need to know about building the perfect backyard pickleball court. From planning to playing, we make it simple and fun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}