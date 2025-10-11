import { Link } from "wouter";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import logoImage from '@assets/stock_images/logogold.png';

export default function Footer() {
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
    <footer className="relative bg-gradient-to-br from-slate-900 via-black to-slate-800 border-t border-primary/20 mt-12 sm:mt-24 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center mb-8">
              <img 
                src={logoImage} 
                alt="Al Shrq Metals Trading Logo" 
                className="h-20 w-auto brightness-110"
              />
              <div>
                <span className={`${isRTL ? 'font-serif' : 'font-sans'} text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent`}>
                  {isRTL ? "الشرق" : "Alshrq"}
                </span>
                <span className={`${isRTL ? 'font-serif' : 'font-sans'} text-sm text-white ${isRTL ? 'mr-1' : 'ml-1'}`}>
                  {isRTL ? "للتجارة في المعادن" : "Metals Trading"}
                </span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              {isRTL ? "تاجر الذهب الموثوق في قطر منذ 1985. كل سبيكة تحكي قصة الجودة والثقة." : "Qatar's trusted gold dealer since 1985. Every bar tells a story of quality and trust."}
            </p>
            <div className="space-y-2">
              <p className="text-primary font-medium text-sm">
                {isRTL ? "موقع قطر المتميز:" : "Premium Qatar Location:"}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {isRTL ? "المنطقة: 56، الشارع: 205" : "ZONE: 56, STREET: 205"}<br />
                {isRTL ? "عين خالد، الدوحة، قطر" : "Ain Khaled, Doha, Qatar"}
              </p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-primary mb-8" data-testid="text-footer-shop">
              {isRTL ? "متجر" : "Shop"}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1" data-testid="link-rings">
                  {isRTL ? "سبائك 5 جرام" : "5g Gold Bars"}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1" data-testid="link-necklaces">
                  {isRTL ? "سبائك 10 جرام" : "10g Gold Bars"}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1" data-testid="link-bracelets">
                  {isRTL ? "سبائك 20 جرام" : "20g Gold Bars"}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1" data-testid="link-earrings">
                  {isRTL ? "سبائك 100 جرام" : "100g Gold Bars"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-primary mb-8" data-testid="text-footer-company">
              {isRTL ? "الشركة" : "Company"}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about">
                  <a className="text-white/70 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1" data-testid="link-footer-about">
                    {isRTL ? "عنا" : "About Us"}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-white/70 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1" data-testid="link-footer-contact">
                    {isRTL ? "اتصل بنا" : "Contact"}
                  </a>
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1" data-testid="link-privacy">
                  {isRTL ? "سياسة الخصوصية" : "Privacy Policy"}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1" data-testid="link-terms">
                  {isRTL ? "شروط الخدمة" : "Terms of Service"}
                </a>
              </li>
              <li>
                <a href="/admin" className="text-white/70 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1" data-testid="link-admin">
                  {isRTL ? "إدارة" : "Admin"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-primary mb-8" data-testid="text-footer-connect">
              {isRTL ? "تواصل" : "Connect"}
            </h3>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="group h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center hover:from-primary/30 hover:to-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="group h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center hover:from-primary/30 hover:to-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="group h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center hover:from-primary/30 hover:to-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110"
                data-testid="link-twitter"
              >
                <Twitter className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-16 pt-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
              <div className="w-2 h-2 bg-primary/30 rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
            </div>
            <p className="text-sm text-white/80 font-medium" data-testid="text-copyright">
              {isRTL ? "© 2024 الشرق للمعادن. جميع الحقوق محفوظة." : "© 2024 Alshrq Metals Trading. All rights reserved."}
            </p>
            <p className="text-xs text-white/60">
              {isRTL ? "اتصل بنا: +974 7181 3696 | البريد الإلكتروني: info@alshrq.qa" : "Call us: +974 7181 3696 | Email: info@alshrq.qa"}
            </p>
            <p className="text-xs text-primary/80 font-medium">
              {isRTL ? "تاجر الذهب المعتمد في دولة قطر" : "Licensed Gold Dealer in State of Qatar"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
