import SectionHeader from "./SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, FileText, Calendar, DollarSign, Target, ArrowRightLeft } from "lucide-react";

interface InfoBlock {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const ghInfo: InfoBlock[] = [
  {
    icon: <Target className="h-5 w-5" />,
    title: "Momentum 2025 — Estrategias",
    items: ["GPS — Gestión de Plan Estratégico", "Metas y Plan Comercial GH"],
  },
  {
    icon: <DollarSign className="h-5 w-5" />,
    title: "Esquemas de Bonificaciones",
    items: ["Separación por cargo", "Políticas vigentes", "Explicación de tablas", "Calendario de pagos"],
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Embudo Comercial",
    items: ["Proyecciones", "Explicación de Nuevos y Renovaciones", "Cambios de proyección o clave", "Segmentación"],
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    title: "Reportes y Concursos",
    items: ["Reporte de viáticos (política adjunta)", "Concursos internos", "Convención Nacional de Ventas"],
  },
];

const aaInfo: InfoBlock[] = [
  {
    icon: <Target className="h-5 w-5" />,
    title: "Momentum 2025 — Estrategias",
    items: ["Plan Comercial Metas A&A 2025", "Embudo Comercial"],
  },
  {
    icon: <DollarSign className="h-5 w-5" />,
    title: "Esquemas de Bonificaciones",
    items: ["Compensación Ejecutivos A&A 2025", "Separación por cargo", "Políticas y tablas", "Subcomisiones: Vida, Autos, Pymes"],
  },
  {
    icon: <ArrowRightLeft className="h-5 w-5" />,
    title: "Sinergia entre Canales",
    items: ["Producción Espejo GH", "Formulario de reporte", "Estrategia de sinergia"],
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Reportes y Estructura",
    items: [
      "Cómo reportar cambios de estructura",
      "Fechas de reporte y visualización",
      "Concursos internos",
      "Segmentación de intermediarios",
    ],
  },
];

const InfoBlockCard = ({ block }: { block: InfoBlock }) => (
  <div className="rounded-lg border border-border bg-card p-5 shadow-card">
    <div className="mb-3 flex items-center gap-2 text-primary">
      {block.icon}
      <h4 className="font-display text-lg font-semibold text-card-foreground">{block.title}</h4>
    </div>
    <ul className="space-y-2">
      {block.items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
          <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ChannelsSection = () => (
  <section className="py-20 px-6">
    <div className="mx-auto max-w-7xl">
      <SectionHeader
        title="Detalle de Canal"
        subtitle="Información específica por canal: estrategias, bonificaciones, reportes y más."
        id="canales"
      />
      <Tabs defaultValue="gh" className="w-full">
        <TabsList className="mb-6 grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="gh" className="font-body font-semibold">Grupos Homogéneos</TabsTrigger>
          <TabsTrigger value="aa" className="font-body font-semibold">Agentes & Agencias</TabsTrigger>
        </TabsList>
        <TabsContent value="gh">
          <div className="grid gap-6 sm:grid-cols-2">
            {ghInfo.map((block) => (
              <InfoBlockCard key={block.title} block={block} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="aa">
          <div className="grid gap-6 sm:grid-cols-2">
            {aaInfo.map((block) => (
              <InfoBlockCard key={block.title} block={block} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </section>
);

export default ChannelsSection;
