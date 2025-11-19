import { Book, Music, Palette, Users } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PersonalityCard from "@/components/PersonalityCard";
import Timeline from "@/components/Timeline";

import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import africanCivilization from "@/assets/african-civilization.jpg";
import cultureCelebration from "@/assets/culture-celebration.jpg";
import quilombo from "@/assets/quilombo.jpg";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const personalities = [
    {
      name: "Zumbi dos Palmares",
      description: "Líder do Quilombo dos Palmares",
      imagePlaceholder: "👑",
      fullBio: `Zumbi dos Palmares (1655-1695) foi o último líder do Quilombo dos Palmares, o maior quilombo do período colonial brasileiro. Nascido livre em Palmares, foi capturado ainda criança e criado por um padre jesuíta, que lhe deu o nome Francisco e lhe ensinou português e latim.

Aos 15 anos, Zumbi fugiu e retornou a Palmares, onde se tornou um dos principais líderes militares. Quando Ganga Zumba, então líder de Palmares, aceitou um tratado de paz com os portugueses em 1678, Zumbi recusou-se a aceitar e tornou-se o novo líder, defendendo a liberdade total.

Sob sua liderança, Palmares resistiu a diversos ataques das forças coloniais. Zumbi era conhecido por sua inteligência estratégica e coragem. Em 1694, Palmares foi destruído após um grande ataque, mas Zumbi continuou resistindo. Foi traído por um companheiro e assassinado em 20 de novembro de 1695.

Sua cabeça foi cortada, salgada e exposta em praça pública em Recife, como forma de desmentir a crença na imortalidade de Zumbi. Hoje, ele é símbolo da resistência negra e da luta pela liberdade no Brasil.`
    },
    {
      name: "Dandara",
      description: "Guerreira do Quilombo dos Palmares",
      imagePlaceholder: "⚔️",
      fullBio: `Dandara foi uma guerreira negra que lutou ao lado de Zumbi dos Palmares pela liberdade no Quilombo dos Palmares. Esposa de Zumbi, ela foi muito mais que uma companheira: foi uma líder militar e estrategista fundamental na defesa do quilombo.

Dandara dominava técnicas de capoeira e participava ativamente das batalhas, planejando estratégias de defesa e liderando grupos de combatentes. Era respeitada por sua coragem, determinação e habilidades de liderança.

Ela também tinha papel importante nas decisões políticas de Palmares e na organização da comunidade. Dandara lutou pela manutenção do quilombo como território livre e defendeu que Palmares nunca deveria negociar sua liberdade com os colonizadores.

Após a destruição de Palmares em 1694, segundo relatos históricos, Dandara teria se recusado a voltar à condição de escrava e preferiu se jogar de uma pedreira, escolhendo a morte em liberdade. Sua história representa a força, resistência e protagonismo das mulheres negras na luta pela liberdade.`
    },
    {
      name: "Luiz Gama",
      description: "Advogado, jornalista e abolicionista",
      imagePlaceholder: "⚖️",
      fullBio: `Luiz Gonzaga Pinto da Gama (1830-1882) foi um dos maiores abolicionistas do Brasil. Filho de Luísa Mahin, uma africana livre envolvida em revoltas de escravizados na Bahia, Gama foi vendido ilegalmente como escravo aos 10 anos por seu próprio pai para pagar dívidas de jogo.

Conseguiu se alforriar aos 18 anos ao provar que sua escravização havia sido ilegal. Autodidata brilhante, aprendeu a ler e escrever e tornou-se escritor, jornalista e um dos primeiros advogados negros do Brasil, mesmo sem diploma formal.

Gama dedicou sua vida à luta abolicionista, atuando como advogado "rábula" e libertando mais de 500 pessoas escravizadas através de ações judiciais. Usava argumentos jurídicos para provar a ilegalidade de diversas escravizações e era temido pelos escravistas.

Foi também poeta, publicando "Primeiras Trovas Burlescas" (1859), obra que já manifestava crítica ao racismo. Era republicano convicto e maçom. Morreu em 1882, seis anos antes da abolição, mas seu legado continuou inspirando a luta pela liberdade e igualdade.`
    },
    {
      name: "Machado de Assis",
      description: "Maior escritor brasileiro",
      imagePlaceholder: "📚",
      fullBio: `Joaquim Maria Machado de Assis (1839-1908) é considerado o maior escritor brasileiro de todos os tempos e um dos maiores da língua portuguesa. Neto de escravizados libertos, nasceu no Morro do Livramento, no Rio de Janeiro, em uma família humilde.

Autodidata, superou a pobreza e o preconceito racial da época para tornar-se um dos intelectuais mais respeitados do Brasil. Foi romancista, contista, cronista, poeta, teatrólogo, crítico literário e jornalista.

Entre suas obras-primas estão "Dom Casmurro", "Memórias Póstumas de Brás Cubas", "Quincas Borba" e centenas de contos. Sua escrita sofisticada, irônica e profundamente humana explorava a psicologia, a sociedade e as contradições humanas com maestria única.

Foi fundador e primeiro presidente da Academia Brasileira de Letras (1897). Apesar de raramente abordar explicitamente a questão racial em suas obras, sua própria existência e sucesso já eram uma forma de resistência e superação em uma sociedade extremamente racista.

Machado revolucionou a literatura brasileira, antecipando técnicas narrativas modernistas e criando uma obra atemporal que ainda hoje é estudada e admirada mundialmente.`
    },
    {
      name: "Carolina Maria de Jesus",
      description: "Escritora e poetisa",
      imagePlaceholder: "✍️",
      fullBio: `Carolina Maria de Jesus (1914-1977) foi uma escritora brasileira que revelou ao mundo a dura realidade da favela através de seu diário. Nascida em Sacramento, Minas Gerais, teve apenas dois anos de escolaridade formal, mas aprendeu a ler e escrever e desenvolveu imenso amor pela literatura.

Trabalhando como catadora de papel em São Paulo e morando na Favela do Canindé, Carolina registrava seu cotidiano em cadernos encontrados no lixo. Seu diário foi descoberto pelo jornalista Audálio Dantas em 1958 e publicado em 1960 como "Quarto de Despejo: Diário de uma Favelada".

O livro foi um fenômeno editorial, traduzido para 13 idiomas e vendendo milhões de cópias. Carolina narrava com sensibilidade e crítica social aguda a fome, a miséria, o preconceito e as dificuldades de criar três filhos sozinha na favela.

Além do diário, publicou "Casa de Alvenaria" (1961), "Pedaços da Fome" (1963) e diversos poemas. Foi uma das primeiras escritoras negras brasileiras a ganhar reconhecimento internacional.

Apesar do sucesso inicial, Carolina enfrentou preconceito nos meios literários e morreu em relativa pobreza. Hoje é reconhecida como voz fundamental da literatura brasileira, precursora da literatura periférica e testemunho vivo da força e talento da mulher negra brasileira.`
    },
    {
      name: "Abdias Nascimento",
      description: "Ativista, artista e político",
      imagePlaceholder: "🎭",
      fullBio: `Abdias do Nascimento (1914-2011) foi um dos maiores intelectuais e ativistas negros do Brasil. Poeta, ator, dramaturgo, artista plástico, professor universitário, político e ativista do movimento negro brasileiro.

Fundou o Teatro Experimental do Negro (TEN) em 1944, movimento revolucionário que combatia o racismo, valorizava a cultura negra e abria espaço para atores e atrizes negros no teatro brasileiro, onde eram sistematicamente excluídos.

Foi autor do conceito de "genocídio do negro brasileiro", denunciando o racismo estrutural e as políticas de embranquecimento da população. Seu livro "O Genocídio do Negro Brasileiro" (1978) é referência obrigatória nos estudos sobre racismo no país.

Exilado durante a ditadura militar (1968-1981), lecionou em universidades nos EUA e participou de movimentos pan-africanistas internacionais. De volta ao Brasil, foi deputado federal e senador, apresentando projetos de lei fundamentais para a população negra.

Foi um dos principais articuladores das políticas de ações afirmativas no Brasil, defendendo cotas raciais, criminalização do racismo e reparações históricas. Sua obra artística explorava a espiritualidade e a estética afro-brasileira.

Recebeu diversas honrarias nacionais e internacionais e é considerado um dos pais do movimento negro contemporâneo no Brasil.`
    },
    {
      name: "Nelson Mandela",
      description: "Líder anti-apartheid e presidente da África do Sul",
      imagePlaceholder: "✊",
      fullBio: `Nelson Rolihlahla Mandela (1918-2013) foi um líder revolucionário sul-africano que se tornou símbolo mundial da luta contra o apartheid e pela liberdade. Advogado de formação, dedicou sua vida ao combate à segregação racial institucionalizada na África do Sul.

Juntou-se ao Congresso Nacional Africano (ANC) em 1944, tornando-se líder de sua ala juvenil. Inicialmente defendendo métodos não-violentos, após o massacre de Sharpeville (1960), ajudou a fundar a ala militar do ANC, Umkhonto we Sizwe (Lança da Nação).

Foi preso em 1962 e condenado à prisão perpétua por sabotagem. Passou 27 anos na prisão, a maior parte na terrível Prisão de Robben Island. Durante o cativeiro, tornou-se o prisioneiro político mais famoso do mundo, símbolo da luta contra a opressão racial.

Libertado em 1990, liderou as negociações que puseram fim ao apartheid. Em 1994, tornou-se o primeiro presidente negro da África do Sul em eleições multirraciais, promovendo a reconciliação nacional através da Comissão da Verdade e Reconciliação.

Recebeu o Nobel da Paz em 1993 e mais de 250 honrarias internacionais. Após deixar a presidência, continuou como ativista global pelos direitos humanos, paz e combate à AIDS. É considerado um dos maiores líderes do século XX.`
    },
    {
      name: "Martin Luther King Jr.",
      description: "Líder dos direitos civis nos EUA",
      imagePlaceholder: "🕊️",
      fullBio: `Martin Luther King Jr. (1929-1968) foi o mais importante líder do movimento pelos direitos civis dos negros nos Estados Unidos. Pastor batista e ativista, defendeu a resistência não-violenta inspirada em Gandhi e no cristianismo.

Tornou-se proeminente durante o boicote aos ônibus de Montgomery (1955-1956), quando os negros se recusaram a usar o transporte público segregado. Fundou a Conferência da Liderança Cristã do Sul (SCLC) e liderou campanhas por direitos civis em todo o país.

Organizou a histórica Marcha sobre Washington (1963), onde 250 mil pessoas se reuniram e ele proferiu o icônico discurso "I Have a Dream" (Eu Tenho um Sonho), defendendo uma América onde as pessoas fossem julgadas pelo caráter, não pela cor da pele.

Seu ativismo foi fundamental para a aprovação da Lei dos Direitos Civis (1964) e da Lei do Direito ao Voto (1965), que acabaram com a segregação legal nos EUA. Recebeu o Nobel da Paz em 1964, aos 35 anos, o mais jovem laureado até então.

Foi assassinado em 4 de abril de 1968 em Memphis, Tennessee. Sua morte chocou o mundo e inspirou movimentos por direitos civis globalmente. Seu legado continua vivo na luta contra o racismo, pela justiça social e pelos direitos humanos.`
    },
    {
      name: "Angela Davis",
      description: "Filósofa e ativista",
      imagePlaceholder: "✊🏾",
      fullBio: `Angela Yvonne Davis (1944-) é uma filósofa, ativista e professora estadunidense que se tornou ícone mundial na luta contra o racismo, pelo feminismo e contra o sistema prisional.

Nascida no Alabama durante a segregação, vivenciou o racismo desde cedo. Estudou filosofia na Universidade Brandeis e na Europa, sendo aluna de Herbert Marcuse. Tornou-se professora na UCLA e membro do Partido Comunista e dos Panteras Negras.

Em 1970, foi falsamente acusada de conspiração, sequestro e assassinato após armas registradas em seu nome serem usadas em uma tentativa de fuga. Entrou para a lista dos 10 mais procurados do FBI, foi capturada e passou 18 meses na prisão. Sua prisão gerou campanha internacional "Free Angela Davis" (Libertem Angela Davis).

Foi absolvida em 1972 por um júri totalmente branco, em uma rara vitória judicial para ativistas negros. Desde então, tem sido voz importante em debates sobre abolição do sistema prisional, feminismo negro, direitos LGBTQIA+ e justiça social.

Autora de livros fundamentais como "Mulheres, Raça e Classe", continua ativa como palestrante e professora emérita da Universidade da Califórnia. É referência global no pensamento crítico sobre raça, gênero, classe e encarceramento em massa.`
    },
    {
      name: "Marielle Franco",
      description: "Vereadora, socióloga e ativista",
      imagePlaceholder: "💜",
      fullBio: `Marielle Francisco da Silva (1979-2018) foi uma socióloga, feminista, ativista dos direitos humanos e política brasileira. Nascida e criada na Favela da Maré, Rio de Janeiro, Marielle superou as adversidades da periferia para se tornar uma das vozes mais potentes da política brasileira.

Formou-se em Ciências Sociais pela PUC-Rio, com mestrado em Administração Pública pela UFF. Sua dissertação abordava as Unidades de Polícia Pacificadora (UPPs) e a violência nas favelas. Trabalhou na ONG CEASM (Centro de Ações Solidárias da Maré).

Eleita vereadora pelo PSOL em 2016 com 46.502 votos, foi a quinta vereadora mais votada do Rio de Janeiro. Como vereadora, presidiu a Comissão da Mulher e era relatora da comissão que fiscalizava a intervenção federal no RJ.

Denunciava incansavelmente a violência policial, o genocídio da juventude negra, defendia direitos das mulheres, população LGBTQIA+, moradores de favelas e causas feministas e antirracistas. Seu lema era "Quantos mais vão precisar morrer para que essa guerra acabe?"

Foi brutalmente assassinada em 14 de março de 2018, junto com seu motorista Anderson Gomes, em um atentado que chocou o Brasil e o mundo. O crime, executado com requintes de crueldade e sinais de execução, permaneceu sem resposta por anos.

Seu legado inspirou milhões: "Marielle Presente!" tornou-se grito de resistência. Em 2024, após anos de investigação, mandantes do crime foram identificados. Marielle simboliza a luta por justiça, igualdade e dignidade.`
    },
    {
      name: "Lélia Gonzalez",
      description: "Intelectual e ativista feminista negra",
      imagePlaceholder: "🌟",
      fullBio: `Lélia de Almeida Gonzalez (1935-1994) foi uma intelectual, professora, antropóloga, ativista antirracista e feminista brasileira que revolucionou o pensamento sobre raça, gênero e classe no Brasil.

Nascida em Belo Horizonte, foi a penúltima de 18 irmãos. Formou-se em História e Filosofia, fez mestrado em Comunicação e doutorado em Antropologia. Foi professora em universidades e escolas públicas.

Lélia foi pioneira ao cunhar o conceito de "amefricanidade", que reconhece as experiências comuns dos povos das Américas marcados pela diáspora africana. Criticou duramente o mito da democracia racial brasileira e o feminismo que ignorava as especificidades das mulheres negras.

Fundou o Movimento Negro Unificado (MNU) em 1978 e o Coletivo de Mulheres Negras N'Zinga em 1983. Foi uma das fundadoras do Instituto de Pesquisas das Culturas Negras (IPCN).

Suas obras, como "Racismo e Sexismo na Cultura Brasileira" e "Por um Feminismo Afro-Latino-Americano", são referências fundamentais nos estudos de raça e gênero. Denunciou o racismo estrutural, o lugar da mulher negra na sociedade e defendeu a valorização da cultura afro-brasileira.

Foi candidata a deputada federal em 1982 e 1986. Sua contribuição teórica e ativista foi fundamental para o feminismo negro brasileiro. É considerada uma das maiores intelectuais negras brasileiras e patrona do feminismo negro no Brasil.`
    }
  ];

  const cultureItems = [
    {
      icon: Music,
      title: "Música",
      description: "Samba, pagode, rap, funk, maracatu e outras expressões musicais que formam a trilha sonora da cultura brasileira"
    },
    {
      icon: Palette,
      title: "Dança",
      description: "Capoeira, jongo, samba de roda, maculelê - manifestações corporais de resistência e celebração"
    },
    {
      icon: Book,
      title: "Religiões de Matriz Africana",
      description: "Candomblé e Umbanda preservam conhecimentos, práticas e filosofias ancestrais africanas"
    },
    {
      icon: Users,
      title: "Moda e Estética",
      description: "Turbantes, tranças, roupas tradicionais e adornos que expressam identidade e beleza negra"
    }
  ];

  const books = [
    { title: "Quarto de Despejo", author: "Carolina Maria de Jesus" },
    { title: "Pequeno Manual Antirracista", author: "Djamila Ribeiro" },
    { title: "O Genocídio do Negro Brasileiro", author: "Abdias Nascimento" },
    { title: "Amefricana", author: "Lélia Gonzalez" },
    { title: "Memórias da Plantação", author: "Grada Kilomba" },
    { title: "Racismo Estrutural", author: "Silvio Almeida" }
  ];

  const movies = [
    "Pantera Negra (2018)",
    "Estrelas Além do Tempo (2016)",
    "13th - Emenda da Liberdade (2016)",
    "Amistad (1997)",
    "Django Livre (2012)",
    "Selma (2014)",
    "Malcolm X (1992)",
    "Histórias Cruzadas (2011)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* O que é Consciência Negra */}
      <section id="o-que-e" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            O que é Consciência Negra?
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-foreground leading-relaxed">
            <p className="text-lg">
              A <strong>Consciência Negra</strong> é uma celebração e reflexão sobre a história, cultura, identidade e luta da população negra no Brasil e no mundo. Mais do que uma data, é um movimento de valorização, resistência e busca por igualdade racial.
            </p>
            <p className="text-lg">
              O <strong>Dia da Consciência Negra</strong>, celebrado em <strong>20 de novembro</strong>, marca a data da morte de <strong>Zumbi dos Palmares</strong> em 1695, líder do Quilombo dos Palmares e símbolo maior da resistência negra contra a escravidão no Brasil.
            </p>
            <p className="text-lg">
              Esta data tem como objetivos sociais e educacionais:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg ml-4">
              <li>Combater o racismo e a discriminação racial</li>
              <li>Valorizar e preservar a cultura e história afro-brasileira</li>
              <li>Promover a igualdade racial e a inclusão social</li>
              <li>Reconhecer as contribuições fundamentais da população negra na formação da sociedade brasileira</li>
              <li>Educar sobre o passado para construir um futuro mais justo e igualitário</li>
            </ul>
          </div>
        </div>
      </section>

      {/* História */}
      <section id="historia" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            História da População Negra
          </h2>

          {/* África antes da colonização */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="overflow-hidden border-border bg-card">
              <div className="grid md:grid-cols-2 gap-8">
                <img 
                  src={africanCivilization} 
                  alt="Civilização africana" 
                  className="w-full h-full object-cover"
                />
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-4 text-foreground">África Antes da Colonização</h3>
                  <div className="space-y-4 text-foreground">
                    <p>
                      Muito antes da chegada dos europeus, o continente africano abrigava civilizações avançadas, impérios poderosos e sociedades organizadas com sistemas políticos, econômicos e culturais sofisticados.
                    </p>
                    <p className="font-semibold text-gold">Grandes Impérios Africanos:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Império do Mali (1235-1600):</strong> Um dos impérios mais ricos da história, controlava rotas comerciais de ouro e sal. Timbuktu era centro de comércio e conhecimento, com universidades e bibliotecas.</li>
                      <li><strong>Reino do Congo (1390-1914):</strong> Estado organizado e próspero na África Central, com sistema político avançado e comércio desenvolvido.</li>
                      <li><strong>Império de Gana (300-1200):</strong> Conhecido como "Terra do Ouro", controlava o comércio transaariano.</li>
                      <li><strong>Império Songhai (1464-1591):</strong> Um dos maiores impérios da história africana, com exército organizado e administração eficiente.</li>
                    </ul>
                    <p>
                      Os africanos desenvolveram matemática, astronomia, medicina, arquitetura, metalurgia e agricultura avançadas. Universidades como Sankore em Timbuktu rivalizavam com as europeias.
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Escravidão */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-foreground">Escravidão no Brasil</h3>
                <div className="space-y-4 text-foreground">
                  <p>
                    A escravidão no Brasil durou oficialmente de 1538 a 1888 - <strong>350 anos</strong> - sendo o país que mais recebeu africanos escravizados (cerca de 5 milhões de pessoas) e o último das Américas a abolir a escravidão.
                  </p>
                  <p className="font-semibold text-gold">Período Colonial e o Sistema Escravocrata:</p>
                  <p>
                    Os portugueses iniciaram o tráfico de africanos escravizados para o Brasil no século XVI. Vinham principalmente de regiões da África Ocidental e Central, capturados em guerras, sequestrados ou vendidos por reis locais em troca de armas e mercadorias.
                  </p>
                  <p>
                    A travessia do Atlântico nos navios negreiros era brutal: condições desumanas, fome, doenças e maus-tratos matavam cerca de 30% dos africanos durante a viagem. Os sobreviventes eram vendidos como mercadorias.
                  </p>
                  <p>
                    No Brasil, os escravizados eram forçados a trabalhar em engenhos de açúcar, minas de ouro, fazendas de café, na construção civil e como trabalhadores domésticos. Sofriam castigos físicos cruéis, separação de famílias, e viviam em condições miseráveis.
                  </p>
                  <div className="bg-muted p-6 rounded-lg my-4">
                    <p className="font-semibold mb-2 text-gold">Quilombos - Territórios de Resistência</p>
                    <p>
                      Diante da violência e opressão, africanos escravizados organizaram fugas e criaram os <strong>quilombos</strong> - comunidades de africanos libertos e fugitivos que viviam de forma autônoma, geralmente em locais de difícil acesso.
                    </p>
                    <p className="mt-2">
                      O <strong>Quilombo dos Palmares</strong>, em Alagoas, foi o maior e mais duradouro, resistindo por quase 100 anos (1597-1694). Chegou a ter mais de 20 mil habitantes, com organização social, política e econômica próprias. Foi liderado por Ganga Zumba e depois por Zumbi, tornando-se símbolo da resistência negra.
                    </p>
                  </div>
                  <img 
                    src={quilombo} 
                    alt="Quilombo" 
                    className="w-full rounded-lg my-6"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Abolição */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-foreground">Abolição da Escravatura</h3>
                <div className="space-y-4 text-foreground">
                  <p>
                    O processo de abolição foi longo e marcado pela resistência dos escravizados, pressões internacionais e interesses econômicos. Não foi um ato de bondade, mas resultado de muita luta.
                  </p>
                  <p className="font-semibold text-gold">Leis Graduais:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Lei Eusébio de Queirós (1850):</strong> Proibiu o tráfico internacional de escravos para o Brasil (mas não a escravidão interna).</li>
                    <li><strong>Lei do Ventre Livre (1871):</strong> Declarava livres os filhos de mulheres escravizadas nascidos a partir daquela data - mas deviam trabalhar para os senhores até os 21 anos.</li>
                    <li><strong>Lei dos Sexagenários (1885):</strong> Libertava escravizados com mais de 65 anos - uma "liberdade" cruel, pois poucos chegavam a essa idade devido às condições desumanas, e os libertos ficavam sem qualquer amparo.</li>
                    <li><strong>Lei Áurea (13 de maio de 1888):</strong> Aboliu oficialmente a escravidão no Brasil, assinada pela Princesa Isabel.</li>
                  </ul>
                  <div className="bg-destructive/10 p-6 rounded-lg my-4 border-l-4 border-destructive">
                    <p className="font-semibold mb-2 text-foreground">Importante - Abolição Incompleta:</p>
                    <p>
                      A Lei Áurea libertou juridicamente os escravizados, mas não veio acompanhada de <strong>nenhuma política de inclusão, reparação ou assistência</strong>. Os ex-escravizados foram abandonados à própria sorte, sem terras, educação, moradia ou oportunidades de trabalho digno.
                    </p>
                    <p className="mt-2">
                      Muitos continuaram trabalhando nas mesmas fazendas em condições precárias. Outros migraram para cidades, formando as primeiras favelas. Essa exclusão sistemática criou as bases do <strong>racismo estrutural</strong> que persiste até hoje no Brasil.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pós-abolição */}
          <div className="max-w-6xl mx-auto">
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-foreground">Pós-Abolição e Racismo Estrutural</h3>
                <div className="space-y-4 text-foreground">
                  <p>
                    Após 1888, o Brasil não implementou políticas para integrar a população negra liberta à sociedade. Pelo contrário, adotou <strong>políticas de branqueamento</strong> e incentivou a imigração europeia para "embranquecer" a população.
                  </p>
                  <p className="font-semibold text-gold">Consequências do Abandono Pós-Abolição:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Exclusão do mercado de trabalho:</strong> Preferência por trabalhadores imigrantes europeus nas indústrias e empregos formais</li>
                    <li><strong>Falta de acesso à educação:</strong> Escolas negavam matrículas a crianças negras ou as segregavam</li>
                    <li><strong>Ausência de moradia:</strong> Sem recursos, negros formaram as primeiras favelas e ocupações precárias</li>
                    <li><strong>Marginalização social:</strong> Criminalização de práticas culturais negras como capoeira, samba e religiões de matriz africana</li>
                    <li><strong>Mito da democracia racial:</strong> Ideologia que negava o racismo no Brasil, dificultando o combate à discriminação</li>
                  </ul>
                  <div className="bg-muted p-6 rounded-lg my-4">
                    <p className="font-semibold mb-2 text-gold">Racismo Estrutural Hoje:</p>
                    <p>
                      O <strong>racismo estrutural</strong> é o legado direto da escravidão e da exclusão pós-abolição. Manifesta-se em:
                    </p>
                    <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                      <li>Desigualdade salarial: negros ganham, em média, 40% menos que brancos</li>
                      <li>Menor acesso à educação superior e cargos de liderança</li>
                      <li>Maior vulnerabilidade à violência policial e encarceramento</li>
                      <li>Sub-representação política e nos meios de comunicação</li>
                      <li>Discriminação no mercado de trabalho e acesso a serviços</li>
                    </ul>
                    <p className="mt-3">
                      A luta pela Consciência Negra é, portanto, a luta por <strong>reparação histórica, igualdade real e justiça social</strong>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Personalidades */}
      <section id="personalidades" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Personalidades Negras Importantes
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Líderes, pensadores e ativistas que marcaram a história
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {personalities.map((person, index) => (
              <PersonalityCard key={index} {...person} />
            ))}
          </div>
        </div>
      </section>

      {/* Cultura */}
      <section id="cultura" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Cultura Afro-Brasileira
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Expressões culturais que formam a identidade brasileira
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {cultureItems.map((item, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold/10 rounded-lg">
                      <item.icon className="text-gold" size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <img 
                  src={cultureCelebration} 
                  alt="Celebração cultural" 
                  className="w-full rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-foreground">Culinária Afro-Brasileira</h3>
                <p className="text-foreground mb-4">
                  A culinária brasileira é profundamente marcada pelas influências africanas. Ingredientes como dendê, quiabo, inhame e técnicas culinárias foram trazidos pelos africanos e se tornaram fundamentais na gastronomia nacional.
                </p>
                <p className="text-foreground">
                  Pratos icônicos como <strong>acarajé, vatapá, caruru, moqueca, feijoada</strong> e <strong>cocada</strong> têm origem ou forte influência africana, demonstrando como a cultura negra está presente no dia a dia de todos os brasileiros.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Galeria */}
      <section id="galeria" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Galeria
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Momentos que contam nossa história
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <img src={heroImage} alt="Resistência e união" className="w-full h-64 object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <img src={africanCivilization} alt="Civilização africana" className="w-full h-64 object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <img src={cultureCelebration} alt="Celebração cultural" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section id="recursos" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Recursos Educacionais
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Materiais para aprofundar seu conhecimento
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                  <Book className="text-gold" />
                  Livros Recomendados
                </h3>
                <ul className="space-y-3">
                  {books.map((book, index) => (
                    <li key={index} className="flex items-start gap-2 text-foreground">
                      <span className="text-gold mt-1">•</span>
                      <div>
                        <strong>{book.title}</strong>
                        <p className="text-sm text-muted-foreground">{book.author}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                  <Palette className="text-gold" />
                  Filmes e Documentários
                </h3>
                <ul className="space-y-3">
                  {movies.map((movie, index) => (
                    <li key={index} className="flex items-start gap-2 text-foreground">
                      <span className="text-gold mt-1">•</span>
                      <span>{movie}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Index;
