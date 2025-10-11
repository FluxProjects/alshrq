import { Button } from "@/components/ui/button";
import { ChevronDown, Phone, Sparkles, Crown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    const checkRTL = () => {
      setIsRTL(document.documentElement.dir === 'rtl');
    };
    
    checkRTL();
    const observer = new MutationObserver(checkRTL);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        <div 
          className="absolute inset-0 opacity-30 animate-pulse"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, rgba(234, 179, 8, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(234, 179, 8, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(234, 179, 8, 0.05) 0%, transparent 70%)
            `
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Premium Border Frame */}
      <div className="absolute inset-4 border border-primary/10 rounded-lg" />
      <div className="absolute inset-8 border border-primary/5 rounded-lg" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-1 sm:gap-2 px-2 xs:px-3 sm:px-6 py-1 xs:py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4 xs:mb-6 sm:mb-8">
          <Crown className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
          <span className="text-primary text-xs font-medium tracking-wider uppercase text-center">
            {isRTL ? "تاجر الذهب الموثوق في قطر • ذهب خالص عيار 24" : "Qatar's Trusted Gold Dealer • 24K Pure Gold"}
          </span>
          <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
        </div>

        {/* Main Heading with Premium Typography */}
        <h1 className="relative mb-4 sm:mb-6 px-2">
          <span className={`${isRTL ? 'font-serif' : 'font-sans'} text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light text-white/90 leading-tight tracking-tight`}>
            {isRTL ? "الشرق " : "Alshrq "}
            <span className="font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              {isRTL ? "للتجارة في المعادن" : "Metals Trading"}
            </span>
          </span>
        </h1>

        {/* Elegant Subtitle */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-light mb-3">
            {isRTL ? "سبائك وقوالب الذهب الخالص عيار 24" : "Pure 24K Gold Bars & Blocks"}
          </p>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4" />
          <p className="text-xs sm:text-sm md:text-base text-white/60 max-w-xl mx-auto leading-relaxed">
            {isRTL ? "حلول استثمار الذهب المتميزة في الدوحة، قطر." : "Premium gold investment solutions in Doha, Qatar."}
          </p>
        </div>

        {/* Premium Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-12 px-4">
          <Button 
            className="w-full sm:w-auto group relative overflow-hidden bg-primary hover:bg-primary/90 text-black font-semibold px-4 py-2 text-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25" 
            onClick={() => window.location.href = "tel:+97471813696"}
            data-testid="button-hero-call"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Phone className="h-4 w-4 mr-2 relative z-10" />
            <span className="relative z-10">{isRTL ? "اتصل الآن" : "Call Now"}</span>
          </Button>
          
          <Button 
            variant="outline"
            className="w-full sm:w-auto group border-2 border-primary/30 bg-black/20 backdrop-blur-sm text-white hover:bg-primary/10 hover:border-primary/60 px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
            data-testid="button-explore"
          >
            <span className="group-hover:text-primary transition-colors duration-300">{isRTL ? "عرض سبائك الذهب" : "View Gold Bars"}</span>
          </Button>
        </div>


      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs uppercase tracking-widest">{isRTL ? "تمرير" : "Scroll"}</span>
        <ChevronDown className="h-6 w-6 text-primary animate-bounce" />
      </div>
    </div>
  );
}
