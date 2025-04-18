
import { 
  LayoutDashboard, 
  PieChart, 
  FileBarChart, 
  VideoIcon, 
  Settings, 
  Phone, 
  Radio, 
  ClipboardList
} from "lucide-react";

export const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Live Board",
    href: "/live-board",
    icon: <LayoutDashboard className="h-5 w-5" />,
    url: 'https://voice2.etisalna.com/switchboard/auto.php'
  },
  {
    title: "Reports",
    href: "/reports",
    icon: <FileBarChart className="h-5 w-5" />,
    url: 'https://voice2.etisalna.com/sonata/service/v1/auto.php'
  },
  {
    title: "Recordings",
    href: "/recordings",
    icon: <VideoIcon className="h-5 w-5" />,
    url: 'https://voice2.etisalna.com/recordings/auto.php'
  },
  {
    title: "Admin Panel",
    href: "/admin-panel",
    icon: <Settings className="h-5 w-5" />,
    url: 'https://voice2.etisalna.com/auto.php'
  },
  {
    title: "CRM",
    href: "/crm",
    icon: <PieChart className="h-5 w-5" />,
    url: 'https://crm.etisalna.com/auto.php'
  },
  {
    title: "Web Phone",
    href: "/webphone",
    icon: <Phone className="h-5 w-5" />,
    url: 'https://voice2.etisalna.com/vitxi-service/v1/auto.php'
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
