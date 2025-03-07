import { Link } from "react-router";
import Icon from "./Icon";
import "./styles/productgrid.css";

const ProductGrid = ({ title, data }) => {
  const items = data.map((item) => (
    <div key={item.id} className="grid_item">
      <img src={item.img} />
      <h2>{item.title}</h2>
      <div>
        <p>قیمت</p>
        <p>{item.price} تومان</p>
      </div>
      <Link to="/" className="button">
        مشاهده بیشتر
      </Link>
    </div>
  ));

  return (
    <div id="grid">
      <div className="grid_header">
        <h2>{title}</h2>
        <Link to="/" className="button">
          مشاهده همه
          <Icon
            viewBox="0 0 24 24"
            path="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
          />
        </Link>
      </div>
      <div className="product_grid">{items}</div>
    </div>
  );
};

export default ProductGrid;
