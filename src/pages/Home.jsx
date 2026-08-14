import CardCarro from "../components/CardCarro";
import { carros } from "../data/carros";

function Home() {
  return (
    <div
      style={{
        padding: "40px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "8px" }}>
        🚗 Locadora de Carros
      </h1>

      <p style={{ marginBottom: "40px" }}>
        Escolha o carro ideal para sua viagem
      </p>

      <div
        style={{
          display: "flex",
          gap: "24px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {carros.map((carro) => (
          <CardCarro
            key={carro.id}
            id={carro.id}
            marca={carro.marca}
            modelo={carro.modelo}
            ano={carro.ano}
            categoria={carro.categoria}
            imagem={carro.imagem}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;