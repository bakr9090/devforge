import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: { default: "DevForge - Learn Development by Building", template: "%s | DevForge" },
  description: "Master modern software development through practical, project-based courses.",
  openGraph: {
    title: "DevForge - Learn Development by Building",
    description: "Master modern software development through practical, project-based courses.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
