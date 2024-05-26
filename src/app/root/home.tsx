import About from "../../components/about-us";
import Banner from "../../components/home/banner";
import Blogs from "../../components/home/blogs";
import Brands from "../../components/home/brands";
import Products from "../../components/home/products";
import PromotionalBanner from "../../components/home/promotional-banner";

export default function Home() {
  return (
    <div>
      <Banner />
      <Brands />
      <Products />
      <PromotionalBanner />
      <Blogs />
      <About />
    </div>
  );
}
