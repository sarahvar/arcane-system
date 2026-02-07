import { Routes, Route } from "react-router-dom";
import Home from "./routes/home.jsx";
import Jinx from "./routes/jinx.jsx";
import Vi from "./routes/vi.jsx";

export default function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jinx" element={<Jinx />} />
      <Route path="/vi" element={<Vi/>} />
    </Routes>
  );
}