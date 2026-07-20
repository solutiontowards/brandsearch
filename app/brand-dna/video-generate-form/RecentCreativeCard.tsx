import Image from "next/image";

type Props = {
  image: string;
};

export default function RecentCreativeCard({ image }: Props) {
  return (
    <div className="overflow-hidden h-[196px] rounded-[20px] border border-[#F1F1F1]">
      <Image
        src={image}
        alt=""
        width={190}
        height={196}
        className="h-[196px] w-full object-cover"
      />
    </div>
  );
}