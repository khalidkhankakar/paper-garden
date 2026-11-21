import ReadingGardenPage from "../ReadingGarden";
import readingGardenSource from "../ReadingGarden.tsx?raw";

export const templateMap = {
  "reading-garden": {
    component: () => <ReadingGardenPage />,
    sourceCode: readingGardenSource,
  },
};