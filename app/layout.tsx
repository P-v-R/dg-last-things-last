import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRIORITY COMMUNIQUÉ",
  description: "Official Correspondence - Do Not Distribute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
