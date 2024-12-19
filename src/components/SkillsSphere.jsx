"use client";

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Html, OrbitControls } from '@react-three/drei';
import { Icon } from './icon';
import { DiNodejs,DiMongodb  } from "react-icons/di";
import { FaCss3Alt, FaGithub ,FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { Mesh } from 'three';




const skills = [
  { icon: FaCss3Alt, label: 'css3' },
  { icon: FaGithub, label: 'git' },
  { icon: FaHtml5, label: 'html5' },
  { icon: FaJava, label: 'Java' },
  { icon: IoLogoJavascript, label: 'Javascript' },
  { icon: DiMongodb, label: 'Mongodb' },
  { icon: DiNodejs , label: 'Nodejs' },
  { icon: FaPython, label: 'Python' },
  { icon: FaReact, label: 'React' },
  { icon: SiTypescript, label: 'Typescript' },
];

function RotatingSphere() {
  const sphereRef = useRef();

  const [isHovered, setIsHovered] = useState(false)

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  }); 
 
  return (
    
      <Sphere 
        ref={sphereRef} 
        args={[2.3, 20, 20]} 
        onPointerEnter={(e)=>(e.stopPropagation(), setIsHovered(true))} 
        onPointerLeave={() => setIsHovered(false)}
      >
        <meshBasicMaterial color={isHovered? "orange" : "white"} wireframe />
        {skills.map((skill, index) => {
          // Calculate spherical coordinates
          const phi = Math.acos(-1 + (2 * index) / skills.length); // Latitude
          const theta = Math.PI * (1 + Math.sqrt(5)) * index; // Golden angle

          // Convert spherical to Cartesian coordinates
          const x = 2.3 * Math.sin(phi) * Math.cos(theta);
          const y = 2.3 * Math.sin(phi) * Math.sin(theta); 
          const z = 2.3 * Math.cos(phi);

          return (
            <Html
              key={skill.label}
              position={[x, y, z]}
              distanceFactor={3}
              center
            >
              {/* icons */}
              <div className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
                <Icon icon={skill.icon} className="w-12 h-12 text-black" />
              </div>
            </Html>
          );
        })}
      </Sphere>
    
  );
}

export function RotatingSkillsSphere() {
  return (
    <div className="flex justify-between rounded-lg mb-3 mt-5 bg-gradient-to-br from-blue-800 to-teal-900 shadow-lg">
      <div className='flex-col ml-8 py-36 ml-32 font-semibold text-teal-300'>
        <p className='text-2xl'>DEVELOPMENT</p>
        <p className='text-5xl'>Stack</p>
      </div>
      <div className="w-[400px] h-[400px] md:h-[400px] mr-32">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <RotatingSphere />
          {/* OrbitControls for zooming, panning, and spinning */}
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={2.0}
          />
        </Canvas>
      </div>
    </div>
  );
}
