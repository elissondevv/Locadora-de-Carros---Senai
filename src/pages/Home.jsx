import { useEffect, useState } from "react";
import CardCarro from "../components/CardCarro";
import { buscarCarros } from "../services/carrosService";

function Home() {
  const [carros, setCarros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarCarros() {
      try {
        setLoading(true);
        setErro(null);

        const dados = await buscarCarros();

        setCarros(dados);
      } catch (error) {
        console.error(error);
        setErro("Não foi possível carregar os carros.");
      } finally {
        setLoading(false);
      }
    }

    carregarCarros();
  }, []);

  if (loading) {
    return (
      <div className="home">
        <h1>Carros disponíveis</h1>
        <p>Carregando carros...</p>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="home">
        <h1>Carros disponíveis</h1>
        <p>{erro}</p>
      </div>
    );
  }

  return (
    <main className="home">
      <h1>Carros disponíveis</h1>

      <div className="lista-carros">
        {carros.map((carro) => (
          <CardCarro key={carro.id} carro={carro} />
        ))}
      </div>
    </main>
  );
}

export default Home;
