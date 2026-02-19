import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Herramientas", href: "#herramientas" },
  { label: "Tableros", href: "#tableros" },
  { label: "Canales", href: "#canales" },
  { label: "Bonificaciones", href: "#bonificaciones" },
  { label: "FAQ", href: "#faq" },
  { label: "Glosario", href: "#glosario" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center">     
  <img 
    src="/Seguros-Bolivar.png" 
    alt="Herramientas"
    className="h-12 w-auto"
  />
</a>

        <div className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="text-foreground md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-card px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 font-body text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

