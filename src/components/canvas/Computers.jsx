import React, { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ config }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={config.scale}
        position={config.position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [bp, setBp] = useState("lg");

  useEffect(() => {
    const mqXs = window.matchMedia("(max-width: 360px)");
    const mqSm = window.matchMedia("(max-width: 480px)");
    const mqMd = window.matchMedia("(max-width: 640px)");
    const mqLg = window.matchMedia("(max-width: 1200px)");

    const update = () => {
      if (mqXs.matches) return setBp("xs");
      if (mqSm.matches) return setBp("sm");
      if (mqMd.matches) return setBp("md");
      if (mqLg.matches) return setBp("lgMid");
      return setBp("xl");
    };

    update();

    mqXs.addEventListener("change", update);
    mqSm.addEventListener("change", update);
    mqMd.addEventListener("change", update);
    mqLg.addEventListener("change", update);

    return () => {
      mqXs.removeEventListener("change", update);
      mqSm.removeEventListener("change", update);
      mqMd.removeEventListener("change", update);
      mqLg.removeEventListener("change", update);
    };
  }, []);

  const config = useMemo(() => {
    switch (bp) {
      case "xs":
        return { scale: 0.55, position: [0, -3.2, -1.9], fov: 30 };
      case "sm":
        return { scale: 0.6, position: [0, -3.15, -1.85], fov: 28 };
      case "md":
        return { scale: 0.68, position: [0, -3.1, -1.7], fov: 26 };
      case "lgMid":
        return { scale: 0.6, position: [0, -3.25, -1.5], fov: 26 };
      default:
        return { scale: 0.75, position: [0, -3.25, -1.5], fov: 25 };
    }
  }, [bp]);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: config.fov }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers config={config} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
