/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const SceneContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #1a1a1a;
`;

export const PortalWrapper = styled.div`
  grid-area: 1 / 1;

  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;

  z-index: 5;
`;

export const WakandaWall = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 110%;
  height: 110%;
  top: -5%;
  left: -5%;
  background-image: url('src/assets/images/wakanda-wall-texture.png');
  background-size: cover;
  background-position: center;
  z-index: 10;
`;

export const DoorContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DoorBase = styled.div`
  width: 20vw;
  height: 110%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LeftDoor = styled(DoorBase)`
  background-image: url('src/assets/images/left-door.png');
`;

export const RightDoor = styled(DoorBase)`
  background-image: url('src/assets/images/right-door.png');
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-25%);
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 35vh;
  transform: translateY(120%);
`;

export const Title = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 8vw;
  letter-spacing: 0.5rem;
  text-shadow: 0 0 15px #00ff9b;
`;

export const EnterButton = styled.button`
  background: transparent;
  border: 1px solid #00ff9b;
  color: #00ff9b;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00ff9b22;
    box-shadow: 0 0 15px #00ff9b;
  }
`;
