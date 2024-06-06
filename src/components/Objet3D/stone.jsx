import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

const Object3D = () => {
  const gltf = useLoader(GLTFLoader, '/objet3D/Gemstone_LP.gltf'); 
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      // Animation de haut en bas
      ref.current.position.y = Math.sin(Date.now() * 0.002) * 2;

      // Rotation aléatoire
      ref.current.rotation.x += Math.random() * 0.01;
      ref.current.rotation.y += Math.random() * 0.01;
      ref.current.rotation.z += Math.random() * 0.01;
    }
  });

  return <primitive ref={ref} object={gltf.scene} />;
};

export default Object3D;
