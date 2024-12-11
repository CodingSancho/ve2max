import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { UserStoreProvider } from "@/zustand/providers/user-store-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Protocol: Remnant",
  description: "App Created by Sancho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/saturn.png" />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <UserStoreProvider> */}
            <div className="container mx-auto px-4">{children}</div>
            {/* </UserStoreProvider> */}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
