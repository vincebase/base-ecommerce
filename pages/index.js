
import LayoutOne from "../components/layouts/LayoutOne";
import Banners from "../components/shop/Banners";
import ShopLayout from "../components/shop/ShopLayout";
import productData from "../data/product.json";
import useProductData from "../common/useProductData";
const Home = () =>{
  const globalState = useSelector((state) => state.globalReducer);
  const data = useProductData(
    productData,
    globalState.category,
    router.query.q
  );
  return (
    <LayoutOne title="Home">
            <Banners />
     <ShopLayout
        fiveColumn
        shopSidebarResponsive={{ xs: 24, lg: 4 }}
        shopContentResponsive={{ xs: 24, lg: 20 }}
        productResponsive={{ xs: 12, sm: 8, md: 6 }}
        productPerPage={15}
        data={[...data]}
      />
      </LayoutOne>
  );
};
export default Home;
