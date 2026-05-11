import { Link } from "react-router-dom";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <main className="flex-1 max-w-[1400px] mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 border-2 border-dashed border-border rounded-lg p-16 text-center">
            <h1 className="text-2xl font-semibold text-foreground mb-2">
              marketing.be
            </h1>
            <p className="text-muted-foreground">
              Wireframe — klik op de navigatie-items om de dropdown menu's te zien
            </p>
          </div>
          <div className="col-span-1 border-2 border-dashed border-border rounded-lg p-8 text-center flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Job Board
            </h2>
            <p className="text-sm text-muted-foreground">
              Bekijk de laatste marketing vacatures
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;