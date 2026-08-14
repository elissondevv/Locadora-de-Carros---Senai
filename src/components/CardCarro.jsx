// src/components/CardFilme.jsx
import { Link } from 'react-router-dom';

// Adicionamos a propriedade 'id' nas props recebidas
function CardFilme({ id, titulo, diretor, ano, imagem }) {
  return (
    <div className="card-filme">
      <img src={imagem} alt={`Capa do filme ${titulo}`} className="card-imagem" />
      <h3 className="card-titulo">{titulo}</h3>
      <p className="card-detalhe"><strong>Diretor:</strong> {diretor}</p>
      <p className="card-detalhe"><strong>Ano:</strong> {ano}</p>
      
      {/* Link direcionando para a rota de detalhes usando o id do filme */}
      <Link to={`/filme/${id}`} className="btn-detalhes">
        Ver Detalhes
      </Link>
    </div>
  );
}

export default CardFilme;