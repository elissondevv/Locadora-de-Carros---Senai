import { Link } from "react-router-dom";

function CardCarro({ carro }) {
  return (
    <div className="card-carro">
      <img
        src={carro.imagem}
        alt={`${carro.marca} ${carro.modelo}`}
        className="card-imagem"
      />

      <h3 className="card-titulo">
        {carro.marca} {carro.modelo}
      </h3>

      <p className="card-detalhe">
        <strong>Ano:</strong> {carro.ano}
      </p>

      <p className="card-detalhe">
        <strong>Categoria:</strong> {carro.categoria}
      </p>

      <Link to={`/carro/${carro.id}`} className="btn-detalhes">
        Ver detalhes
      </Link>
    </div>
  );
}

export default CardCarro;