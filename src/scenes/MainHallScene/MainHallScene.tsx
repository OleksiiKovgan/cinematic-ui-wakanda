import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Background,
  Particles,
  PinContainer,
  SceneContainer,
  TextContainer,
  TextSection,
  Tree,
} from './MainHallScene.styled';
import { useMouseParallax } from '../../hooks';

gsap.registerPlugin(ScrollTrigger);

const MainHallScene = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const treeRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const textContainerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLParagraphElement>(null);
  const text2Ref = useRef<HTMLParagraphElement>(null);
  const text3Ref = useRef<HTMLParagraphElement>(null);

  useMouseParallax({
    targets: [
      { ref: backgroundRef, strength: -50 },
      { ref: treeRef, strength: -20 },
      { ref: particlesRef, strength: 30 },
      { ref: textContainerRef, strength: 40 },
    ],
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states - everything starts hidden except the background
      gsap.set(treeRef.current, { opacity: 0, scale: 0.5 });
      gsap.set([text1Ref.current, text2Ref.current, text3Ref.current], {
        opacity: 0,
        y: 50,
      });

      // MASTER TIMELINE
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sceneRef.current,
          pin: pinRef.current,
          scrub: 1,
          start: 'top top',
          end: 'bottom bottom',
        },
      });

      // --- Animation Sequence ---

      // 1 The Full Panoramic Sweep (Duration: 5 parts)
      tl.to(
        backgroundRef.current,
        {
          xPercent: -66.66,
          scale: 1.2,
          duration: 5,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: 1,
        },
        0
      );
      tl.to(
        particlesRef.current,
        {
          xPercent: -15,
          scale: 1,
          opacity: 0.6,
          duration: 5,
        },
        0
      );

      // 2 Reveal Text Sections one-by-one during the pan

      // Text Section 1
      tl.to(text1Ref.current, { opacity: 1, y: 0, duration: 1 }, 1);
      tl.to(text1Ref.current, { opacity: 0, y: -50, duration: 1 }, 3);

      // Text Section 2
      tl.to(text2Ref.current, { opacity: 1, y: 0, duration: 1 }, 4);
      tl.to(text2Ref.current, { opacity: 0, y: -50, duration: 1 }, 6);

      // Text Section 3
      tl.to(text3Ref.current, { opacity: 1, y: 0, duration: 1 }, 7);
      tl.to(text3Ref.current, { opacity: 0, y: -50, duration: 1 }, 9);

      // 3 The Tree Focus (Starts at the end of the timeline)
      tl.to(
        backgroundRef.current,
        { opacity: 0.4, scale: 1.3, duration: 2 },
        '>'
      );
      tl.to(particlesRef.current, { opacity: 0, duration: 2 }, '<');
      tl.to(treeRef.current, { opacity: 1, scale: 1.2, duration: 2.5 }, '<');
    }, sceneRef);

    return () => ctx.revert();
  }, []);

  return (
    <SceneContainer ref={sceneRef}>
      <PinContainer ref={pinRef}>
        <Background ref={backgroundRef} />
        <Tree ref={treeRef} />
        <Particles ref={particlesRef} />
        <TextContainer ref={textContainerRef}>
          <TextSection ref={text1Ref}>
            {`ORIGIN STORIES \n find your inspiration`}
          </TextSection>
          <TextSection ref={text2Ref}>
            {`INSPIRATION GARDEN \n where ingenuity overflows`}
          </TextSection>
          <TextSection ref={text3Ref}>
            {`THE LIBRARY \n more help finding your gifts`}
          </TextSection>
        </TextContainer>
      </PinContainer>
    </SceneContainer>
  );
};

export default MainHallScene;
