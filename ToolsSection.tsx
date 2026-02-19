import SectionHeader from "./SectionHeader";
import ToolCard from "./ToolCard";
import {
  FileText,
  BarChart3,
  Search,
  Globe,
  Ticket,
  Users,
  Heart,
  Shield,
  AlertTriangle,
  Database,
} from "lucide-react";

const tools = [
  {
    name: "SOFI",
    description:
      "Centralizador de solicitudes para los canales de ventas. Indicadores: ANS (tiempo de respuesta), Insatisfacción y SES (esfuerzo).",
    route: "#",
    utility: "Reporte de solicitudes",
    icon: <Ticket className="h-5 w-5" />,
  },
  {
    name: "Simón Ventas",
    description:
      "Sistema de información de Seguros Bolívar. Cotiza y emite pólizas, consulta bonificaciones y procesos internos.",
    route: "#",
    utility: "Cotización, emisión y bonificaciones",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    name: "Tronador",
    description:
      "Herramienta especializada para consultar pólizas vigentes, historial y detalles de cobertura.",
    route: "#",
    utility: "Consulta de pólizas",
    icon: <Search className="h-5 w-5" />,
  },
  {
    name: "Salesforce",
    description:
      "Plataforma CRM para la gestión integral de clientes y seguimiento de oportunidades comerciales.",
    route: "#",
    utility: "Gestión de clientes y oportunidades",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    name: "Jira",
    description:
      "Herramienta de gestión de proyectos y seguimiento de tareas para el equipo comercial.",
    route: "#",
    utility: "Gestión de proyectos y tareas",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    name: "Intranet",
    description:
      "Portal interno corporativo con recursos, comunicados y documentación de la compañía.",
    route: "#",
    utility: "Recursos y comunicados internos",
    icon: <Users className="h-5 w-5" />,
  },
  {
    name: "Aprecio",
    description:
      "Plataforma de reconocimiento y valoración del talento humano dentro de la organización.",
    route: "#",
    utility: "Reconocimiento de colaboradores",
    icon: <Heart className="h-5 w-5" />,
  },
  {
    name: "Quantum P",
    description:
      "Sistema de gestión y procesamiento de información para análisis de datos comerciales.",
    route: "#",
    utility: "Procesamiento de datos",
    icon: <Database className="h-5 w-5" />,
  },
  {
    name: "SARO",
    description:
      "Sistema de Administración de Riesgo Operativo. Conoce los riesgos asociados al área de Inteligencia.",
    route: "#",
    utility: "Gestión de riesgo operativo",
    icon: <AlertTriangle className="h-5 w-5" />,
  },
  {
    name: "Power BI",
    description:
      "Plataforma de visualización de datos e inteligencia de negocio con dashboards interactivos.",
    route: "#",
    utility: "Dashboards y reportes analíticos",
    icon: <Shield className="h-5 w-5" />,
  },
];

const ToolsSection = () => (
  <section className="py-20 px-6">
    <div className="mx-auto max-w-7xl">
      <SectionHeader
        title="Herramientas de Consulta"
        subtitle="Acceso directo a todas las plataformas y sistemas que necesitas para tu gestión comercial."
        id="herramientas"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.name} {...tool} />
        ))}
      </div>
    </div>
  </section>
);

export default ToolsSection;
