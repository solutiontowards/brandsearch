export default function BrandTableHeader() {
  return (
    <div className="w-full min-w-[1680px] grid grid-cols-[100px_270px_180px_110px_120px_170px_90px_95px_130px_110px_230px_100px] items-center bg-[#38CA6E] h-[42.75px] px-7 text-[12px] leading-[15px] place-content-center font-medium text-white">
      <div></div>
      <div>Brands Info</div>

      <div className="text-center">Product</div>

      <div className="text-center">Unit Sold</div>

      <div className="text-center">Traffic</div>

      <div className="text-center">Traffic Trend</div>

      <div className="text-center">GMV</div>

      <div className="text-center">Total GMV</div>

      <div className="text-center">Country</div>

      <div className="text-center">Revenue</div>

      <div className="text-center">Social Traffic</div>

      <div></div>
    </div>
  );
}