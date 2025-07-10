import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Book, 
  Cross, 
  Hand, 
  Clock3, 
  Crown,
  ChevronRight
} from "lucide-react";

const topics = [
  {
    icon: Book,
    title: "A Palavra Criativa de Deus",
    description: "A Bíblia como manual da felicidade e carta divina para a humanidade. Fonte de vida eterna e sabedoria.",
    highlights: [
      "Manual da felicidade",
      "Palavra que permanece para sempre",
      "Inspirada pelo Espírito Santo"
    ],
    color: "bg-gradient-celestial"
  },
  {
    icon: Cross,
    title: "O Plano da Salvação",
    description: "Jesus Cristo como nosso Redentor, oferecendo salvação gratuita através de Seu sacrifício na cruz.",
    highlights: [
      "Dom gratuito de Deus",
      "Jesus, o Bom Pastor",
      "Salvação pela fé, não por obras"
    ],
    color: "bg-gradient-divine"
  },
  {
    icon: Hand,
    title: "Vida de Oração",
    description: "A oração como meio essencial de comunhão com Deus, refúgio e fortaleza em todas as circunstâncias.",
    highlights: [
      "Refúgio em Deus",
      "Modelo do Pai Nosso",
      "Oração contínua e constante"
    ],
    color: "bg-gradient-celestial"
  },
  {
    icon: Clock3,
    title: "Profecias e Sinais",
    description: "O cumprimento das profecias bíblicas e os sinais da segunda vinda de Jesus Cristo.",
    highlights: [
      "Visão da estátua de Daniel",
      "Sinais dos últimos dias",
      "Reino eterno de Deus"
    ],
    color: "bg-gradient-divine"
  },
  {
    icon: Crown,
    title: "Destino Eterno",
    description: "O milênio, a destruição final do mal e o estabelecimento do reino eterno de justiça.",
    highlights: [
      "Mil anos de reino",
      "Destruição final de Satanás",
      "Nova Terra para os justos"
    ],
    color: "bg-gradient-celestial"
  }
];

export default function KeyTopics() {
  return (
    <section className="py-20 px-6 bg-celestial-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-divine-blue mb-6">
            Temas Centrais
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Explore os pilares fundamentais da fé cristã e do plano divino de salvação
          </p>
          <div className="h-1 w-32 bg-gradient-divine mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {topics.map((topic, index) => {
            const IconComponent = topic.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-divine transition-all duration-500 hover:scale-105 overflow-hidden border-2 hover:border-golden-light bg-white"
              >
                <div className={`h-2 ${topic.color}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 ${topic.color} rounded-xl group-hover:animate-glow`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-divine-blue group-hover:text-golden-deep transition-colors">
                      {topic.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-text-muted leading-relaxed text-base">
                    {topic.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    {topic.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-divine-blue">
                        <ChevronRight className="h-4 w-4 text-golden-deep" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full mt-6 border-divine-blue text-divine-blue hover:bg-divine-blue hover:text-white transition-all duration-300"
                  >
                    Explorar Tema
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-white border-2 border-golden-light">
            <CardHeader>
              <CardTitle className="text-2xl text-divine-blue mb-4">
                Uma Jornada de Transformação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-text-muted leading-relaxed mb-6">
                "Este documento serve como uma base para entender os ensinamentos centrais sobre a salvação, 
                a história profética e a vida cristã, com o objetivo de guiar o leitor a uma decisão pessoal 
                de fé e obediência."
              </p>
              <Button 
                size="lg" 
                className="bg-golden-light hover:bg-golden-deep text-divine-blue font-semibold px-8 py-4 shadow-golden transition-all duration-300 hover:scale-105"
              >
                Iniciar Jornada Espiritual
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}