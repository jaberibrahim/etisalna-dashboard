
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarFooterProps {
  collapsed: boolean;
}

export function SidebarFooter({ collapsed }: SidebarFooterProps) {
  return (
    <div className="mt-auto border-t p-4">
      <div className={cn(
        "flex items-center gap-3", 
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
    </div>
  );
}
