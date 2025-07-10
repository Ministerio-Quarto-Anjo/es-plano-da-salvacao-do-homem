import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Star } from "lucide-react";
import heroImage from "@/assets/bible-hero.jpg";

export default function BibleSchoolHeader() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Star className="h-8 w-8 text-golden-light animate-glow" />
      </div>
      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <Heart className="h-6 w-6 text-golden-light animate-glow" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <BookOpen className="h-10 w-10 text-golden-light animate-glow" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <BookOpen className="h-16 w-16 text-golden-light mx-auto mb-6 animate-glow" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Escola Bíblica
          </h1>
          <div className="h-1 w-32 bg-gradient-divine mx-auto mb-6 rounded-full"></div>
          <h2 className="text-2xl md:text-3xl text-golden-light font-semibold mb-6">
            O Plano da Salvação do Homem
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Guia de estudo bíblico com 13 lições abrangendo desde a criação até o destino final de Satanás e o reino eterno de Deus
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-golden-light hover:bg-golden-deep text-divine-blue font-semibold px-8 py-4 text-lg shadow-golden transition-all duration-300 hover:scale-105">
            Começar Estudos
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white text-white hover:bg-white hover:text-divine-blue font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            onClick={() => window.open('/plano-salvacao-licoes.pdf', '_blank')}
          >
            Baixar Material
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-golden-light mb-2">13</div>
            <div className="text-white/80">Lições</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-golden-light mb-2">∞</div>
            <div className="text-white/80">Vida Eterna</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-golden-light mb-2">1</div>
            <div className="text-white/80">Salvador</div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}