
import { useLocation } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useRef } from "react";

const ModulePage = () => {
  const location = useLocation();
  const moduleUrl = location.state?.url;
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const refreshIframe = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

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
        ref={iframeRef}
        src={moduleUrl}
        className="w-full h-screen border-0"
        title="Module Content"
      />
    </Layout>
  );
};

export { refreshIframe };
export default ModulePage;
