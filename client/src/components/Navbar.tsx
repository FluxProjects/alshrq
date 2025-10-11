import { Link, useLocation } from "wouter";
import { ShoppingBag, Menu, X, User, Phone, Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import RTLToggle from "./RTLToggle";
import logoImage from '@assets/stock_images/logogold.png';

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isRTL, setIsRTL] = useState(false);

  const navItems = [
    { path: "/", label: "Home", labelAr: "الرئيسية" },
    { path: "/about", label: "About", labelAr: "عنا" },
    { path: "/contact", label: "Contact", labelAr: "اتصل بنا" },
  ];

  useEffect(() => {
    const checkRTL = () => {
      setIsRTL(document.documentElement.dir === 'rtl');
    };
    
    checkRTL();
    const observer = new MutationObserver(checkRTL);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
    
    return () => observer.disconnect();
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+97444123456";
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/60 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl shadow-amber-500/10' 
        : 'bg-gradient-to-r from-black/50 via-gray-900/50 to-black/50 backdrop-blur-md border-b border-amber-400/30'
    }`}>
      {/* Luxury gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-600/5 via-yellow-500/10 to-amber-600/5 opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <a className="group flex items-center hover:scale-105 transition-all duration-300 px-3 py-2 rounded-lg" data-testid="link-home">
              <img 
                src={logoImage} 
                alt="Al Shrq Metals Trading Logo" 
                className="h-12 sm:h-16 w-auto group-hover:brightness-110 transition-all duration-300"
              />
              <div className="flex flex-col">
                <span className={`${isRTL ? 'font-serif' : 'font-sans'} text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent group-hover:from-primary/90 group-hover:to-primary/70 transition-all duration-300`}>
                  {isRTL ? "الشرق" : "Alshrq"}
                </span>
                <span className={`${isRTL ? 'font-serif' : 'font-sans'} text-xs ${isRTL ? '' : 'tracking-[0.2em] uppercase'} text-white/80 -mt-1 hidden sm:block`}>
                  {isRTL ? "للتجارة في المعادن" : "Metals Trading"}
                </span>
              </div>
            </a>
          </Link>

          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a
                    className={`group relative text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 px-4 py-3 ${
                      location === item.path
                        ? "text-amber-300"
                        : "text-gray-300 hover:text-amber-200"
                    }`}
                    data-testid={`link-${item.label.toLowerCase()}`}
                  >
                    <span className="relative z-10">{isRTL ? item.labelAr : item.label}</span>
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 transition-all duration-300 ${
                      location === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button 
              onClick={handleCall} 
              className="group relative bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-yellow-500/40 hover:shadow-yellow-400/60 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-yellow-400/50" 
              data-testid="button-nav-call"
            >
              <Phone className="h-4 w-4 mr-2 group-hover:animate-pulse" />
              <span className="tracking-wide">{isRTL ? "اتصل بنا" : "Call Us"}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
            
            <RTLToggle />

          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative group bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:from-primary/20 hover:to-primary/10 border border-primary/20 hover:border-primary/40 rounded-full w-12 h-12 transition-all duration-300 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? 
              <X className="h-6 w-6 text-gray-300 group-hover:text-primary transition-colors duration-300" /> : 
              <Menu className="h-6 w-6 text-gray-300 group-hover:text-primary transition-colors duration-300" />
            }
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 border-t border-primary/30 bg-black/95 backdrop-blur-xl z-40 w-full">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={`group block px-4 py-3 rounded-xl text-base font-medium uppercase tracking-[0.1em] transition-all duration-300 ${
                    location === item.path
                      ? "text-primary bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30"
                      : "text-gray-300 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 border border-transparent hover:border-primary/20"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  <span className="relative z-10">{isRTL ? item.labelAr : item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Link>
            ))}
            
            <div className="pt-4 border-t border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <Button 
                  onClick={() => {
                    window.location.href = "tel:+97471813696";
                    setMobileMenuOpen(false);
                  }} 
                  className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-black font-semibold py-3 rounded-xl shadow-lg shadow-primary/25 transition-all duration-300" 
                  data-testid="button-mobile-call"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  {isRTL ? "اتصل بنا" : "Call Us"}
                </Button>
                <RTLToggle />
              </div>
              
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
