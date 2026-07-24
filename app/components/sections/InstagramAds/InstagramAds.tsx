// import InstagramAdCard from "./InstagramAdCard";
// import { instagramAds } from "@/app/data/instagramAds";

// export default function InstagramAds() {
//   return (
//     <section className="mt-5">
//       <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 xl:grid-cols-4">
//         {instagramAds.map((ad) => (
//           <InstagramAdCard
//             key={ad.id}
//             ad={ad}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import InstagramAdCard from "./InstagramAdCard";
import { instagramAds } from "@/app/data/instagramAds";
import ProductPopup from "@/app/components/product-popup/ProductPopup";
import { InstagramAd } from "@/app/data/instagramAds";

export default function InstagramAds() {
  const [open, setOpen] = useState(false);
  const [selectedAd, setSelectedAd] = useState<InstagramAd | null>(null);

  const handleOpen = (ad: InstagramAd) => {
    setSelectedAd(ad);
    setOpen(true);
  };

  return (
    <>
      <section className="mt-5">
        {/* <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 xl:grid-cols-4">
          {instagramAds.map((ad) => (
            <div
              key={ad.id}
              onClick={() => handleOpen(ad)}
              className="cursor-pointer"
            >
              <InstagramAdCard ad={ad} />
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-4 min-[1500px]:grid-cols-5 gap-6 overflow-hidden">
  {instagramAds.map((ad, index) => (
    <div
      key={ad.id}
      onClick={() => handleOpen(ad)}
      className={`cursor-pointer ${
        index < 4
          ? "block"
          : index < 5
            ? "hidden min-[1500px]:block"
            : "hidden"
      }`}
    >
      <InstagramAdCard ad={ad} />
    </div>
  ))}
</div>
      </section>

      <ProductPopup
        open={open}
        onClose={() => setOpen(false)}
        ad={selectedAd}
      />
    </>
  );
}