
import { useLocation } from "react-router-dom";
import { Layout } from "@/components/Layout";

const ModulePage = () => {
  const location = useLocation();
  const moduleUrl = location.state?.url;

  if (!moduleUrl) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-full">
          <p className="text-lg text-muted-foreground">No module URL provided</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <iframe
        src={moduleUrl}
        className="w-full h-screen border-0"
        title="Module Content"
      />
    </Layout>
  );
};

export default ModulePage;
