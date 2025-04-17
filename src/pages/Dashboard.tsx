
import { Layout } from "@/components/Layout";
import { DashboardSummary } from "@/components/DashboardSummary";
import { DashboardModulesList } from "@/components/DashboardModulesList";
import { Card, CardContent } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome to Al-Batar Company Dashboard</p>
        </div>
        
        <DashboardSummary />
        <DashboardModulesList />
      </div>
    </Layout>
  );
};

export default Dashboard;
