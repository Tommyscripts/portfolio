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
        style={{ position: "fixed", inset: 0, zIndex: -2 }}
      />
    </ParticlesProvider>
  );
};

export default ParticlesBg;
