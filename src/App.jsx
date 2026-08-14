import './index.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DetalhesCarros from './pages/DetalhesCarros';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página inicial com a lista de carros */}
        <Route path="/" element={<Home />} />

        {/* Página de detalhes de um carro específico */}
        <Route path="/carro/:id" element={<DetalhesCarros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;