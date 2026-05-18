import { ReactNode } from "react";

interface Props {
  title: string;
  description?: string;
  children?: ReactNode;
}

/**
 * Lightweight wireframe-style placeholder used by the mobile mirrors of
 * desktop pages. Matches the dashed-border aesthetic of /mobile.
 */
const MobilePagePlaceholder = ({ title, description, children }: Props) => (
  <div className="space-y-4">
    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
      <h1 className="text-xl font-semibold text-foreground mb-2">{title}</h1>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
    {children}
  </div>
);

export default MobilePagePlaceholder;
