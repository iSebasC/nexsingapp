"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const proyectos = [
  {
    img: "/proyectos/goinmuebles.png",
    title: "Landing Page",
    subtitle: "Página Web Inmobiliaria",
  },
  {
    img: "/proyectos/carpio.png",
    title: "Landing Page",
    subtitle: "Página Web Inmobiliaria",
  },
  {
    img: "/proyectos/gana-hoy.png",
    title: "Landing Page",
    subtitle: "Página Web Inmobiliaria",
  },
  {
    img: "/proyectos/4.png",
    title: "Landing Page",
    subtitle: "Página Web Inmobiliaria",
  },
];

const proyectosLoop = [...proyectos, ...proyectos];

export default function ProyectoCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  const [api, setApi] = React.useState<any>(null);

  return (
    <section
      id="proyectos"
      className="relative py-16 px-4 sm:px-6 md:px-8 lg:px-20 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left w-full relative">
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[plugin.current]}
          setApi={setApi}
          className="w-full animate-slide-in relative"
        >
          {/* Botones mobile dentro del carousel */}
          <div className="sm:hidden absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 z-10 pointer-events-none">
            <CarouselPrevious className="pointer-events-auto bg-[#020D3B] text-white rounded-full p-2 shadow-md" />
            <CarouselNext className="pointer-events-auto bg-[#020D3B] text-white rounded-full p-2 shadow-md" />
          </div>

          <CarouselContent className="flex -ml-2 sm:-ml-4">
            {proyectosLoop.map((proyecto, index) => (
              <CarouselItem
                key={index}
                className="w-full px-2 sm:basis-[80%] md:basis-[50%] lg:basis-[33%] xl:basis-[25%]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: (index % proyectos.length) * 0.15,
                  }}
                >
                  <Card className="overflow-hidden shadow-md rounded-2xl border border-gray-200 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 bg-white">
                    <CardContent className="flex flex-col items-center px-4 pb-6 gap-4">
                      <div className="w-full aspect-[4/3] overflow-hidden flex items-center justify-center bg-white">
                        <img
                          src={proyecto.img}
                          alt={proyecto.title}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div className="text-center w-full">
                        <h3 className="text-base md:text-lg font-semibold text-[#020D3B]">
                          {proyecto.title}
                        </h3>
                        <p className="text-sm text-gray-500">{proyecto.subtitle}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Botones desktop */}
          <div className="hidden sm:flex justify-between w-full mt-6 px-2">
            <CarouselPrevious className="bg-[#020D3B] text-white rounded-full p-3 hover:scale-110 transition" />
            <CarouselNext className="bg-[#020D3B] text-white rounded-full p-3 hover:scale-110 transition" />
          </div>
        </Carousel>

      </div>
    </section>
  );
}
