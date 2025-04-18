
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
import { useNavigate } from "react-router-dom";

const modules = [
  {
    id: 'live-board',
    title: 'Live Board',
    icon: <LayoutDashboard className="h-5 w-5" />,
    url: 'https://voice2.etisalna.com/switchboard/auto.php',
    startDate: '2024-03-23',
    endDate: '2025-12-31',
    isOpen: true
  },
  {
    id: 'reports',
    title: 'Reports',
    icon: <FileBarChart className="h-5 w-5" />,
    url: 'https://voice2.etisalna.com/sonata/service/v1/auto.php',
    startDate: '2024-03-23',
    endDate: '2025-12-31',
    isOpen: true
  },
  {
    id: 'recordings',
    title: 'Recordings',
    icon: <VideoIcon className="h-5 w-5" />,
    url: 'https://voice2.etisalna.com/recordings/auto.php',
    startDate: '2024-03-23',
    endDate: '2025-12-31',
    isOpen: true
  },
  {
    id: 'admin-panel',
    title: 'Admin Panel',
    icon: <Settings className="h-5 w-5" />,
    url: 'https://voice2.etisalna.com/auto.php',
    startDate: '2024-03-23',
    endDate: '2025-04-14',
    isOpen: true
  },
  {
    id: 'crm',
    title: 'CRM',
    icon: <PieChart className="h-5 w-5" />,
    url: 'https://crm.etisalna.com/auto.php',
    startDate: '2024-03-23',
    endDate: '2025-12-31',
    isOpen: true
  },
  {
    id: 'webphone',
    title: 'Web Phone',
    icon: <Phone className="h-5 w-5" />,
    url: 'https://voice2.etisalna.com/vitxi-service/v1/auto.php',
    startDate: '2025-01-29',
    endDate: '2025-12-31',
    isOpen: true
  },
  {
    id: 'broadcast',
    title: 'Broadcast',
    icon: <Radio className="h-5 w-5" />,
    startDate: '2024-03-23',
    endDate: '2025-12-31',
    isOpen: true
  },
  {
    id: 'survey',
    title: 'Survey',
    icon: <ClipboardList className="h-5 w-5" />,
    startDate: '2024-03-23',
    endDate: '2025-12-31',
    isOpen: true
  }
];

export function DashboardModulesList() {
  const navigate = useNavigate();

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
          url={module.url}
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
  url?: string;
}

function ModuleCard({ icon, title, startDate, endDate, isOpen, url }: ModuleCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB'); // Using British English format (dd/mm/yyyy)
  };

  const handleClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
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
              <span className="text-sm text-muted-foreground">Start:</span>
            </div>
            <span className="text-sm font-medium">{formatDate(startDate)}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">End:</span>
            </div>
            <span className="text-sm font-medium">{formatDate(endDate)}</span>
          </div>
          
          <Button 
            className={`w-full mt-2 ${isOpen ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500 hover:bg-gray-600'}`}
            onClick={handleClick}
            disabled={!isOpen || !url}
          >
            {isOpen ? 'Open' : 'Closed'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
