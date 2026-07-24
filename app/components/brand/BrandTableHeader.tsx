export default function BrandTableHeader() {
  return (
    <div className="w-full min-w-[1680px] grid grid-cols-[60px_265px_140px_100px_120px_150px_100px_105px_150px_150px_230px_70px] items-center bg-[#38CA6E] h-[42.75px] px-4 text-[12px] leading-[15px] place-content-center font-medium text-white">
      <div></div>
      <div>Brands Info</div>

      <div>Product</div>

      <div className="text-start">Unit Sold</div>

      <div className="text-center">Traffic</div>

      <div className="text-center">Traffic Trend</div>

      <div className="text-center">GMV</div>

      <div className="text-center">Total GMV</div>

      <div className="text-center">Country</div>

      <div className="text-start">Revenue</div>

      <div className="text-start">Social Traffic</div>

      <div></div>
    </div>
  );
}