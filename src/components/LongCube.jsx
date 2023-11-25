import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { RigidBody } from "@react-three/rapier";
import { Euler, Quaternion } from "three";
export default function LongCube() {
  const cubeLong = useRef();

  useFrame((state, delta) => {
    // cubeLong.current.rotation.y += delta * 0.2;
    const time = state.clock.getElapsedTime();
    const eulerRotation = new Euler(0, time, 0);
    const quortanionRotation = new Quaternion();
    quortanionRotation.setFromEuler(eulerRotation);
    // console.log(cubeLong.current);
    cubeLong.current.setNextKinematicRotation(quortanionRotation);

    const angle = time * 0.5;
    cubeLong.current.setNextKinematicTranslation({
      x: Math.cos(angle),
      y: 0.5,
      z: Math.sin(angle),
    });
  });

  const handleCubeClick = (e) => {
    // cube.current.linvel({ x: 1.0, y: 3.0, z: 4.0 });
    // console.log(cubeLong);
    // console.log(cube.current);
    //   cube.current.applyImpulse({ x: 0, y: 15, z: 0 });
    //   cube.current.applyTorqueImpulse({ x: 0, y: 11, z: 0 });
  };
  return (
    <RigidBody
      type="kinematicPosition"
      friction={0}
      ref={cubeLong}
      position={[2, 0.5, 0]}

      //   restitution={1}
    >
      <mesh scale={[0.4, 0.4, 6]} castShadow onClick={handleCubeClick}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </RigidBody>
  );
}
