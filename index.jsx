import HeroCarousel from "@/components/HeroCarousel";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroCarousel />

      {/* Aquí puedes seguir agregando secciones */}
      <section className="py-20 px-10">
        <h2 className="text-3xl font-bold mb-6">
          Bienvenido al Centro de Inteligencia Comercial
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Este portal es su acceso único y directo a herramientas,
          procesos, tableros estratégicos y recursos clave de la
          Vicepresidencia de Canales Comerciales.
        </p>
      </section>
    </div>
  );
};

export default Index;
