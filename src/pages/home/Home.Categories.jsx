import { Link } from "react-router";

const HomeCategories = ({ categories }) => {
  const items = categories.map((item) => (
    <div className="home_category" key={item.id}>
      <h2>{item.title}</h2>
      <Link to={item.url} className="button category_link">
        {item.description}
      </Link>
    </div>
  ));

  return (
    <div id="home_categories">
      {items}
    </div>
  );
};

export default HomeCategories;
