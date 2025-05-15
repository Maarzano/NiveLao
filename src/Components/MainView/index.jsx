import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import SpotifyCard from '../Cards/SpotifyCard';
import img1 from '../../assets/Images/IMG-1.jpg';
import img2 from '../../assets/Images/IMG-2.jpg';
import img3 from '../../assets/Images/IMG-3.jpg';
import img4 from '../../assets/Images/IMG-4.jpg';
import img5 from '../../assets/Images/IMG-5.jpg';
import img6 from '../../assets/Images/IMG-6.jpg';

const emojis = ['💖', '❤️', '💘', '💕', '💓'];

const subir = keyframes`
  0% {
    transform: translateY(0) scale(1) rotate(0deg);
    opacity: 0.7;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-90vh) scale(1.2) rotate(12deg);
    opacity: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #000;
  color: white;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Carousel = styled.div`
  width: 80%;
  height: 65vh;
  border-radius: 10px;
  margin: 20px 0;
  overflow: hidden;
  position: relative;
`;

const Imagem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
  position: absolute;
  opacity: ${props => (props.active ? 1 : 0)};
`;

const Contador = styled.div`
  margin: 0px 10px;
  font-size: 1rem;
  margin-bottom: 20px;
`;

const Linha = styled.hr`
  width: 80%;
  border: 0.5px solid #444;
  margin: 20px 0;
`;

const TextoFofo = styled.p`
  font-size: 1.2rem;
  text-align: center;
  padding: 0 20px;
  color: #ffc0cb;
  margin-bottom: 25px;
`;

const Footer = styled.footer`
  margin-top: auto;
  padding: 24px 0 12px 0;
  width: 100%;
  text-align: center;
  font-size: 1.08rem;
  color: #ffd6e0;
  letter-spacing: 0.02em;
  background: linear-gradient(90deg,rgb(10, 10, 10) 60%,rgb(33, 1, 39) 100%);
  box-shadow: 0 -2px 16px rgba(5, 75, 29, 0.13);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  position: relative;
`;

const FooterName = styled.span`
  color: #ff4da6;
  font-weight: bold;
  font-size: 1.13rem;
  margin-left: 4px;
`;

const FooterEmoji = styled.span`
  display: inline-block;
  animation: footer-bounce 1.2s infinite alternate;
  margin-right: 6px;
  font-size: 1.3em;
  vertical-align: middle;
  @keyframes footer-bounce {
    0% { transform: translateY(0);}
    100% { transform: translateY(-7px);}
  }
`;

const Emoji = styled.span`
  position: absolute;
  font-size: 1.5rem; // tamanho reduzido
  left: ${({ $left }) => $left}%;
  bottom: -40px;
  animation: ${subir} ${({ $duration }) => $duration}s linear infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  user-select: none;
  pointer-events: none;
  z-index: 2;
`;

const MainView = () => {
  const [index, setIndex] = useState(0);
  const [timeTogether, setTimeTogether] = useState('');

  const fotos = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
  ];

  const dataInicio = new Date('2024-04-19T00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % fotos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function atualizarContador() {
      const agora = new Date();
      const diff = agora - dataInicio;
      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diff / (1000 * 60)) % 60);
      const segundos = Math.floor((diff / 1000) % 60);
      setTimeTogether(
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos juntos 💑`
      );
    }
    atualizarContador();
    const timer = setInterval(atualizarContador, 1000);
    return () => clearInterval(timer);
  }, []);

  const [floatingEmojis] = useState(() =>
    Array.from({ length: 15 }).map((_, i) => ({
      key: i,
      emoji: emojis[i % emojis.length],
      left: Math.random() * 85 + 5,
      duration: 5 + Math.random() * 3,
      delay: Math.random() * 6
    }))
  );

  return (
    <Container>
      {floatingEmojis.map(({ key, emoji, left, duration, delay }) => (
        <Emoji
          key={key}
          $left={left}
          $duration={duration}
          $delay={delay}
        >
          {emoji}
        </Emoji>
      ))}
      <SpotifyCard />
      <Carousel>
        {fotos.map((foto, i) => (
          <Imagem key={i} src={foto} alt={`foto-${i}`} active={i === index} />
        ))}
      </Carousel>
      <Contador>Eu te amo há: <strong>{timeTogether}</strong></Contador>
      <Linha />
      <TextoFofo>
        Leãozinho, você é minha alegria diária. Que nossa história continue doce como este momento. 🦁💗
      </TextoFofo>
      <Footer>
        <FooterEmoji>👼🏼</FooterEmoji>
        Com todo meu amor, seu
        <FooterName>Anjinho</FooterName>
      </Footer>
    </Container>
  );
};

export default MainView;
