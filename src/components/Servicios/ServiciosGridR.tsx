"use client";

import React from "react";

const servicios = [
  {
    tag: "Web",
    title: "Desarrollo Web",
    description: "Sitios y apps web de alto rendimiento que convierten visitantes en clientes.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    tag: "Sistemas",
    title: "Sistemas & CRM",
    description: "Paneles administrativos y CRMs a medida que automatizan y escalan tu operación.",
    icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
  },
  {
    tag: "Diseño",
    title: "Diseño & Branding",
    description: "Identidad visual coherente: desde UI/UX moderno hasta branding completo.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    tag: "Digital",
    title: "Soluciones Digitales",
    description: "Estrategias que conectan tecnología y negocio para resultados medibles.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

export default function ServiciosGrid() {
  return (
    <section id="services" className="py-24 px-6 bg-[#050714] border-t border-white/[0.05]">

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Cabecera */}
        <div className="mb-16">
          <p className="text-xs font-medium text-[#6366f1] uppercase tracking-[0.15em] mb-5">Servicios</p>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Lo que construimos
          </h2>
        </div>

        {/* Grid 2×2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
          {servicios.map((s, i) => (
            <div
              key={i}
              className="group relative bg-[#050714] hover:bg-white/[0.025] transition-colors duration-300 p-8 md:p-10"
            >
              {/* Icono */}
              <div className="w-10 h-10 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </div>

              {/* Tag */}
              <p className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider mb-2">{s.tag}</p>

              {/* Título */}
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>

              {/* Descripción */}
              <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>

              {/* Arrow link */}
              <div className="mt-6 text-sm text-gray-600 group-hover:text-indigo-400 transition-colors duration-200 flex items-center gap-1.5">
                Saber más
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
