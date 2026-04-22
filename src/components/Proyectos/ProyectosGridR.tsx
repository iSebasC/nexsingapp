"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { proyectos } from "@/data/proyectosData";

const categoriaMap: Record<string, string> = {
  "Product Design":            "Diseño",
  "Sistema Administrativo":    "Sistema",
  "Web":                       "Web",
  "Branding":                  "Branding",
  "Graphic":                   "Diseño",
  "Crowdfunding Inmobiliario": "Web",
  "Website Design":            "Web",
};

const categorias = ["Todos", "Web", "Sistema", "Diseño"];

export default function ProyectosGridR() {
  const [filtroActivo, setFiltroActivo] = useState("Todos");

  const proyectosConCategoria = proyectos.map((p) => ({
    ...p,
    categoryEsp: categoriaMap[p.categoria] ?? "Web",
    stackSlice: (p.stack ?? []).slice(0, 3) as string[],
  }));

  const filtrados =
    filtroActivo === "Todos"
      ? proyectosConCategoria
      : proyectosConCategoria.filter((p) => p.categoryEsp === filtroActivo);

  return (
    <div className="w-full">

      {/* Filtros */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-10 border-b border-white/[0.06] pb-5">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setFiltroActivo(cat)}
            className={`text-sm font-medium transition-colors duration-150 ${
              filtroActivo === cat
                ? "text-white"
                : "text-[#4b5563] hover:text-[#9ca3af]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtrados.map((proyecto, index) => (
            <motion.div
              key={`${filtroActivo}-${proyecto.slug}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.2, delay: index * 0.04 }}
            >
              <a
                href={`/proyecto/${proyecto.slug}`}
                className="group flex flex-col h-full min-h-[200px] rounded-xl border border-white/[0.08] bg-[#050714] hover:border-white/[0.14] hover:bg-white/[0.02] transition-all duration-200"
              >
                <div className="flex flex-col flex-1 p-5">

                  {/* Fila superior: categoría + región */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-semibold text-[#6366f1] uppercase tracking-[0.12em]">
                      {proyecto.categoryEsp}
                    </span>
                    {proyecto.region && (
                      <span className="text-[10px] text-[#374151] font-medium">
                        {proyecto.region}
                      </span>
                    )}
                  </div>

                  {/* Título de negocio — primario */}
                  <h3 className="text-sm font-semibold text-[#e5e7eb] group-hover:text-white leading-snug transition-colors duration-150 mb-1">
                    {proyecto.tituloNegocio}
                  </h3>

                  {/* Nombre de marca — secundario */}
                  <p className="text-[11px] text-[#374151] mb-3">
                    {proyecto.titulo}
                  </p>

                  {/* Descripción */}
                  <p className="text-xs text-[#4b5563] leading-relaxed line-clamp-2">
                    {proyecto.descripcion}
                  </p>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Stack */}
                  {proyecto.stackSlice.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-4 border-t border-white/[0.05]">
                      {proyecto.stackSlice.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-medium text-[#4b5563] px-2 py-0.5 rounded border border-white/[0.07]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
}
