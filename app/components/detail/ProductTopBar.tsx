import Image from "next/image";
import {
  ExternalLink,
} from "lucide-react";

export default function ProductHeader() {
  return (
    <div className="rounded-[10px] border border-[#ECECEC] bg-[#FFFFFF] py-[13px] ps-[15px] min-[1660px]:ps-[34px] pe-[13px] max-h-[277px]">
      <div className="flex gap-4 min-[1660px]:gap-8">
        {/* Left */}
        <div className="flex-1">
          {/* Title */}
          <h2 className="max-w-[500px] min-[1660px]:max-w-[690px] mt-[12px] text-[20px] min-[1660px]:text-[30px] font-medium leading-[40px] text-[#141617]">
            Toplux Magnesium Complex 8 Essential Magnesium Supplement 1000mg
          </h2>

          {/* Price */}
          <div className="mt-5 min-[1660px]:mt-8 flex items-center gap-5">
            <div className="flex items-center gap-3">
              <span className="text-[18px] min-[1660px]:text-[28px] font-normal text-[#808B96]">
                Price:
              </span>

              <span className="text-[18px] min-[1660px]:text-[28px] font-bold leading-none text-[#141617]">
                $23.00 - 38.00
              </span>
            </div>

            <span className="rounded-full bg-[#00C43717] py-[5px] min-[1660px]:py-[11px] px-[7px] min-[1660px]:px-[25px] flex justify-center items-center text-[16px] min-[1660px]:text-[22px] min-[1660px]:h-[46px] font-medium text-[#00C438]">
              Skin Care Kits / Beauty
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex gap-[10px]">
            <LinkButton
              icon="/image/tiktokk.svg"
              text="Tiktok product link"
            />

            <LinkButton
              icon="/image/meta-logo.svg"
              text="Meta product link"
            />

            <LinkButton
              icon="/image/globe.svg"
              text="Website link"
            />
          </div>
        </div>

        {/* Right Card */}
        <div className="w-[200px] min-[1660px]:w-[318px] h-[220px] min-[1660px]:h-[250px] rounded-[10px] border border-[#E4E4E4] bg-[#FAFAFA] pt-[12px] min-[1660px]:pt-[18px] ps-[15px] min-[1660px]:ps-[29px] pb-[15px] min-[1660px]:pb-[24px] pe-[15px] min-[1660px]:pe-[23px]">
          <h3 className="text-[18px] leading-10 font-medium text-[#141617]">
            Shop Info
          </h3>

          <div className="mt-[16px] flex gap-[12px] min-[1660px]:gap-[17px]">
            <div className="flex h-[60px] w-[60px] min-[1660px]:h-[80px] min-[1660px]:w-[80px] items-center justify-center rounded-[10px] border border-[#00000033]">
              <Image
                src="/image/product-logo.png"
                alt=""
                width={80}
                height={80}
                className="rounded-[10px]"
              />
            </div>

            <div className="flex flex-col">
              <h4 className="text-[18px] min-[1660px]:text-[22px] leading-6 min-[1660px]:leading-10 font-medium text-[#171717]">
                Dr.Melaxin
              </h4>

              <div className="mt-2 flex items-center gap-[6px]">
                <span className="text-[20px] min-[1660px]:text-[28px]">
                  <Image
                src="/image/us-logo.png"
                alt=""
                width={17}
                height={17}
                className="h-[12px] min-[1660px]:h-[17px] w-[12px] min-[1660px]:w-[17px] object-cover rounded-full"
              />
                </span>

                <span className="text-[12px] min-[1660px]:text-[17.34px] leading-[21.15px] text-[#141617]">
                  United States
                </span>
              </div>
            </div>
          </div>

          {/* Shop Id */}
          <div className="mt-5 flex items-center justify-between rounded-[10px] bg-[#3253F017] px-3 min-[1660px]:px-5 py-[7px] min-[1660px]:py-[14px]">
            <span className="text-[14px] min-[1660px]:text-[16px] leading-[30px] #3C3D51font-normal text-[]">
              Shop Id
            </span>

            <span className="text-[16px] min-[1660px]:text-[18px] leading-3 min-[1660px]:leading-5 font-semibold text-[#000000]">
              #1278897df
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkButton({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {
  return (
    <button className="flex h-[40px] items-center gap-[5px] min-[1660px]:gap-[9px] rounded-[10px] bg-[#F5F5F7] px-2 min-[1660px]:px-4 py-3 transition hover:bg-[#EEEEF0]">
      <Image
        src={icon}
        alt=""
        width={28}
        height={28}
        className="w-[15px] h-[15px] min-[1660px]:h-[28px] min-[1660px]:w-[28px]"
      />

      <span className="text-[12px] min-[1660px]:text-[16px] font-medium text-[#060317]">
        {text}
      </span>

      <ExternalLink
        size={24}
        strokeWidth={2}
        className="w-[14px] h-[14px] min-[1660px]:h-[24px] min-[1660px]:w-[24px]"
      />
    </button>
  );
}