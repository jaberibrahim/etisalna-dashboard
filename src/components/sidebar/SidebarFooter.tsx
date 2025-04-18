
import { User, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

interface SidebarFooterProps {
  collapsed: boolean;
}

export function SidebarFooter({ collapsed }: SidebarFooterProps) {
  const { language, toggleLanguage, texts } = useContext(LanguageContext);

  return (
    <div className="mt-auto border-t p-4">
      <div className={cn(
        "flex items-center gap-3 mb-4", 
        collapsed && "justify-center"
      )}>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
          <User className="h-5 w-5" />
        </div>
        {!collapsed && (
          <div>
            <p className="text-sm font-medium">User</p>
            <p className="text-xs text-muted-foreground">admin@etelecom.com</p>
          </div>
        )}
      </div>
      
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={toggleLanguage}
        className={cn(
          "flex items-center gap-2 w-full", 
          collapsed && "justify-center p-0"
        )}
      >
        <Globe className="h-4 w-4" />
        {!collapsed && <span>{language === 'en' ? 'العربية' : 'English'}</span>}
      </Button>
    </div>
  );
}
