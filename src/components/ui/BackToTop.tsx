import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./Button";
import { cn } from "../../lib/utils";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={cn(
        "fixed bottom-8 right-8 z-50 transition-all duration-300",
        // Reduced the floaty translation distance for a more grounded slide-in
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      )}
    >
      <Button
        onClick={scrollToTop}
        size="sm"
        // Sharp edges, high contrast, heavy industrial styling
        className="h-12 w-12 rounded-sm shadow-xl bg-primary-900 text-white hover:bg-secondary hover:text-primary-950 border-none transition-colors duration-300 cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6 stroke-[2.5]" />
      </Button>
    </div>
  );
}