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
    <div className="flex gap-6">
      {colors.map((color, index) => (
        <div
          key={color}
          className="flex flex-col items-center"
        >
          <span
            className="h-10 w-10 rounded-full border border-[#E9E9E9]"
            style={{ backgroundColor: color }}
          />

          <span className="mt-2 text-[11px] text-[#8A8A8A] uppercase">
            {colorCodes[index]}
          </span>
        </div>
      ))}
    </div>
  );
}