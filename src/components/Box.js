import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Box() {
  const mesh = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    mesh.current.rotation.x = t;
    mesh.current.rotation.y = t;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial />
    </mesh>
  );
}
