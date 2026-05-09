import { useRef, useEffect, useMemo } from 'react';
import { Float, ContactShadows, Environment, useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

useGLTF.preload('/base.obj.glb');

export default function HeroSculpture() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/base.obj.glb');
  
  // Clone the scene so we don't reuse the exact same object reference
  // which can break when unmounting and remounting with React Router
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    if (clonedScene) {
      clonedScene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.material = new THREE.MeshPhysicalMaterial({
            color: '#c4b5fd', // Light purple tint
            metalness: 0.1,
            roughness: 0.05,
            transmission: 1.0,
            thickness: 0.5,
            ior: 1.5,
            iridescence: 1.0,
            iridescenceIOR: 1.3,
            iridescenceThicknessRange: [100, 400],
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
            emissive: '#c084fc',
            emissiveIntensity: 0.1
          });
        }
      });
    }
  }, [clonedScene]);

  return (
    <>
      <Environment preset="city" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2 + 0.1} />
      <Float speed={2} rotationIntensity={0.2} floatIntensity={2}>
        <group ref={groupRef}>
          <primitive object={clonedScene} scale={2} position={[0, -1, 0]} />
        </group>
      </Float>
      
      <ContactShadows 
        position={[0, -3.5, 0]} 
        opacity={0.4} 
        scale={20} 
        blur={2} 
        far={4.5} 
        color="#9333ea" 
      />
      
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} color="#67e8f9" />
      <directionalLight position={[-10, 10, -5]} intensity={1.0} color="#c084fc" />
      <directionalLight position={[-10, -10, -10]} intensity={1.0} color="#3b82f6" />
    </>
  );
}
