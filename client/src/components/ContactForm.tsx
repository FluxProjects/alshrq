import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [isRTL, setIsRTL] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const checkRTL = () => {
      setIsRTL(document.documentElement.dir === 'rtl');
    };
    
    checkRTL();
    const observer = new MutationObserver(checkRTL);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
    
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    toast({
      title: isRTL ? "تم إرسال الرسالة" : "Message Sent",
      description: isRTL ? "شكراً لاتصالك بنا. سنرد خلال 24 ساعة." : "Thank you for contacting us. We'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
      <div>
        <Label htmlFor="name" className="text-sm uppercase tracking-widest text-foreground">
          {isRTL ? "الاسم الكامل" : "Full Name"}
        </Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-2"
          required
          data-testid="input-name"
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-sm uppercase tracking-widest text-foreground">
          {isRTL ? "عنوان البريد الإلكتروني" : "Email Address"}
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-2"
          required
          data-testid="input-email"
        />
      </div>

      <div>
        <Label htmlFor="phone" className="text-sm uppercase tracking-widest text-foreground">
          {isRTL ? "رقم الهاتف" : "Phone Number"}
        </Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="mt-2"
          data-testid="input-phone"
        />
      </div>

      <div>
        <Label htmlFor="message" className="text-sm uppercase tracking-widest text-foreground">
          {isRTL ? "الرسالة" : "Message"}
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="mt-2 min-h-[150px]"
          required
          data-testid="input-message"
        />
      </div>

      <Button type="submit" className="w-full px-4 py-2 text-sm" data-testid="button-submit-contact">
        {isRTL ? "إرسال الرسالة" : "Send Message"}
      </Button>
    </form>
  );
}
