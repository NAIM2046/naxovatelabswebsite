import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexovateLabs",
  description: "Next Innovation Lab",
  icons: {
    icon: "https://i.ibb.co.com/7tbZWLYF/nexovatelabs.jpg",
    shortcut: "https://i.ibb.co.com/7tbZWLYF/nexovatelabs.jpg",
    apple: "https://i.ibb.co.com/7tbZWLYF/nexovatelabs.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
