import HeroLeft from "./HeroLeft";
import HeroCenter from "./HeroCenter";
import HeroRight from "./HeroRight";

export default function DetailHero() {
  return (
    <section className="rounded-[16px] border border-[#ECECEC] bg-white p-4">
      <div className="grid gap-4 xl:grid-cols-[421px_minmax(0,1fr)_280px]">
        <HeroLeft />
        <HeroCenter />
        <HeroRight />
      </div>
    </section>
  );
}