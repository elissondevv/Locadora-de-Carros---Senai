import { useEffect, useState } from "react";
import CardCarro from "../components/CardCarro";
import { carros } from "../data/carros";

function Home() {
  const [carrosLista, setCarrosLista] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      setErro(null);

      setCarrosLista(carros);
    } catch (error) {
      console.error(error);
      setErro("Não foi possível carregar os carros.");
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="home">
        <h1>Locadora de Carros</h1>
        <p>Carregando carros...</p>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="home">
        <h1>Locadora de Carros</h1>
        <p>{erro}</p>
      </div>
    );
  }

  return (
    <main className="home">
      <h1>Locadora de Carros </h1>

      <div className="lista-carros">
        {carrosLista.map((carro) => (
          <CardCarro key={carro.id} carro={carro} />
        ))}
      </div>
    </main>
  );
}

export default Home;