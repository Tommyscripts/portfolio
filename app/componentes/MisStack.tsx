import React, { useEffect, useRef, useState } from "react";

type Zone = "red" | "blue" | "auto";

type StackItem = {
    id: string | number;
    icon: React.ReactNode;
    nombre: string;
    nivel: string;
    barradenivel: number; // 1-10
    zone?: Zone;
};

const ReactIcon = () => (
    <svg width="36" height="36" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="128" cy="128" r="20" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <ellipse rx="80" ry="28" transform="matrix(.866 -.5 .5 .866 128 128)" />
            <ellipse rx="80" ry="28" transform="matrix(.866 .5 -.5 .866 128 128)" />
            <ellipse rx="80" ry="28" transform="matrix(1 0 0 1 128 128)" />
        </g>
    </svg>
);

const TsIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="6" fill="#3178C6" />
        <text x="50%" y="58%" fontSize="14" fontWeight="700" textAnchor="middle" fill="#fff" fontFamily="Inter, Arial, Helvetica, sans-serif">TS</text>
    </svg>
);

const NodeIcon = () => (
    <svg width="36" height="36" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <circle cx="128" cy="128" r="20" fill="#68A063" />
        <path d="M50 96v64l64 36 64-36V96L114 60 50 96z" fill="#3C873A" opacity="0.9" />
    </svg>
);

const NextIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="6" fill="#000" />
        <text x="50%" y="55%" fontSize="12" fontWeight="700" textAnchor="middle" fill="#fff" fontFamily="Inter, Arial, Helvetica, sans-serif">next</text>
        <text x="65%" y="72%" fontSize="8" fontWeight="600" textAnchor="middle" fill="#fff" fontFamily="Inter, Arial, Helvetica, sans-serif">.js</text>
    </svg>
);

const GitIcon = () => (
    <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#F05032" />
        <circle cx="8" cy="8" r="1.6" fill="#fff" />
        <circle cx="16" cy="16" r="1.6" fill="#fff" />
    </svg>
);

const JsIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="6" fill="#F7DF1E" />
        <text x="50%" y="58%" fontSize="14" fontWeight="700" textAnchor="middle" fill="#000" fontFamily="Arial, Helvetica, sans-serif">JS</text>
    </svg>
);

const TailwindIcon = () => (
    <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#06B6D4" />
        <path d="M3 14c3-3 6-3 9-1 3 2 6 2 9-1" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.95" />
    </svg>
);

const PythonIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="6" fill="#3776AB" />
        <text x="50%" y="55%" fontSize="12" fontWeight="700" textAnchor="middle" fill="#FFD43B" fontFamily="Arial, Helvetica, sans-serif">Py</text>
    </svg>
);

const VueIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="6" fill="#35495E" />
        <path d="M6 10l6 16 6-10 6 10 6-16H6z" fill="#41B883" opacity="0.95" />
        <path d="M6 10l6 16 6-10 6 10 6-16H6z" fill="#34495E" opacity="0.15" />
    </svg>
);

const MysqlIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="6" fill="#00758F" />
        <g transform="translate(6,8)" fill="#fff" opacity="0.95">
            <ellipse cx="12" cy="6" rx="10" ry="3" />
            <ellipse cx="12" cy="12" rx="10" ry="3" />
            <ellipse cx="12" cy="18" rx="10" ry="3" />
        </g>
    </svg>
);

const AstroIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="6" fill="#0EA5E9" />
        <g transform="translate(6,6)" fill="#fff">
            <polygon points="12,0 14,8 22,8 15.5,12.5 17.5,20 12,15.5 6.5,20 8.5,12.5 2,8 10,8" />
        </g>
    </svg>
);

// fallback SVG data URI (similar to SobreMi) en caso de error de carga
const fallbackSvg =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="#38bdf8" stroke-width="2"/></svg>'
    );

const IconImg: React.FC<{ src: string; name?: string; className?: string }> = ({ src, name = "", className = "" }) => (
    <img
        src={src}
        alt={name}
        className={`w-6 h-6 sm:w-7 sm:h-7 object-contain ${className}`}
        loading="lazy"
        onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            img.onerror = null;
            img.src = fallbackSvg;
        }}
    />
);

const defaultItems: StackItem[] = [
    { id: 1, icon: <IconImg src="/icons/react.svg" name="React" />, nombre: "React", nivel: "Avanzado", barradenivel: 9, zone: "blue" },
    { id: 2, icon: <IconImg src="/icons/typescript.svg" name="TypeScript" />, nombre: "TypeScript", nivel: "Avanzado", barradenivel: 8, zone: "blue" },
    { id: 3, icon: <IconImg src="/icons/nodejs.svg" name="Node.js" />, nombre: "Node.js", nivel: "Intermedio", barradenivel: 8, zone: "red" },
    { id: 4, icon: <NextIcon />, nombre: "Next.js", nivel: "Avanzado", barradenivel: 7, zone: "blue" },
    { id: 5, icon: <GitIcon />, nombre: "Git & GitHub", nivel: "Experto", barradenivel: 8, zone: "red" },
    { id: 6, icon: <IconImg src="/icons/javascript.svg" name="JavaScript" />, nombre: "JavaScript", nivel: "Avanzado", barradenivel: 8, zone: "blue" },
    { id: 7, icon: <IconImg src="/icons/tailwindcss.svg" name="Tailwind CSS" />, nombre: "Tailwind CSS", nivel: "Avanzado", barradenivel: 7, zone: "blue" },
    { id: 8, icon: <IconImg src="/icons/python.svg" name="Python" />, nombre: "Python", nivel: "Intermedio", barradenivel: 8, zone: "blue" },
    { id: 9, icon: <IconImg src="/icons/vue.svg" name="Vue" />, nombre: "Vue", nivel: "Avanzado", barradenivel: 7, zone: "blue" },
    { id: 10, icon: <IconImg src="/icons/mysql.svg" name="MySQL" />, nombre: "MySQL", nivel: "Intermedio", barradenivel: 6, zone: "red" },
    { id: 11, icon: <IconImg src="/icons/astro.svg" name="Astro" />, nombre: "Astro", nivel: "Intermedio", barradenivel: 6, zone: "blue" },
];

function zoneFromLevel(level: number): Zone {
    if (level <= 3) return "red";
    if (level >= 7) return "blue";
    return "auto";
}

const MisStack: React.FC<{ items?: StackItem[] }> = ({ items = defaultItems }) => {
    const list = items;

    const chunkArray = <T,>(arr: T[], size: number): T[][] => {
        const chunks: T[][] = [];
        for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
        return chunks;
    };

    const rows = chunkArray(list, 5);

    // refs para cada tarjeta, para calcular su posición en pantalla
    const refs = useRef<Record<string, HTMLDivElement | null>>({});
    const [sideZones, setSideZones] = useState<Record<string, Zone>>({});

    useEffect(() => {
        if (typeof window === "undefined") return;

        const update = () => {
            const mid = window.innerWidth / 2;
            const newMap: Record<string, Zone> = {};
            list.forEach((it) => {
                const el = refs.current[String(it.id)];
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                newMap[String(it.id)] = centerX < mid ? "blue" : "red";
            });

            setSideZones((prev) => {
                const prevKeys = Object.keys(prev);
                const newKeys = Object.keys(newMap);
                if (prevKeys.length !== newKeys.length) return newMap;
                for (const k of newKeys) {
                    if (prev[k] !== newMap[k]) return newMap;
                }
                return prev;
            });
        };

        update();
        let raf = 0;
        const onResize = () => {
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(update);
        };
        window.addEventListener("resize", onResize);

        // observe cambios de tamaño de cada tarjeta para recalcular
        const observers: ResizeObserver[] = [];
        if (typeof ResizeObserver !== "undefined") {
            list.forEach((it) => {
                const el = refs.current[String(it.id)];
                if (el) {
                    const obs = new ResizeObserver(update);
                    obs.observe(el);
                    observers.push(obs);
                }
            });
        }

        return () => {
            window.removeEventListener("resize", onResize);
            observers.forEach((o) => o.disconnect());
            if (raf) cancelAnimationFrame(raf);
        };
    }, [list]);

    const colorClassForZone = (z: Zone) => {
        if (z === "red") return "bg-rose-400";
        if (z === "blue") return "bg-cyan-400";
        return "bg-amber-400";
    };

    return (
        <section className="my-10">
        <div className="relative mb-6">
          <div className="absolute -top-6 sm:-top-8 left-6 z-20 flex items-center gap-3 bg-[#070608] px-3 sm:px-4">
            <div className="w-6 sm:w-8 h-[2px] bg-cyan-400/90 rounded" />
            <h2 className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-cyan-200 font-semibold px-2">Mí Stack</h2>
            <div className="w-6 sm:w-8 h-[2px] bg-cyan-400/90 rounded" />
          </div>
            <div className="w-full flex flex-col gap-4">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {row.map((it) => {
                            const computedSide = sideZones[String(it.id)];
                            const zoneResolved: Zone = computedSide ?? (it.zone === "auto" ? zoneFromLevel(it.barradenivel) : (it.zone ?? zoneFromLevel(it.barradenivel)));
                            const fillPercent = Math.round((it.barradenivel / 10) * 100);
                            return (
                                <div key={it.id} ref={(el) => { refs.current[String(it.id)] = el; }} className="p-1 rounded-lg" style={{ background: 'linear-gradient(90deg, rgba(15,23,42,0.6), rgba(10,10,10,0.4))' }}>
                                    <div className="bg-slate-900/60 rounded-md p-4 h-full flex flex-col justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-black/30">{it.icon}</div>
                                            <div>
                                                <div className="text-slate-100 font-semibold">{it.nombre}</div>
                                                <div className="text-xs text-slate-300">{it.nivel}</div>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                                                <div
                                                    className={`${colorClassForZone(zoneResolved)} h-3 rounded-full transition-all duration-500`}
                                                    style={{ width: `${fillPercent}%` }}
                                                />
                                            </div>
                                            <div className="mt-2 text-xs text-slate-300">Nivel: {it.barradenivel} / 10</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
                        </div>
                    </div>
                </section>
    );
};

export default MisStack;
