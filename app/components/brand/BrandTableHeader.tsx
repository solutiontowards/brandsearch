export default function BrandTableHeader() {
  return (
    <div className="grid grid-cols-[100px_360px_180px_110px_120px_170px_90px_95px_130px] items-center bg-[#38CA6E] h-[57px] px-7 text-[14px] min-[1660px]:text-[16px] font-medium text-white">
      <div></div>
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