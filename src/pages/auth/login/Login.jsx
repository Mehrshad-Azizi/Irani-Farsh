import Img19 from "../../../images/img-19.webp";
import LoginForn from "./Login.Forn";
import "../styles/auth.css";

const Login = () => {
  return (
    <div id="auth">
      <LoginForn />
      <div className="auth_image">
        <img src={Img19} alt="" />
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default Login;
