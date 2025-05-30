import { useState, useEffect } from 'react';
import './styles.css';
import MainView from '../../Components/MainView';

const mensagens = [
  'Olá, leãozinho!!',
  'É seu aniversário de... 20 anos, certo?',
  'Tenho algo especial para você... 💖',
  'É algo simples mas foi feito com muito amor e carinho...',
  'Está preparada?',
  'Espero que goste meu amor...',
  '3',
  '2',
  '1',
];

function App() {
  const [texto, setTexto] = useState('');
  const [indiceMensagem, setIndiceMensagem] = useState(0);
  const [indiceLetra, setIndiceLetra] = useState(0);
  const [digitando, setDigitando] = useState(true);
  const [mostrarConteudo, setMostrarConteudo] = useState(false);
  const [celebrar, setCelebrar] = useState(false);

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

  if (celebrar) return <MainView />;

  return (
    <div className="app-container">
      {!mostrarConteudo ? (
        <div className="tela-inicial">
          {/* Emoji de leão animado */}
          <span
            style={{
              fontSize: '3.2rem',
              display: 'block',
              marginBottom: '18px',
              animation: 'lion-bounce 1.2s infinite alternate'
            }}
            role="img"
            aria-label="leão"
          >
            🦁
          </span>
          <p className="digitando">{texto}<span className="cursor"> </span></p>
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
          {/* Botão com efeito de brilho/pulso */}
          <button
            className="botao-celebrar botao-celebrar-animado"
            onClick={() => setCelebrar(true)}
          >
            Celebrar!
          </button>
          {/* Mensagem carinhosa abaixo do botão */}
          <div
            style={{
              marginTop: '18px',
              color: '#ffb347',
              fontWeight: 'bold',
              fontSize: '1.08rem',
              textShadow: '0 0 8px #ffb34788'
            }}
          >
            Te amo, Leãozinho! Que seu dia seja mágico! 🦁✨
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
