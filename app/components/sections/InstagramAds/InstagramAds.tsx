import InstagramAdCard from "./InstagramAdCard";
import { instagramAds } from "@/app/data/instagramAds";

export default function InstagramAds() {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 xl:grid-cols-4">
        {instagramAds.map((ad) => (
          <InstagramAdCard
            key={ad.id}
            ad={ad}
          />
        ))}
      </div>
    </section>
  );
}