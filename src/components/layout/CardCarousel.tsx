import { useState } from "react";
import { PROJECTS } from "../../data/content";

export default function ProjectCarousel() {
  const [projectIndex, setProjectIndex] = useState(0);

  const nextProject = () =>
    setProjectIndex((current) => (current + 1) % PROJECTS.length);
  const previousProject = () =>
    setProjectIndex(
      (current) => (current - 1 + PROJECTS.length) % PROJECTS.length,
    );

  // Mostramos 3 cards a partir del índice actual (o 1 en móvil mediante CSS)
  const visibleProjects = [0, 1, 2].map(
    (offset) => PROJECTS[(projectIndex + offset) % PROJECTS.length],
  );

  return (
    <>
      {/* Estructura Principal: [ BOTÓN IZQ ] [ CARDS ] [ BOTÓN DER ] */}
      <div className="grid w-full max-w-full grid-cols-[36px_minmax(0,1fr)_36px] md:grid-cols-[80px_1fr_80px]">
        {/* Botón Anterior (Alto Completo) */}
        <button
          onClick={previousProject}
          aria-label="Proyecto anterior"
          className="group flex items-center justify-center border-r-4 border-black bg-surface transition-all hover:bg-primary hover:text-white active:bg-black"
        >
          <span className="font-mono text-2xl font-black transition-transform group-hover:-translate-x-1 md:text-4xl">
            &lt;
          </span>
        </button>

        {/* Viewport de Cards — Brutalismo Industrial */}
        <div className="min-w-0 max-w-full p-2 sm:p-4 md:p-8">
          <div className="grid min-w-0 grid-cols-1 gap-3 sm:gap-6 lg:grid-cols-3">
            {visibleProjects.map((card, idx) => (
              <article
                key={`${card.name}-${idx}`}
                className={`group relative flex min-w-0 max-w-full flex-col justify-between border-4 border-black bg-surface p-3 transition-all duration-150 hover:bg-primary hover:text-white sm:p-5 md:p-8 ${
                  idx > 0 ? "hidden lg:flex" : "flex"
                }`}
              >
                {/* Header de la tarjeta */}
                <div className="flex items-center justify-between border-b-2 border-black pb-4 group-hover:border-white/30">
                  <span className="font-mono text-xs font-black uppercase tracking-widest">
                    [ {card.name} ]
                  </span>
                </div>

                {/* Visual / Frame Técnico (Reemplazo o styling de imagen) */}
                <div className="relative my-6 aspect-video w-full overflow-hidden border-2 border-black bg-neutral-900 group-hover:border-white">
                  {"source" in card && card.source ? (
                    <img
                      src={card.source}
                      alt={card.title}
                      className="h-full w-full object-cover grayscale contrast-125 transition-all duration-200 group-hover:grayscale-0"
                    />
                  ) : (
                    /* Fallback brutalista si no hay imagen */
                    <div className="flex h-full w-full flex-col justify-between p-4 font-mono text-[10px] text-neutral-400">
                      <div className="flex justify-between">
                        <span>SYS_ID // 0{idx + 1}</span>
                        <span className="text-emerald-500">● LIVE</span>
                      </div>
                      <div className="text-center font-black uppercase tracking-widest text-white text-xs">
                        ARCH // {card.name}
                      </div>
                      <div>ENV // PRODUCTION</div>
                    </div>
                  )}
                </div>

                {/* Contenido principal */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black uppercase leading-none tracking-tight sm:text-2xl md:text-3xl">
                      {card.title}
                    </h3>
                    <p className="mt-3 font-mono text-xs font-bold leading-relaxed opacity-90 md:text-sm">
                      {card.detail}
                    </p>
                  </div>

                  {/* Footer de la Card / Stack & CTA */}
                  <div className="mt-6 border-t-2 border-black/20 pt-4 group-hover:border-white/20">
                    {card.tags && (
                      <div className="mb-4 flex flex-wrap gap-1.5 font-mono text-[10px] font-bold">
                        {card.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="border border-black px-1.5 py-0.5 group-hover:border-white"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        {/* Botón Siguiente (Alto Completo) */}
        <button
          onClick={nextProject}
          aria-label="Proyecto siguiente"
          className="group flex items-center justify-center border-l-4 border-black bg-surface transition-all hover:bg-primary hover:text-white active:bg-black"
        >
          <span className="font-mono text-2xl font-black transition-transform group-hover:translate-x-1 md:text-4xl">
            &gt;
          </span>
        </button>
      </div>
    </>
  );
}
