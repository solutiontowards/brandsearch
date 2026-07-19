export type DashboardProduct = {
  id: number;
  title: string;
  description: string;
  image: string;
  badge: string;
  buttonText: string;
  previousText: string;
  type: "image" | "video" | "moodboard";
};