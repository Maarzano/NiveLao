import React, { useState } from "react";
import {
  CartaWrapper,
  EnvelopeBase,
  EnvelopeFlap,
  CartaInterior,
  Mensagem
} from "./styles";

const mensagemPartes = [
  `Minha Leãozinho,\n\nHoje é o dia em que o mundo ganhou um presente precioso há 20 anos...`,
  `E eu tenho a sorte imensa de poder chamar esse presente de minha namorada.`,

  `Patrícia, minha delícia, minha mulher mais linda, mais gostosa e mais cintilante deste mundo inteiro...`,
  `Parabéns pelo seu dia! Eu, o seu Anjinho, tô aqui transbordando de amor e gratidão por ter você na minha vida.`,

  `Desde o 3º ano do ensino médio no Tiradentes, quando nos conhecemos, passamos por poucas e boas juntos.`,
  `Vivemos momentos difíceis, sim... mas também construímos memórias lindas, risadas sinceras e um amor que cresce a cada dia.`,

  `Você é única.`,
  `Tem esse brilho forte que me guia, essa presença quente que me acalma, esse sorriso que me desmonta...`,
  `E só de te olhar, eu vejo o meu futuro.`,

  `Eu te chalmo de um jeito que não cabe nas palavras.`,
  `É minha alma gritando pela tua, pedindo pra estar perto, pra cuidar, pra amar, pra dividir a vida.`,

  `Sei que hoje ainda temos que lidar com a distância, com os finais de semana curtos, com as saudades que apertam...`,
  `Mas também sei que tudo isso vai passar.`,

  `Vai chegar o dia em que a gente vai acordar juntinhos, sem hora pra ir embora, sem ter que esperar o próximo fim de semana.`,
  `Só eu, você, nossa casa, nossos sonhos e a certeza de que tudo valeu a pena.`,

  `Eu olho pra você e vejo tudo que sempre sonhei.`,
  `Vejo amor, vejo força, vejo carinho, vejo futuro.`,

  `Você me inspira a ser melhor.`,
  `Me faz querer vencer na vida só pra te dar o melhor de mim, todos os dias.`,

  `Feliz aniversário, minha linda.`,
  `Que esse novo ciclo traga ainda mais brilho pro seu olhar, mais paz pro seu coração e mais momentos lindos pra nossa história.`,

  `Você merece o mundo, e eu vou lutar todos os dias pra te dar ele.`,

  `Te chalmo com tudo que sou,\nSeu Anjinho 💌`
];

const LetterLove = () => {
  const [aberta, setAberta] = useState(false);
  const [indiceMensagem, setIndiceMensagem] = useState(0);

  const handleClick = () => {
    if (!aberta) {
      // Abre a carta e começa pela primeira mensagem
      setAberta(true);
      setIndiceMensagem(0);
    } else if (indiceMensagem < mensagemPartes.length - 1) {
      // Avança para a próxima mensagem
      setIndiceMensagem(indiceMensagem + 1);
    } else {
      // Última mensagem: fecha a carta e reseta o índice
      setAberta(false);
      setIndiceMensagem(0);
    }
  };

  return (
    <CartaWrapper onClick={handleClick} aria-label="Carta de amor interativa">
      <EnvelopeBase>
        <EnvelopeFlap aberta={aberta} />
        <CartaInterior aberta={aberta}>
          <Mensagem>{mensagemPartes[indiceMensagem]}</Mensagem>
        </CartaInterior>
      </EnvelopeBase>
    </CartaWrapper>
  );
};

export default LetterLove;
