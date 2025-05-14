import { useState, useEffect } from 'react';
import './styles.css';

const mensagens = [
  'Olá, leãozinho!!',
  'É seu aniversário de... 20 anos, certo?',
  'Tenho algo especial para você... 💖',
  'Está preparada?'
];

function App() {
  const [texto, setTexto] = useState('');
  const [indiceMensagem, setIndiceMensagem] = useState(0);
  const [indiceLetra, setIndiceLetra] = useState(0);
  const [digitando, setDigitando] = useState(true);

  const [mostrarConteudo, setMostrarConteudo] = useState(false);

  useEffect(() => {
    if (digitando && indiceMensagem < mensagens.length) {
      const timeout = setTimeout(() => {
        const mensagemAtual = mensagens[indiceMensagem];
        setTexto(prev => prev + mensagemAtual[indiceLetra]);
        setIndiceLetra(indiceLetra + 1);

        if (indiceLetra + 1 >= mensagemAtual.length) {
          setDigitando(false);
        }
      }, 80);

      return () => clearTimeout(timeout);
    } else if (!digitando && indiceMensagem < mensagens.length - 1) {
      const pausa = setTimeout(() => {
        setIndiceMensagem(indiceMensagem + 1);
        setIndiceLetra(0);
        setTexto('');
        setDigitando(true);
      }, 2000);

      return () => clearTimeout(pausa);
    } else if (!digitando && indiceMensagem === mensagens.length - 1) {
      const fim = setTimeout(() => setMostrarConteudo(true), 2000);
      return () => clearTimeout(fim);
    }
  }, [digitando, indiceMensagem, indiceLetra]);

  return (
    <div className="app-container">
      {!mostrarConteudo ? (
        <div className="tela-inicial">
          <p className="digitando">{texto}<span className="cursor">|</span></p>
        </div>
      ) : (
        <div className="conteudo-principal fade-in">
          <h1>🎉 Feliz Aniversário, Meu Amor! 🎉</h1>
          <p>Você é a luz da minha vida e hoje comemoramos o seu dia! 💖</p>
          <div className="decoracao">
            <span className="balao">🎈</span>
            <span className="coraçao">❤️</span>
            <span className="balao">🎈</span>
          </div>
          <button className="botao-celebrar">Celebrar!</button>
        </div>
      )}
    </div>
  );
}

export default App;
