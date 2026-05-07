export type AgendaSession = {
  datum: string; // ISO yyyy-mm-dd
  starttijd: string;
  eindtijd: string;
};

export type AgendaItem = {
  id: string;
  type: "opleiding" | "event";
  subtype: string; // dagopleiding | meerdaagse | op-maat | activiteit | award | congres
  titel: string;
  slug: string;
  is_archived: boolean;
  interesse_email_actief: boolean;
  prijs_lid?: number;
  prijs_niet_lid?: number;
  early_bird_lid?: number;
  early_bird_vervaldatum?: string;
  locatie_naam: string;
  adres_gemeente: string;
  sessies: AgendaSession[];
  image?: string;
};

export const agendaMockData: AgendaItem[] = [
  {
    id: "o1",
    type: "opleiding",
    subtype: "meerdaagse",
    titel: "Meerdaagse opleiding marketingstrategie",
    slug: "marketingstrategie-2026",
    is_archived: false,
    interesse_email_actief: true,
    prijs_lid: 1450,
    prijs_niet_lid: 1850,
    early_bird_lid: 1250,
    early_bird_vervaldatum: "2026-06-01",
    locatie_naam: "BAM",
    adres_gemeente: "Dilbeek",
    sessies: [
      { datum: "2026-05-12", starttijd: "09:30", eindtijd: "13:00" },
      { datum: "2026-05-26", starttijd: "09:30", eindtijd: "13:00" },
      { datum: "2026-06-09", starttijd: "09:30", eindtijd: "13:00" },
      { datum: "2026-06-23", starttijd: "09:30", eindtijd: "13:00" },
      { datum: "2026-07-07", starttijd: "09:30", eindtijd: "13:00" },
    ],
  },
  {
    id: "o2",
    type: "opleiding",
    subtype: "dagopleiding",
    titel: "Dagopleiding contentmarketing",
    slug: "content-dag-2026",
    is_archived: false,
    interesse_email_actief: true,
    prijs_lid: 450,
    prijs_niet_lid: 650,
    locatie_naam: "BAM",
    adres_gemeente: "Dilbeek",
    sessies: [{ datum: "2026-05-05", starttijd: "09:30", eindtijd: "17:00" }],
  },
  {
    id: "o3",
    type: "opleiding",
    subtype: "op-maat",
    titel: "Op maat: B2B leadgeneratie",
    slug: "op-maat-leadgen-2024",
    is_archived: true,
    interesse_email_actief: true,
    prijs_lid: 0,
    prijs_niet_lid: 0,
    locatie_naam: "BAM",
    adres_gemeente: "Dilbeek",
    sessies: [{ datum: "2024-11-12", starttijd: "09:30", eindtijd: "13:00" }],
  },
  {
    id: "o4",
    type: "opleiding",
    subtype: "dagopleiding",
    titel: "Dagopleiding SEO & SEA",
    slug: "seo-sea-2026",
    is_archived: false,
    interesse_email_actief: true,
    prijs_lid: 450,
    prijs_niet_lid: 650,
    locatie_naam: "BAM",
    adres_gemeente: "Dilbeek",
    sessies: [{ datum: "2026-05-26", starttijd: "09:30", eindtijd: "17:00" }],
  },
  {
    id: "o5",
    type: "opleiding",
    subtype: "dagopleiding",
    titel: "Dagopleiding Employer Branding",
    slug: "employer-branding-2026",
    is_archived: false,
    interesse_email_actief: true,
    prijs_lid: 450,
    prijs_niet_lid: 650,
    locatie_naam: "BAM",
    adres_gemeente: "Dilbeek",
    sessies: [{ datum: "2026-06-23", starttijd: "09:30", eindtijd: "17:00" }],
  },
  {
    id: "o6",
    type: "opleiding",
    subtype: "meerdaagse",
    titel: "Meerdaagse opleiding Brand Strategy",
    slug: "brand-strategy-2026",
    is_archived: false,
    interesse_email_actief: true,
    prijs_lid: 1450,
    prijs_niet_lid: 1850,
    locatie_naam: "BAM",
    adres_gemeente: "Dilbeek",
    sessies: [
      { datum: "2026-07-07", starttijd: "09:30", eindtijd: "13:00" },
      { datum: "2026-07-21", starttijd: "09:30", eindtijd: "13:00" },
    ],
  },
  {
    id: "e1",
    type: "event",
    subtype: "activiteit",
    titel: "Netwerkborrel voorjaar",
    slug: "netwerkborrel-voorjaar",
    is_archived: false,
    interesse_email_actief: true,
    prijs_lid: 25,
    prijs_niet_lid: 75,
    locatie_naam: "BAM",
    adres_gemeente: "Dilbeek",
    sessies: [{ datum: "2026-05-28", starttijd: "18:30", eindtijd: "22:00" }],
  },
  {
    id: "e2",
    type: "event",
    subtype: "congres",
    titel: "BAM Marketing Congres",
    slug: "bam-congres-2026",
    is_archived: false,
    interesse_email_actief: true,
    prijs_lid: 295,
    prijs_niet_lid: 495,
    early_bird_lid: 195,
    early_bird_vervaldatum: "2026-09-01",
    locatie_naam: "Flagey",
    adres_gemeente: "Brussel",
    sessies: [{ datum: "2026-10-08", starttijd: "09:00", eindtijd: "18:00" }],
  },
  {
    id: "e4",
    type: "event",
    subtype: "activiteit",
    titel: "BAM Summer Rooftop",
    slug: "bam-summer-rooftop-2026",
    is_archived: false,
    interesse_email_actief: true,
    prijs_lid: 35,
    prijs_niet_lid: 85,
    locatie_naam: "The Hotel",
    adres_gemeente: "Brussel",
    sessies: [{ datum: "2026-06-18", starttijd: "18:00", eindtijd: "23:00" }],
  },
  {
    id: "e5",
    type: "event",
    subtype: "congres",
    titel: "Marketing Insights Day",
    slug: "marketing-insights-day-2026",
    is_archived: false,
    interesse_email_actief: true,
    prijs_lid: 195,
    prijs_niet_lid: 295,
    locatie_naam: "BluePoint",
    adres_gemeente: "Antwerpen",
    sessies: [{ datum: "2026-07-09", starttijd: "09:00", eindtijd: "17:30" }],
  },
  {
    id: "e3",
    type: "event",
    subtype: "award",
    titel: "BAM Awards 2024",
    slug: "bam-awards-2024",
    is_archived: true,
    interesse_email_actief: false,
    locatie_naam: "Vooruit",
    adres_gemeente: "Gent",
    sessies: [{ datum: "2024-12-05", starttijd: "19:00", eindtijd: "23:30" }],
  },
];
