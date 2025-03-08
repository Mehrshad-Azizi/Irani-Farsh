import { categories } from "../../data/data";
import { productGrid } from "../../data/data";
import HomeHero from "./Home.Hero";
import HomeCategories from "./Home.Categories";
import ProductGrid from "../../components/ProductGrid";
import "../styles/home.css";
import HomeMembership from "./Home.Membership";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeCategories categories={categories[0]} />
      <ProductGrid
        title={productGrid[0].title}
        data={productGrid[0].products}
      />
      <HomeCategories categories={categories[1]} />
      <ProductGrid
        title={productGrid[1].title}
        data={productGrid[1].products}
      />
      <HomeMembership />
    </>
  );
};

export default Home;
