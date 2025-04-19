
import { useLocation } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useRef } from "react";

// Define the refresh function outside of the component so it can be exported
let refreshIframeFunction: () => void = () => {};

const ModulePage = () => {
  const location = useLocation();
  const moduleUrl = location.state?.url;
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Define the refresh function
  const refreshIframe = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  // Update the external reference to this function
  refreshIframeFunction = refreshIframe;

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

// Export the refresh function
export const refreshIframe = () => refreshIframeFunction();
export default ModulePage;
