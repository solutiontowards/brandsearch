import { DashboardProduct } from "./types";

export const dashboardProducts: DashboardProduct[] = [
  {
    id: 1,
    title: "Create Image",
    description:
      "Transform your ideas into stunning visuals with AI-powered image generation.",
    image: "/image/dashboard1.png",
    badge: "ai modified",
    buttonText: "Create Image",
    previousText: "View Previous",
    type: "image",
  },
  {
    id: 2,
    title: "Create Video",
    description:
      "Transform your ideas into stunning visuals with AI-powered image generation.",
    image: "/image/dashboard2.png",
    badge: "ai modified",
    buttonText: "Create Video",
    previousText: "View Previous",
    type: "video",
  },
  {
    id: 3,
    title: "Create Mood Board",
    description:
      "Transform your ideas into stunning visuals with AI-powered image generation.",
    image: "/image/dashboard3.png",
    badge: "ai modified",
    buttonText: "Create New",
    previousText: "View Previous",
    type: "moodboard",
  },
];