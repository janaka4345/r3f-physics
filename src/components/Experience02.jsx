import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import Cube from "./Cube";
import LongCube from "./LongCube";
export default function Experience02() {
  // const cube = useRef();

  // useFrame((state, delta) => {
  //   cube.current.rotation.y += delta * 0.2;
  // });

  // const handleCubeClick = (e) => {
  //   console.log(cube.current);
  // };

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <Physics debug>
        <RigidBody colliders="ball">
          <mesh position={[-2, 8, 0]} castShadow>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
          </mesh>
        </RigidBody>
        <RigidBody
          position={[-2, 5, 0]}
          rotation={[Math.PI / 2, 0, 2]}
          colliders={false}
        >
          <CuboidCollider args={[1, 1, 0.5]} />
          <mesh castShadow>
            <torusGeometry />
            <meshStandardMaterial color="red" />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed">
          <mesh position-y={0} scale={1} receiveShadow>
            <boxGeometry args={[10, 0.5, 10]} />
            <meshStandardMaterial color="greenyellow" />
          </mesh>
        </RigidBody>
        <Cube />
        <LongCube />
      </Physics>
    </>
  );
}
