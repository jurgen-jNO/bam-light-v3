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
import WordSponsor from "./pages/WordSponsor.tsx";
import EventDetail from "./pages/EventDetail.tsx";
import EventDetailDag from "./pages/EventDetailDag.tsx";
import DocentDetail from "./pages/DocentDetail.tsx";
import ContactDetail from "./pages/ContactDetail.tsx";
import Agenda from "./pages/Agenda.tsx";
import AgendaEvents from "./pages/AgendaEvents.tsx";
import InschrijvenSolo from "./pages/InschrijvenSolo.tsx";
import InschrijvenGrowth from "./pages/InschrijvenGrowth.tsx";
import InschrijvenGalaxy from "./pages/InschrijvenGalaxy.tsx";
import InschrijvenAcademy from "./pages/InschrijvenAcademy.tsx";
import InschrijvenYouth from "./pages/InschrijvenYouth.tsx";
import InschrijvenFriends from "./pages/InschrijvenFriends.tsx";
import OnboardingGrowth from "./pages/OnboardingGrowth.tsx";
import OnboardingGalaxy from "./pages/OnboardingGalaxy.tsx";
import Login from "./pages/Login.tsx";
import LoginIndividu from "./pages/LoginIndividu.tsx";
import LoginBedrijf from "./pages/LoginBedrijf.tsx";
import AccountIndividu from "./pages/AccountIndividu.tsx";
import AccountBedrijf from "./pages/AccountBedrijf.tsx";
import VacatureNieuw from "./pages/VacatureNieuw.tsx";
import VacatureDetail from "./pages/VacatureDetail.tsx";
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
          <Route path="/word-sponsor" element={<WordSponsor />} />
          <Route path="/event" element={<EventDetail />} />
          <Route path="/event/brand-strategy" element={<EventDetail />} />
          <Route path="/dagopleiding" element={<EventDetailDag />} />
          <Route path="/docent" element={<DocentDetail />} />
          <Route path="/contact" element={<ContactDetail />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/events" element={<AgendaEvents />} />
          <Route path="/inschrijven/solo" element={<InschrijvenSolo />} />
          <Route path="/inschrijven/growth" element={<InschrijvenGrowth />} />
          <Route path="/inschrijven/galaxy" element={<InschrijvenGalaxy />} />
          <Route path="/inschrijven/academy" element={<InschrijvenAcademy />} />
          <Route path="/inschrijven/youth" element={<InschrijvenYouth />} />
          <Route path="/inschrijven/friends" element={<InschrijvenFriends />} />
          <Route path="/onboarding/growth" element={<OnboardingGrowth />} />
          <Route path="/onboarding/galaxy" element={<OnboardingGalaxy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/individu" element={<LoginIndividu />} />
          <Route path="/login/bedrijf" element={<LoginBedrijf />} />
          <Route path="/account/individu" element={<AccountIndividu />} />
          <Route path="/account/bedrijf" element={<AccountBedrijf />} />
          <Route path="/account/bedrijf/vacature/nieuw" element={<VacatureNieuw />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
