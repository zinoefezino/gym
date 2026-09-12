import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forge Fitness",
  description:
    "Train with purpose. Classes, coaching, and a gym floor built for real progress.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-charcoal text-offwhite">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
