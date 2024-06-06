import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';




const Objet3D = () => {
  const gltf = useLoader(GLTFLoader, '/objet3D/Gemstone_LP.gltf'); 
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      // Animation de haut en bas
      ref.current.position.y = Math.sin(Date.now() * 0.002) * 0.5;

      // Rotation aléatoire
      ref.current.rotation.x += Math.random() * 0.01;
      ref.current.rotation.y += Math.random() * 0.01;
      ref.current.rotation.z += Math.random() * 0.01;
    }
  });

  return <primitive ref={ref} object={gltf.scene} />;
};

export default Objet3D;
