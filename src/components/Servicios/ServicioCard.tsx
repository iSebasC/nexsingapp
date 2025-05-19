import { Card, CardContent } from "@/components/ui/card";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function ServicioCard({ icon, title, description }: Props) {
  return (
    <Card className="group w-full max-w-[360px] min-h-[280px] border border-gray-200 hover:border-blue-500 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out bg-white hover:bg-blue-600 rounded-2xl">
      <CardContent className="flex flex-col gap-4 items-start p-6">
        <div className="transition-colors duration-300 group-hover:invert group-hover:brightness-0 group-hover:filter">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-[#2B2B2B] group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-[#2B2B2B] group-hover:text-white transition-colors duration-300">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
