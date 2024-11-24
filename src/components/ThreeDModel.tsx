import { Translate } from "@mui/icons-material";
import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

interface ThreeDModelProps {
  style?: React.CSSProperties;
}

const ThreeDModel: React.FC<ThreeDModelProps> = ({ style }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (modelRef.current) {
      const rect = modelRef.current.getBoundingClientRect();

      if (rect.top <= 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 0.5;

      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      const ambientLight = new THREE.AmbientLight(0x404040, 20);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      directionalLight.position.set(5, 5, 5).normalize();
      scene.add(directionalLight);

      const loader = new GLTFLoader();
      loader.load(
        "/assets/3D-model.glb",
        (gltf: GLTF) => {
          console.log("Model loaded successfully", gltf);
          gltf.scene.scale.set(2, 2, 2);
          scene.add(gltf.scene);
        },
        undefined,
        (error: Error) => {
          console.error("Error loading model:", error);
        }
      );

      const animate = () => {
        requestAnimationFrame(animate);

        scene.rotation.x += 0.005;
        scene.rotation.y += 0.005;

        renderer.render(scene, camera);
      };

      animate();

      window.addEventListener("resize", () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      });

      return () => {
        renderer.dispose();
        window.removeEventListener("resize", () => {});
      };
    }
  }, []);

  return (
    <div
      ref={modelRef}
      style={{
        ...style,
        width: "200px",
        height: "200px",
        position: "relative"
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          bottom: "0",
          right:  "-400px",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          zIndex: isFixed ? 1 : -1,
        }}
      />
    </div>
  );
};

export default ThreeDModel;
