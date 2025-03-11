import { Routes, Route } from "react-router";
import HomePageLayout from "./layouts/HomePageLayout";
import Home from "./pages/home/Home";
import SignUp from "./pages/auth/sign up/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePageLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
