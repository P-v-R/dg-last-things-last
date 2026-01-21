import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URGENT // OPEN IMMEDIATELY",
  description: "Time-sensitive communication. Authorization required.",
  openGraph: {
    title: "URGENT // OPEN IMMEDIATELY",
    description: "Time-sensitive communication. Authorization required.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "URGENT // OPEN IMMEDIATELY",
    description: "Time-sensitive communication. Authorization required.",
  },
};

export default function InviteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
