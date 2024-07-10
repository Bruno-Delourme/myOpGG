import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import PropTypes from 'prop-types';

const Objet3D = ({ position, bloomIntensity, bloomThreshold, bloomSmoothing }) => {
  const gltf = useLoader(GLTFLoader, '/objet3D/Gemstone_LP.gltf'); 
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      // Animation de haut en bas
      ref.current.position.y = position[1] + Math.sin(Date.now() * 0.002) * 0.5;

      // Rotation aléatoire
      ref.current.rotation.x += Math.random() * 0.01;
      ref.current.rotation.y += Math.random() * 0.01;
      ref.current.rotation.z += Math.random() * 0.01;
    }
  });

  return (
    <>
      <primitive ref={ref} object={gltf.scene} position={position} />
      <EffectComposer>
        <Bloom
          intensity={bloomIntensity}
          luminanceThreshold={bloomThreshold}
          luminanceSmoothing={bloomSmoothing}
          height={300}
        />
      </EffectComposer>
    </>
  );
};

Objet3D.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  bloomIntensity: PropTypes.number,
  bloomThreshold: PropTypes.number,
  bloomSmoothing: PropTypes.number,
};

Objet3D.defaultProps = {
  bloomIntensity: 8.0,
  bloomThreshold: 0.0,
  bloomSmoothing: 0.9,
};

export default Objet3D;
