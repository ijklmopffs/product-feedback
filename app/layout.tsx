import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/FullProvider";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product Feedback",
  description: "This an app for you to drop your feedback on our product.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={`${jost.className} bg-darkerWhite`}>{children}</body>
      </html>
    </AppProvider>
  );
}
