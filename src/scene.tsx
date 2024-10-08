import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { Model } from "./model";
import { motion } from "framer-motion";

export default function Scene() {
  const fadeIn = {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: "-54%" },
    exit: { opacity: 0, y: 80 },
  };

  return (
    <motion.div
      className="w-[400px] h-[400px] z-[5] pointer-events-none absolute canvas"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      transition={{ duration: 1.2 }}
    >
      <Canvas
        className="w-full h-full"
        camera={{
          position: [0, 0, 6],
          fov: 20,
          rotation: [0, 0, 0],
          zoom: 0.3,
        }}
      >
        <ambientLight intensity={2} />
        <directionalLight position={[0, 110, 40]} intensity={1} />

        <OrbitControls />

        <Suspense fallback={null}>
          <Model rotation={[0, 0, 0]} position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
