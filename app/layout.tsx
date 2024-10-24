import type { Metadata } from "next";
import { JetBrains_Mono, Bricolage_Grotesque } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage-grotesque",
})

export const metadata: Metadata = {
  title: "boyeon-blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage_grotesque.variable} ${jetbrains_mono.variable}`}>
      <body className="max-w-screen-lg p-16 m-auto mt-8 mb-16 prose dark:prose-invert dark:bg-slate-900 font-jetbrains">
        <Header />
        {children}
      </body>
    </html>
  );
}