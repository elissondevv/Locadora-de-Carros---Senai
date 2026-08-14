// src/pages/DetalhesFilme.jsx
import { useParams, Link } from 'react-router-dom';
import { filmes } from '../data/filmes';

function DetalhesFilme() {
  // O useParams captura o parâmetro dinâmico configurado na rota (/filme/:id)
  const { id } = useParams();
  
  // Como o ID capturado do navegador vem como string, precisamos converter para Number
  // e buscar o filme correspondente em nossa lista
  const filme = filmes.find(f => f.id === Number(id));

  // Caso o usuário digite um ID na URL que não exista em nossa lista
  if (!filme) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>❌ Filme não encontrado!</h2>
        <Link to="/" className="btn-voltar">Voltar para a lista</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/" className="btn-voltar">← Voltar para a Home</Link>
      
      <div style={{ display: 'flex', gap: '30px', marginTop: '30px', flexWrap: 'wrap' }}>
        <img 
          src={filme.imagem} 
          alt={`Capa do filme ${filme.titulo}`} 
          style={{ width: '300px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.5)' }} 
        />
        
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h1 style={{ margin: '0 0 10px 0', fontSize: '2.5rem' }}>{filme.titulo}</h1>
          <p style={{ color: '#8257e5', fontSize: '1.2rem', fontWeight: 'bold', margin: '0 0 20px 0' }}>
            {filme.ano} • Direção: {filme.diretor}
          </p>
          
          <h2 style={{ fontSize: '1.4rem', borderBottom: '1px solid #202024', paddingBottom: '8px' }}>Sinopse</h2>
          <p style={{ lineHeight: '1.6', color: '#c4c4cc' }}>{filme.sinopse}</p>
        </div>
      </div>
    </div>
  );
}

export default DetalhesFilme;