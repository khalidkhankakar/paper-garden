import type { ReactElement } from "react";
import ReadingGardenPage from "../ReadingGarden";
import readingGardenSource from "../ReadingGarden.tsx?raw";

export interface TemplateEntry {
  component: () => ReactElement;
  sourceCode: string;
}

export const templateMap: Record<string, TemplateEntry> = {
  "reading-garden": {
    component: () => <ReadingGardenPage />,
    sourceCode: readingGardenSource,
  },
};