import ServicioCard from "./ServicioCard";
import ServicioIcon from "../icons/ServicioIcon";


export default function ServiciosGrid() {
  return (
    <section id="services" className="relative flex flex-col justify-center items-start text-left min-h-screen px-6 md:px-12 overflow-hidden bg-white dark:bg-[#27272e]">

      {/* Contenido */}
      <div className="relative z-10 w-full px-6 md:px-12 pt-32 sm:pt-36 md:pt-40 pb-32 sm:pb-40">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-12">
            <div className="inline-block rounded-full px-4 py-1 text-sm font-medium bg-[#F6F3FE] dark:bg-[#1e293b] mb-3">
              <span className="text-[#020D3B] dark:text-white font-black">SERV</span>
              <span className="text-[#1864EE] font-black">ICIOS</span>
            </div>
            <p className="text-[#2563eb] italic border-l-4 border-[#2563eb] pl-4 max-w-xl dark:text-blue-400 dark:border-blue-400">
              Aprovecha estrategias digitales efectivas para posicionarte y destacar en el mercado.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center w-full">
            <ServicioCard
              icon={<ServicioIcon type="uiux" />}
              title="UI/UX & Diseño de Interfaces"
              description="Diseñamos interfaces modernas, funcionales y centradas en el usuario para garantizar una experiencia digital intuitiva y eficiente."
            />
            <ServicioCard
              icon={<ServicioIcon type="web" />}
              title="Desarrollo Web"
              description="Creamos sitios y aplicaciones web a medida, enfocados en rendimiento, seguridad y adaptabilidad a distintos dispositivos."
            />
            <ServicioCard
              icon={<ServicioIcon type="design" />}
              title="Diseño Gráfico, Branding - Marca"
              description="Desarrollamos identidades visuales coherentes y memorables, desde logotipos hasta material gráfico para fortalecer la imagen de marca."
            />
            <ServicioCard
              icon={<ServicioIcon type="support" />}
              title="Capacitación y Soporte Técnico"
              description="Ofrecemos soporte continuo y capacitaciones claras para que nuestros clientes puedan gestionar sus plataformas de manera autónoma y segura."
            />
          </div>
        </div>
      </div>
    </section>
  );
}