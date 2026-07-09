import { BrowserRouter, Routes, Route } from "react-router-dom";

import OptionsInicial from "./components/OptionsInicial";
import Navbar from "./components/Navbar";
import NavbarFilmes from "./components/NavbarFilmes";
import NavbarSeries from "./components/NavbarSeries";
import Card from "./components/Card";
import Home from "./pages/Home";
import Filmes from "./pages/Filmes";
import Series from "./pages/Series";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Filmes />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </BrowserRouter>
  );
}
