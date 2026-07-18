export type BestSeller = {
  id: number;
  rank: number;
  age: string;
  image: string;
  title: string;
  price: string;
  link: string;
};

export const bestSellerData: BestSeller[] = [
  {
    id: 1,
    rank: 2,
    age: "1 year old",
    image: "/image/bestsellar.png",
    title: "[NEW] [medicube] PDRN Pink...",
    price: "$23.00 - 38.00",
    link: "https://www.ryzesu...",
  },
  {
    id: 2,
    rank: 3,
    age: "10 months",
    image: "/image/bestsellar.png",
    title: "Modern Office Chair...",
    price: "$42.00 - 60.00",
    link: "https://www.ryzesu...",
  },
  {
    id: 3,
    rank: 4,
    age: "8 months",
    image: "/image/bestsellar.png",
    title: "Luxury Chair...",
    price: "$65.00 - 80.00",
    link: "https://www.ryzesu...",
  },
  {
    id: 4,
    rank: 5,
    age: "6 months",
    image: "/image/bestsellar.png",
    title: "Premium Chair...",
    price: "$28.00 - 35.00",
    link: "https://www.ryzesu...",
  },
  {
    id: 5,
    rank: 5,
    age: "6 months",
    image: "/image/bestsellar.png",
    title: "Premium Chair...",
    price: "$28.00 - 35.00",
    link: "https://www.ryzesu...",
  },
];