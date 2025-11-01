import { useRef } from 'react';
import gsap from 'gsap';
import {
  ButtonContainer,
  DoorContainer,
  EnterButton,
  LeftDoor,
  RightDoor,
  SceneContainer,
  TextContainer,
  Title,
  WakandaWall,
} from './IntroScene.styled';
import { useMouseParallax } from '../../hooks';

interface IntroSceneProps {
  onEnter: () => void;
}

const IntroScene = ({ onEnter }: IntroSceneProps) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const wallRef = useRef<HTMLDivElement>(null);
  const doorsRef = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const leftDoorRef = useRef<HTMLDivElement>(null);
  const rightDoorRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useMouseParallax({
    targets: [
      { ref: wallRef, strength: -50 },
      { ref: doorsRef, strength: -50 },
      { ref: titleContainerRef, strength: 15 },
      { ref: buttonContainerRef, strength: 20 },
    ],
  });

  const handleEnterClick = () => {
    const tl = gsap.timeline({ onComplete: onEnter });
    gsap.set(buttonRef.current, { pointerEvents: 'none' });

    // 1. Fade out the text and button
    tl.to([titleRef.current, buttonRef.current], {
      opacity: 0,
      duration: 0.75,
      ease: 'power2.in',
    });

    // 2. CAMERA PUSH towards the portal by scaling the wall and doors together.
    tl.to(
      [wallRef.current, doorsRef.current],
      {
        scale: 2.5,
        duration: 2,
        ease: 'power2.inOut',
      },
      '<'
    );

    // 3. Open the doors during the push-in
    tl.to(
      leftDoorRef.current,
      { xPercent: -100, duration: 1.5, ease: 'power3.in' },
      '-=1.2'
    );
    tl.to(
      rightDoorRef.current,
      { xPercent: 100, duration: 1.5, ease: 'power3.in' },
      '<'
    );

    // "Fly Through". After the doors open, continue scaling and fade out the portal.
    tl.to(
      [wallRef.current, doorsRef.current],
      {
        opacity: 0,
        scale: 4,
        duration: 1,
        ease: 'power2.in',
      },
      '>-1'
    );
  };

  return (
    <SceneContainer ref={sceneRef}>
      <WakandaWall ref={wallRef} />

      <DoorContainer ref={doorsRef}>
        <LeftDoor ref={leftDoorRef} />
        <RightDoor ref={rightDoorRef} />
      </DoorContainer>

      <TextContainer ref={titleContainerRef}>
        <Title ref={titleRef}>The Hall of Zero</Title>
      </TextContainer>

      <ButtonContainer ref={buttonContainerRef}>
        <EnterButton onClick={handleEnterClick} ref={buttonRef}>
          ENTER
        </EnterButton>
      </ButtonContainer>
    </SceneContainer>
  );
};

export default IntroScene;
