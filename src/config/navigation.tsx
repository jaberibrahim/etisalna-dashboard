
import { 
  BarChart2, 
  FileText, 
  Headphones, 
  MessageSquare, 
  Mic2, 
  Phone, 
  Settings, 
  Users 
} from "lucide-react";

export const navItems = [
  {
    title: "Live Board",
    titleAr: "اللوحة المباشرة",
    description: "Real-time call monitoring and agent status",
    descriptionAr: "مراقبة المكالمات ووضع الوكلاء في الوقت الفعلي",
    href: "/live-board",
    url: "https://voice2.etisalna.com/switchboard/auto.php",
    icon: <BarChart2 className="h-5 w-5" />,
  },
  {
    title: "Reports",
    titleAr: "التقارير",
    description: "Access detailed call and agent reports",
    descriptionAr: "الوصول إلى تقارير مفصلة عن المكالمات والوكلاء",
    href: "/reports",
    url: "https://voice2.etisalna.com/sonata/service/v1/auto.php",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Recordings",
    titleAr: "التسجيلات",
    description: "Listen to call recordings and quality management",
    descriptionAr: "الاستماع إلى تسجيلات المكالمات وإدارة الجودة",
    href: "/recordings",
    url: "https://voice2.etisalna.com/recordings/auto.php",
    icon: <Mic2 className="h-5 w-5" />,
  },
  {
    title: "Admin Panel",
    titleAr: "لوحة الإدارة",
    description: "Manage system settings and configurations",
    descriptionAr: "إدارة إعدادات وتكوينات النظام",
    href: "/admin-panel",
    url: "https://voice2.etisalna.com/auto.php",
    icon: <Settings className="h-5 w-5" />,
  },
  {
    title: "CRM",
    titleAr: "إدارة علاقات العملاء",
    description: "Customer relationship management system",
    descriptionAr: "نظام إدارة علاقات العملاء",
    href: "/crm",
    url: "https://crm.etisalna.com/auto.php",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Webphone",
    titleAr: "هاتف الويب",
    description: "Browser-based calling application",
    descriptionAr: "تطبيق الاتصال المستند إلى المتصفح",
    href: "/webphone",
    url: "https://voice2.etisalna.com/vitxi-service/v1/auto.php",
    icon: <Phone className="h-5 w-5" />,
  },
  {
    title: "Broadcast",
    titleAr: "البث",
    description: "Send mass communications to customers",
    descriptionAr: "إرسال اتصالات جماعية للعملاء",
    href: "/broadcast",
    url: "",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    title: "Survey",
    titleAr: "الاستطلاع",
    description: "Customer feedback and survey management",
    descriptionAr: "إدارة التغذية الراجعة من العملاء والاستطلاعات",
    href: "/survey",
    url: "",
    icon: <Headphones className="h-5 w-5" />,
  },
];

