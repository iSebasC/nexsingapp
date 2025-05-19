import { Card } from "@/components/ui/card"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBehance
} from "react-icons/fa"
import type { ReactNode } from "react"

type TeamCardProps = {
  name: string
  role: string
  image: string
  social: string[]
}

const iconMap: Record<string, ReactNode> = {
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedinIn />,
  behance: <FaBehance />
}

export function TeamCard({ name, role, image, social }: TeamCardProps) {
  return (
    <Card className="w-[280px] bg-white shadow-md rounded-2xl overflow-hidden">
      <div className="h-[220px] w-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="flex justify-between items-start px-4 py-4">
        <div>
          <h3 className="font-semibold text-[#020D3B] text-sm">{name}</h3>
          <p className="text-xs text-gray-500">{role}</p>
        </div>

        <div className="relative group">
          {/* Redes sociales */}
          <div className="absolute bottom-10 right-1 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            {social.map((name, i) => (
              <div
                key={i}
                className="w-7 h-7 bg-[#1864EE] text-white rounded-full flex items-center justify-center text-xs hover:scale-110 transition"
              >
                {iconMap[name]}
              </div>
            ))}
          </div>

          {/* Botón + */}
          <button className="w-7 h-7 rounded-full bg-[#1864EE] text-white flex items-center justify-center text-xs shadow-md hover:rotate-90 transition-transform duration-300 relative z-20">
            +
          </button>
        </div>
      </div>
    </Card>
  )
}
