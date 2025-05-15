import styled from 'styled-components';

const SpotifyEmbed = styled.iframe`
  border-radius: 16px;
  border: none;
  width: 340px;
  max-width: 90vw;
  height: 100px;
`;

const SpotifyCard = () => (
    <SpotifyEmbed
      src="https://open.spotify.com/embed/track/74wySERHHxB8Ul9A0CNBla?utm_source=generator"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Lay All Your Love on Me - Mamma Mia"
    />
);

export default SpotifyCard;
