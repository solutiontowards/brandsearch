import Image from "next/image";

interface Props {
  images: string[];
}

export default function ProductImages({ images }: Props) {
  return (
    <div className="flex gap-[5px]">
      {images.slice(0, 3).map((image, index) => (
        <div
          key={index}
          className="relative h-[54px] w-[56px] overflow-hidden rounded-[15px] border border-[#00000033] bg-[#F7F7F7] shadow-sm"
        >
          <Image
            src={image}
            alt={`Product ${index + 1}`}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}