import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ReactNode } from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";

type LayoutProps = {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="container py-8 px-4 md:px-6">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
      <Toaster />
      <Sonner />
    </div>
  );
}
