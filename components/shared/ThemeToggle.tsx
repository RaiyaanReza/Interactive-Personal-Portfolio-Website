import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9"
      aria-label="Dark mode"
      disabled
    >
      <Moon className="h-4 w-4" />
    </Button>
  );
}
