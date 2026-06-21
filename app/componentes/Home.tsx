import React from "react";
import ParticlesBg from "./ParticlesBg";
import Cabecera from "./Cabecera";
import SobreMi from "./SobreMi";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <ParticlesBg />
      <main className="relative z-10 container mx-auto p-6">
        <Cabecera />
        <SobreMi />
      </main>
    </div>
  );
};

export default Home;
