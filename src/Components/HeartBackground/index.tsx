import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% {
    transform: translateY(100vh) scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-10vh) scale(1);
    opacity: 0;
  }
`;

const hearts = new Array(20).fill(0).map((_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: Math.random() * 20 + 10,
  delay: Math.random() * 10,
  duration: Math.random() * 10 + 5,
  color: ['#ff4d4d', '#ff7fa8', '#ff1a66'][i % 3],
}));

const Heart = styled.div<{
  left: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}>`
  position: absolute;
  bottom: -20px;
  left: ${(props) => props.left}%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
  opacity: 0.7;
  border-radius: 50% 50% 0 0;
  transform: rotate(45deg);
  animation: ${float} ${(props) => props.duration}s ease-in infinite;
  animation-delay: ${(props) => props.delay}s;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.color};
    border-radius: 50%;
    top: -50%;
    left: 0;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.color};
    border-radius: 50%;
    left: -50%;
    top: 0;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
`;

const HeartsBackground = () => {
  return (
    <Wrapper>
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          left={heart.left}
          size={heart.size}
          delay={heart.delay}
          duration={heart.duration}
          color={heart.color}
        />
      ))}
    </Wrapper>
  );
};

export default HeartsBackground;
