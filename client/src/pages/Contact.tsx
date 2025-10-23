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
              {isRTL ? (
                <>
                  هل لديك سؤال حول مجموعتنا من سبائك <span className="text-primary font-semibold">الذهب</span>؟ نحن هنا لمساعدتك في العثور على القطعة المثالية.
                </>
              ) : (
                "Have a question about our gold bar collection? We're here to help you find the perfect piece."
              )}
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
                      {isRTL ? "زرنا" : "Visit Us"}
                    </h3>
                    <p className="text-muted-foreground" data-testid="text-address">
                      {isRTL ? "المنطقة: 56، الشارع: 205، مبنى 32، عين خالد، الدوحة، قطر (الشرق)" : "ZONE: 56, STREET: 205, Building 32, Ain Khaled, Doha, Qatar (Alshrq)"}
                    </p>
                    <a 
                      href="https://www.google.com/maps/place/25%C2%B013'53.8%22N+51%C2%B026'38.7%22E/@25.2316504,51.441552,16.94z/data=!4m4!3m3!8m2!3d25.2316017!4d51.4440918?hl=en&entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-3 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      <MapPin className="h-4 w-4 mr-1" />
                      {isRTL ? "عرض على خرائط جوجل" : "View on Google Maps"}
                    </a>
                    <div className="mt-4 rounded-xl overflow-hidden -mx-8 px-8 shadow-sm">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.8!2d51.4440918!3d25.2316017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDEzJzUzLjgiTiA1McKwMjYnMzguNyJF!5e0!3m2!1sen!2sqa!4v1640995200000!5m2!1sen!2sqa"
                        width="100%"
                        height="120"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={isRTL ? "خريطة موقع الشرق" : "Alshrq Location Map"}
                      />
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="p-6 hover-elevate">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-2 text-sm" data-testid="text-phone-title">
                        {isRTL ? "اتصل بنا" : "Call Us"}
                      </h3>
                      <p className="text-muted-foreground text-sm" data-testid="text-phone">
                        <a href="tel:+97471813696" className="hover:text-primary transition-colors" dir="ltr">
                          +974 7181 3696
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover-elevate">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-2 text-sm" data-testid="text-email-title">
                        {isRTL ? "راسلنا بالبريد الإلكتروني" : "Email Us"}
                      </h3>
                      <p className="text-muted-foreground text-sm" data-testid="text-email">
                        <a href="mailto:info@alshrq.qa" className="hover:text-primary transition-colors">info@alshrq.qa</a>
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

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
