import { useGLTF } from '@react-three/drei';
import React from 'react';

function ModelBox() {
  const { scene } = useGLTF('next-assets/models/model.glb');
  return <primitive object={scene} />;
}

export default ModelBox;
