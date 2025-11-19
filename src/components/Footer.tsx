const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Consciência Negra</h3>
            <p className="text-sm">
              Site educacional dedicado à história, cultura e conquistas da população negra.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-gold transition-colors">Início</a></li>
              <li><a href="#historia" className="hover:text-gold transition-colors">História</a></li>
              <li><a href="#personalidades" className="hover:text-gold transition-colors">Personalidades</a></li>
              <li><a href="#cultura" className="hover:text-gold transition-colors">Cultura</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#recursos" className="hover:text-gold transition-colors">Material Educativo</a></li>
              <li><a href="#timeline" className="hover:text-gold transition-colors">Linha do Tempo</a></li>
              <li><a href="#galeria" className="hover:text-gold transition-colors">Galeria</a></li>
              <li><a href="#contato" className="hover:text-gold transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm">
          <p>© 2024 Consciência Negra. Todos os direitos reservados.</p>
          <p className="mt-2 text-gold">20 de Novembro - Dia da Consciência Negra</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
