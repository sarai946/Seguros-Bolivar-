import SectionHeader from "./SectionHeader";

const terms = [
  { term: "Indicador", def: "Métrica cuantitativa o cualitativa que permite medir el desempeño de un proceso o actividad comercial." },
  { term: "Sinergia entre canales", def: "Colaboración estratégica entre los canales GH y A&A para maximizar la producción y cobertura." },
  { term: "Plan Comercial", def: "Documento estratégico que define las metas, acciones y recursos para alcanzar los objetivos de ventas." },
  { term: "Emisión", def: "Proceso de formalización y generación de una póliza de seguros." },
  { term: "Producción", def: "Valor total de las primas de las pólizas vendidas en un periodo determinado." },
  { term: "Recaudo", def: "Monto efectivamente cobrado de las primas de seguros." },
  { term: "Póliza", def: "Contrato de seguro que establece las condiciones de cobertura entre la aseguradora y el asegurado." },
  { term: "Endoso", def: "Modificación o adición realizada a una póliza de seguros vigente." },
  { term: "Riesgo", def: "Probabilidad de ocurrencia de un evento adverso cubierto por el seguro." },
  { term: "Siniestro", def: "Evento o incidente cubierto por la póliza que genera una reclamación." },
  { term: "Indemnización", def: "Compensación económica que la aseguradora paga al asegurado tras un siniestro." },
  { term: "CNV", def: "Convención Nacional de Ventas — evento anual de reconocimiento al desempeño comercial." },
  { term: "GPS", def: "Gestión de Plan Estratégico — herramienta de seguimiento al plan comercial." },
];

const GlossarySection = () => (
  <section className="bg-muted/50 py-20 px-6">
    <div className="mx-auto max-w-5xl">
      <SectionHeader
        title="Glosario de Términos"
        subtitle="Definiciones clave del negocio de seguros y la gestión comercial."
        id="glosario"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {terms.map((t) => (
          <div
            key={t.term}
            className="rounded-lg border border-border bg-card p-4 shadow-card"
          >
            <h4 className="font-display text-base font-semibold text-foreground">
              {t.term}
            </h4>
            <p className="mt-1 font-body text-sm text-muted-foreground leading-relaxed">
              {t.def}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GlossarySection;
