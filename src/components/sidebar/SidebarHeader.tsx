
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SidebarHeaderProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export function SidebarHeader({ collapsed, onToggleCollapse }: SidebarHeaderProps) {
  return (
    <div className="flex h-14 items-center justify-between border-b px-4">
      {!collapsed && (
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/e49c4a0f-a6aa-4a49-9506-cce12b6d818f.png" 
            alt="eTelecom Logo" 
            className="h-8 w-8 rounded-full"
          />
          <span className="text-lg font-semibold">ETISALNA</span>
        </div>
      )}
      {collapsed && (
        <img 
          src="/lovable-uploads/e49c4a0f-a6aa-4a49-9506-cce12b6d818f.png" 
          alt="eTelecom Logo" 
          className="h-8 w-8 rounded-full mx-auto"
        />
      )}
      <Button 
        variant="ghost" 
        size="sm" 
        className="ml-auto p-0 h-8 w-8" 
        onClick={onToggleCollapse}
      >
        {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </Button>
    </div>
  );
}
