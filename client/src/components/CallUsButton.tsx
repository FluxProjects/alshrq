import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CallUsButton() {
  const navigate = useNavigate();
  const handleCall = () => {
    window.location.href = "tel:+97471813696";
  };

  return (
    <Button
      size="lg"
      onClick={handleCall}
      className="gap-2 text-base px-6"
      data-testid="button-call-us"
    >
      <Phone className="h-5 w-5" />
      <span>Call Us Now</span>
    </Button>
  );
}
