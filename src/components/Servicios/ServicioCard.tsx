import { Card, CardContent } from "@/components/ui/card";

type Props = {
  icon: string;
  title: string;
  features: string[];
};

export default function ServicioCard({ icon, title, features }: Props) {
  return (
    <Card className="group w-full max-w-[360px] min-h-[370px] border border-blue-500 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out bg-white hover:bg-blue-600">
      <CardContent className="flex flex-col gap-4 items-start p-6">
        <img
          src={icon}
          alt={title}
          className="h-16 w-16 transition-colors duration-300 group-hover:invert group-hover:brightness-0 group-hover:filter"
        />
        <h3 className="text-lg font-bold text-[#2B2B2B] group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <ul className="space-y-2 text-sm text-[#2B2B2B] group-hover:text-white transition-colors duration-300 w-full">
          {features.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <img
                src="/services/check.svg"
                alt="✔"
                className="h-5 w-5 mt-1 transition-all duration-300 group-hover:invert group-hover:brightness-0 group-hover:filter"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
