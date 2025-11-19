import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "História", href: "#historia" },
    { label: "Personalidades", href: "#personalidades" },
    { label: "Cultura", href: "#cultura" },
    { label: "Linha do Tempo", href: "#timeline" },
    { label: "Galeria", href: "#galeria" },
    { label: "Recursos", href: "#recursos" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="text-2xl font-bold text-foreground">
            Consciência <span className="text-gold">Negra</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-gold transition-colors relative"
              >
                <span className="inline-block transition-transform duration-200 hover:translate-y-[-1px]">
                  {item.label}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-gold transition-all" />
              </a>
            ))}
            <Button className="bg-gold hover:bg-gold-dark text-primary transition-transform hover:scale-[1.02] relative overflow-hidden">
              <span className="absolute inset-0 animated-shimmer opacity-0 hover:opacity-100 transition-opacity" />
              Saiba Mais
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 flex flex-col gap-3">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-gold hover:bg-gold-dark text-primary mt-2 transition-transform hover:scale-[1.02] relative overflow-hidden">
              <span className="absolute inset-0 animated-shimmer opacity-0 hover:opacity-100 transition-opacity" />
              Saiba Mais
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
