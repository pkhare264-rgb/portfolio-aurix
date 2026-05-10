import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import HeroSculpture from '../3d/HeroSculpture';

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]} gl={{ powerPreference: "high-performance", antialias: false }}>
      <Suspense fallback={null}>
        <HeroSculpture />
      </Suspense>
    </Canvas>
  );
}
