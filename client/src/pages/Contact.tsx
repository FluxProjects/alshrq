import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
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
      <div className="pt-16 sm:pt-32 pb-12 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-widest mb-4" data-testid="text-contact-label">
              {isRTL ? "تواصل معنا" : "Get in Touch"}
            </p>
            <h1 className={`${isRTL ? 'font-serif' : 'font-sans'} text-2xl md:text-4xl lg:text-5xl font-light text-foreground mb-6`} data-testid="text-contact-title">
              {isRTL ? "اتصل " : "Contact "}<span className="text-primary">{isRTL ? "بنا" : "Us"}</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-4xl mx-auto" data-testid="text-contact-description">
              {isRTL ? "هل لديك سؤال حول مجموعتنا من سبائك الذهب؟ نحن هنا لمساعدتك في العثور على القطعة المثالية." : "Have a question about our gold bar collection? We're here to help you find the perfect piece."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            <div>
              <Card className="p-8">
                <h2 className={`${isRTL ? 'font-serif' : 'font-sans'} text-2xl font-light text-foreground mb-6`} data-testid="text-contact-form-title">
                  {isRTL ? "أرسل لنا رسالة" : "Send us a Message"}
                </h2>
                <ContactForm />
              </Card>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <Card className="p-8 hover-elevate">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2" data-testid="text-address-title">
                      {isRTL ? "زر معرضنا" : "Visit Our Showroom"}
                    </h3>
                    <p className="text-muted-foreground" data-testid="text-address">
                      {isRTL ? "المنطقة: 56، الشارع: 205" : "ZONE: 56, STREET: 205"}<br />
                      {isRTL ? "عين خالد، الدوحة، قطر" : "Ain Khaled, Doha, Qatar"}<br />
                      {isRTL ? "(الشرق)" : "(Alshrq)"}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-elevate">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2" data-testid="text-phone-title">
                      {isRTL ? "اتصل بنا" : "Call Us"}
                    </h3>
                    <p className="text-muted-foreground" data-testid="text-phone">
                      <a href="tel:+97471813696" className="hover:text-primary transition-colors">+974 7181 3696</a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-elevate">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2" data-testid="text-email-title">
                      {isRTL ? "راسلنا بالبريد الإلكتروني" : "Email Us"}
                    </h3>
                    <p className="text-muted-foreground" data-testid="text-email">
                      <a href="mailto:info@alshrq.qa" className="hover:text-primary transition-colors">info@alshrq.qa</a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-elevate">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2" data-testid="text-hours-title">
                      {isRTL ? "ساعات العمل" : "Business Hours"}
                    </h3>
                    <p className="text-muted-foreground" data-testid="text-hours">
                      {isRTL ? "السبت - الخميس: 10:00 ص - 10:00 م" : "Saturday - Thursday: 10:00 AM - 10:00 PM"}<br />
                      {isRTL ? "الجمعة: 2:00 ظ - 10:00 م" : "Friday: 2:00 PM - 10:00 PM"}<br />
                      {isRTL ? "العطل الرسمية: بموعد" : "Public Holidays: By Appointment"}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
