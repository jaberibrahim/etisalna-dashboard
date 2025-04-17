
import { useLocation, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  LayoutDashboard, 
  PieChart, 
  FileBarChart, 
  VideoIcon, 
  Settings, 
  Phone, 
  Radio, 
  ClipboardList,
  User,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Live Board",
    href: "/live-board",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: <FileBarChart className="h-5 w-5" />,
  },
  {
    title: "Recordings",
    href: "/recordings",
    icon: <VideoIcon className="h-5 w-5" />,
  },
  {
    title: "Admin Panel",
    href: "/admin-panel",
    icon: <Settings className="h-5 w-5" />,
  },
  {
    title: "CRM",
    href: "/crm",
    icon: <PieChart className="h-5 w-5" />,
  },
  {
    title: "Web Phone",
    href: "/webphone",
    icon: <Phone className="h-5 w-5" />,
  },
  {
    title: "Broadcast",
    href: "/broadcast",
    icon: <Radio className="h-5 w-5" />,
  },
  {
    title: "Survey",
    href: "/survey",
    icon: <ClipboardList className="h-5 w-5" />,
  }
];

export function Sidebar() {
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={cn(
      "group flex h-screen flex-col bg-sidebar text-sidebar-foreground shadow-sm border-r transition-all duration-300",
      collapsed ? "w-[80px]" : "w-[240px]"
    )}>
      <div className="flex h-14 items-center justify-between border-b px-4">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/069f4113-d87a-4cb4-bc98-b707a4821c97.png" 
              alt="eTelecom Logo" 
              className="h-8 w-8 rounded-full"
            />
            <span className="text-lg font-semibold">eTelecom</span>
          </div>
        )}
        {collapsed && (
          <img 
            src="/lovable-uploads/069f4113-d87a-4cb4-bc98-b707a4821c97.png" 
            alt="eTelecom Logo" 
            className="h-8 w-8 rounded-full mx-auto"
          />
        )}
        <Button 
          variant="ghost" 
          size="sm" 
          className="ml-auto p-0 h-8 w-8" 
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>
      <ScrollArea className="flex-1 px-2 py-4">
        <nav className="flex flex-col gap-1">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  collapsed && "justify-center px-2"
                )
              }
              title={collapsed ? item.title : undefined}
            >
              {item.icon}
              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          ))}
        </nav>
      </ScrollArea>
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
    </div>
  );
}
