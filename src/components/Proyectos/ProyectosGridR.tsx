"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { proyectos } from "@/data/proyectosData";

// Mapear categorías del español al inglés para compatibilidad
const categoriaMap = {
  "Product Design": "Gráfico",
  "Sistema Administrativo": "Web",
  "Web": "Web",
  "Branding": "Marca",
  "Graphic": "Gráfico",
  "Crowdfunding Inmobiliario": "Web",
  "Website Design": "Web"
};

const categorias = ["Todos", "Marca", "Web", "Gráfico"];

export default function ProyectosGridR() {
  const [filtroActivo, setFiltroActivo] = useState("Todos");

  // Convertir datos para usar con el filtro
  const proyectosConCategoria = proyectos.map(proyecto => ({
    ...proyecto,
    categoryEsp: categoriaMap[proyecto.categoria as keyof typeof categoriaMap] || "Web",
    subtituloCorto: proyecto.slug === "prestopolis-web" 
      ? "Crowdfunding inmobiliario seguro y eficiente." 
      : proyecto.slug === "hilink-dashboard"
      ? "Explora sin perderte, incluso sin señal."
      : proyecto.slug === "ganahoy-app"
      ? "Gestiona tus ahorros de forma inteligente y segura."
      : proyecto.descripcion.length > 60 
        ? proyecto.descripcion.substring(0, 60) + "..." 
        : proyecto.descripcion
  }));

  const proyectosFiltrados = filtroActivo === "Todos" 
    ? proyectosConCategoria 
    : proyectosConCategoria.filter(proyecto => proyecto.categoryEsp === filtroActivo);

  return (
    <div className="w-full">
      {/* Filtros */}
      <div className="flex flex-wrap justify-end gap-4 mb-12">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => setFiltroActivo(categoria)}
            className={`px-6 py-2 text-sm font-medium transition-all duration-300 relative ${
              filtroActivo === categoria
                ? "text-[#020D3B] dark:text-white font-semibold"
                : "text-gray-500 dark:text-gray-400 hover:text-[#020D3B] dark:hover:text-white"
            }`}
          >
            {categoria}
            {filtroActivo === categoria && (
              <motion.div
                layoutId="activeFilter"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1864EE]"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {proyectosFiltrados.map((proyecto, index) => (
            <motion.div
              key={`${filtroActivo}-${proyecto.slug}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group cursor-pointer"
            >
              <a href={`/proyecto/${proyecto.slug}`} className="block">
                <div className="bg-white dark:bg-[#1e293b] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1 border border-gray-100 dark:border-gray-600">
                  {/* Imagen del proyecto */}
                  <div className="aspect-[4/3] overflow-hidden relative bg-gray-100 dark:bg-[#27272e]">
                    <img
                      src={proyecto.imagen}
                      alt={proyecto.titulo}
                      className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#020D3B] dark:text-white mb-1 transition-colors duration-300">
                      {proyecto.titulo}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
                      {proyecto.subtituloCorto}
                    </p>
                    
                    {/* Badge de categoría */}
                    <div className="mt-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-[#F6F3FE] dark:bg-[#27272e] text-[#1864EE] rounded-full transition-colors duration-300">
                        {proyecto.categoryEsp}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
