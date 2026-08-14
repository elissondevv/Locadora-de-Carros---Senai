// src/pages/Home.jsx
import CardFilme from '../components/CardFilme';
import { filmes } from '../data/filmes';

function Home() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🎬 CineTec</h1>
      <p style={{ color: '#a8a8b3', marginBottom: '40px' }}>Seu catálogo técnico de cinema e referências de ficção científica.</p>
      
      <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* Usamos o método map do JavaScript para varrer a lista de filmes e gerar um componente para cada um */}
        {filmes.map((filme) => (
          <CardFilme 
            key={filme.id} // É obrigatório passar uma prop única chamada 'key' no React quando geramos listas
            id={filme.id}
            titulo={filme.titulo}
            diretor={filme.diretor}
            ano={filme.ano}
            imagem={filme.imagem}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;