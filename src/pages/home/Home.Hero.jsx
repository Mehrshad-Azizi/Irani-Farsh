import { Link } from "react-router";
import img1 from "../../images/img-1.webp";

const HomeHero = () => {
  return (
    <div id="hero">
      <div>
        <h1 className="hero_title">
          <span>خرید راحت فرش، در</span>
          <span>ایرانی فرش</span>
        </h1>

        <p className="hero_description">
          با ایرانی فرش در سریع ترین زمان ممکن فرش خودت رو سفارش بده و از تنوع
          بی نظیر فرش ها لذت ببر.
        </p>

        <div className="hero_btns">
          <Link to="/" className="button">
            محصولات ویژه ایرانی فرش
          </Link>
          <Link to="/" className="button">
            عضویت در باشگاه مشتریان
          </Link>
        </div>
      </div>
      <div>
        <img src={img1} alt="hero section image" />
      </div>
    </div>
  );
};

export default HomeHero;
