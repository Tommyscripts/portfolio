import React from "react";

type Props = {
  githubUrl?: string;
  linkedInUrl?: string;
  name?: string;
  title?: string;
  subtitle?: string;
  tagline?: string;
};

const Cabecera: React.FC<Props> = ({
  githubUrl = "https://github.com/Tommyscripts?tab=repositories",
  linkedInUrl = "https://www.linkedin.com/in/javierescoz/",
  name = "Javier Cabrera Escoz",
  title = "Fuck stack Developer",
  subtitle = "",
  tagline = "No hago webs, Construyo experiencias y sueños",
}) => {
  return (
    <header className="relative py-20">
      <div className="container mx-auto px-6 text-center relative z-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-rose-500">
            {name}
          </span>
        </h1>
        <p className="mt-4 text-xl text-slate-200">{title}</p>
        <p className="mt-2 text-sm text-slate-300">{subtitle}</p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-3 border border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 rounded-md transition"
          >
            Ver proyectos
          </a>

          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-3 border border-rose-500 text-rose-300 hover:bg-rose-500/10 rounded-md transition"
          >
            Contactar
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-300 italic">{tagline}</p>
      </div>
    </header>
  );
};

export default Cabecera;
