// Triggers a true file download without navigating the iframe (which would
// log the user out of the Lovable preview). Works in preview + published.
export async function downloadMedewerkersTemplate() {
  const url = "/templates/bam-medewerkers-template.xlsx";
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const blob = await res.blob();
    const objectUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = objectUrl;
    a.download = "bam-medewerkers-template.xlsx";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
  } catch (e) {
    console.error("Download failed", e);
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
