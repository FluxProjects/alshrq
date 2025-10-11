import { Card } from "@/components/ui/card";
import { Award, Gem, Shield } from "lucide-react";
import goldBarImage from '@assets/stock_images/gold-coins-bars-compressed.jpg';
import { useState, useEffect } from "react";

const values = [
  {
    icon: Gem,
    title: "Premium Products",
    titleAr: "منتجات متميزة",
    description: "Supply premium products compliant with international standards",
    descriptionAr: "توريد منتجات متميزة متوافقة مع المعايير الدولية",
  },
  {
    icon: Award,
    title: "Honesty & Transparency",
    titleAr: "الصدق والشفافية",
    description: "Commit to honesty and transparency in all our dealings",
    descriptionAr: "الالتزام بالصدق والشفافية في جميع تعاملاتنا",
  },
  {
    icon: Shield,
    title: "Customer Rights",
    titleAr: "حقوق العملاء",
    description: "Ensure customers' rights via clear invoices, certified grades, fair warranty and return policies",
    descriptionAr: "ضمان حقوق العملاء من خلال فواتير واضحة ودرجات معتمدة وسياسات ضمان وإرجاع عادلة",
  },
];

export default function AboutSection() {
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
    <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8" data-testid="section-about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center mb-12 sm:mb-24">
          <div>
            <p className="text-primary text-sm uppercase tracking-widest mb-4" data-testid="text-about-label">
              {isRTL ? "من نحن" : "About Us"}
            </p>
            <h2 className={`${isRTL ? 'font-serif' : 'font-sans'} text-xl xs:text-2xl md:text-4xl lg:text-5xl font-light text-foreground mb-6`} data-testid="text-about-title">
              {isRTL ? "الشرق للتجارة في " : "Al Shrq for Trade in "}<span className="text-primary">{isRTL ? "المعادن النفيسة" : "Precious Metals"}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed" data-testid="text-about-content">
              <p>
                {isRTL ? "الشرق للتجارة في المعادن الثمينة والنفيسة شركة قطرية متخصصة في استيراد وتصدير وبيع المعادن الثمينة مثل الذهب والفضة والبلاتين، بالإضافة إلى الأحجار الكريمة. هدفنا تقديم منتجات عالية الجودة بأعلى درجات النقاء، مع الشفافية الكاملة في الأسعار والعيار." : "Al Shrq for Trade in Precious & Precious Metals is a Qatar-based company specialized in importing, exporting, and selling precious metals (gold, silver, platinum) and gemstones. We strive to deliver high-purity products with full transparency in pricing and metal grades."}
              </p>
              <div className="mt-8">
                <h3 className={`${isRTL ? 'font-serif' : 'font-sans'} text-xl font-medium text-foreground mb-3`}>
                  {isRTL ? "رؤيتنا" : "Our Vision"}
                </h3>
                <p>
                  {isRTL ? "أن نصبح الخيار الأول في قطر لمن يطلب الأصالة والجودة في المعادن الثمينة، وأن نساهم في تطوير سوق موثوق ومستدام لهذا القطاع." : "To be the first choice in Qatar for anyone seeking authenticity and quality in precious metals, and to help build a trusted, sustainable market for this sector."}
                </p>
              </div>
              <div className="mt-6">
                <h3 className={`${isRTL ? 'font-serif' : 'font-sans'} text-xl font-medium text-foreground mb-3`}>
                  {isRTL ? "مهمتنا" : "Our Mission"}
                </h3>
                <div className={isRTL ? "space-y-2" : "space-y-2"}>
                  <p>{isRTL ? "• توفير منتجات ذات جودة مميزة بمعيار دولي." : "• Supply premium products compliant with international standards."}</p>
                  <p>{isRTL ? "• الالتزام بالمصداقية والشفافية في كل تعاملاتنا." : "• Commit to honesty and transparency in all our dealings."}</p>
                  <p>{isRTL ? "• ضمان حقوق العملاء من خلال فواتير واضحة، شهادات عيار، وسياسات ضمان واسترجاع عادلة." : "• Ensure customers' rights via clear invoices, certified grades, fair warranty and return policies."}</p>
                  <p>{isRTL ? "• الالتزام بالقوانين والأنظمة المعمول بها في قطر، لا سيما تلك الخاصة بتجارة المعادن الثمينة والمجوهرات." : "• Fully comply with Qatar's regulations governing precious metals and jewelry trading."}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-md overflow-hidden">
              <img
                src={goldBarImage}
                alt="Premium Gold Coins and Bars"
                className="w-full h-full object-cover"
                data-testid="img-gold-bar"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-8 rounded-md max-w-xs">
              <p className="font-accent text-4xl font-bold mb-2">100%</p>
              <p className="text-sm uppercase tracking-widest">{isRTL ? "شفافية وجودة" : "Transparency & Quality"}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-8 text-center hover-elevate" data-testid={`card-value-${index}`}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className={`${isRTL ? 'font-serif' : 'font-sans'} text-xl font-medium text-foreground mb-3`} data-testid={`text-value-title-${index}`}>
                {isRTL ? value.titleAr : value.title}
              </h3>
              <p className="text-muted-foreground text-sm" data-testid={`text-value-description-${index}`}>
                {isRTL ? value.descriptionAr : value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
