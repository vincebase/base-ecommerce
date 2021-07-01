// import { useSelector } from "react-redux";
// import { useRouter } from "next/router";

import Banners from "../components/shop/Banners";
import LayoutOne from "../components/layouts/LayoutOne";
import ShopLayout from "../components/shop/ShopLayout";
import productData from "../data/product.json";
import useProductData from "../common/useProductData";

export default function Home() {
  // const router = useRouter();
  // const data = useProductData(
  //   productData,
  //   router.query.q
  // );
  return (
    <LayoutOne title="Home">
       <Banners />
    </LayoutOne>
  );
}
