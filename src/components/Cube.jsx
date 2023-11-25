import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { RigidBody } from "@react-three/rapier";
export default function Cube() {
  const cube = useRef();

  useFrame((state, delta) => {
    // cube.current.rotation.y += delta * 0.2;
  });

  const handleCubeClick = (e) => {
    // console.log(cube.current);
    cube.current.applyImpulse({ x: 0, y: 15, z: 0 });
    cube.current.applyTorqueImpulse({ x: 0, y: 11, z: 0 });
  };
  return (
    <RigidBody  ref={cube} position={[2, 6, 0]} restitution={1}>
      <mesh scale={1.5} castShadow onClick={handleCubeClick}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    </RigidBody>
  );
}
