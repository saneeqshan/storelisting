import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PreLine } from "./utility/preline";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PEEDI",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        data-mode="dark"
        className={inter.className + " bg-peedi-light dark:bg-peedi-secondary"}
      >
        {children}
        <PreLine></PreLine>
      </body>
    </html>
  );
}
