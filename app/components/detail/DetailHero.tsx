import HeroLeft from "./HeroLeft";
import HeroCenter from "./HeroCenter";
import HeroRight from "./HeroRight";

export default function DetailHero() {
  return (
    <section className="mt-[15px] grid grid-cols-[421px_minmax(0,1fr)] gap-6">
  <HeroLeft />

  <div className="min-w-0">
    <HeroCenter />
  </div>
</section>
  );
}