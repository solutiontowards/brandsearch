import Image from "next/image";

interface Props {
  images: string[];
}

export default function ProductImages({ images }: Props) {
  return (
    <div className="flex gap-3">

      {images.slice(0, 3).map((image, index) => (
        <div
          key={index}
          className="relative h-[78px] w-[78px] overflow-hidden rounded-2xl border border-[#ECECEC] bg-[#F7F7F7] shadow-sm"
        >
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      ))}

    </div>
  );
}