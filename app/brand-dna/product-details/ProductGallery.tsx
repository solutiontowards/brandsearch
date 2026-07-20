import Image from "next/image";
import ThumbnailItem from "./ThumbnailItem";
import { CiCirclePlus } from "react-icons/ci";
import ProductForm from "./ProductForm";

export default function ProductGallery() {
    return (
        <section>
            <h3 className="mb-4 text-[25px] leading-[35px] font-semibold text-[#141617]">
                Product Image
            </h3>

            <div className="flex gap-4 mb-[35px]">
                {/* Main Image */}
                <div className="relative h-[234px] w-[327px] overflow-hidden rounded-2xl border border-[#00000033]">
                    <Image
                        src="/image/brand-pro-1.png"
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Thumbnails */}
                <div className="flex flex-col gap-1">
                    <ThumbnailItem
                        image="/image/brand-pro-1.png"
                        active
                        width={87}
                        height={75}
                    />

                    <ThumbnailItem
                        image="/image/brand-pro-2.png"
                        width={87}
                        height={75}
                    />

                    <ThumbnailItem
                        image="/image/brand-pro-3.png"
                        width={87}
                        height={75}
                    />
                </div>

                {/* Crop Button */}
                <button className="flex h-[234px] w-11 items-center justify-center rounded-xl border-[2px] border-[#ED4B72] bg-[#ED4B721A]">
                    <span className="[writing-mode:vertical-rl] rotate-180 text-[18px] leading-6 font-medium text-[#F5305F] flex items-center gap-[14px]">
                        Drag to Crop <CiCirclePlus />
                    </span>
                </button>
            </div>
  
            <ProductForm />
        </section>
    );
}