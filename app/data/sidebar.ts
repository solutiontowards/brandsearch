import dashboardImage from "../../public/image/menu/menu1.png";
import winningProductsImage from "../../public/image/menu/menu2.png";
import brandsImage from "../../public/image/menu/menu3.png";
import adLibraryImage from "../../public/image/menu/menu4.png";
import ugcVideosImage from "../../public/image/menu/menu5.png";
import spyToolImage from "../../public/image/menu/menu6.png";
import menu7 from "../../public/image/menu/menu7.png";

export const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    image: dashboardImage,
    shortcut: "⌘ D",
    description: "View your dashboard overview",
    children: [
      {
        label: "Overview",
        href: "/dashboard",
      },
      {
        label: "Analytics",
        href: "/dashboard/analytics",
      },
      {
        label: "Reports",
        href: "/dashboard/reports",
      },
    ],
  },

  {
    label: "Winning Products",
    href: "/winning-products",
    image: winningProductsImage,
    shortcut: "⌘ W",
    description: "Find products that are selling",
    children: [
      {
        label: "Top Products",
        href: "/winning-products/top",
      },
      {
        label: "Trending",
        href: "/winning-products/trending",
      },
      {
        label: "Saved Products",
        href: "/winning-products/saved",
      },
    ],
  },

  {
    label: "Brands",
    href: "/brands",
    image: brandsImage,
    shortcut: "⌘ B",
    description: "Discover successful brands",
    children: [
      {
        label: "Brand Products",
        href: "/brands/products",
      },
      {
        label: "Top Brands",
        href: "/brands/top-brands",
      },
      {
        label: "Brand Details",
        href: "/brands/details",
      },
    ],
  },

  {
    label: "Ad Library",
    href: "/ad-library",
    image: adLibraryImage,
    shortcut: "⌘ A",
    description: "Explore high-performing ads",
    children: [
      {
        label: "Meta Ads",
        href: "/ad-library/meta",
      },
      {
        label: "TikTok Ads",
        href: "/ad-library/tiktok",
      },
      {
        label: "Google Ads",
        href: "/ad-library/google",
      },
      {
        label: "YouTube Ads",
        href: "/ad-library/youtube",
      },
    ],
  },

  {
    label: "UGC Videos",
    href: "/ugc-videos",
    image: ugcVideosImage,
    shortcut: "⌘ U",
    description: "Browse creator content",
    children: [
      {
        label: "Trending Videos",
        href: "/ugc-videos/trending",
      },
      {
        label: "Top Creators",
        href: "/ugc-videos/creators",
      },
      {
        label: "Collections",
        href: "/ugc-videos/collections",
      },
    ],
  },

  {
    label: "Spy Tool",
    href: "/spy-tool",
    image: spyToolImage,
    shortcut: "⌘ S",
    description: "Track competitor strategies",
    children: [
      {
        label: "Competitors",
        href: "/spy-tool/competitors",
      },
      {
        label: "Keywords",
        href: "/spy-tool/keywords",
      },
      {
        label: "Campaigns",
        href: "/spy-tool/campaigns",
      },
    ],
  },

  {
    label: "AI Assistant",
    href: "/ai-assistant",
    image: menu7,
    shortcut: "⌘ I",
    description: "Generate insights with AI",
    children: [
      {
        label: "Chat",
        href: "/ai-assistant/chat",
      },
      {
        label: "Prompts",
        href: "/ai-assistant/prompts",
      },
      {
        label: "History",
        href: "/ai-assistant/history",
      },
    ],
  },
];