"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
  <Particles
  id="tsparticles"
  className="fixed inset-0 z-0 pointer-events-none"
  options={{
    fullScreen: {
      enable: true,
      zIndex: -1,
    },

    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 120,
          duration: 0.4,
        },
      },
    },

    particles: {
      links: {
        enable: true,
        distance: 150,
        color: "#a10ef7",
        opacity: 0.3,
        width: 1,
      },
      number: {
        value: 120,
      },
      color: {
        value: [
          "#ff0000",
          "#ff7f00",
          "#ffff00",
          "#00ff00",
          "#00ffff",
          "#0000ff",
          "#8b00ff",
        ],
      },
      opacity: {
        value: 0.6,
      },
      size: {
        value: {
          min: 2,
          max: 5,
        },
      },
      move: {
        enable: true,
        speed: 1,
      },
    },
  }}
/>
);
}