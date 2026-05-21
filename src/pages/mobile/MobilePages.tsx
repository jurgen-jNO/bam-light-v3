import MobileShell from "@/components/mobile/MobileShell";
import MobilePagePlaceholder from "@/components/mobile/MobilePagePlaceholder";

/**
 * Mobile mirrors of the desktop pages. Each component renders the shared
 * MobileShell (header/nav/footer synced with the desktop MainNavigation)
 * plus a wireframe placeholder for the page-specific content.
 *
 * Desktop equivalents live alongside in src/pages/*.tsx; iterate on the
 * placeholders here to build out the full mobile experience.
 */

const make = (title: string, description: string) => () =>
  (
    <MobileShell>
      <MobilePagePlaceholder title={title} description={description} />
    </MobileShell>
  );

// Academy
export const MobileAgenda = make("Agenda", "Overzicht van komende opleidingen & events");
export const MobileEventDetail = make("Meerdaagse training", "Detail van een meerdaagse opleiding");
export const MobileEventDetailDag = make("Dagopleiding", "Detail van een dagopleiding");

// Events
export const MobileAgendaEvents = make("Events", "Awards, congressen & activiteiten");
export const MobileEventBigQuiz = make(
  "BIG Marketing Quiz",
  "8 oktober 2026 — Gratis voor BAM Members, €99 excl. BTW voor non-members"
);

// Community
export const MobileLeden = make("BAM Leden", "Ontdek de aangesloten organisaties");
export const MobileThinkTanks = make("Think Tanks", "Samenwerken rond specifieke marketing thema's");
export const MobileSponsors = make("Onze Sponsors", "Met dank aan onze partners");
export const MobileAffiliations = make("Affiliates", "Onze internationale partners");

// Expert Views
export const MobileArtikels = make("Artikels", "Inzichten van onze experts");
export const MobileArtikelDetail = make("Artikel", "Lees het volledige artikel");
export const MobileBamMagazine = make("BAM Magazine", "Het BAM ledenmagazine");
export const MobileBamMagazineLocked = make(
  "BAM Magazine",
  "Alleen toegankelijk voor BAM leden — log in of word lid"
);

// People & contact
export const MobileDocentDetail = make("Docent", "Profiel van de docent");
export const MobileContactDetail = make("Contact", "Neem contact op met BAM");

// Job board
export const MobileVacatures = make("Vacatures", "Marketing jobs in België");
export const MobileVacatureDetail = make("Vacature", "Details van deze vacature");
export const MobileVacatureNieuw = make("Nieuwe vacature", "Plaats een vacature als bedrijf");

// Inschrijven flows
export const MobileInschrijvenSolo = make("Inschrijven — Solo", "Individueel lidmaatschap");
export const MobileInschrijvenGrowth = make("Inschrijven — Growth", "Growth pakket voor KMO's");
export const MobileInschrijvenGalaxy = make("Inschrijven — Galaxy", "Galaxy pakket voor grote organisaties");
export const MobileInschrijvenAcademy = make("Inschrijven — Academy", "Academy lidmaatschap");
export const MobileInschrijvenYouth = make("Inschrijven — Youth", "Voor studenten & starters");
export const MobileInschrijvenFriends = make("Inschrijven — Friends", "Friends of BAM");

// Onboarding
export const MobileOnboardingGrowth = make("Onboarding — Growth", "Welkom bij BAM Growth");
export const MobileOnboardingGalaxy = make("Onboarding — Galaxy", "Welkom bij BAM Galaxy");

// Login / account
export const MobileLogin = make("Login", "Kies hoe je wil inloggen");
export const MobileLoginIndividu = make("Login — Individu", "Log in als BAM lid");
export const MobileLoginBedrijf = make("Login — Bedrijf", "Log in als bedrijf");
export const MobileAccountIndividu = make("Account", "Beheer je persoonlijk profiel");
export const MobileAccountBedrijf = make("Bedrijfsaccount", "Beheer je organisatie & vacatures");

// Word lid / sponsor
export const MobileWordLid = make("Word lid", "Sluit je aan bij BAM");
export const MobileWordSponsor = make("Word sponsor", "Word sponsor van BAM");

// Op maat
export const MobileOpleidingOpMaat = make(
  "Opleiding op maat",
  "Laat een training op maat organiseren voor jouw bedrijf"
);
