import MainNavigation from "@/components/MainNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="border-2 border-dashed border-border rounded-lg p-16 text-center">
          <h1 className="text-2xl font-semibold text-foreground mb-2">
            marketing.be
          </h1>
          <p className="text-muted-foreground">
            Wireframe — klik op de navigatie-items om de dropdown menu's te zien
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;