import { Link } from "react-router";
import img14 from "../../images/img-14.webp";

const HomeMembership = () => {
  return (
    <div id="home_membership">
      <div>
        <h2>
          <span>عضویت در باشگاه مشتریان</span>
          <br />
          <span>ایرانی فرش</span>
        </h2>
        <p>
          با عضویت در باشگاه مشتریان ایرانــی فرش زودتر از تخفیفات با خبر شوید و
          از امکان تحویل رایگان فرش های خود بهره مند شوید.
        </p>
        <Link to="/" className="button">
          ایجاد عضویت
        </Link>
      </div>
      <img src={img14} alt="عضویت در باشگاه مشتریان ایرانی فرش" />
    </div>
  );
};

export default HomeMembership;
