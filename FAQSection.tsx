import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    q: "¿Dónde puedo pedir mi reliquidación?",
    a: "Puedes solicitar tu reliquidación a través de SOFI, creando un ticket en la categoría correspondiente. El equipo de Inteligencia Comercial procesará tu solicitud.",
  },
  {
    q: "¿Cómo sé qué negocios tengo proyectados?",
    a: "Consulta el tablero de proyecciones disponible en la sección de Tableros de Consulta para tu canal correspondiente.",
  },
  {
    q: "¿Con quién puedo tratar el tema de liquidaciones?",
    a: "Dependiendo de tu cargo (Vinculadores, Relacionistas, Asesores de Ventas, Directores de Ventas, Directores de Oficina, Directores Comerciales de Grupo, Directores de Fidelización, Gestores Junior, Promotores), contacta al equipo de Inteligencia Comercial a través de SOFI.",
  },
  {
    q: "¿Cómo se liquidan las bonificaciones?",
    a: "Las bonificaciones se liquidan según el esquema vigente para cada cargo (Asesor de Ventas, Director de Ventas, Director Comercial). Consulta la sección de Esquemas de Bonificaciones para ver las tablas y políticas aplicables.",
  },
  {
    q: "¿Qué es producción, recaudo y emisión?",
    a: "Producción: valor total de las pólizas vendidas. Recaudo: dinero efectivamente cobrado. Emisión: proceso de formalización de la póliza. Consulta el Glosario para más detalles.",
  },
  {
    q: "¿Cuáles son las condiciones para CNV?",
    a: "Las condiciones para la Convención Nacional de Ventas se encuentran en la presentación oficial. Consulta la sección de Concursos y Convenciones.",
  },
  {
    q: "¿Dónde puedo consultar mi detalle de bonificaciones?",
    a: "Puedes consultar el detalle de tus bonificaciones en los tableros Looker Studio de tu canal o en el tablero de liquidaciones.",
  },
];

const FAQSection = () => (
  <section className="py-20 px-6">
    <div className="mx-auto max-w-3xl">
      <SectionHeader
        title="Preguntas Frecuentes"
        subtitle="Respuestas rápidas a las consultas más comunes del equipo comercial."
        id="faq"
      />
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="font-body text-left text-base font-medium text-foreground">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="font-body text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
