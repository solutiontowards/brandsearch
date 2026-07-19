type Props = {
  colors: string[];
};

const colorCodes = [
  "E38645",
  "951A1F",
  "FFD4DB",
  "EA84FF",
];

export default function ColorPalette({ colors }: Props) {
  return (
    <div className="flex gap-[60px]">
      {colors.map((color, index) => (
        <div
          key={color}
          className="flex flex-col items-center"
        >
          <span
            className="h-[61px] w-[61px] rounded-full border border-[#E9E9E9]"
            style={{ backgroundColor: color }}
          />

          <span className="mt-2 text-[18px] leading-[25px] font-normal text-[#737474] uppercase">
            {colorCodes[index]}
          </span>
        </div>
      ))}
    </div>
  );
}