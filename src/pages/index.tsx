import React, { lazy, Suspense } from 'react';
import { Canvas } from 'react-three-fiber';

const Model = lazy(() => import('./model'));
const Controls = lazy(() => import('./controls'));

const ThreePage = () => {
  return (
    <Canvas concurrent style={{ width: '100%', height: '100vh' }}>
      <ambientLight intensity={0.6} />
      <spotLight
        intensity={0.2}
        angle={0.3}
        penumbra={1}
        position={[5, 25, 20]}
        castShadow
        shadowBias={-0.0001}
      />
      <Suspense fallback={null}>
        <Model />
        <Controls />
      </Suspense>
    </Canvas>
  );
};

export default ThreePage;
