export default function BrandTableHeader() {
  return (
    <div className="grid grid-cols-[2.8fr_2fr_0.9fr_1.1fr_1.4fr_1fr_1fr_1.2fr] items-center rounded-t-[24px] bg-[#38C76A] px-8 py-5 text-[15px] font-semibold text-white">
      <div>Brands Info</div>

      <div className="text-center">Product</div>

      <div className="text-center">Unit Sold</div>

      <div className="text-center">Traffic</div>

      <div className="text-center">Traffic Trend</div>

      <div className="text-center">GMV</div>

      <div className="text-center">Total GMV</div>

      <div className="text-center">Country</div>
    </div>
  );
}