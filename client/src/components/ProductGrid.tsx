import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

const featuredProducts = [
  {
    id: "f1",
    name: "100g Gold Bar",
    category: "Premium Gold Bars",
    image: "https://raw.githubusercontent.com/iftikhar1986/image/48936566eaa11204ae117fca64147f9080aa36ea/goldbar-fadetoblack.jpeg",
  },
  {
    id: "f2",
    name: "250g Gold Bar",
    category: "Premium Gold Bars",
    image: "https://raw.githubusercontent.com/iftikhar1986/image/fa2d8b0287ba194eaca54c0e2396ea3a803a4ae8/goldbar-500g.jpeg",
  },
  {
    id: "f3",
    name: "500g Gold Bar",
    category: "Premium Gold Bars",
    image: "https://raw.githubusercontent.com/iftikhar1986/image/0da8e10ba77e0fab11aaacdb9ef869cd0c5058c4/goldbar-100g.jpeg",
  },
];

const products = [
  {
    id: "1",
    name: "5g Gold Bar",
    price: 0,
    category: "Gold Bars",
    image: "https://raw.githubusercontent.com/iftikhar1986/image/fa2d8b0287ba194eaca54c0e2396ea3a803a4ae8/goldbar-500g.jpeg",
    isNew: true,
  },
  {
    id: "2",
    name: "10g Gold Bar",
    price: 0,
    category: "Gold Bars",
    image: "https://raw.githubusercontent.com/iftikhar1986/image/0da8e10ba77e0fab11aaacdb9ef869cd0c5058c4/goldbar-100g.jpeg",
    isNew: true,
  },
  {
    id: "3",
    name: "20g Gold Bar",
    price: 0,
    category: "Gold Bars",
    image: "https://raw.githubusercontent.com/iftikhar1986/image/ec8921d07854bc96b667ce3666893386f75675c2/goldbar-20g.jpeg",
  },
  {
    id: "4",
    name: "50g Gold Bar",
    price: 0,
    category: "Gold Bars",
    image: "https://raw.githubusercontent.com/iftikhar1986/image/48936566eaa11204ae117fca64147f9080aa36ea/goldbar-fadetoblack.jpeg",
    isNew: true,
  },
  {
    id: "5",
    name: "1oz Gold Bar",
    price: 0,
    category: "Gold Bars",
    image: "https://raw.githubusercontent.com/iftikhar1986/image/fa2d8b0287ba194eaca54c0e2396ea3a803a4ae8/goldbar-500g.jpeg",
  },
  {
    id: "6",
    name: "2oz Gold Bar",
    price: 0,
    category: "Gold Bars",
    image: "https://raw.githubusercontent.com/iftikhar1986/image/0da8e10ba77e0fab11aaacdb9ef869cd0c5058c4/goldbar-100g.jpeg",
  },
];

export default function ProductGrid() {
  const [isRTL, setIsRTL] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [featuredSlide, setFeaturedSlide] = useState(0);

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
    <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8" data-testid="section-products">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-4" data-testid="text-collection-label">
            {isRTL ? "مجموعة الذهب الخاصة بنا" : "Our Gold Collection"}
          </p>
          <h2 className={`${isRTL ? 'font-serif' : 'font-sans'} text-3xl sm:text-4xl md:text-5xl text-foreground mb-6`} data-testid="text-collection-title">
            {isRTL ? "سبائك الذهب " : <><span className="font-normal">Premium </span><span className="font-bold text-primary">Gold Bars</span></>}
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto" data-testid="text-collection-description">
            {isRTL ? "سبائك ذهب خالص عيار 24 معتمدة متوفرة في قطر. استثمار آمن بنقاء مضمون." : "Certified 24K pure gold bars available in Qatar. Secure investment with guaranteed purity."}
          </p>
        </div>

        {/* Featured Cards Slider */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-20">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${featuredSlide * 100}%)` }}
            >
              {featuredProducts.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0">
                  <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-black border border-primary/20 rounded-xl hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                      <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <div className="border-2 border-primary bg-transparent text-primary font-semibold px-3 py-1 text-xs uppercase tracking-wider rounded-md">
                            {isRTL ? "مميز" : "Featured"}
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>
                      <div className="p-4 sm:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium">{isRTL ? "سبائك الذهب المتميزة" : product.category}</span>
                          <div className="flex items-center gap-1">
                            <span className="text-xs text-primary">24K</span>
                          </div>
                        </div>
                        <h3 className={`${isRTL ? 'font-serif' : 'font-sans'} text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6`}>
                          {isRTL ? `سبيكة ذهب ${product.name.split(' ')[0]}` : product.name}
                        </h3>
                        <div className="space-y-4 text-white/80">
                          <div className="flex justify-between">
                            <span className="text-sm text-white/60">{isRTL ? "معتمد من LBMA" : "LBMA Accredited"}</span>
                            <span className="text-sm text-primary font-medium">{isRTL ? "معتمد" : "Certified"}</span>
                          </div>
                        </div>
                        <button 
                          className="mt-4 sm:mt-6 w-full sm:w-fit bg-primary hover:bg-primary/90 text-black font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg text-sm"
                          onClick={() => window.location.href = '/contact'}
                        >
                          {isRTL ? "استفسر عن هذه السبيكة" : "Inquire About This Bar"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Featured Progress Indicators */}
          <div className="mt-8">
            <div className="flex justify-center gap-3 mb-4">
              {featuredProducts.map((_, index) => (
                <button
                  key={index}
                  className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                    featuredSlide === index 
                      ? 'w-8 h-3 bg-primary shadow-lg shadow-primary/30' 
                      : 'w-3 h-3 bg-gray-600 hover:bg-gray-500 hover:scale-110'
                  }`}
                  onClick={() => setFeaturedSlide(index)}
                >
                  {featuredSlide === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>
            <div className="text-center">
              <span className="text-xs text-gray-400">
                {featuredSlide + 1} / {featuredProducts.length}
              </span>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          {/* View All Button */}
          <div className="text-center mt-8">
            <button 
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-black font-semibold px-4 py-2 rounded-lg shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/gold-bars'}
            >
              <span className="relative z-10 text-sm">
                {isRTL ? "عرض جميع سبائك الذهب" : "View All Gold Bars"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}