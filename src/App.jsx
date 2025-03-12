import { Routes, Route } from "react-router";
import HomePageLayout from "./layouts/HomePageLayout";
import Home from "./pages/home/Home";
import SignUp from "./pages/auth/sign up/SignUp";
import Login from "./pages/auth/login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePageLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
