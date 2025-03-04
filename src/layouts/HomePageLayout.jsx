import { Outlet } from "react-router";
import Header from "./header/Header";

const HomePageLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default HomePageLayout;
