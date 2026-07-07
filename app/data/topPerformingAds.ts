export type TopPerformingAd = {
  id: number;
  brandName: string;
  category: string;
  period: string;
  days: string;
  statusTags: string[];
  revenueLabel: string;
  revenueValue: string;
  totalAdsLabel: string;
  totalAdsValue: string;
  sparkline: number[];
  image: string;
  presentedBy: string;
  country: string;
  publishDate: string;
  description: string;
  link: string;
};

export const topPerformingAds: TopPerformingAd[] = [
  {
    id: 1,
    brandName: "TYMO-BEAUTY",
    category: "Skin Care Kits",
    period: "Oct 3 - Present",
    days: "30d",
    statusTags: ["Scaling", "Testing", "Winning"],
    revenueLabel: "Revenue",
    revenueValue: "$10k-20k",
    totalAdsLabel: "Total Ads",
    totalAdsValue: "12",
    sparkline: [10, 18, 21, 24, 31, 27, 35],
    image: "/image/trending-pro1.png",
    presentedBy: "Presented By",
    country: "United States",
    publishDate: "2026-03-09",
    description:
      "My pin straight hair is going to see this tool ALOT😄 #hairtock #hairwaver #hairtolls #wayvhair #volumehair #creatorscaninsights #ttssbeautybesties",
    link: "https://www.ryzesuperfoods.com",
  },
  {
    id: 2,
    brandName: "LUNA-LOOK",
    category: "Makeup Drops",
    period: "Sep 28 - Present",
    days: "25d",
    statusTags: ["Scaling", "Winning"],
    revenueLabel: "Revenue",
    revenueValue: "$9k-18k",
    totalAdsLabel: "Total Ads",
    totalAdsValue: "9",
    sparkline: [8, 16, 20, 22, 28, 32, 38],
    image: "/image/trending-pro2.png",
    presentedBy: "Presented By",
    country: "United States",
    publishDate: "2026-04-01",
    description:
      "Smooth edges and rich coverage make this routine perfect for quick creator content. #beautycheck #makeuproutine #creatorlaunch #viralbeauty",
    link: "https://www.lunalook.com",
  },
  {
    id: 3,
    brandName: "SOLÉRE STYLE",
    category: "Haircare Essentials",
    period: "Oct 1 - Present",
    days: "29d",
    statusTags: ["Testing", "Winning"],
    revenueLabel: "Revenue",
    revenueValue: "$12k-22k",
    totalAdsLabel: "Total Ads",
    totalAdsValue: "15",
    sparkline: [12, 20, 25, 28, 34, 31, 40],
    image: "/image/trending-pro3.png",
    presentedBy: "Presented By",
    country: "United States",
    publishDate: "2026-04-05",
    description:
      "Creators are showing how this hydration serum keeps the glow without the heaviness. #skincarehack #serumreview #creatorinsight",
    link: "https://www.solerebeauty.com",
  },
  {
    id: 4,
    brandName: "BYOMA BEAUTY",
    category: "Face Serum",
    period: "Oct 5 - Present",
    days: "27d",
    statusTags: ["Scaling", "Winning"],
    revenueLabel: "Revenue",
    revenueValue: "$14k-24k",
    totalAdsLabel: "Total Ads",
    totalAdsValue: "11",
    sparkline: [14, 19, 23, 27, 33, 36, 39],
    image: "/image/trending-pro1.png",
    presentedBy: "Presented By",
    country: "United States",
    publishDate: "2026-04-08",
    description:
      "This formula is trending with creators for hydrated skin and natural glow content. #skincarelifestyle #creatorrated #weekendglow",
    link: "https://www.byomabeauty.com",
  },
];
