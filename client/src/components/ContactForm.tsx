import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

// Replace these with your actual EmailJS credentials
const SERVICE_ID = "service_64f16o5";
const TEMPLATE_ID = "template_8kmzaui";
const PUBLIC_KEY = "J79OYm995H6jSNUXD"; // aka userId

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      toast({
        title: isRTL ? "تم إرسال الرسالة" : "Message Sent",
        description: isRTL
          ? "شكراً لاتصالك بنا. سنرد خلال 24 ساعة."
          : "Thank you for contacting us. We'll respond within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);

      toast({
        title: isRTL ? "فشل في إرسال الرسالة" : "Message Failed",
        description: isRTL
          ? "حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى لاحقًا."
          : "An error occurred while sending the message. Please try again later.",
        variant: "destructive",
      });
    }
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
