export type TikTokAd = {
  id: number;

  brandName: string;
  logoSrc: string;

  startDate: string;
  endDate: string;

  title: string;
  description: string;

  image: string;

  isVideo?: boolean;

  views: string;
  days: string;
  relatedAds: string;
  roas: string;
};

export const tiktokAds: TikTokAd[] = [
  {
    id: 1,

    brandName: "Tymo-Beauty",
    logoSrc: "/image/brand-logo.png",

    startDate: "Oct 3",
    endDate: "Present",

    title: "The New Standard for Elite Recovery",

    description:
      "Cute inflatable chair 💖 #babygirl #inflatablechair #tiktokshop #adorable ",

    image: "/image/tiktok.png",

    // isVideo: true,

    views: "6.4k",
    days: "2",
    relatedAds: "1",
    roas: "2.49",
  },

  {
    id: 2,

    brandName: "Glow Beauty",
    logoSrc: "/image/brand-logo.png",

    startDate: "Sep 29",
    endDate: "Present",

    title: "Salon Finish At Home",

    description:
      "Cute inflatable chair 💖 #babygirl #inflatablechair #tiktokshop #adorable ",

    image: "/image/tiktok.png",

    views: "5,814",
    days: "7",
    relatedAds: "11",
    roas: "2.2",
  },

  {
    id: 3,

    brandName: "Nova Skin",
    logoSrc: "/image/brand-logo.png",

    startDate: "Oct 1",
    endDate: "Present",

    title: "Hydrating Glow Serum",

    description:
      "Cute inflatable chair 💖 #babygirl #inflatablechair #tiktokshop #adorable ",

    image: "/image/tiktok.png",

    isVideo: true,

    views: "8,203",
    days: "5",
    relatedAds: "17",
    roas: "2.91",
  },

  {
    id: 4,

    brandName: "Luna Cosmetics",
    logoSrc: "/image/brand-logo.png",

    startDate: "Oct 2",
    endDate: "Present",

    title: "Flawless Makeup Routine",

    description:
      "Cute inflatable chair 💖 #babygirl #inflatablechair #tiktokshop #adorable ",

    image: "/image/tiktok.png",

    views: "7,112",
    days: "6",
    relatedAds: "13",
    roas: "3.21",
  },
];