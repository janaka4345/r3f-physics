import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";
export default function Hambuerger() {
  const hambuerger = useRef();
  const model = useGLTF("./hamburger.glb");

  useFrame((state, delta) => {
    // hambuerger.current.rotation.y += delta * 0.2;
  });

  const handleHambuergerClick = (e) => {
    // console.log(Hambuerger.current);
    // Hambuerger.current.applyImpulse({ x: 0, y: 15, z: 0 });
    // Hambuerger.current.applyTorqueImpulse({ x: 0, y: 11, z: 0 });
  };
  return (
    <RigidBody
      position={[2, 6, 0]}
      colliders="cuboid"
      ref={hambuerger}
      restitution={0}
    >
      <primitive object={model.scene} scale={0.25} />
    </RigidBody>
  );
}
