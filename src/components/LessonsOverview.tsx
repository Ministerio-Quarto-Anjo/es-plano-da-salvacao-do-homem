import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Sparkles, 
  Heart, 
  Shield, 
  Crown, 
  Zap, 
  Globe, 
  Eye, 
  Clock, 
  Flame, 
  Target,
  Star,
  Trophy
} from "lucide-react";

const lessons = [
  {
    id: 1,
    title: "A Bíblia como Palavra Criativa",
    description: "A Bíblia como manual da felicidade e carta divina para a humanidade",
    icon: BookOpen,
    category: "Fundamentos"
  },
  {
    id: 2,
    title: "A Criação e o Propósito de Deus",
    description: "Deus como Criador de tudo, formando a Terra com propósito e poder",
    icon: Sparkles,
    category: "Origem"
  },
  {
    id: 3,
    title: "A Origem do Mal e a Queda",
    description: "A rebelião de Satanás e a queda do homem pela desobediência",
    icon: Shield,
    category: "Queda"
  },
  {
    id: 4,
    title: "Jesus Cristo como Redentor",
    description: "A salvação como dom gratuito através do sacrifício de Jesus",
    icon: Heart,
    category: "Salvação"
  },
  {
    id: 5,
    title: "A Salvação Manifesta em Cristo",
    description: "Deus nos salvou segundo Seu próprio propósito e graça",
    icon: Crown,
    category: "Salvação"
  },
  {
    id: 6,
    title: "A Fé como Posse da Salvação",
    description: "A salvação obtida por meio da fé, dom de Deus",
    icon: Star,
    category: "Fé"
  },
  {
    id: 7,
    title: "A Oração: Comunhão com Deus",
    description: "A oração como meio essencial de comunicação e dependência de Deus",
    icon: Zap,
    category: "Vida Cristã"
  },
  {
    id: 8,
    title: "História do Mundo e Profecias",
    description: "A visão da estátua de Daniel revelando os reinos terrestres",
    icon: Globe,
    category: "Profecia"
  },
  {
    id: 9,
    title: "A Vinda de Jesus e o Reino",
    description: "Jesus como a Pedra que estabelecerá o Reino da Glória",
    icon: Eye,
    category: "Segunda Vinda"
  },
  {
    id: 10,
    title: "Sinais da Segunda Vinda",
    description: "Sinais claros da segunda vinda de Jesus e do fim do mundo",
    icon: Clock,
    category: "Segunda Vinda"
  },
  {
    id: 11,
    title: "O Milênio e o Destino Final",
    description: "Mil anos de julgamento no céu e a destruição final do mal",
    icon: Trophy,
    category: "Fim dos Tempos"
  },
  {
    id: 12,
    title: "Origem e Destino de Satanás",
    description: "A história de Lúcifer, sua rebelião e destruição final",
    icon: Flame,
    category: "Fim dos Tempos"
  },
  {
    id: 13,
    title: "As Provações e Seus Objetivos",
    description: "Provações como meio de fortalecer a fé e moldar o caráter",
    icon: Target,
    category: "Vida Cristã"
  }
];

const categoryColors = {
  "Fundamentos": "bg-divine-blue text-white",
  "Origem": "bg-celestial-light text-divine-blue",
  "Queda": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  "Salvação": "bg-golden-light text-divine-blue",
  "Fé": "bg-golden-deep text-white",
  "Vida Cristã": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Profecia": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "Segunda Vinda": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "Fim dos Tempos": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
};

export default function LessonsOverview() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-divine-blue mb-6">
            13 Lições Fundamentais
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Uma jornada completa através do plano divino de salvação, desde a criação até a eternidade
          </p>
          <div className="h-1 w-32 bg-gradient-divine mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson) => {
            const IconComponent = lesson.icon;
            return (
              <Card 
                key={lesson.id} 
                className="group hover:shadow-divine transition-all duration-300 hover:scale-105 border-2 hover:border-golden-light bg-card"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-divine rounded-lg group-hover:animate-glow">
                        <IconComponent className="h-6 w-6 text-divine-blue" />
                      </div>
                      <div className="text-2xl font-bold text-golden-deep">
                        {lesson.id.toString().padStart(2, '0')}
                      </div>
                    </div>
                    <Badge 
                      className={`${categoryColors[lesson.category as keyof typeof categoryColors]} text-xs font-semibold`}
                    >
                      {lesson.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-divine-blue group-hover:text-golden-deep transition-colors">
                    {lesson.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-text-muted leading-relaxed">
                    {lesson.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-text-muted text-lg mb-8">
            Cada lição foi cuidadosamente elaborada para guiá-lo em uma jornada de fé e descoberta espiritual
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(categoryColors).map(([category, colorClass]) => (
              <Badge key={category} className={`${colorClass} px-4 py-2`}>
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}