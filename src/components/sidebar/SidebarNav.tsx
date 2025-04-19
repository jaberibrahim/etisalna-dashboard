
import { useNavigate, useLocation } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { navItems } from "@/config/navigation";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { refreshIframe } from "@/pages/ModulePage";

interface SidebarNavProps {
  collapsed: boolean;
}

export function SidebarNav({ collapsed }: SidebarNavProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useContext(LanguageContext);
  
  const handleNavigation = (href: string, url: string) => {
    navigate(href, { state: { url } });
  };

  const showReloadButton = location.pathname !== "/";

  return (
    <ScrollArea className="flex-1 px-2 py-4">
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <button
            key={item.title}
            onClick={() => handleNavigation(item.href, item.url)}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              collapsed && "justify-center px-2"
            )}
          >
            {item.icon}
            {!collapsed && <span>{language === 'en' ? item.title : item.titleAr}</span>}
          </button>
        ))}
        {showReloadButton && (
          <Button
            variant="ghost"
            onClick={refreshIframe}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              collapsed && "justify-center px-2"
            )}
          >
            <RefreshCw size={20} />
            {!collapsed && <span>{language === 'en' ? 'Reload' : 'تحديث'}</span>}
          </Button>
        )}
      </nav>
    </ScrollArea>
  );
}
