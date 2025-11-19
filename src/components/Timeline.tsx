import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  details: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1500",
    title: "Chegada dos Primeiros Africanos",
    description: "Início do tráfico de africanos escravizados para o Brasil",
    details: "Com a colonização portuguesa, milhões de africanos foram trazidos à força para o Brasil. Vinham principalmente da África Ocidental e Central, de diversas etnias como iorubás, bantos, jejes e nagôs. Essa diáspora forçada marcou o início de séculos de exploração, mas também da resistência e da formação da identidade afro-brasileira."
  },
  {
    year: "1600-1694",
    title: "Quilombo dos Palmares",
    description: "Maior símbolo de resistência negra no Brasil",
    details: "O Quilombo dos Palmares, localizado na Serra da Barriga (atual Alagoas), foi o maior e mais duradouro quilombo brasileiro. Liderado por Ganga Zumba e depois por Zumbi, chegou a abrigar mais de 20 mil pessoas. Representou uma sociedade alternativa baseada na liberdade, igualdade e autogestão, resistindo por quase um século aos ataques coloniais."
  },
  {
    year: "1695",
    title: "Morte de Zumbi dos Palmares",
    description: "20 de novembro - data que marca o Dia da Consciência Negra",
    details: "Em 20 de novembro de 1695, Zumbi dos Palmares foi morto após ser traído. Líder guerreiro e símbolo de resistência, Zumbi lutou até o fim pela liberdade de seu povo. Sua morte não representou o fim da luta, mas sim o nascimento de um símbolo eterno de resistência e liberdade. Por isso, o dia 20 de novembro é celebrado como o Dia da Consciência Negra."
  },
  {
    year: "1888",
    title: "Lei Áurea",
    description: "Abolição formal da escravatura no Brasil",
    details: "Em 13 de maio de 1888, a Princesa Isabel assinou a Lei Áurea, que aboliu oficialmente a escravidão no Brasil - último país das Américas a fazê-lo. Porém, a abolição não veio acompanhada de políticas de inclusão ou reparação. Os ex-escravizados foram abandonados à própria sorte, sem terras, educação ou oportunidades, o que criou as bases do racismo estrutural que persiste até hoje."
  },
  {
    year: "1978",
    title: "Movimento Negro Unificado",
    description: "Fundação do MNU - marco do movimento negro moderno",
    details: "Em 7 de julho de 1978, nas escadarias do Teatro Municipal de São Paulo, foi fundado o Movimento Negro Unificado (MNU). Surgiu como resposta à discriminação racial e à violência policial. O MNU unificou diversos grupos e marcou uma nova fase da luta antirracista no Brasil, pautando discussões sobre igualdade racial, representatividade e políticas públicas."
  },
  {
    year: "2003",
    title: "Lei 10.639",
    description: "Obrigatoriedade do ensino de história afro-brasileira",
    details: "A Lei 10.639/2003 tornou obrigatório o ensino da história e cultura afro-brasileira e africana nas escolas públicas e privadas. Foi um marco na educação brasileira, reconhecendo a importância de valorizar e preservar a contribuição negra na formação da sociedade. A lei busca combater o racismo através da educação e da valorização da diversidade."
  },
  {
    year: "2010",
    title: "Estatuto da Igualdade Racial",
    description: "Lei que institui o Estatuto da Igualdade Racial",
    details: "O Estatuto da Igualdade Racial (Lei 12.288/2010) estabelece diretrizes para a promoção da igualdade racial e o combate à discriminação. Prevê ações afirmativas em diversas áreas como saúde, educação, cultura, esporte, lazer e trabalho. Foi resultado de anos de luta do movimento negro por políticas públicas efetivas de combate ao racismo."
  },
  {
    year: "2020",
    title: "Black Lives Matter",
    description: "Movimento global contra o racismo ganha força",
    details: "O movimento Black Lives Matter, iniciado nos EUA após assassinatos de pessoas negras, ganhou dimensão global em 2020. No Brasil, intensificou debates sobre violência policial, racismo estrutural e representatividade. Mobilizou milhões de pessoas em protestos e impulsionou mudanças em empresas, instituições e na sociedade, destacando que vidas negras importam."
  }
];

const Timeline = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="timeline" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Linha do Tempo
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Momentos históricos importantes na luta pela liberdade e igualdade
        </p>

        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-gold last:border-0">
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-gold" />
              <Card 
                className="cursor-pointer hover:shadow-lg transition-all border-border bg-card"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-gold text-primary text-sm font-bold rounded-full mb-2">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                      {expandedIndex === index && (
                        <p className="mt-4 text-foreground leading-relaxed">
                          {event.details}
                        </p>
                      )}
                    </div>
                    {expandedIndex === index ? (
                      <ChevronUp className="text-gold flex-shrink-0" />
                    ) : (
                      <ChevronDown className="text-gold flex-shrink-0" />
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
