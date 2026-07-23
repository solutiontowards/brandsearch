import HeroLeft from "./HeroLeft";
import HeroCenter from "./HeroCenter";

export default function DetailHero() {
  return (
    <section className="mt-[15px] grid grid-cols-[320px_minmax(0,1fr)] min-[1660px]:grid-cols-[421px_minmax(0,1fr)] gap-4">
  <HeroLeft />

  <div className="min-w-0">
    <HeroCenter />
  </div>
</section>
  );
}