import type { Metadata } from "next";
import { Inter, Orbitron } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

export const metadata: Metadata = {
  title: "4420 Courts Dealer Portal",
  description: "Franchise management and operations dashboard for 4420 Courts dealers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} antialiased`}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}