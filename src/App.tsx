import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Dashboard from "./pages/Dashboard";
import ModulePage from "./pages/ModulePage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/live-board" element={<ModulePage />} />
            <Route path="/reports" element={<ModulePage />} />
            <Route path="/recordings" element={<ModulePage />} />
            <Route path="/admin-panel" element={<ModulePage />} />
            <Route path="/crm" element={<ModulePage />} />
            <Route path="/webphone" element={<ModulePage />} />
            <Route path="/broadcast" element={<ModulePage />} />
            <Route path="/survey" element={<ModulePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
