import PopupLeft from "./PopupLeft";
import PopupRight from "./PopupRight";
import { InstagramAd } from "@/app/data/instagramAds";

type Props = {
  ad: InstagramAd;
};

export default function PopupBody({ ad }: Props) {
  return (
    <div className="flex gap-5 p-5">
      <div className="w-[591px]">
        <PopupLeft ad={ad} />
      </div>

      <div className="flex-1">
        <PopupRight ad={ad} />
      </div>
    </div>
  );
}