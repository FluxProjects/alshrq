import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Star } from "lucide-react";
import { useState, useEffect } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  isNew?: boolean;
}

export default function ProductCard({ id, name, price, category, image, isNew }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
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
    <Card
      className="group relative overflow-hidden bg-gradient-to-br from-slate-900 to-black border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-product-${id}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          data-testid={`img-product-${id}`}
        />
        
        {isNew && (
          <Badge className="absolute top-4 right-4 bg-primary/90 text-black font-semibold px-3 py-1 backdrop-blur-sm" data-testid={`badge-new-${id}`}>
            ✨ {isRTL ? "جديد" : "New"}
          </Badge>
        )}
        

        
        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent" />
      </div>
      
      <div className="relative p-6 bg-gradient-to-b from-slate-900 to-black">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium" data-testid={`text-category-${id}`}>
            {isRTL ? "سبائك الذهب" : category}
          </p>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-primary text-primary" />
            <span className="text-xs text-primary">24K</span>
          </div>
        </div>
        
        <h3 className={`${isRTL ? 'font-serif' : 'font-sans'} text-lg font-semibold text-white mb-4 leading-tight`} data-testid={`text-name-${id}`}>
          {isRTL ? 
            (name.includes('5g') ? 'سبيكة ذهب 5 جرام' : 
             name.includes('10g') ? 'سبيكة ذهب 10 جرام' : 
             'سبيكة ذهب 20 جرام') : name}
        </h3>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-xs text-white/60">{isRTL ? "معتمد من LBMA" : "LBMA Accredited"}</p>
            <p className="text-xs text-primary font-medium">{isRTL ? "معتمد" : "Certified"}</p>
          </div>

        </div>
      </div>
    </Card>
  );
}
