
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <header className="mb-8 flex justify-center">
          <div className="flex items-center gap-2">
            <img 
              src="/web_color_logo.svg" 
              alt="Batar Logo" 
              className="h-12 w-auto"
            />
            <h1 className="text-3xl font-bold text-primary">شركة البتار</h1>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} شركة البتار. جميع الحقوق محفوظة</p>
        </footer>
      </div>
      <Toaster />
      <Sonner />
    </div>
  );
}
