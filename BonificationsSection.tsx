import SectionHeader from "./SectionHeader";
import { CheckCircle, DollarSign } from "lucide-react";

const cargos = [
  {
    cargo: "Asesor de Ventas",
    items: ["Tabla de producción mensual", "Bonificación por recaudo", "Incentivo por nuevos negocios"],
  },
  {
    cargo: "Director de Ventas",
    items: ["Bonificación por equipo", "Cumplimiento de meta grupal", "Incentivo GPS"],
  },
  {
    cargo: "Director Comercial de Grupo",
    items: ["Bonificación consolidada", "Indicador de crecimiento", "Meta de canal"],
  },
  {
    cargo: "Director de Oficina",
    items: ["Producción de oficina", "Indicadores de servicio", "Metas de renovación"],
  },
];

const BonificationsSection = () => (
  <section className="bg-muted/50 py-20 px-6">
    <div className="mx-auto max-w-7xl">
      <SectionHeader
        title="Esquemas de Bonificaciones"
        subtitle="Consulta las tablas, políticas y calendarios de bonificaciones por cargo."
        id="bonificaciones"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cargos.map((c) => (
          <div key={c.cargo} className="rounded-lg border border-border bg-card p-5 shadow-card">
            <div className="mb-3 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-accent" />
              <h4 className="font-display text-base font-semibold text-card-foreground">{c.cargo}</h4>
            </div>
            <ul className="space-y-2">
              {c.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BonificationsSection;
