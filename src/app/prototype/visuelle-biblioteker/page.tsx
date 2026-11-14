import type { Metadata } from "next";
import { VisualLibraryPrototype } from "./VisualLibraryPrototype";

export const metadata: Metadata = {
  title: "Visuelle biblioteker – isoleret prototype | Formelmat",
  description:
    "En isoleret Formelmat-prototype, der afprøver Motion til læringsvisualiseringer, geometri og mikroanimationer.",
};

export default function VisualLibrariesPrototypePage() {
  return <VisualLibraryPrototype />;
}
