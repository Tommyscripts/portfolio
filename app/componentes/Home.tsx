import React from "react";
import ParticlesBg from "./ParticlesBg";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <ParticlesBg />
      <main className="relative z-10 container mx-auto p-6">
        <h1 className="text-4xl font-bold text-white"></h1>
      </main>
    </div>
  );
};

export default Home;
