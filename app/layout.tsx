import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const display = Manrope({ variable: "--font-display", subsets: ["latin"] });
const body = DM_Sans({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kuza Africa | Greenhouse Construction & Irrigation",
  description: "Professional greenhouse supply, construction and drip irrigation installation in Zimbabwe.",
  icons: {
    icon: "/images/kuza-logo.jpeg",
    shortcut: "/images/kuza-logo.jpeg",
    apple: "/images/kuza-logo.jpeg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
