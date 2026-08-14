import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { buscarCarroPorId } from "../services/carrosService";

function DetalhesCarro() {
  const { id } = useParams();

  const [carro, setCarro] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarCarro() {
      try {
        setLoading(true);
        setErro(null);

        const numeroId = Number(id);

        if (!id || !Number.isInteger(numeroId) || numeroId <= 0) {
          setErro("ID do carro inválido.");
          return;
        }

        const carroEncontrado = await buscarCarroPorId(numeroId);

        if (!carroEncontrado) {
          setErro("Carro não encontrado.");
          return;
        }

        setCarro(carroEncontrado);
      } catch (error) {
        console.error(error);
        setErro("Não foi possível carregar os dados do carro.");
      } finally {
        setLoading(false);
      }
    }

    carregarCarro();
  }, [id]);

  // Carregando
  if (loading) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <p>Carregando informações do carro...</p>
      </div>
    );
  }

  // Erro
  if (erro) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>❌ {erro}</h2>

        <Link to="/carros" className="btn-voltar">
          Voltar para a lista
        </Link>
      </div>
    );
  }

  // Segurança caso não exista carro
  if (!carro) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>❌ Carro não encontrado!</h2>

        <Link to="/carros" className="btn-voltar">
          Voltar para a lista
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "40px 20px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <Link to="/carros" className="btn-voltar">
        ← Voltar para a lista
      </Link>

      <div
        style={{
          display: "flex",
          gap: "30px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <img
          src={carro.imagem}
          alt={`${carro.marca} ${carro.modelo}`}
          style={{
            width: "400px",
            maxWidth: "100%",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            flex: 1,
            minWidth: "300px",
          }}
        >
          <h1
            style={{
              margin: "0 0 10px 0",
              fontSize: "2.5rem",
            }}
          >
            {carro.marca} {carro.modelo}
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              margin: "0 0 20px 0",
            }}
          >
            {carro.ano} • {carro.categoria}
          </p>

          <h2
            style={{
              fontSize: "1.4rem",
              borderBottom: "1px solid #202024",
              paddingBottom: "8px",
            }}
          >
            Informações do veículo
          </h2>

          <p>
            <strong>Marca:</strong> {carro.marca}
          </p>

          <p>
            <strong>Modelo:</strong> {carro.modelo}
          </p>

          <p>
            <strong>Ano:</strong> {carro.ano}
          </p>

          <p>
            <strong>Categoria:</strong> {carro.categoria}
          </p>

          <button
            type="button"
            style={{
              marginTop: "20px",
              padding: "12px 24px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Alugar carro
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetalhesCarro;