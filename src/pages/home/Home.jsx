import { categories } from "../../data/data";
import { productGrid } from "../../data/data";
import HomeHero from "./Home.Hero";
import HomeCategories from "./Home.Categories";
import ProductGrid from "../../components/ProductGrid";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeCategories categories={categories} />
      <ProductGrid
        title={productGrid[0].title}
        data={productGrid[0].products}
      />
    </>
  );
};

export default Home;
