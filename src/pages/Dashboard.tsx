
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { DashboardSummary } from "@/components/DashboardSummary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { navItems } from "@/config/navigation";
import { LanguageContext } from "@/contexts/LanguageContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { language, texts } = useContext(LanguageContext);
  
  const openModule = (path: string, url: string) => {
    navigate(path, { state: { url } });
  };

  return (
    <Layout>
      <div className="flex flex-col gap-8 w-full p-4 md:p-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {texts.dashboard}
          </h1>
          <p className="text-muted-foreground">
            {texts.welcomeMessage}
          </p>
        </div>
        
        <DashboardSummary />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navItems.map((item) => (
            <Card 
              key={item.title} 
              className="overflow-hidden hover:shadow-md transition-all duration-300 border-t-4 border-t-primary"
            >
              <CardHeader className="bg-muted/50 pb-2">
                <CardTitle className="flex items-center gap-2 text-lg font-medium">
                  {item.icon}
                  <span>{language === 'en' ? item.title : item.titleAr}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'en' ? item.description : item.descriptionAr}
                </p>
                <Button 
                  className="w-full" 
                  onClick={() => openModule(item.href, item.url)}
                >
                  {texts.openModule}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
