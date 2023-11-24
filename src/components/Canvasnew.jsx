import { Canvas } from "@react-three/fiber";
import Experience02 from "./Experience02.jsx";

export default function Canvasnew() {
  return (
    <Canvas
      shadows={true}
      camera={{
        fov: 40,
        near: 0.2,
        far: 200,
        position: [15, 15, 15],
      }}
    >
      {/* <Experience /> */}
      <Experience02 />
    </Canvas>
  );
}
