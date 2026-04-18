import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Stars, Torus, Octahedron } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function WireShield() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={1}>
      <Icosahedron ref={ref} args={[1.8, 1]} position={[2.5, 0.2, 0]}>
        <meshBasicMaterial color="#22ee88" wireframe />
      </Icosahedron>
      <Icosahedron args={[1.85, 1]} position={[2.5, 0.2, 0]}>
        <meshStandardMaterial
          color="#22ee88"
          transparent
          opacity={0.08}
          emissive="#22ee88"
          emissiveIntensity={0.4}
        />
      </Icosahedron>
    </Float>
  );
}

function NetworkRing() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.4;
    ref.current.rotation.z = state.clock.elapsedTime * 0.25;
  });
  return (
    <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.8}>
      <Torus ref={ref} args={[1.3, 0.04, 16, 80]} position={[-2.6, -0.4, -1]}>
        <meshStandardMaterial
          color="#22ee88"
          emissive="#22ee88"
          emissiveIntensity={1}
          metalness={0.8}
          roughness={0.2}
        />
      </Torus>
      <Torus args={[1.0, 0.03, 16, 80]} position={[-2.6, -0.4, -1]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#fbbf24"
          emissiveIntensity={0.8}
        />
      </Torus>
    </Float>
  );
}

function DataNode() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.5;
    ref.current.rotation.x = state.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.4}>
      <Octahedron ref={ref} args={[0.55, 0]} position={[-0.8, 1.9, 1]}>
        <meshStandardMaterial
          color="#ef4444"
          metalness={1}
          roughness={0.15}
          emissive="#ef4444"
          emissiveIntensity={0.5}
          flatShading
        />
      </Octahedron>
    </Float>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#22ee88" />
        <directionalLight position={[-5, -3, -5]} intensity={0.6} color="#fbbf24" />
        <pointLight position={[0, 0, 5]} intensity={0.8} color="#ffffff" />

        <Stars radius={60} depth={50} count={2500} factor={3} saturation={0} fade speed={0.6} />

        <WireShield />
        <NetworkRing />
        <DataNode />
      </Suspense>
    </Canvas>
  );
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const count = 700;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.04;
    ref.current.rotation.x = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#22ee88" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export function AmbientScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ alpha: true }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>
    </Canvas>
  );
}
