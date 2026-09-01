import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Save, Eye, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const CmsVacature = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <MainNavigation />

      <main className="container mx-auto px-6 py-8 max-w-5xl">
        {/* CMS header bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/vacature" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Vacature aanmaken</h1>
              <p className="text-sm text-muted-foreground">CMS / Content beheer / Vacatures / Nieuw</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Eye className="w-4 h-4" /> Preview
            </Button>
            <Button className="gap-2 bg-black text-white hover:bg-black/80">
              <Save className="w-4 h-4" /> Publiceer
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Algemeen */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-semibold text-lg border-b border-border pb-3">Algemeen</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">Functietitel *</label>
                <Input placeholder="bv. Digital Marketeer" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Intro (korte samenvatting) *</label>
                <Textarea rows={2} placeholder="Korte introductie van de functie (max. 200 tekens)" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Functiebeschrijving *</label>
                <Textarea rows={8} placeholder="Uitgebreide beschrijving: verantwoordelijkheden, profiel, aanbod..." />
                <p className="text-xs text-muted-foreground">Rich text editor met opmaak (titels, lijsten, links)</p>
              </div>
            </section>

            {/* Job details */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-semibold text-lg border-b border-border pb-3">Job details</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Type contract *</label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Selecteer" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vast">Vast contract</SelectItem>
                      <SelectItem value="tijdelijk">Tijdelijk contract</SelectItem>
                      <SelectItem value="freelance">Freelance</SelectItem>
                      <SelectItem value="stage">Stage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tewerkstelling *</label>
                <Select>
                    <SelectTrigger><SelectValue placeholder="Selecteer" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="voltijds">Voltijds</SelectItem>
                      <SelectItem value="4-5">4/5de</SelectItem>
                      <SelectItem value="halftijds">Halftijds</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ervaringsniveau</label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Selecteer" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="junior">Junior</SelectItem>
                      <SelectItem value="medior">Medior</SelectItem>
                      <SelectItem value="senior">Senior</SelectItem>
                      <SelectItem value="management">Management</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Salarisindicatie</label>
                  <Input placeholder="bv. €3.500 – €4.500 / maand" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Locatie *</label>
                  <Input placeholder="Stad / gemeente" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Work mode</label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Selecteer work mode" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="onsite">On-site</SelectItem>
                      <SelectItem value="hybride">Hybride</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>

            {/* Sollicitatie */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-semibold text-lg border-b border-border pb-3">Sollicitatie</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Sollicitatie-einddatum *</label>
                  <div className="relative">
                    <Input type="date" />
                    <Calendar className="w-4 h-4 absolute right-3 top-3 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Contact persoon *</label>
                  <Input placeholder="Naam contactpersoon" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">E-mailadres / URL voor sollicitaties *</label>
                  <Input placeholder="jobs@bedrijf.be of https://..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Contactpersoon sollicitaties</label>
                  <Input placeholder="Naam contactpersoon" />
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publicatie */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-semibold border-b border-border pb-3">Publicatie</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select defaultValue="concept">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="concept">Concept</SelectItem>
                    <SelectItem value="review">In review</SelectItem>
                    <SelectItem value="live">Live</SelectItem>
                    <SelectItem value="archief">Gearchiveerd</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Publicatiedatum</label>
                <Input type="date" />
              </div>
            </section>

            {/* Bedrijf */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-semibold border-b border-border pb-3">Bedrijf</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">Bedrijf *</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Kies uit bedrijfsdatabase" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Unilever</SelectItem>
                    <SelectItem value="2">Telenet</SelectItem>
                    <SelectItem value="3">Proximus</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">Logo en bedrijfsgegevens worden automatisch overgenomen</p>
              </div>
            </section>

            {/* SEO & categorie */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-semibold border-b border-border pb-3">SEO & Categorie</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">URL slug *</label>
                <Input placeholder="/vacature/digital-marketeer" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Interessedomein *</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Selecteer" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="digital">Digital & Technology</SelectItem>
                    <SelectItem value="sustainability">Sustainability, Ethics & Purpose</SelectItem>
                    <SelectItem value="leadership">Marketing Leadership & Future Skills</SelectItem>
                    <SelectItem value="brand">Brand Building</SelectItem>
                    <SelectItem value="performance">Performance Marketing</SelectItem>
                    <SelectItem value="community">Community Building</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Tags</label>
                <Input placeholder="bv. SEO, content, analytics" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Meta description</label>
                <Textarea rows={3} placeholder="Beschrijving voor zoekmachines (max. 160 tekens)" />
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CmsVacature;
