import type { Metadata } from "next";
import {Anek_Telugu} from "next/font/google";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import { GeistMono} from 'geist/font/mono';

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});
export const metadata: Metadata = {
  title: "Steven Riviere · Web Developper",
  description: "New developer and web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${AnekTelugu.variable} font-sans h-full bg-background text-foreground`}> 
        {children}</body>
    </html>
  )
}
