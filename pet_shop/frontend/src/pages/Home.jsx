import Navbar from "../components/Navbar";
import ProductSlider from "../components/ProductSlider";
import Sections from "../components/Sections";
import RecommendedProducts from "../components/RecommendedProducts";
import DiscountedProducts from "../components/DiscountedProducts";
import Info from "../components/info";

function Home() {

  return (
    <div>
      <Navbar />
      <ProductSlider />
      <Sections />
      <RecommendedProducts />
      <DiscountedProducts />
      <Info />
    </div>
     
  );
}

export default Home;