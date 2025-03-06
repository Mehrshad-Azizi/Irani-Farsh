import HomeHero from "./Home.Hero";
import HomeCategories from "./Home.Categories";
import { categories } from "../../data/data";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeCategories categories={categories} />
    </>
  );
};

export default Home;
