import { useLayoutEffect, type RefObject } from 'react';
import gsap from 'gsap';

// Define the shape of the objects our hook will accept
interface ParallaxTarget {
  ref: RefObject<HTMLElement | null>;
  strength: number; // A multiplier for the parallax effect
}

interface UseMouseParallaxProps {
  targets: ParallaxTarget[];
}
const useMouseParallax = ({ targets }: UseMouseParallaxProps) => {
  useLayoutEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      // Normalize mouse position to a range of -0.5 to 0.5
      const x = clientX / window.innerWidth - 0.5;
      const y = clientY / window.innerHeight - 0.5;

      // Animate each target based on its strength
      targets.forEach(target => {
        if (target.ref.current) {
          gsap.to(target.ref.current, {
            x: x * target.strength,
            y: y * target.strength * 0.7, // Apply a slightly smaller effect on the Y-axis
            ease: 'power1.out',
            duration: 1,
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [targets]); // Rerun the effect if the targets array changes
};

export default useMouseParallax;
