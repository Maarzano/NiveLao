import styled, { keyframes, css } from "styled-components";

// Animação da aba abrindo
const flapOpen = keyframes`
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(-140deg);
  }
`;

// Animação da carta saindo
const cartaSlide = keyframes`
  0% {
    transform: translateY(100%) scale(0.9);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`;

export const CartaWrapper = styled.div`
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
  perspective: 1200px;
  cursor: pointer;
  position: relative;
`;

export const EnvelopeBase = styled.div`
  width: 100%;
  background: #111;
  border: 2px solid #e91e63;
  border-radius: 10px;
  height: 220px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(233, 30, 99, 0.3);
`;

export const EnvelopeFlap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110px;
  background: #e91e63;
  clip-path: polygon(0 0, 50% 100%, 100% 0);
  transform-origin: top;
  z-index: 3;

  ${({ aberta }) =>
    aberta &&
    css`
      animation: ${flapOpen} 0.7s forwards ease-in-out;
    `}
`;

export const CartaInterior = styled.div`
  position: absolute;
  top: 15%;
  left: 5%;
  width: 90%;
  background: #fffdfc;
  color: #111;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  z-index: 2;
  transform: translateY(100%);
  opacity: 0;
  height: 95%;

  ${({ aberta }) =>
    aberta &&
    css`
      animation: ${cartaSlide} 1s ease-out forwards;
      animation-delay: 0.4s;
    `}
`;

export const Mensagem = styled.p`
  font-family: 'Georgia', serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #d81b60;
  white-space: pre-line;
  text-align: justify;
`;
