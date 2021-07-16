import React from "react";
import { Canvas } from "@react-three/fiber";

const BasicCube = () => {
  return (
    <Canvas camera={{ position: [-5, 2, 10], fov: 60 }}>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial attach="material" color="blue" />
      </mesh>
    </Canvas>
  );
};

export default BasicCube;
