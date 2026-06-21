import React, { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";

const ParticlesBg: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          detectRetina: true,
          fpsLimit: 60,
          particles: {
            number: {
              value: 500,
              density: { enable: true, width: 800, height: 800 },
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.3, max: 0.95 },
              animation: { enable: true, speed: 0.4, minimumValue: 0.1 },
            },
            size: { value: { min: 0.6, max: 2.2 } },
            move: {
              enable: true,
              speed: 1.2,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: { enable: false, mode: "repulse" },
              onClick: { enable: false, mode: "push" },
              resize: true,
            },
          },
          background: { color: "transparent" },
        }}
        style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
      />
      {/* Capa roja recortada a la mitad-derecha (tono rojizo en el centro-derecha) */}
      <Particles
        id="tsparticles-red"
        options={{
          fullScreen: { enable: false },
          detectRetina: true,
          fpsLimit: 60,
          particles: {
            number: { value: 120, density: { enable: true, width: 400, height: 400 } },
            color: { value: "#ff4b4b" },
            shape: { type: "circle" },
            opacity: { value: { min: 0.35, max: 0.9 }, animation: { enable: true, speed: 0.3 } },
            size: { value: { min: 0.8, max: 2.6 } },
            move: { enable: true, speed: 0.18, random: true, outModes: { default: "out" } },
          },
          interactivity: { detectsOn: "canvas", events: { resize: true } },
          background: { color: "transparent" },
        }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)",
        }}
      />
    </ParticlesProvider>
  );
};

export default ParticlesBg;
