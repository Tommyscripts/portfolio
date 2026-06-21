import React from "react";

const techIcons = [
  { name: "React", src: "/icons/react.svg" },
  { name: "TypeScript", src: "/icons/typescript.svg" },
  { name: "JavaScript", src: "/icons/javascript.svg" },
  { name: "Node.js", src: "/icons/nodejs.svg" },
  { name: "Tailwind", src: "/icons/tailwindcss.svg" },
  { name: "Python", src: "/icons/python.svg" },
  { name: "PHP", src: "/icons/php.svg" },
  { name: "Astro", src: "/icons/astro.svg" },
  { name: "Vue", src: "/icons/vue.svg" },

  { name: "MySQL", src: "/icons/mysql.svg" },
];

const UserIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={`text-slate-100 ${className}`}
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
  // Fallback SVG data URI (círculo cyan) en caso de error de carga de iconos
  const fallbackSvg =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="#38bdf8" stroke-width="2"/></svg>'
    );

  return (
    <section className="relative py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Título con líneas laterales pequeñas */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 sm:w-10 h-[2px] bg-cyan-400/90 rounded" />
          <h2 className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-cyan-200 font-semibold">Sobre Mí</h2>
          <div className="w-8 sm:w-10 h-[2px] bg-cyan-400/90 rounded" />
        </div>

        {/* Contenido sin fondo ni borde (transparente) */}
        <div className="rounded-lg p-0">
          <div className="p-4 sm:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            {/* Avatar (sin borde ni fondo) */}
            <div className="flex-shrink-0">
              <div className="w-28 sm:w-36 md:w-44 h-28 sm:h-36 md:h-44 rounded-sm flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-transparent">
                  <UserIcon className="w-20 sm:w-24 md:w-28 h-auto" />
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="flex-1">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                Programador full stack <span className="font-normal italic">obsesionado con el diseño oscuro</span>
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-300">el rendimiento y las experiencias que se sienten vivas.</p>

              {/* Iconos de tecnologías (sin etiqueta) */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {techIcons.map((t) => {
                  // clases específicas para fondo sutil por icono
                  let wrapperClasses = "w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center";
                  if (t.name === "Astro" || t.name === "MySQL") {
                    // fondo blanco semitransparente y padding pequeño para que no destaque tanto
                    wrapperClasses = "w-10 h-10 sm:w-12 sm:h-12 bg-white/70 p-0.5 rounded-sm ring-0 flex items-center justify-center";
                  } else if (t.name === "Express") {
                    // Express puede mantener un fondo un poco más visible
                    wrapperClasses = "w-10 h-10 sm:w-12 sm:h-12 bg-white p-1 rounded-md flex items-center justify-center";
                  }

                  return (
                    <div key={t.name} className={wrapperClasses} title={t.name}>
                      <img
                        src={t.src}
                        alt={t.name}
                        className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                        loading="lazy"
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          img.onerror = null;
                          img.src = fallbackSvg;
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              <p className="mt-3 text-sm text-slate-400">Actualmente buscando nuevas oportunidades.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
