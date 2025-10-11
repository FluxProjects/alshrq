import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  const handleCall = () => {
    window.location.href = "tel:+97471813696";
  };

  return (
    <div className="fixed bottom-8 right-8 z-40" data-testid="floating-call-button">
      <Button
        size="lg"
        onClick={handleCall}
        className="rounded-full h-16 w-16 shadow-2xl shadow-primary/50 animate-pulse hover:animate-none gap-0 p-0"
        data-testid="button-floating-call"
      >
        <Phone className="h-6 w-6" />
      </Button>
      <div className="absolute -top-2 -right-2 h-4 w-4 bg-destructive rounded-full animate-ping" />
    </div>
  );
}
