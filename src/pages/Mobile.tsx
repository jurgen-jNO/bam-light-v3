import MobileShell from "@/components/mobile/MobileShell";

const Mobile = () => {
  return (
    <MobileShell>
      <div className="space-y-4">
        <div className="border-2 border-dashed border-border rounded-lg p-10 text-center">
          <h1 className="text-xl font-semibold text-foreground mb-2">marketing.be</h1>
          <p className="text-sm text-muted-foreground">
            Mobile wireframe — tap het hamburger menu voor navigatie
          </p>
        </div>
        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
          <h2 className="text-lg font-semibold text-foreground mb-2">Job Board</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Bekijk de laatste marketing vacatures
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/mobile/vacatures"
              className="text-sm text-foreground underline hover:text-muted-foreground font-medium"
            >
              Overzicht
            </a>
            <a
              href="/mobile/vacature"
              className="text-sm text-foreground underline hover:text-muted-foreground font-medium"
            >
              Detail
            </a>
          </div>
        </div>
      </div>
    </MobileShell>
  );
};

export default Mobile;
