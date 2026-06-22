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
  title = "Full stack Developer",
  subtitle = "",
  tagline = "No hago webs, Construyo experiencias y sueños",
}) => {
  return (
    <header className="relative py-16 md:py-20">
      <div className="container mx-auto px-6 text-center relative z-20">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-display">
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-rose-500 display-glitch"
            data-text={name}
          >
            {name}
          </span>
        </h1>

        <p className="mt-3 text-base sm:text-lg md:text-xl text-slate-200 font-subtitle">{title}</p>
        <p className="mt-2 text-sm text-slate-300 font-body">{subtitle}</p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10/12 max-w-xs sm:w-auto text-center inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-3 border border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 rounded-md transition text-sm sm:text-base font-button"
          >
            Ver proyectos
          </a>

          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10/12 max-w-xs sm:w-auto text-center inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-3 border border-rose-500 text-rose-300 hover:bg-rose-500/10 rounded-md transition text-sm sm:text-base font-button"
          >
            Contactar
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-300 italic max-w-2xl mx-auto font-body">{tagline}</p>
      </div>
    </header>
  );
};

export default Cabecera;
