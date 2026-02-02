import { Routes, Route } from "react-router-dom";
import Home from "./routes/home.jsx";
import Jinx from "./routes/jinx.jsx";

export default function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jinx" element={<Jinx />} />
    </Routes>
  );
}