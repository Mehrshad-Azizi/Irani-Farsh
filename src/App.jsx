import { Routes, Route } from "react-router";
import HomePageLayout from "./layouts/HomePageLayout";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePageLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
