
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  PieChart, 
  FileBarChart, 
  VideoIcon, 
  Settings, 
  Phone, 
  Radio, 
  ClipboardList,
  Clock
} from "lucide-react";

const modules = [
  {
    id: 'live-board',
    title: 'لوحة مباشرة',
    icon: <LayoutDashboard className="h-5 w-5" />,
    startDate: '2024-03-23',
    endDate: '2025-12-31',
    isOpen: true
  },
  {
    id: 'reports',
    title: 'التقارير',
    icon: <FileBarChart className="h-5 w-5" />,
    startDate: '2024-03-23',
    endDate: '2025-12-31',
    isOpen: true
  },
  {
    id: 'recordings',
    title: 'التسجيلات',
    icon: <VideoIcon className="h-5 w-5" />,
    startDate: '2024-03-23',
    endDate: '2025-12-31',
    isOpen: true
  },
  {
    id: 'admin-panel',
    title: 'لوحة الإدارة',
    icon: <Settings className="h-5 w-5" />,
    startDate: '2024-03-23',
    endDate: '2025-04-14',
    isOpen: true
  },
  {
    id: 'crm',
    title: 'إدارة علاقات العملاء',
    icon: <PieChart className="h-5 w-5" />,
    startDate: '2024-03-23',
    endDate: '2025-12-31',
    isOpen: true
  },
  {
    id: 'webphone',
    title: 'هاتف الويب',
    icon: <Phone className="h-5 w-5" />,
    startDate: '2025-01-29',
    endDate: '2025-12-31',
    isOpen: true
  },
  {
    id: 'broadcast',
    title: 'البث',
    icon: <Radio className="h-5 w-5" />,
    startDate: '2024-03-23',
    endDate: '2025-12-31',
    isOpen: true
  },
  {
    id: 'survey',
    title: 'الاستطلاع',
    icon: <ClipboardList className="h-5 w-5" />,
    startDate: '2024-03-23',
    endDate: '2025-12-31',
    isOpen: true
  }
];

export function DashboardModulesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {modules.map((module) => (
        <ModuleCard 
          key={module.id}
          title={module.title}
          icon={module.icon}
          startDate={module.startDate}
          endDate={module.endDate}
          isOpen={module.isOpen}
        />
      ))}
    </div>
  );
}

interface ModuleCardProps {
  icon: React.ReactNode;
  title: string;
  startDate: string;
  endDate: string;
  isOpen: boolean;
}

function ModuleCard({ icon, title, startDate, endDate, isOpen }: ModuleCardProps) {
  // Format dates to local format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA');
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
      <CardContent className="p-0">
        <div className="p-4 flex items-center gap-3 border-b">
          <div className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
            {icon}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        
        <div className="p-4 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">البداية:</span>
            </div>
            <span className="text-sm font-medium">{formatDate(startDate)}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">النهاية:</span>
            </div>
            <span className="text-sm font-medium">{formatDate(endDate)}</span>
          </div>
          
          <Button 
            className={`w-full mt-2 ${isOpen ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500 hover:bg-gray-600'}`}
          >
            {isOpen ? 'مفتوح' : 'مغلق'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
