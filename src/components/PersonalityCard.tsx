import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface PersonalityCardProps {
  name: string;
  description: string;
  fullBio: string;
  imagePlaceholder: string;
}

const PersonalityCard = ({ name, description, fullBio, imagePlaceholder }: PersonalityCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card 
        className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-2 duration-300 border-border bg-card"
        onClick={() => setIsOpen(true)}
      >
        <CardContent className="p-6 text-center">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center text-4xl">
            {imagePlaceholder}
          </div>
          <h3 className="text-xl font-bold mb-2 text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">{name}</DialogTitle>
          </DialogHeader>
          <div className="prose prose-sm max-w-none">
            <p className="text-foreground whitespace-pre-line">{fullBio}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PersonalityCard;
