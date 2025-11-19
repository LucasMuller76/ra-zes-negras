import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Consciência Negra
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gold animate-fade-in">
          História, Identidade e Resistência
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
          Uma jornada pela história, cultura e conquistas da população negra no Brasil e no mundo
        </p>
        <Button 
          size="lg" 
          className="bg-gold hover:bg-gold-dark text-primary font-semibold text-lg px-8 py-6 transition-transform duration-300 hover:scale-[1.03] relative overflow-hidden"
          onClick={() => document.getElementById('o-que-e')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="absolute inset-0 animated-shimmer opacity-0 hover:opacity-100 transition-opacity" />
          Explorar
          <ChevronDown className="ml-2" />
        </Button>
        <p className="mt-6 text-sm md:text-base opacity-80 animate-fade-in">
          Feito por Lucas Muller e Eduardo Gregory
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-primary-foreground" size={32} />
      </div>
    </section>
  );
};

export default Hero;
