import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Particles = () => {
  const pointsRef = useRef();

  const particleCount = 5000;

  // Generate random positions
  const positions = React.useMemo(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10; // Spread particles randomly
    }
    return arr;
  }, []);

  // Rotate particles
  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={particleCount}
          itemSize={3} // x, y, z
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="white" opacity={0.8} transparent />
    </points>
  );
};

export default Particles;
