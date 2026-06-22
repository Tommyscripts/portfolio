import React from "react";

const TrabajemosJuntos: React.FC = () => {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-lg bg-transparent backdrop-blur-sm p-8 flex flex-col items-center overflow-visible">
          <p className="text-slate-200 italic text-center text-sm sm:text-base font-body">
            A veces el codigo no falla... <span className="font-semibold text-white font-body">Solo espera a estar en producción</span>
          </p>

          <div className="mt-6 flex flex-col items-center">
            <div className="h-1 w-48 sm:w-72 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-200 mb-6 shadow-[0_0_20px_rgba(56,189,248,0.7)]" />

            <a href="https://www.linkedin.com/in/javierescoz/" target="_blank" rel="noopener noreferrer" className="relative inline-block group">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 64" preserveAspectRatio="none" aria-hidden>
                <defs>
                  <linearGradient id="grad-trabajemos" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#fb7185" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="416" height="60" rx="10" fill="none" stroke="url(#grad-trabajemos)" strokeWidth="4" />
              </svg>

              <span className="relative z-10 inline-block rounded-md px-16 py-4 bg-black/80 text-white font-semibold text-xl sm:text-2xl font-button">
                Trabajemos juntos
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrabajemosJuntos;
