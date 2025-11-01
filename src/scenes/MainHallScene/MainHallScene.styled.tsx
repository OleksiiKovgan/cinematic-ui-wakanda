/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const SceneContainer = styled.div`
  height: 800vh;
  position: relative;
  overflow: hidden;
  background-color: #1a1a1a;
`;

export const PinContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: sticky;
  top: 0;
  overflow: hidden;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300%;
  height: 110%;
  background-image: url('/assets/images/wakanda-hall-background.jpg');
  background-size: cover;
  z-index: 1;
`;

export const Tree = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/assets/images/hall-tree.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10;
  transform-origin: center center;
`;

export const Particles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('assets/images/particles.png');
  background-size: cover;
  background-position: center;
  z-index: 20;
  pointer-events: none;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

export const TextSection = styled.p`
  position: absolute;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 4vw;
  letter-spacing: 0.25rem;
  text-shadow: 0 0 15px #00ff9b;
  color: #000000ff;
  max-width: 50%;
  text-align: center;
  pointer-events: auto;
  opacity: 0;
  white-space: pre-wrap;
`;
