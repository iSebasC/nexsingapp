import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const proyectos = [
  {
    img: "/proyectos/4.png",
    categoria: "Product Design",
    titulo: "Business Task Management Dashboard",
    color: "text-[#1864EE]",
    slug: "hilink-dashboard",
  },
  {
    img: "/proyectos/carpio.png",
    categoria: "Website Design",
    titulo: "Business Consulting Web Explorations",
    color: "text-[#1864EE]",
    slug: "carpio-web",
  },
  {
    img: "/proyectos/gana-hoy.png",
    categoria: "Product Design",
    titulo: "Mobile Applications Design",
    color: "text-[#1864EE]",
    slug: "ganahoy-app",
  },
  {
    img: "/proyectos/goinmuebles.png",
    categoria: "Website Design",
    titulo: "Real Estate Website Design",
    color: "text-[#1864EE]",
    slug: "goinmuebles-landing",
  },
];

export default function ProyectosCards() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Texto debajo del título */}
      <div className="mb-12 text-center">
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Aquí puedes explorar algunos de nuestros proyectos más recientes,
          cuidadosamente diseñados para impactar y destacar.
        </p>
      </div>

      {/* Grid de tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectos.map((proyecto, index) => (
          <Card
            key={index}
            className="overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white flex flex-col justify-between"
          >
            <img
              src={proyecto.img}
              alt={proyecto.titulo}
              className="w-full h-40 object-contain bg-white px-6 pt-6 pb-2 mx-auto"
            />
            <CardContent className="p-4 text-center">
              <p className={`text-sm font-medium ${proyecto.color}`}>
                {proyecto.categoria}
              </p>
              <h3 className="text-lg font-semibold text-[#020D3B] mt-1 mb-4">
                {proyecto.titulo}
              </h3>

              {/* ✅ Botón funcional para Astro */}
              <a
                href={`/proyecto/${proyecto.slug}`}
                className="inline-flex items-center text-[#1864EE] font-semibold text-sm hover:underline hover:gap-2 transition-all duration-200"
              >
                Ver detalles
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
