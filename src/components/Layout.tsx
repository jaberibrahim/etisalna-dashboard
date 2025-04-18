
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ReactNode, useContext } from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { LanguageContext } from "@/contexts/LanguageContext";

type LayoutProps = {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { direction } = useContext(LanguageContext);
  
  return (
    <div className={`flex min-h-screen bg-background ${direction}`}>
      <Sidebar />
      <div className="flex-1 overflow-auto transition-all duration-300">
        <div className="h-full">
          <main className="flex-1 h-full">
            {children}
          </main>
        </div>
      </div>
      <Toaster />
      <Sonner />
    </div>
  );
}
