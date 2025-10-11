import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useState, useEffect } from "react";

export default function RTLToggle() {
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    const savedRTL = localStorage.getItem('rtl') === 'true';
    setIsRTL(savedRTL);
    document.documentElement.dir = savedRTL ? 'rtl' : 'ltr';
  }, []);

  const toggleRTL = () => {
    const newRTL = !isRTL;
    setIsRTL(newRTL);
    document.documentElement.dir = newRTL ? 'rtl' : 'ltr';
    localStorage.setItem('rtl', String(newRTL));
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleRTL}
      data-testid="button-rtl-toggle"
      title={isRTL ? "Switch to LTR" : "Switch to RTL"}
    >
      <Languages className="h-5 w-5" />
    </Button>
  );
}
