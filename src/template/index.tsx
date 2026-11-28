import type { ReactElement } from "react";
import ReadingGardenPage from "../ReadingGarden";
import BlackFridayEmail from  "../BlackFriday";
import BlackFridayEmailSource from  "../BlackFriday.tsx?raw";
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
  "black-friday-sale": {
    component: () => <BlackFridayEmail />,
    sourceCode: BlackFridayEmailSource,
  }
};




