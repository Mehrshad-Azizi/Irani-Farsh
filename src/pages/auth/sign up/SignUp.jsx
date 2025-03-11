import Img19 from "../../../images/img-19.webp";
import SignUpForm from "./SignUp.Form";
import "../styles/auth.css";

const SignUp = () => {
  return (
    <div id="auth">
      <SignUpForm />
      <div className="auth_image">
        <img src={Img19} alt="" />
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default SignUp;
