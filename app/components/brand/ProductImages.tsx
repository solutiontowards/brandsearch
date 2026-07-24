import Image from "next/image";

interface Props {
  images: string[];
}

export default function ProductImages({ images }: Props) {
  return (
    <div className="flex gap-[3.75px]">
      {images.slice(0, 3).map((image, index) => (
        <div
          key={index}
          className="relative h-[40.5px] w-[42px] overflow-hidden rounded-[11.25px] border border-[#00000033] bg-[#F7F7F7] shadow-sm"
        >
          <Image
            src={image}
            alt={`Product ${index + 1}`}
            fill
            sizes="42px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}