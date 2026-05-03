import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RunwayRadar — Visual Runway Tracker with Hiring Freeze Alerts",
  description: "Connect your bank accounts and see exactly how long your startup can survive. Get automated alerts before you need to freeze hiring or cut costs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3387c64b-d823-496d-9600-c9e78c195579"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
