export type Platform = "facebook" | "instagram" | "google";

export type PlatformMetric = {
  platform: Platform;
  value: string;
  total: string;
};

export type ProductCard = {
  id: number;

  image: string;
  name: string;
  price: string;
  country: string;

  shopLogo: string;
  shopName: string;
  shopTitle: string;

  unitSold: string;

  traffic: string;

  revenueVideos: string[];

  totalUnitSold: string;

  ourProducts: string[];

  totalProducts: string;

  revenue: string;

  platformMetrics: PlatformMetric[];
};

export const productCards: ProductCard[] = [
  {
    id: 1,

    image: "/image/brand-product.png",
    name: "Toplux Magnesium Comple...",
    price: "$23.00 - $38.00",
    country: "United States",

    shopLogo: "/image/dent-logo.png",
    shopName: "DR.DENT",
    shopTitle: "[NEW] [medicube] P...",

    unitSold: "7k",

    traffic: "64.6k",

    revenueVideos: [
      "/image/video1.png",
      "/image/video2.png",
      "/image/video3.png",
    ],

    totalUnitSold: "4.3m",

    ourProducts: [
      "/image/our-pro1.png",
      "/image/our-pro2.png",
      "/image/our-pro3.png",
    ],

    totalProducts: "58",

    revenue: "$197k - $229k/day",

    platformMetrics: [
      {
        platform: "facebook",
        value: "547",
        total: "6.4k",
      },
      {
        platform: "instagram",
        value: "547",
        total: "6.4k",
      },
      {
        platform: "google",
        value: "547",
        total: "6.4k",
      },
    ],
  },

  {
    id: 2,

    image: "/image/brand-product.png",
    name: "Toplux Magnesium Comple...",
    price: "$23.00 - $38.00",
    country: "United States",

    shopLogo: "/image/dent-logo.png",
    shopName: "DR.DENT",
    shopTitle: "[NEW] [medicube] P...",

    unitSold: "7k",

    traffic: "64.6k",

    revenueVideos: [
      "/image/video1.png",
      "/image/video2.png",
      "/image/video3.png",
    ],

    totalUnitSold: "4.3m",

    ourProducts: [
      "/image/trending-pro1.png",
      "/image/trending-pro2.png",
      "/image/trending-pro3.png",
    ],

    totalProducts: "58",

    revenue: "$197k - $229k/day",

    platformMetrics: [
      {
        platform: "facebook",
        value: "547",
        total: "6.4k",
      },
      {
        platform: "instagram",
        value: "547",
        total: "6.4k",
      },
      {
        platform: "google",
        value: "547",
        total: "6.4k",
      },
    ],
  },

  {
    id: 3,

    image: "/image/brand-product.png",
    name: "Toplux Magnesium Comple...",
    price: "$23.00 - $38.00",
    country: "United States",

    shopLogo: "/image/dent-logo.png",
    shopName: "DR.DENT",
    shopTitle: "[NEW] [medicube] P...",

    unitSold: "7k",

    traffic: "64.6k",

    revenueVideos: [
      "/image/video1.png",
      "/image/video2.png",
      "/image/video3.png",
    ],

    totalUnitSold: "4.3m",

    ourProducts: [
      "/image/trending-pro1.png",
      "/image/trending-pro2.png",
      "/image/trending-pro3.png",
    ],

    totalProducts: "58",

    revenue: "$197k - $229k/day",

    platformMetrics: [
      {
        platform: "facebook",
        value: "547",
        total: "6.4k",
      },
      {
        platform: "instagram",
        value: "547",
        total: "6.4k",
      },
      {
        platform: "google",
        value: "547",
        total: "6.4k",
      },
    ],
  },

  {
    id: 4,

    image: "/image/brand-product.png",
    name: "Toplux Magnesium Comple...",
    price: "$23.00 - $38.00",
    country: "United States",

    shopLogo: "/image/dent-logo.png",
    shopName: "DR.DENT",
    shopTitle: "[NEW] [medicube] P...",

    unitSold: "7k",

    traffic: "64.6k",

    revenueVideos: [
      "/image/video1.png",
      "/image/video2.png",
      "/image/video3.png",
    ],

    totalUnitSold: "4.3m",

    ourProducts: [
      "/image/trending-pro1.png",
      "/image/trending-pro2.png",
      "/image/trending-pro3.png",
    ],

    totalProducts: "58",

    revenue: "$197k - $229k/day",

    platformMetrics: [
      {
        platform: "facebook",
        value: "547",
        total: "6.4k",
      },
      {
        platform: "instagram",
        value: "547",
        total: "6.4k",
      },
      {
        platform: "google",
        value: "547",
        total: "6.4k",
      },
    ],
  },

  {
    id: 5,

    image: "/image/brand-product.png",
    name: "Toplux Magnesium Comple...",
    price: "$23.00 - $38.00",
    country: "United States",

    shopLogo: "/image/dent-logo.png",
    shopName: "DR.DENT",
    shopTitle: "[NEW] [medicube] P...",

    unitSold: "7k",

    traffic: "64.6k",

    revenueVideos: [
      "/image/video1.png",
      "/image/video2.png",
      "/image/video3.png",
    ],

    totalUnitSold: "4.3m",

    ourProducts: [
      "/image/trending-pro1.png",
      "/image/trending-pro2.png",
      "/image/trending-pro3.png",
    ],

    totalProducts: "58",

    revenue: "$197k - $229k/day",

    platformMetrics: [
      {
        platform: "facebook",
        value: "547",
        total: "6.4k",
      },
      {
        platform: "instagram",
        value: "547",
        total: "6.4k",
      },
      {
        platform: "google",
        value: "547",
        total: "6.4k",
      },
    ],
  },
];