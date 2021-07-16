import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  softShadows,
  OrbitControls,
  Environment,
  Html,
} from "@react-three/drei";

softShadows();

function MyRotatingBox({ position, args, name }) {
  const myMesh = React.useRef();
  const [active, setActive] = useState(false);

  return (
    <mesh
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      ref={myMesh}
      position={position}
      castShadow
    >
      <Html center style={{ color: "red" }}>
        {name}
      </Html>

      <boxBufferGeometry attach="geometry" />
      <meshPhongMaterial color="royalblue" />
    </mesh>
  );
}

const RotatingCube = () => {
  return (
    <Canvas
      colorManagement
      shadowMap
      camera={{ position: [-5, 2, 10], fov: 50 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.1} />
        <directionalLight castShadow />
        <MyRotatingBox position={[-1, 0, 0]} args={[1, 1, 1]} name="Box 1" />
        <MyRotatingBox position={[-3, 0, 0]} name="Box 2" />
        <MyRotatingBox position={[-5, 0, 0]} name="Box 3" />
        <MyRotatingBox position={[1, 0, 0]} name="Box 4" />
        <MyRotatingBox position={[3, 0, 0]} name="Box 5" />
        <MyRotatingBox position={[-1, 3, 0]} args={[1, 1, 1]} name="Box 6" />
        <MyRotatingBox position={[-3, 3, 0]} name="Box 7" />
        <MyRotatingBox position={[-5, 3, 0]} name="Box 8" />
        <MyRotatingBox position={[1, 3, 0]} name="Box 9" />
        <MyRotatingBox position={[3, 3, 0]} name="Box 10" />

        <OrbitControls />
        <Environment preset="sunset" background />
      </Suspense>
    </Canvas>
  );
};

export default RotatingCube;
