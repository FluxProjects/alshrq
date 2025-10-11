import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import ProductCard from "@/components/ProductCard";
import { useState, useEffect } from "react";

const allGoldBars = [
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
    name: "100g Gold Bar",
    price: 0,
    category: "Gold Bars",
    image: "https://raw.githubusercontent.com/iftikhar1986/image/fa2d8b0287ba194eaca54c0e2396ea3a803a4ae8/goldbar-500g.jpeg",
  },
  {
    id: "6",
    name: "250g Gold Bar",
    price: 0,
    category: "Gold Bars",
    image: "https://raw.githubusercontent.com/iftikhar1986/image/0da8e10ba77e0fab11aaacdb9ef869cd0c5058c4/goldbar-100g.jpeg",
  },
  {
    id: "7",
    name: "500g Gold Bar",
    price: 0,
    category: "Gold Bars",
    image: "https://raw.githubusercontent.com/iftikhar1986/image/ec8921d07854bc96b667ce3666893386f75675c2/goldbar-20g.jpeg",
  },
  {
    id: "8",
    name: "1kg Gold Bar",
    price: 0,
    category: "Gold Bars",
    image: "https://raw.githubusercontent.com/iftikhar1986/image/48936566eaa11204ae117fca64147f9080aa36ea/goldbar-fadetoblack.jpeg",
  },
];

export default function GoldBars() {
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
    <div className="min-h-screen">
      <Navbar />
      <FloatingCallButton />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-black to-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary text-sm uppercase tracking-widest mb-4">
            {isRTL ? "مجموعتنا الكاملة" : "Our Complete Collection"}
          </p>
          <h1 className={`${isRTL ? 'font-serif' : 'font-sans'} text-2xl md:text-4xl lg:text-5xl font-light text-white mb-6`}>
            {isRTL ? (
              <>
                جميع <span className="text-primary font-bold">سبائك <span className="text-primary">الذهب</span></span>
              </>
            ) : (
              <>
                All <span className="text-primary font-bold">Gold Bars</span>
              </>
            )}
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            {isRTL ? (
              <>
                اكتشف مجموعتنا الكاملة من سبائك <span className="text-primary font-semibold">الذهب</span> الخالص عيار 24 المعتمدة من LBMA
              </>
            ) : (
              "Discover our complete collection of LBMA certified 24K pure gold bars"
            )}
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allGoldBars.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <button 
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-black font-semibold px-4 py-2 text-sm rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/'}
            >
              {isRTL ? "العودة للرئيسية" : "Back to Home"}
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}