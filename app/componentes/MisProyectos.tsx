import React, { useEffect, useState } from "react";

type Project = {
  id: string | number;
  title: string;
  subtitle?: string;
  image?: string;
  tech?: string[];
  demoUrl?: string;
  githubUrl?: string;
};

const placeholderBg = "linear-gradient(135deg,#0b1220 0%, #0f1724 100%)";

const techIconMap: Record<string, string> = {
  react: "/icons/react.svg",
  javascript: "/icons/javascript.svg",
  "js": "/icons/javascript.svg",
  typescript: "/icons/typescript.svg",
  ts: "/icons/typescript.svg",
  tailwind: "/icons/tailwindcss.svg",
  tailwindcss: "/icons/tailwindcss.svg",
  vue: "/icons/vue.svg",
  vuejs: "/icons/vue.svg",
  vuetify: "/icons/vue.svg",
  node: "/icons/nodejs.svg",
  nodejs: "/icons/nodejs.svg",
  python: "/icons/python.svg",
mysql: "/icons/mysql.svg",
mongodb: "/icons/mongodb.svg",
mongo: "/icons/mongodb.svg",
html: "/icons/react.svg",
css: "/icons/tailwindcss.svg",
};
const defaultProjects: Project[] = [
  {
    id: "ArrowHero",
    title: "Arrow Hero",
    image: "../media/ArrowHero.png",
    subtitle: "En mis comienzos con JavaScript (vanilla) desarrollé ArrowHero, un juego de habilidad y reflejos en el que el jugador debe esquivar flechas que caen del cielo. Incluye un sistema de puntuación y varios niveles de dificultad.",
    tech: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://thriving-blini-b83168.netlify.app/",
    githubUrl: "https://github.com/Tommyscripts/ArrowHero",
  },
  {
    id: "DiscordBot",
    title: "Discord Bot",
    image: "../media/DiscordBot.png",
    subtitle: "He creado un bot para Discord en código Python. Con el tiempo añadí varios juegos, un sistema de moderación, integración con Google Translate y otras funcionalidades. Iré añadiendo mejoras próximamente. Nota: Al hacer clic en 'Demo' accederás al enlace para invitar al bot a tu servidor.",
    tech: ["Python", "MySQL"],
    // sin demo para probar boton condicional
    demoUrl: "https://discord.com/oauth2/authorize?client_id=1424779352008298537&scope=bot%20applications.commands&permissions=3941734153713728",
    githubUrl: "https://github.com/Tommyscripts/DiscordBotOceanicGo",
  },
  {
    id: "MyHomeList",
    title: "My HomeList",
    image: "../media/MyHomeList.png",
    subtitle: "Este proyecto está hecho con Vue y Vuetify para demostrar mis habilidades con ese framework. El backend está alojado en un servicio gratuito, por lo que la demo puede tardar en despertarse; si quieres probarla, haz clic en 'Demo'.",
    tech: ["Vue", "Vuetify", "Node.js", "MongoDB"],
    demoUrl: "https://myhomelist.netlify.app/",
    githubUrl: "https://github.com/Tommyscripts/frontendMylist"
  },
  {
    id: "AdministradorDeClientes",
    title: "Administrador de clientes",
    image: "../media/Administrador de clientes.png",
    subtitle: "Aplicación web que simula la gestión de clientes de un negocio, permitiendo registrar, consultar y administrar información como nombres, números de teléfono y direcciones de correo electrónico. Utiliza LocalStorage para mantener los datos en el navegador sin backend ni base de datos externa.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://administraclientesrouterdom.netlify.app/",
    githubUrl: "https://github.com/Tommyscripts/AdministradorDeClientes",
  },
  {
    id: "CotizadorDeCriptomonedas",
    title: "Cotizador de monedas y criptomonedas",
    image: "../media/Cotizador de criptos.png",
    subtitle: "Aplicación web para consultar cotizaciones actuales de divisas y criptomonedas. Consume una API externa para obtener precios actualizados y muestra los datos de forma dinámica y sencilla.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://contizadordecriptomonedas.netlify.app/",
    githubUrl: "https://github.com/Tommyscripts/ContadorCriptomonedas",
  },
  {
    id: "ControlDePresupuestos",
    title: "Control de presupuestos",
    image: "../media/Control de presupuestos.png",
    subtitle: "Aplicación web para gestionar y controlar gastos mensuales. Permite registrar gastos, organizarlos por categorías y aplicar filtros para analizar mejor el uso del dinero. Los datos se almacenan en LocalStorage.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://controlatuspresupuestos.netlify.app/",
    githubUrl: "https://github.com/Tommyscripts/ControlDePresupuestos",
  },
  {
    id: "TusCitasVeterinarias",
    title: "Tus Citas Veterinarias",
    image: "../media/Tus Citas Veterianarias.png",
    subtitle: "Aplicación web para la gestión de citas y pacientes en una clínica veterinaria. Permite registrar y administrar información de mascotas y citas, con manejo de formularios, interfaz propia y persistencia de datos en LocalStorage.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://tuscitasveterinarias.netlify.app/",
    githubUrl: "https://github.com/Tommyscripts/ReactAdministradordepacientes",
  },
  {
    id: "CocktailYRecetas",
    title: "Cocktail y Recetas",
    image: "../media/CocktailyRecetas.png",
    subtitle: "Aplicación web construida con React, TypeScript y Tailwind CSS que consume la API de TheCocktailDB para descubrir bebidas y recetas de forma rápida, visual e intuitiva.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://beamish-dusk-70bb64.netlify.app/",
    githubUrl: "https://github.com/Tommyscripts/BebidasYRecetas",
  },
  // Proyecto en preparación: descomentar cuando quieras publicarlo.
  // {
  //   id: "ExcelOnline",
  //   title: "Excel Online",
  //   image: "../media/Excel Online.png",
  //   subtitle: "Aplicación web inspirada en Excel para gestionar hojas de cálculo, editar celdas y organizar información de forma rápida y clara. Este proyecto está pensado para trabajar con tablas, datos y automatizaciones de manera intuitiva, con un frontend moderno y un backend preparado para ampliar la lógica de negocio.",
  //   demoUrl: "https://demo-por-definir.com/",
  //   githubUrl: "https://github.com/Tommyscripts/ExcelProject",
  //   // Backend: https://github.com/Tommyscripts/ExcelProjectBackEnd
  // },
];

// Nota: cargamos imágenes desde `app/media` de forma asíncrona usando `import.meta.glob`

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
};

const MisProyectos: React.FC<{ items?: Project[] }> = ({ items = defaultProjects }) => {
  const rows = chunkArray(items, 3);

  const [mediaMap, setMediaMap] = useState<Record<string, string>>({});

  useEffect(() => {
    const modules = import.meta.glob('../media/*.{png,jpg,jpeg,webp,svg}');
    const entries = Object.entries(modules) as [string, () => Promise<{ default: string }>][];
    Promise.all(
      entries.map(async ([path, loader]) => {
        try {
          const mod = await loader();
          const name = path.split('/').pop()?.toLowerCase() || path;
          return [name, mod.default] as [string, string];
        } catch (e) {
          return [path, ""] as [string, string];
        }
      })
    ).then((pairs) => {
      const map: Record<string, string> = {};
      pairs.forEach(([k, v]) => {
        if (v) map[k] = v;
      });
      setMediaMap(map);
    });
  }, []);

  const resolveImage = (img?: string) => {
    if (!img) return undefined;
    if (img.startsWith('/')) return img;
    const key = img.split('/').pop()?.toLowerCase() || img.toLowerCase();
    return mediaMap[key];
  };

  return (
    <section className="my-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6">
          <div className="absolute -top-6 left-6 z-20 flex items-center gap-3 bg-[#070608] px-3 sm:px-4">
            <div className="w-6 h-[2px] bg-cyan-400/90 rounded" />
            <h2 className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-cyan-200 font-section px-2">Mis Proyectos</h2>
            <div className="w-6 h-[2px] bg-cyan-400/90 rounded" />
          </div>

          <div className="rounded-lg border border-white/10 bg-gradient-to-tr from-black/20 to-transparent backdrop-blur-sm overflow-hidden p-6">
            {rows.map((row, ri) => (
              <div key={ri} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        {row.map((p) => (
                  <article key={p.id} className="bg-slate-900/60 rounded-md border border-white/5 overflow-hidden shadow-sm">
                    <div className="aspect-[16/9] w-full bg-slate-800/30 flex items-center justify-center" style={{ background: p.image ? undefined : placeholderBg }}>
                      {(() => {
                        const imgSrc = resolveImage(p.image);
                        if (imgSrc) {
                          return (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={imgSrc}
                              alt={p.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              onError={(e) => {
                                const img = e.currentTarget as HTMLImageElement;
                                img.onerror = null;
                                img.style.display = "none";
                              }}
                            />
                          );
                        }

                        return (
                        <div className="p-4 text-center">
                          <div className="text-slate-200 font-semibold">{p.title}</div>
                          <div className="text-xs text-slate-400 mt-1">Preview</div>
                        </div>
                        );
                      })()}
                    </div>

                    <div className="p-4 flex flex-col gap-3">
                      <div>
                        <h3 className="text-white font-semibold font-card">{p.title}</h3>
                        {p.subtitle && <p className="text-xs text-slate-300 font-body">{p.subtitle}</p>}
                      </div>

                      {p.tech && p.tech.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {p.tech.map((tech) => {
                            const normalized = tech.toLowerCase().replace(/[^a-z0-9]+/g, "");
                            const iconSrc = techIconMap[normalized] || techIconMap[tech.toLowerCase()] || "/icons/react.svg";
                            const label = tech.trim();

                            return (
                              <div
                                key={`${p.id}-${label}`}
                                className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/5 px-2 py-1 text-[10px] font-medium text-cyan-100"
                                title={label}
                              >
                                <img
                                  src={iconSrc}
                                  alt={label}
                                  className="h-3.5 w-3.5 object-contain"
                                  loading="lazy"
                                  onError={(e) => {
                                    const img = e.currentTarget as HTMLImageElement;
                                    img.onerror = null;
                                    img.src = "/icons/react.svg";
                                  }}
                                />
                                <span>{label}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      <div className="mt-2 flex gap-3">
                        {p.demoUrl && (
                          <a
                            href={p.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-black rounded-md text-sm font-semibold font-button"
                          >
                            Demo
                          </a>
                        )}

                        {p.githubUrl && (
                          <a
                            href={p.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 text-slate-200 rounded-md text-sm font-button"
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
