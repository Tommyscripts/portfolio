import React from "react";

type WorkItem = {
  id: string | number;
  icon: React.ReactNode;
  texto: string;
};

// fallback SVG data URI (círculo cyan) en caso de error de carga
const fallbackSvg =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="#38bdf8" stroke-width="2"/></svg>'
  );

const IconImg: React.FC<{ src: string; name?: string; className?: string }> = ({ src, name = "", className = "" }) => (
  <img
    src={src}
    alt={name}
    className={`${className} object-contain`}
    loading="lazy"
    onError={(e) => {
      const img = e.currentTarget as HTMLImageElement;
      img.onerror = null;
      img.src = fallbackSvg;
    }}
  />
);

const defaultItems: WorkItem[] = [
  { id: 1, icon: <IconImg src="/icons/bolt.svg" name="Bolt" className="w-5 h-5" />, texto: "Código limpio y escalable" },
  { id: 2, icon: <IconImg src="/icons/target.svg" name="Target" className="w-5 h-5" />, texto: "Enfoque en UX/UI" },
  { id: 3, icon: <IconImg src="/icons/rocket.svg" name="Rocket" className="w-5 h-5" />, texto: "Performance primero" },
  { id: 4, icon: <IconImg src="/icons/search.svg" name="Search" className="w-5 h-5" />, texto: "Atención al detalle" },
  { id: 5, icon: <IconImg src="/icons/team.svg" name="Team" className="w-5 h-5" />, texto: "Trabajo en equipo" },
  { id: 6, icon: <IconImg src="/icons/puzzle.svg" name="Puzzle" className="w-5 h-5" />, texto: "Resolución de problemas" },
];

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
};

const ComoTrabajo: React.FC<{ items?: WorkItem[] }> = ({ items = defaultItems }) => {
  const rows = chunkArray(items, 5);

  return (
    <section className="my-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6">
          <div className="absolute -top-6 sm:-top-8 left-6 z-20 flex items-center gap-3 bg-[#070608] px-3 sm:px-4">
            <div className="w-6 sm:w-8 h-[2px] bg-cyan-400/90 rounded" />
            <h2 className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-cyan-200 font-semibold px-2">Cómo Trabajo</h2>
            <div className="w-6 sm:w-8 h-[2px] bg-cyan-400/90 rounded" />
          </div>

          <div className="rounded-lg border border-white/10 bg-gradient-to-tr from-black/20 to-transparent backdrop-blur-sm overflow-hidden p-6">
            {rows.map((row, ri) => (
              <div key={ri} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4">
                {row.map((it) => (
                  <div key={it.id} className="p-1 rounded-lg">
                    <div className="h-full flex items-center gap-2 px-2 py-1">
                      <div className="w-6 h-6 flex items-center justify-center shrink-0">{it.icon}</div>
                      <span className="text-slate-400 text-xs">-</span>
                      <div className="text-slate-100 text-xs font-semibold">{it.texto}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoTrabajo;
