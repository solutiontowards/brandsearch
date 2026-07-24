"use client";

import RelatedCard from "./RelatedCard";
import useVisibleCards from "@/app/hooks/useVisibleCards";
import { FaCircleChevronRight } from "react-icons/fa6";

const relatedProducts = [
  {
    id: 1,
    image: "/image/product-details.png",
    title: "The New Standard for Elite Recovery",
    brand: "My pin striaght hair is going to see this tool ALOT😂#hairtok #hairwaver #hairtools #wavyhair #volumehair #creatorsearchinsights #ttsbeautybesties",
    price: "$29.99",
    platform: "TikTok",
    views: "10.3M",
    likes: "2.68M",
    shares: "2.4K",
    link: "https://www.ryzesuperfoods.com",
    userName: "Andrey Adinson",
    userLogo: "/image/user.png",
    date: "26th June 2026, 10:29PM",
    unitSold: "500 Unit",
    revenueRange: "$197k - $229k/day",
    country: "United States"
  },
  {
    id: 2,
    image: "/image/product-details.png",
    title: "Organic Greens Super Blend",
    brand: "My pin striaght hair is going to see this tool ALOT😂#hairtok #hairwaver #hairtools #wavyhair #volumehair #creatorsearchinsights #ttsbeautybesties",
    price: "$34.99",
    platform: "Meta",
    views: "8.2M",
    likes: "1.9M",
    shares: "1.2K",
    link: "https://www.ryzesuperfoods.com",
    userName: "Andrey Adinson",
    userLogo: "/image/user.png",
    date: "26th June 2026, 10:29PM",
    unitSold: "500 Unit",
    revenueRange: "$197k - $229k/day",
    country: "United States"
  },
  {
    id: 3,
    image: "/image/product-details.png",
    title: "Premium Mushroom Coffee",
    brand: "My pin striaght hair is going to see this tool ALOT😂#hairtok #hairwaver #hairtools #wavyhair #volumehair #creatorsearchinsights #ttsbeautybesties",
    price: "$39.99",
    platform: "TikTok",
    views: "5.8M",
    likes: "980K",
    shares: "980",
    link: "https://www.ryzesuperfoods.com",
    userName: "Andrey Adinson",
    userLogo: "/image/user.png",
    date: "26th June 2026, 10:29PM",
    unitSold: "500 Unit",
    revenueRange: "$197k - $229k/day",
    country: "United States"
  },
  {
    id: 4,
    image: "/image/product-details.png",
    title: "Collagen Beauty Powder",
    brand: "My pin striaght hair is going to see this tool ALOT😂#hairtok #hairwaver #hairtools #wavyhair #volumehair #creatorsearchinsights #ttsbeautybesties",
    price: "$42.00",
    platform: "Meta",
    views: "12.6M",
    likes: "3.4M",
    shares: "3.1K",
    link: "https://www.ryzesuperfoods.com",
    userName: "Andrey Adinson",
    userLogo: "/image/user.png",
    date: "26th June 2026, 10:29PM",
    unitSold: "500 Unit",
    revenueRange: "$197k - $229k/day",
    country: "United States"
  },
  {
    id: 5,
    image: "/image/product-details.png",
    title: "Collagen Beauty Powder",
    brand: "My pin striaght hair is going to see this tool ALOT😂#hairtok #hairwaver #hairtools #wavyhair #volumehair #creatorsearchinsights #ttsbeautybesties",
    price: "$42.00",
    platform: "Meta",
    views: "12.6M",
    likes: "3.4M",
    shares: "3.1K",
    link: "https://www.ryzesuperfoods.com",
    userName: "Andrey Adinson",
    userLogo: "/image/user.png",
    date: "26th June 2026, 10:29PM",
    unitSold: "500 Unit",
    revenueRange: "$197k - $229k/day",
    country: "United States"
  },
];

export default function RelatedProducts() {
  const visibleCards = useVisibleCards();
  return (
    <section className="mt-10">
      <div className=" mt-3 mb-[27px] flex items-center justify-between">
        <h2 className="relative text-[23px] leading-[27px] font-semibold text-[#141617]">
          Related Videos
          <span className="absolute top-1/2 right-[-30px] h-px w-[25px] -translate-y-1/2 bg-[#141617]" />
        </h2>

        <button className="flex items-center gap-[10px] text-[13px] leading-[19px] font-normal text-[#3C3D51] underline">
          Show all
          <FaCircleChevronRight className="text-[#607FF8] h-[20px] w-[20px]" />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-[22px] min-[770px]:grid-cols-2 min-[900px]:grid-cols-3 min-[1200px]:grid-cols-4 min-[1500px]:grid-cols-5">
        {relatedProducts.slice(0, visibleCards).map((item) => (
          <RelatedCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}