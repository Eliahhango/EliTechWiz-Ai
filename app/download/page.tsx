import type { Metadata } from "next";
import { DownloadPageContent } from "./DownloadPageContent";

export const metadata: Metadata = {
  title: "Download | EliTechWiz-Ai",
  description:
    "Download EliTechWiz-Ai desktop app for macOS, Windows, and Linux. AI-powered penetration testing at your fingertips.",
  openGraph: {
    title: "Download EliTechWiz-Ai Desktop",
    description:
      "Download EliTechWiz-Ai desktop app for macOS, Windows, and Linux. AI-powered penetration testing at your fingertips.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Download EliTechWiz-Ai Desktop",
    description:
      "Download EliTechWiz-Ai desktop app for macOS, Windows, and Linux. AI-powered penetration testing at your fingertips.",
  },
};

export default function DownloadPage() {
  return <DownloadPageContent />;
}
