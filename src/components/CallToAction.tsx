import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, BookOpen, Users, Heart } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_70%)]"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comece Sua Jornada Espiritual
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Descubra o plano divino de salvação e transforme sua vida através do estudo da Palavra de Deus
          </p>
          <div className="h-1 w-32 bg-gradient-divine mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <Download className="h-12 w-12 text-golden-light mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-lg font-semibold text-white mb-2">Material Gratuito</h3>
              <p className="text-white/80 text-sm">Baixe o guia completo em PDF</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <BookOpen className="h-12 w-12 text-golden-light mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-lg font-semibold text-white mb-2">13 Lições</h3>
              <p className="text-white/80 text-sm">Estudo completo e estruturado</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-golden-light mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-lg font-semibold text-white mb-2">Estudo em Grupo</h3>
              <p className="text-white/80 text-sm">Perfeito para classes bíblicas</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 text-golden-light mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-lg font-semibold text-white mb-2">Transformação</h3>
              <p className="text-white/80 text-sm">Mudança real de vida</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-golden-light hover:bg-golden-deep text-divine-blue font-semibold px-8 py-4 text-lg shadow-golden transition-all duration-300 hover:scale-105"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Começar Estudos Agora
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-divine-blue font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Baixar Material PDF
            </Button>
          </div>

          <Card className="max-w-2xl mx-auto bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <blockquote className="text-white/90 text-lg italic leading-relaxed mb-4">
                "Bem-aventurados os que ouvem a palavra de Deus e a guardam"
              </blockquote>
              <cite className="text-golden-light font-semibold">Lucas 11:28</cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}