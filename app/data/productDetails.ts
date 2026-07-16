export interface ProductDetails {
  id: number;
  productName: string;
  brandName: string;
  logo: string;
  productImage: string;

  country: string;
  age: string;
  products: number;

  price: string;
  category: string;

  tiktokLink: string;
  metaLink: string;
  websiteLink: string;

  shopId: string;
}

export const productDetails: ProductDetails = {
  id: 1,

  productName:
    "Toplux Magnesium Complex 8 Essential Magnesium Supplement 1000mg",

  brandName: "Dr.Melaxin",

  logo: "/image/dr-melaxin-logo.png",

  productImage: "/image/product-details.png",

  country: "UK",

  age: "6 Years",

  products: 250,

  price: "$23.00 - 38.00",

  category: "Skin Care Kits / Beauty",

  tiktokLink: "#",

  metaLink: "#",

  websiteLink: "#",

  shopId: "#1278897df",
};