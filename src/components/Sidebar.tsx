
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
  User
} from "lucide-react";

const navItems = [
  {
    title: "لوحة التحكم",
    href: "/",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "لوحة مباشرة",
    href: "/live-board",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "التقارير",
    href: "/reports",
    icon: <FileBarChart className="h-5 w-5" />,
  },
  {
    title: "التسجيلات",
    href: "/recordings",
    icon: <VideoIcon className="h-5 w-5" />,
  },
  {
    title: "لوحة الإدارة",
    href: "/admin-panel",
    icon: <Settings className="h-5 w-5" />,
  },
  {
    title: "إدارة علاقات العملاء",
    href: "/crm",
    icon: <PieChart className="h-5 w-5" />,
  },
  {
    title: "هاتف الويب",
    href: "/webphone",
    icon: <Phone className="h-5 w-5" />,
  },
  {
    title: "البث",
    href: "/broadcast",
    icon: <Radio className="h-5 w-5" />,
  },
  {
    title: "الاستطلاع",
    href: "/survey",
    icon: <ClipboardList className="h-5 w-5" />,
  }
];

export function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className="group flex h-screen flex-col bg-sidebar text-sidebar-foreground shadow-sm border-l">
      <div className="flex h-14 items-center border-b px-4">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/069f4113-d87a-4cb4-bc98-b707a4821c97.png" 
            alt="eTelecom Logo" 
            className="h-8 w-8 rounded-full"
          />
          <span className="text-lg font-semibold">eTelecom</span>
        </div>
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
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )
              }
            >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>
      </ScrollArea>
      <div className="mt-auto border-t p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
            <User className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-medium">المستخدم</p>
            <p className="text-xs text-muted-foreground">admin@etelecom.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
