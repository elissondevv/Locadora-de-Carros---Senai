import { Link } from "react-router-dom";

function CardCarro({ id, marca, modelo, ano, categoria, imagem }) {
  return (
    <div className="card-carro">
      <img
        src={imagem}
        alt={`Imagem do carro ${marca} ${modelo}`}
        className="card-imagem"
      />

      <h3 className="card-titulo">
        {marca} {modelo}
      </h3>

      <p className="card-detalhe">
        <strong>Ano:</strong> {ano}
      </p>

      <p className="card-detalhe">
        <strong>Categoria:</strong> {categoria}
      </p>

      <Link to={`/carro/${id}`} className="btn-detalhes">
        Ver Detalhes
      </Link>
    </div>
  );
}

export default CardCarro;