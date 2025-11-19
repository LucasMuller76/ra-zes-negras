import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Entre em Contato
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Tem dúvidas ou sugestões? Envie uma mensagem!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
              Nome
            </label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-card border-border"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-card border-border"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
              Mensagem
            </label>
            <Textarea
              id="message"
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="bg-card border-border"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gold hover:bg-gold-dark text-primary font-semibold"
            size="lg"
          >
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
