import Image from "next/image";

type Props = {
  image: string;
  active?: boolean;
  width?: number;
  height?: number;
};

export default function ThumbnailItem({
  image,
  active,
  width = 66,
  height = 66,
}: Props) {
  return (
    <button
      className={`relative overflow-hidden rounded-xl border transition
        ${active ? "border-[#FF6B8A]" : "border-[#ECECEC]"}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
      />
    </button>
  );
}