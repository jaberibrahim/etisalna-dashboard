
import { Card, CardContent } from "@/components/ui/card";
import { Building2, BarChart2, Clock, Timer } from "lucide-react";

export function DashboardSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard 
        icon={<Building2 className="text-blue-500" />}
        title="اسم الشركة"
        value="البتار"
        description="معلومات الشركة"
      />
      
      <StatCard 
        icon={<BarChart2 className="text-purple-500" />}
        title="المعرف"
        value="0011"
        description="رقم تعريف الشركة"
      />
      
      <StatCard 
        icon={<Clock className="text-amber-500" />}
        title="إجمالي الدقائق"
        value="15"
        description="الدقائق المستخدمة"
      />
      
      <StatCard 
        icon={<Timer className="text-green-500" />}
        title="الدقائق المتاحة"
        value="5"
        description="الدقائق المتبقية"
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
