
import { User, Globe, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { useLocation, useNavigate } from "react-router-dom";
import { refreshIframe } from "@/pages/ModulePage";

interface SidebarFooterProps {
  collapsed: boolean;
}

export function SidebarFooter({ collapsed }: SidebarFooterProps) {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const location = useLocation();
  const navigate = useNavigate();
  const showReloadButton = location.pathname !== "/";

  return (
    <div className="mt-auto border-t p-4 space-y-4">
      {showReloadButton && (
        <Button
          variant="ghost"
          onClick={refreshIframe}
          className={cn(
            "flex items-center gap-3 w-full rounded-md px-3 py-2 text-sm font-medium transition-colors",
            "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            collapsed && "justify-center px-2"
          )}
        >
          <RefreshCw size={20} />
          {!collapsed && <span>{language === 'en' ? 'Reload' : 'تحديث'}</span>}
        </Button>
      )}
      
      <div className={cn(
        "flex items-center gap-3", 
        collapsed && "justify-center"
      )}>
        <Button
          variant="ghost"
          size="sm"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10"
          onClick={() => navigate('/profile')}
        >
          <User className="h-5 w-5" />
        </Button>
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
