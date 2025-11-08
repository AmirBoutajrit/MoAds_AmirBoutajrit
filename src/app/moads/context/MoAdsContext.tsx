"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export interface AdData {
  id: string;
  headline: string;
  description: string;
  platform: string;
  cta: string;
  createdAt: string;
}

interface MoAdsContextType {
  ads: AdData[];
  addAd: (ad: AdData) => void;
}

const MoAdsContext = createContext<MoAdsContextType | undefined>(undefined);

export const MoAdsProvider = ({ children }: { children: ReactNode }) => {
  const [ads, setAds] = useState<AdData[]>([]);

  const addAd = (ad: AdData) => setAds((prev) => [...prev, ad]);

  return (
    <MoAdsContext.Provider value={{ ads, addAd }}>
      {children}
    </MoAdsContext.Provider>
  );
};

export const useMoAds = () => {
  const context = useContext(MoAdsContext);
  if (!context) throw new Error("useMoAds must be used within MoAdsProvider");
  return context;
};
