import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Building2, Briefcase, Layout, Globe, Monitor, Zap, Terminal } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Mock data based on the single detail page
const mockVacatures = [
  {
    id: 1,
    title: "Senior Brand Designer",
    location: "Gent",
    company: {
      name: "Onshore.be",
      icon: Layout,
    },
  },
  {
    id: 2,
    title: "Digital Marketing Manager",
    location: "Brussel",
    company: {
      name: "TechCorp",
      icon: Globe,
    },
  },
  {
    id: 3,
    title: "Content Marketeer",
    location: "Antwerpen",
    company: {
      name: "Creative Agency",
      icon: Monitor,
    },
  },
  {
    id: 4,
    title: "SEO Specialist",
    location: "Leuven",
    company: {
      name: "Growth Co",
      icon: Zap,
    },
  },
  {
    id: 5,
    title: "Performance Marketeer",
    location: "Gent",
    company: {
      name: "ScaleUp",
      icon: Terminal,
    },
  },
];

const Vacatures = () => {
  const [functieFilter, setFunctieFilter] = useState("");
  const [locatieFilter, setLocatieFilter] = useState("");

  const filteredVacatures = mockVacatures.filter((job) => {
    const matchesFunctie = job.title.toLowerCase().includes(functieFilter.toLowerCase()) || 
                           job.company.name.toLowerCase().includes(functieFilter.toLowerCase());
    const matchesLocatie = job.location.toLowerCase().includes(locatieFilter.toLowerCase());
    return matchesFunctie && matchesLocatie;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 py-12 md:py-20">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Job Board</h1>
          <p className="text-muted-foreground max-w-2xl">
            Vind de nieuwste uitdagingen in marketing. Zoek op functie, bedrijf of regio.
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-muted/30 p-6 rounded-xl border mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <div className="absolute left-3 top-3 text-muted-foreground">
                <Briefcase className="w-5 h-5" />
              </div>
              <Input 
                type="text" 
                placeholder="Zoek op functie of bedrijf..." 
                className="pl-10 h-12 bg-background"
                value={functieFilter}
                onChange={(e) => setFunctieFilter(e.target.value)}
              />
            </div>
            <div className="relative">
              <div className="absolute left-3 top-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
              </div>
              <Input 
                type="text" 
                placeholder="Locatie..." 
                className="pl-10 h-12 bg-background"
                value={locatieFilter}
                onChange={(e) => setLocatieFilter(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Vacatures List */}
        <div className="space-y-4">
          {filteredVacatures.length > 0 ? (
            filteredVacatures.map((job) => (
              <Card key={job.id} className="p-5 md:p-6 hover:shadow-md transition-shadow group">
                <div className="flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
                  <div className="flex items-center gap-5">
                    {/* Placeholder Logo */}
                    <div className="w-16 h-16 shrink-0 rounded-lg flex items-center justify-center border-2 border-dashed border-border bg-background text-muted-foreground">
                      <job.company.icon className="w-8 h-8" />
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                        <Link to={`/vacature/${job.id}`} className="focus:outline-none">
                          {job.title}
                        </Link>
                      </h2>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Building2 className="w-4 h-4" />
                          <span>{job.company.name}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-auto mt-2 md:mt-0">
                    <Button asChild variant="outline" className="w-full md:w-auto border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background rounded-none font-medium">
                      <Link to={`/vacature/${job.id}`}>
                        Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-16 border-2 border-dashed rounded-lg text-muted-foreground">
              <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p className="text-lg">Geen vacatures gevonden die voldoen aan je criteria.</p>
              <Button 
                variant="link" 
                onClick={() => { setFunctieFilter(""); setLocatieFilter(""); }}
                className="mt-2"
              >
                Wis filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Vacatures;
