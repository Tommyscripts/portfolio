import React from "react";

type Project = {
  id: string | number;
  title: string;
  subtitle?: string;
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
};

const placeholderBg = "linear-gradient(135deg,#0b1220 0%, #0f1724 100%)";

const defaultProjects: Project[] = [
  {
    id: "shadow-blog",
    title: "Shadow Blog",
    subtitle: "Blog de tecnología",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "nightwatch",
    title: "Nightwatch",
    subtitle: "Plataforma de monitoreo",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "DiscordBot",
    title: "Discord Bot",
    subtitle: "He creado un bot para Discord en codigo Python, con el tiempo he añadido varios juegos, sistema de moderación, google Translate, y muchas cosas más. Con el tiempo ire añadiendo más cosas que tengo en mente, y que se me ocurran. Nota: Al clickar en Demo, clickaras en el enlace para invitar al bot en tu servidor.",
    // sin demo para probar boton condicional
    demoUrl: "https://discord.com/oauth2/authorize?client_id=1424779352008298537&scope=bot%20applications.commands&permissions=3941734153713728",
    githubUrl: "https://github.com/Tommyscripts/DiscordBotOceanicGo",
  },
];

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
};

const MisProyectos: React.FC<{ items?: Project[] }> = ({ items = defaultProjects }) => {
  const rows = chunkArray(items, 3);

  return (
    <section className="my-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6">
          <div className="absolute -top-6 left-6 z-20 flex items-center gap-3 bg-[#070608] px-3 sm:px-4">
            <div className="w-6 h-[2px] bg-cyan-400/90 rounded" />
            <h2 className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-cyan-200 font-semibold px-2">Mis Proyectos</h2>
            <div className="w-6 h-[2px] bg-cyan-400/90 rounded" />
          </div>

          <div className="rounded-lg border border-white/10 bg-gradient-to-tr from-black/20 to-transparent backdrop-blur-sm overflow-hidden p-6">
            {rows.map((row, ri) => (
              <div key={ri} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {row.map((p) => (
                  <article key={p.id} className="bg-slate-900/60 rounded-md border border-white/5 overflow-hidden shadow-sm">
                    <div className="aspect-[16/9] w-full bg-slate-800/30 flex items-center justify-center" style={{ background: p.image ? undefined : placeholderBg }}>
                      {p.image ? (
                        // si se pasa imagen, la usamos
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            const img = e.currentTarget as HTMLImageElement;
                            img.onerror = null;
                            img.style.display = "none";
                          }}
                        />
                      ) : (
                        <div className="p-4 text-center">
                          <div className="text-slate-200 font-semibold">{p.title}</div>
                          <div className="text-xs text-slate-400 mt-1">Preview</div>
                        </div>
                      )}
                    </div>

                    <div className="p-4 flex flex-col gap-3">
                      <div>
                        <h3 className="text-white font-semibold">{p.title}</h3>
                        {p.subtitle && <p className="text-xs text-slate-300">{p.subtitle}</p>}
                      </div>

                      <div className="mt-2 flex gap-3">
                        {p.demoUrl && (
                          <a
                            href={p.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-black rounded-md text-sm font-semibold"
                          >
                            Demo
                          </a>
                        )}

                        {p.githubUrl && (
                          <a
                            href={p.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 text-slate-200 rounded-md text-sm"
                          >
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MisProyectos;
