import React from "react";

const techIcons = [
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  // Tailwind: usar raw github como alternativa y fallback en caso de error
  { name: "Tailwind", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
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
          <div className="w-12 h-[2px] bg-cyan-400/90 rounded" />
          <h2 className="text-xs md:text-sm uppercase tracking-widest text-cyan-200 font-semibold">Sobre Mí</h2>
          <div className="w-12 h-[2px] bg-cyan-400/90 rounded" />
        </div>

        {/* Contenido sin fondo ni borde (transparente) */}
        <div className="rounded-lg p-0">
          <div className="p-6 flex flex-col md:flex-row items-center gap-6">
            {/* Avatar (sin borde ni fondo) */}
            <div className="flex-shrink-0">
              <div className="w-44 h-44 rounded-sm flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-transparent">
                  <UserIcon className="w-28 h-28" />
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold text-white">
                Programador full stack <span className="font-normal italic">obsesionado con el diseño oscuro</span>
              </h3>
              <p className="mt-2 text-slate-300">el rendimiento y las experiencias que se sienten vivas.</p>

              {/* Iconos de tecnologías (sin etiqueta) */}
              <div className="mt-4 flex items-center gap-3">
                {techIcons.map((t) => (
                  <div
                    key={t.name}
                    className="w-12 h-12 rounded-md flex items-center justify-center"
                    title={t.name}
                  >
                    <img
                      src={t.src}
                      alt={t.name}
                      className="w-7 h-7 object-contain"
                      loading="lazy"
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        img.onerror = null;
                        img.src = fallbackSvg;
                      }}
                    />
                  </div>
                ))}
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
