"use client";

import {
  forwardRef,
  ComponentPropsWithRef,
  useRef,
  useEffect,
  useState,
} from "react";

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion-3d";
import { useFrame } from "@react-three/fiber";

type ModelProps = ComponentPropsWithRef<"div"> & {
  position: number[];
  rotation: number[];
};

export const Model = forwardRef<HTMLDivElement, ModelProps>((props) => {
  const { scene, animations } = useGLTF("/atom.glb");
  const group = useRef<any>();
  const [loaded, setLoaded] = useState(false);

  let mixer = new THREE.AnimationMixer(scene);
  animations.forEach((clip) => {
    const action = mixer.clipAction(clip);
    action.play();
  });

  useFrame((_, delta) => {
    // Atualiza a animação
    mixer.update(delta);

    // Aplica rotação ao modelo
    if (group.current) {
      group.current.rotation.y += delta * 0.5; // Gira o modelo no eixo Y
    }
  });

  const mesh = useRef<THREE.Object3D>();

  useEffect(() => {
    if (loaded) {
      document.body.classList.add("scroll");
    }
  }, [loaded]);

  return (
    <motion.group
      ref={group}
      initial={{ scale: 0 }}
      position={[0, 0, 0]}
      animate={{ scale: 0.7 }}
      onAnimationComplete={() => setLoaded(true)}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <primitive
        castShadow={false}
        receiveShadow={false}
        object={scene}
        ref={mesh as any}
        {...(props as any)}
      />
    </motion.group>
  );
});
