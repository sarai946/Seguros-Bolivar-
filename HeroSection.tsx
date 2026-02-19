import { useState, useEffect } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
    id: 1,
    image:
      "https://share.google/XXxATZ67M7XYArX5w",
    title: "¡Bienvenido a tu Centro de Inteligencia Comercial!",
    description:
      "Tu nueva herramienta para dominar los datos exclusivos de la Vicepresidencia de Canales Comerciales.",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2070&auto=format&fit=crop",
    title: "Tableros de consulta ",
    description:
      "Protege a conductores y pasajeros con nuestro SOAT. Cobertura completa en caso de accidentes viales.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    title: "Esquemas de bonificaciones",
    description:
      "La mejor protección para tu vehículo. Confía en nuestro servicio y experiencia en el mercado.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    title: "Equipo de Expertos a Tu Servicio",
    description:
      "Contamos con profesionales dedicados a brindarte la mejor asesoría y acompañamiento integral.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-gradient-to-br from-green-800 to-slate-800">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.25em] text-primary-foreground/70">
          Vicepresidencia Canales Comerciales
        </p>

        <h1 className="font-display text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
          {slides[current].title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-primary-foreground/80">
          {slides[current].description}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#herramientas"
            className="rounded-lg bg-accent px-6 py-3 font-body font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            Explorar Herramientas
          </a>
          <a
            href="#faq"
            className="rounded-lg border border-primary-foreground/30 px-6 py-3 font-body font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Preguntas Frecuentes
          </a>
        </div>
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-white/30 transition"
      >
        <ChevronLeft />
      </button>

      {/* Flecha derecha */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-white/30 transition"
      >
        <ChevronRight />
      </button>

      {/* Indicador abajo */}
      <a
        href="#herramientas"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/60"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default HeroSection;
