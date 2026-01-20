import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delta Green Archive System",
  description: "Secure Document Archive - CLASSIFIED",
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
