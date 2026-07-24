export type BrandPlatform = "facebook" | "instagram" | "google";

export type BrandPlatformMetric = {
  platform: BrandPlatform;
  value: string;
  total: string;
};

export type BrandCard = {
  id: number;
  logoSrc: string;
  brandName: string;
  industry: string;
  traffic: string;
  unitSold: string;
  gmv: string;
  revenueRange: string;
  liveRevenue: string;
  activeProducts: string;
  influencerSales: string;
  country: string;
  bestSellingProducts: string[];
  platformMetrics: BrandPlatformMetric[];
};

export const brandCards: BrandCard[] = [
  {
    id: 1,
    logoSrc: "/image/trending-logo.png",
    brandName: "Halara US",
    industry: "Beauty and Personal Care",
    traffic: "64.6k",
    unitSold: "30.1K",
    gmv: "$197k",
    revenueRange: "$197k - $229k/day",
    liveRevenue: "$197.0k",
    activeProducts: "126",
    influencerSales: "99.4K",
    country: "United States",
    bestSellingProducts: [
      "/image/trending-pro1.png",
      "/image/trending-pro2.png",
      "/image/trending-pro3.png",
      "/image/trending-pro1.png",
    ],
    platformMetrics: [
      { platform: "facebook", value: "547", total: "6.4k" },
      { platform: "instagram", value: "547", total: "6.4k" },
      { platform: "google", value: "547", total: "6.4k" },
    ],
  },
  {
    id: 2,
    logoSrc: "/image/trending-logo.png",
    brandName: "Nova Glow",
    industry: "Skincare",
    traffic: "52.3k",
    unitSold: "24.5K",
    gmv: "$163k",
    revenueRange: "$163k - $190k/day",
    liveRevenue: "$163.5k",
    activeProducts: "98",
    influencerSales: "84.1K",
    country: "Canada",
    bestSellingProducts: [
      "/image/trending-pro2.png",
      "/image/trending-pro1.png",
      "/image/trending-pro3.png",
    ],
    platformMetrics: [
      { platform: "facebook", value: "432", total: "5.1k" },
      { platform: "instagram", value: "389", total: "4.8k" },
      { platform: "google", value: "276", total: "3.9k" },
    ],
  },
  {
    id: 3,
    logoSrc: "/image/trending-logo.png",
    brandName: "Lumea Labs",
    industry: "Wellness",
    traffic: "48.9k",
    unitSold: "21.8K",
    gmv: "$149k",
    revenueRange: "$149k - $175k/day",
    liveRevenue: "$149.2k",
    activeProducts: "112",
    influencerSales: "76.0K",
    country: "United Kingdom",
    bestSellingProducts: [
      "/image/trending-pro3.png",
      "/image/trending-pro2.png",
      "/image/trending-pro1.png",
    ],
    platformMetrics: [
      { platform: "facebook", value: "398", total: "4.9k" },
      { platform: "instagram", value: "361", total: "4.2k" },
      { platform: "google", value: "258", total: "3.2k" },
    ],
  },
  {
    id: 4,
    logoSrc: "/image/trending-logo.png",
    brandName: "Solaré Studio",
    industry: "Makeup",
    traffic: "57.4k",
    unitSold: "27.2K",
    gmv: "$178k",
    revenueRange: "$178k - $205k/day",
    liveRevenue: "$178.8k",
    activeProducts: "118",
    influencerSales: "91.7K",
    country: "Australia",
    bestSellingProducts: [
      "/image/trending-pro1.png",
      "/image/trending-pro3.png",
      "/image/trending-pro2.png",
    ],
    platformMetrics: [
      { platform: "facebook", value: "512", total: "5.8k" },
      { platform: "instagram", value: "476", total: "5.5k" },
      { platform: "google", value: "328", total: "4.1k" },
    ],
  },
  {
    id: 5,
    logoSrc: "/image/trending-logo.png",
    brandName: "Solaré Studio",
    industry: "Makeup",
    traffic: "57.4k",
    unitSold: "27.2K",
    gmv: "$178k",
    revenueRange: "$178k - $205k/day",
    liveRevenue: "$178.8k",
    activeProducts: "118",
    influencerSales: "91.7K",
    country: "Australia",
    bestSellingProducts: [
      "/image/trending-pro1.png",
      "/image/trending-pro3.png",
      "/image/trending-pro2.png",
    ],
    platformMetrics: [
      { platform: "facebook", value: "512", total: "5.8k" },
      { platform: "instagram", value: "476", total: "5.5k" },
      { platform: "google", value: "328", total: "4.1k" },
    ],
  },
];
