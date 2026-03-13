import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FixUp | Premium Mobile Repair in Santa Barbara",
  description: "Phone repair service in Santa Barbara, California. Fast, reliable, and premium quality screen repais, battery replacements, and more. Book your appointment today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 300px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
