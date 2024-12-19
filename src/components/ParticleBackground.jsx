import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Text, Center, Text3D } from '@react-three/drei';

import Particles from './Particles'; // Ensure correct path

const ParticleBackground = () => {
  return (
    <section className=' relative overflow-hidden min-h-screen flex items-center h-[1vh]'>
        <Canvas
        camera={{ position: [0, 0, 5] }} // Camera position
        className="fixed top-0 left-0 w-full  -z-10 bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 "
        >
        {/* Ambient light for soft illumination */}
        <ambientLight intensity={0.2} />

        {/* Particle system */}
        <Particles />

        {/* Text */}
        <Text color={"#66CCCC"} fontSize={1} anchorX="center" anchorY="bottom">
          David Viers
        </Text>
        <Text color={"white"} fontSize={0.3} anchorX="center" anchorY="bottom"  position={[0,-0.5, 1]}>
          Software Developer
        </Text>
        <Text color={"white"} fontSize={0.23} anchorX="center" anchorY="bottom"  position={[0,-1.5, 0]}>
          Hey, I'm David! A Web Developer Crafting Cool, User-Friendly Projects with React, Node.js, and more
        </Text>

        </Canvas>
    </section>
  );
};

export default ParticleBackground;


