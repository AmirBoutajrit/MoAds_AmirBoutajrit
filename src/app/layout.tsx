import "./globals.css";
import { ReactNode } from "react";
import { MoAdsProvider } from "./moads/context/MoAdsContext";
import AnimatedBackground from "./components/AnimatedBackground";

export const metadata = {
  title: "MoAds | MoFlo Cloud",
  description: "Ad automation inside MoFlo Cloud",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-text antialiased">
        <AnimatedBackground />
        <MoAdsProvider>
          <div className="relative z-10">{children}</div>
        </MoAdsProvider>
      </body>
    </html>
  );
}
