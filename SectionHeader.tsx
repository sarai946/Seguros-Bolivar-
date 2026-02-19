interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id?: string;
}

const SectionHeader = ({ title, subtitle, id }: SectionHeaderProps) => (
  <div id={id} className="mb-8 scroll-mt-24">
    <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
      {title}
    </h2>
    <div className="mt-2 h-1 w-16 rounded-full bg-accent" />
    {subtitle && (
      <p className="mt-3 max-w-2xl font-body text-lg text-muted-foreground">{subtitle}</p>
    )}
  </div>
);

export default SectionHeader;
