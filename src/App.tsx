
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectExplore from "./pages/ProjectExplore";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectRegister from "./pages/ProjectRegister";
import ProjectManage from "./pages/ProjectManage";
import BootcampDetail from "./pages/BootcampDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/explore" element={<ProjectExplore />} />
          <Route path="/project/register" element={<ProjectRegister />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/project/:id/manage" element={<ProjectManage />} />
          <Route path="/bootcamp/:id" element={<BootcampDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
