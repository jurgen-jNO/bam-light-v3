import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Mobile from "./pages/Mobile.tsx";
import WordLid from "./pages/WordLid.tsx";
import Leden from "./pages/Leden.tsx";
import Affiliations from "./pages/Affiliations.tsx";
import Sponsors from "./pages/Sponsors.tsx";
import InschrijvenSolo from "./pages/InschrijvenSolo.tsx";
import InschrijvenGrowth from "./pages/InschrijvenGrowth.tsx";
import InschrijvenGalaxy from "./pages/InschrijvenGalaxy.tsx";
import InschrijvenAcademy from "./pages/InschrijvenAcademy.tsx";
import InschrijvenYouth from "./pages/InschrijvenYouth.tsx";
import InschrijvenFriends from "./pages/InschrijvenFriends.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/word-lid" element={<WordLid />} />
          <Route path="/leden" element={<Leden />} />
          <Route path="/affiliations" element={<Affiliations />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/inschrijven/solo" element={<InschrijvenSolo />} />
          <Route path="/inschrijven/growth" element={<InschrijvenGrowth />} />
          <Route path="/inschrijven/galaxy" element={<InschrijvenGalaxy />} />
          <Route path="/inschrijven/academy" element={<InschrijvenAcademy />} />
          <Route path="/inschrijven/youth" element={<InschrijvenYouth />} />
          <Route path="/inschrijven/friends" element={<InschrijvenFriends />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
