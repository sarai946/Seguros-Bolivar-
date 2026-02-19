import { ExternalLink } from "lucide-react";

interface ToolCardProps {
  name: string;
  description: string;
  route?: string;
  utility?: string;
  icon: React.ReactNode;
}

const ToolCard = ({ name, description, route, utility, icon }: ToolCardProps) => (
  <div className="group rounded-lg border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-card-foreground">{name}</h3>
    </div>
    <p className="mb-3 font-body text-sm text-muted-foreground leading-relaxed">{description}</p>
    {utility && (
      <p className="mb-3 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">Utilidad:</span> {utility}
      </p>
    )}
    {route && (
      <a
        href={route}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-foreground bg-accent/40 px-3 py-1.5 rounded-md hover:bg-accent/70 transition-colors"
      >
        Acceder <ExternalLink className="h-3.5 w-3.5" />
      </a>
    )}
  </div>
);

export default ToolCard;
