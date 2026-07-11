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
      "My pin straight hair is going to see this tool ALOT 😂 #hairtok #hairwaver #hairtools #wavyhair #volumehair #creatorsearchinsights",

    image: "/image/trending-pro1.png",

    isVideo: true,

    views: "6,692",
    days: "4",
    relatedAds: "14",
    roas: "★★★★★",
  },

  {
    id: 2,

    brandName: "Glow Beauty",
    logoSrc: "/image/brand-logo.png",

    startDate: "Sep 29",
    endDate: "Present",

    title: "Salon Finish At Home",

    description:
      "Create smooth and silky hair in minutes. #beauty #viral #creator #haircare",

    image: "/image/trending-pro2.png",

    views: "5,814",
    days: "7",
    relatedAds: "11",
    roas: "★★★★☆",
  },

  {
    id: 3,

    brandName: "Nova Skin",
    logoSrc: "/image/brand-logo.png",

    startDate: "Oct 1",
    endDate: "Present",

    title: "Hydrating Glow Serum",

    description:
      "Creators are loving this serum for everyday glowing skin. #skincare #serum #beauty",

    image: "/image/trending-pro3.png",

    isVideo: true,

    views: "8,203",
    days: "5",
    relatedAds: "17",
    roas: "★★★★★",
  },

  {
    id: 4,

    brandName: "Luna Cosmetics",
    logoSrc: "/image/brand-logo.png",

    startDate: "Oct 2",
    endDate: "Present",

    title: "Flawless Makeup Routine",

    description:
      "Perfect makeup routine for every creator. #makeup #beauty #viral",

    image: "/image/trending-pro1.png",

    views: "7,112",
    days: "6",
    relatedAds: "13",
    roas: "★★★★☆",
  },

  {
    id: 5,

    brandName: "Pure Hair",
    logoSrc: "/image/brand-logo.png",

    startDate: "Oct 5",
    endDate: "Present",

    title: "Healthy Hair Everyday",

    description:
      "Natural shine and volume in one simple routine. #hair #healthyhair",

    image: "/image/trending-pro2.png",

    isVideo: true,

    views: "4,998",
    days: "3",
    relatedAds: "9",
    roas: "★★★★★",
  },

  {
    id: 6,

    brandName: "Byoma Beauty",
    logoSrc: "/image/brand-logo.png",

    startDate: "Oct 4",
    endDate: "Present",

    title: "Everyday Skincare Routine",

    description:
      "Hydrated skin all day with this trending product. #skincare #beauty",

    image: "/image/trending-pro3.png",

    views: "9,125",
    days: "9",
    relatedAds: "21",
    roas: "★★★★★",
  },

  {
    id: 7,

    brandName: "Beauty Lab",
    logoSrc: "/image/brand-logo.png",

    startDate: "Sep 27",
    endDate: "Present",

    title: "Creators Favorite Product",

    description:
      "One of the most shared beauty campaigns this month.",

    image: "/image/trending-pro1.png",

    isVideo: true,

    views: "12,441",
    days: "11",
    relatedAds: "28",
    roas: "★★★★★",
  },

  {
    id: 8,

    brandName: "Skin Aura",
    logoSrc: "/image/brand-logo.png",

    startDate: "Oct 6",
    endDate: "Present",

    title: "Top Performing TikTok Ad",

    description:
      "Fastest growing campaign this week with creator collaborations.",

    image: "/image/trending-pro2.png",

    views: "10,824",
    days: "8",
    relatedAds: "19",
    roas: "★★★★★",
  },
];