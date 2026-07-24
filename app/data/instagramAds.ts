export type InstagramAd = {
  id: number;
  brandName: string;
  logoSrc: string;

  period: string;
  days: string;

  revenue: string;
  views: string;
  likes: string;
  rating: string;

  images: string[];

  isVideo?: boolean;

  title: string;
  description: string;

  link: string;
};

export const instagramAds: InstagramAd[] = [
  {
    id: 1,
    brandName: "Tymo-Beauty",
    logoSrc: "/image/brand-logo.png",

    period: "Oct 3 - Present",
    days: "30d",

    revenue: "6692",
    views: "4",
    likes: "1466",
    rating: "★★★★★",

    images: [
      "/image/topPerforming-1.png",
      "/image/topPerforming-2.png",
      "/image/trending-pro3.png",
    ],

    title: "The New Standard for Elite Recovery",

    description:
      "My pin striaght hair is going to see this tool ALOT😂#hairtok #hairwaver #hairtools #wavyhair #volumehair #creatorsearchinsights #ttsbeautybesties",

    link: "https://www.ryzesuperfoods.com",
  },

  {
    id: 2,
    brandName: "Tymo-Beauty",
    logoSrc: "/image/brand-logo.png",

    period: "Oct 3 - Present",
    days: "30d",

    revenue: "6692",
    views: "4",
    likes: "1466",
    rating: "★★★★★",

    images: [
      "/image/trending-pro2.png",
      "/image/trending-pro3.png",
      "/image/trending-pro1.png",
    ],

    title: "The New Standard for Elite Recovery",

    description:
      "Perfect styling routine for everyday creators. #beauty #creator #viral",

    link: "https://www.ryzesuperfoods.com",

    isVideo: true,
  },

  {
    id: 3,
    brandName: "Tymo-Beauty",
    logoSrc: "/image/brand-logo.png",

    period: "Oct 3 - Present",
    days: "30d",

    revenue: "6692",
    views: "4",
    likes: "1466",
    rating: "★★★★★",

    images: [
      "/image/topPerforming-1.png",
      "/image/topPerforming-2.png",
      "/image/trending-pro3.png",
    ],

    title: "The New Standard for Elite Recovery",

    description:
      "My pin striaght hair is going to see this tool ALOT😂#hairtok #hairwaver #hairtools #wavyhair #volumehair #creatorsearchinsights #ttsbeautybesties",

    link: "https://www.ryzesuperfoods.com",
  },

  {
    id: 4,
    brandName: "Tymo-Beauty",
    logoSrc: "/image/brand-logo.png",

    period: "Oct 3 - Present",
    days: "30d",

    revenue: "6692",
    views: "4",
    likes: "1466",
    rating: "★★★★★",

    images: [
      "/image/trending-pro3.png",
      "/image/trending-pro1.png",
      "/image/trending-pro2.png",
    ],

    title: "The New Standard for Elite Recovery",

    description:
      "Creators are loving this beauty routine. #hairtok #beauty",

    link: "https://www.ryzesuperfoods.com",

    isVideo: true,
  },
  {
    id: 5,
    brandName: "Tymo-Beauty",
    logoSrc: "/image/brand-logo.png",

    period: "Oct 3 - Present",
    days: "30d",

    revenue: "6692",
    views: "4",
    likes: "1466",
    rating: "★★★★★",

    images: [
      "/image/trending-pro3.png",
      "/image/trending-pro1.png",
      "/image/trending-pro2.png",
    ],

    title: "The New Standard for Elite Recovery",

    description:
      "Creators are loving this beauty routine. #hairtok #beauty",

    link: "https://www.ryzesuperfoods.com",

    isVideo: true,
  },
];