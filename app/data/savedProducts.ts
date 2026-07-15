export interface SavedProduct {
  id: number;
  title: string;
  date: string;
  image: string;
  trendImage: string;
  favorite: boolean;
}

export const savedProducts: SavedProduct[] = [
  {
    id: 1,
    title: "PDRN Pink Collag...",
    date: "Oct 3, 2026",
    image: "/image/saved1.png",
    trendImage: "/image/saved1.png",
    favorite: true,
  },
  {
    id: 2,
    title: "PDRN Pink Collag...",
    date: "Oct 3, 2026",
    image: "/image/saved2.png",
    trendImage: "/image/trend-line.png",
    favorite: true,
  },
  {
    id: 3,
    title: "PDRN Pink Collag...",
    date: "Oct 3, 2026",
    image: "/image/saved3.png",
    trendImage: "/image/trend-line.png",
    favorite: true,
  },
  {
    id: 4,
    title: "PDRN Pink Collag...",
    date: "Oct 3, 2026",
    image: "/image/saved4.png",
    trendImage: "/image/trend-line.png",
    favorite: true,
  },
];