
import { Card, CardContent } from "@/components/ui/card";
import { Building2, BarChart2, Phone, PhoneIncoming } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function DashboardSummary() {
  // Sample data for minutes
  const outboundMinutes = {
    available: 5,
    total: 15
  };
  
  const inboundMinutes = {
    available: 8,
    total: 20
  };

  // Calculate percentages for progress bars
  const outboundPercentage = (outboundMinutes.available / outboundMinutes.total) * 100;
  const inboundPercentage = (inboundMinutes.available / inboundMinutes.total) * 100;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard 
        icon={<Building2 className="text-blue-500" />}
        title="Company Name"
        value="Al-Batar"
        description="Company Information"
      />
      
      <StatCard 
        icon={<BarChart2 className="text-purple-500" />}
        title="ID"
        value="0011"
        description="Company Identifier"
      />
      
      <MinutesCard 
        icon={<Phone className="text-amber-500" />}
        title="Outbound Minutes"
        available={outboundMinutes.available}
        total={outboundMinutes.total}
        percentage={outboundPercentage}
        description="Minutes Available for Outbound Calls"
      />
      
      <MinutesCard 
        icon={<PhoneIncoming className="text-green-500" />}
        title="Inbound Minutes"
        available={inboundMinutes.available}
        total={inboundMinutes.total}
        percentage={inboundPercentage}
        description="Minutes Available for Inbound Calls"
      />
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}

function StatCard({ icon, title, value, description }: StatCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface MinutesCardProps {
  icon: React.ReactNode;
  title: string;
  available: number;
  total: number;
  percentage: number;
  description: string;
}

function MinutesCard({ icon, title, available, total, percentage, description }: MinutesCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold">{available}/{total}</h3>
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div className="w-full mt-3">
          <Progress value={percentage} className="h-2" />
          <p className="text-xs text-right mt-1 text-muted-foreground">{Math.round(percentage)}% available</p>
        </div>
      </CardContent>
    </Card>
  );
}
