import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[1, 64, 64]} scale={1.5} position={[2, 1, -5]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.6}
        />
      </Sphere>
    </Float>
  );
};

const AnimatedSphere2 = () => {
  const sphereRef = useRef();

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = -state.clock.getElapsedTime() * 0.1;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[1, 64, 64]} scale={1} position={[-3, -2, -6]}>
        <MeshDistortMaterial
          color="#d946ef"
          attach="material"
          distort={0.5}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.4}
        />
      </Sphere>
    </Float>
  );
};

const Background3D = () => {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 50% 50%, #1a0b2e 0%, #030014 100%)' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#8b5cf6" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#d946ef" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <AnimatedSphere />
        <AnimatedSphere2 />
      </Canvas>
    </div>
  );
};

export default Background3D;
