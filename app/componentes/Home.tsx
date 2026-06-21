import React from "react";
import ParticlesBg from "./ParticlesBg";
import Cabecera from "./Cabecera";
import SobreMi from "./SobreMi";
import MisStack from "./MisStack";
import MisProyectos from "./MisProyectos";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <ParticlesBg />
      <main className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Cabecera />
          <SobreMi />
          <MisStack />
          <MisProyectos />
        </div>
      </main>
    </div>
  );
};

export default Home;
