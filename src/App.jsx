import "./index.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DetalhesCarros from "./pages/DetalhesCarros";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carro/:id" element={<DetalhesCarros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;