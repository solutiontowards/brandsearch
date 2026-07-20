import ProductListItem from "./ProductListItem";
import { products } from "@/app/data/brandproducts";

export default function ProductSidebar() {
  return (
    <aside className="w-[432px] rounded-xl border border-[#ECECEC] bg-white py-[33px] px-[15px] shadow-sm">
      <div className="overflow-y-auto pr-1 h-full">
        {products.map((item) => (
          <ProductListItem
            key={item.id}
            image={item.image}
            name={item.name}
            active={item.active}
          />
        ))}
      </div>
    </aside>
  );
}