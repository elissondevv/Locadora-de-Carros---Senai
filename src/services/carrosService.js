import carros from "../data/carros.json";

export async function buscarCarros() {
  try {
    return carros;
  } catch (error) {
    console.error("Erro ao buscar carros:", error);
    throw new Error("Não foi possível carregar os carros.");
  }
}

export async function buscarCarroPorId(id) {
  try {
    const carro = carros.find((carro) => carro.id === Number(id));

    if (!carro) {
      throw new Error("Carro não encontrado.");
    }

    return carro;
  } catch (error) {
    console.error("Erro ao buscar carro:", error);
    throw new Error("Não foi possível encontrar o carro.");
  }
}