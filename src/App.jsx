// src/App.jsx
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/ListaCarros';
import DetalhesFilme from './pages/DetalhesCarros';

function App() {
  return (
    // BrowserRouter indica que usaremos o histórico do navegador para navegação de rotas
    <BrowserRouter>
      <Routes>
        {/* Define a rota '/' para renderizar a página Home */}
        <Route path="/" element={<Home />} />
        
        {/* Define a rota '/filme/:id' para a página Detalhes. O ':id' é um parâmetro dinâmico na URL */}
        <Route path="/filme/:id" element={<DetalhesFilme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;