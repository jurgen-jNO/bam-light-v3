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
import EventBigQuiz from "./pages/EventBigQuiz.tsx";
import EventAward from "./pages/EventAward.tsx";
import DocentDetail from "./pages/DocentDetail.tsx";
import ContactDetail from "./pages/ContactDetail.tsx";
import Team from "./pages/Team.tsx";
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
import Vacatures from "./pages/Vacatures.tsx";
import VacatureNieuw from "./pages/VacatureNieuw.tsx";
import VacatureDetail from "./pages/VacatureDetail.tsx";
import ArtikelDetail from "./pages/ArtikelDetail.tsx";
import Artikels from "./pages/Artikels.tsx";
import BamMagazine from "./pages/BamMagazine.tsx";
import BamMagazineLocked from "./pages/BamMagazineLocked.tsx";
import OpleidingOpMaat from "./pages/OpleidingOpMaat.tsx";
import ThinkTanks from "./pages/ThinkTanks.tsx";
import NotFound from "./pages/NotFound.tsx";

import {
  MobileAgenda,
  MobileEventDetail,
  MobileEventDetailDag,
  MobileAgendaEvents,
  MobileEventBigQuiz,
  MobileLeden,
  MobileSponsors,
  MobileAffiliations,
  MobileArtikels,
  MobileArtikelDetail,
  MobileBamMagazine,
  MobileBamMagazineLocked,
  MobileDocentDetail,
  MobileContactDetail,
  MobileVacatures,
  MobileVacatureDetail,
  MobileVacatureNieuw,
  MobileInschrijvenSolo,
  MobileInschrijvenGrowth,
  MobileInschrijvenGalaxy,
  MobileInschrijvenAcademy,
  MobileInschrijvenYouth,
  MobileInschrijvenFriends,
  MobileOnboardingGrowth,
  MobileOnboardingGalaxy,
  MobileLogin,
  MobileLoginIndividu,
  MobileLoginBedrijf,
  MobileAccountIndividu,
  MobileAccountBedrijf,
  MobileWordLid,
  MobileWordSponsor,
  MobileOpleidingOpMaat,
} from "./pages/mobile/MobilePages.tsx";

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
          <Route path="/event/big-marketing-quiz" element={<EventBigQuiz />} />
          <Route path="/event/award" element={<EventAward />} />
          <Route path="/docent" element={<DocentDetail />} />
          <Route path="/contact" element={<ContactDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/agenda/op-maat" element={<OpleidingOpMaat />} />
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
          <Route path="/vacatures" element={<Vacatures />} />
          <Route path="/vacature" element={<VacatureDetail />} />
          <Route path="/vacature/:id" element={<VacatureDetail />} />
          <Route path="/artikel" element={<ArtikelDetail />} />
          <Route path="/artikel/:slug" element={<ArtikelDetail />} />
          <Route path="/artikels" element={<Artikels />} />
          <Route path="/bam-magazine" element={<BamMagazine />} />
          <Route path="/bam-magazine/locked" element={<BamMagazineLocked />} />

          {/* Mobile mirror routes */}
          <Route path="/mobile/agenda" element={<MobileAgenda />} />
          <Route path="/mobile/dagopleiding" element={<MobileEventDetailDag />} />
          <Route path="/mobile/event" element={<MobileEventDetail />} />
          <Route path="/mobile/event/brand-strategy" element={<MobileEventDetail />} />
          <Route path="/mobile/event/big-marketing-quiz" element={<MobileEventBigQuiz />} />
          <Route path="/mobile/events" element={<MobileAgendaEvents />} />
          <Route path="/mobile/leden" element={<MobileLeden />} />
          <Route path="/mobile/sponsors" element={<MobileSponsors />} />
          <Route path="/mobile/affiliations" element={<MobileAffiliations />} />
          <Route path="/mobile/artikels" element={<MobileArtikels />} />
          <Route path="/mobile/artikel" element={<MobileArtikelDetail />} />
          <Route path="/mobile/artikel/:slug" element={<MobileArtikelDetail />} />
          <Route path="/mobile/bam-magazine" element={<MobileBamMagazine />} />
          <Route path="/mobile/bam-magazine/locked" element={<MobileBamMagazineLocked />} />
          <Route path="/mobile/docent" element={<MobileDocentDetail />} />
          <Route path="/mobile/contact" element={<MobileContactDetail />} />
          <Route path="/mobile/vacatures" element={<MobileVacatures />} />
          <Route path="/mobile/vacature" element={<MobileVacatureDetail />} />
          <Route path="/mobile/vacature/:id" element={<MobileVacatureDetail />} />
          <Route path="/mobile/inschrijven/solo" element={<MobileInschrijvenSolo />} />
          <Route path="/mobile/inschrijven/growth" element={<MobileInschrijvenGrowth />} />
          <Route path="/mobile/inschrijven/galaxy" element={<MobileInschrijvenGalaxy />} />
          <Route path="/mobile/inschrijven/academy" element={<MobileInschrijvenAcademy />} />
          <Route path="/mobile/inschrijven/youth" element={<MobileInschrijvenYouth />} />
          <Route path="/mobile/inschrijven/friends" element={<MobileInschrijvenFriends />} />
          <Route path="/mobile/onboarding/growth" element={<MobileOnboardingGrowth />} />
          <Route path="/mobile/onboarding/galaxy" element={<MobileOnboardingGalaxy />} />
          <Route path="/mobile/login" element={<MobileLogin />} />
          <Route path="/mobile/login/individu" element={<MobileLoginIndividu />} />
          <Route path="/mobile/login/bedrijf" element={<MobileLoginBedrijf />} />
          <Route path="/mobile/account/individu" element={<MobileAccountIndividu />} />
          <Route path="/mobile/account/bedrijf" element={<MobileAccountBedrijf />} />
          <Route path="/mobile/account/bedrijf/vacature/nieuw" element={<MobileVacatureNieuw />} />
          <Route path="/mobile/word-lid" element={<MobileWordLid />} />
          <Route path="/mobile/word-sponsor" element={<MobileWordSponsor />} />
          <Route path="/mobile/agenda/op-maat" element={<MobileOpleidingOpMaat />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
