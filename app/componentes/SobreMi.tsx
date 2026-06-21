import React from "react";

const techs = [
  "React",
  "JavaScript",
  "TypeScript",
  "PHP",
  "Tailwind",
  "Python",
  "Astro",
  "Node.js",
  "Vue",
  "Express",
  "MySQL",
  "HTML/CSS",
];

const UserIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className="w-20 h-20 text-slate-100"
  >
    <path
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 11.37A4 4 0 1 1 8 11.37M12 22v-4"
    />
  </svg>
);

const SobreMi: React.FC = () => {
  return (
    <section className="relative py-8">
      <div className="max-w-5xl mx-auto p-6 bg-slate-900/40 border border-slate-700 rounded-lg shadow-lg backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Left: avatar placeholder */}
          <div className="flex-shrink-0">
            <div className="w-36 h-36 bg-gradient-to-tr from-slate-800 to-slate-700 rounded-md flex items-center justify-center">
              <UserIcon />
            </div>
          </div>

          {/* Right: content */}
          <div className="flex-1 text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Programador full stack</h3>
            <p className="mt-3 text-slate-300">No se me ocurre nada ahora mismo, rellenaré más en el futuro.</p>

            <div className="mt-4">
              <h4 className="text-sm text-slate-400 uppercase tracking-wider">Tecnologías</h4>
              <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 md:grid-cols-6 gap-2">
                {techs.map((t) => (
                  <div
                    key={t}
                    className="flex items-center justify-center px-2 py-2 bg-slate-800/60 border border-slate-700 rounded text-xs text-slate-100"
                    title={t}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
