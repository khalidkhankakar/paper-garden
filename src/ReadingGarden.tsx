import {
  Button,
  Column,
  Divider,
  Heading,
  Image,
  Link,
  Page,
  Row,
  Section,
  Span,
  Text,
  defineTheme,
  token,
} from "@hyper-elements/react";

/**
 * PAPER GARDEN — A world with more trees
 *
 * A four-section editorial awareness page about the importance of trees,
 * forests and green spaces.
 *
 * Responsive for desktop, tablet and phone:
 * - Phone styles start at 900px (Page `breakpoints`), so tablets in portrait
 *   get the stacked layout too instead of squeezed columns.
 * - Rows stack on phones; padding, gaps and small type step up/down there.
 * - The paper illustrations are drawn from the shape lists below and shown as
 *   images, which scale down to fit their parent. (A native Svg has a fixed
 *   pixel size and no width style, so it would overflow a phone.)
 */

const COLORS = {
  paper: "#F7F5E9",
  card: "#FFFDF5",
  ink: "#252A30",
  body: "#41484C",
  muted: "#656A68",
  green: "#548C68",
  deepGreen: "#315B43",
  leaf: "#A9D6B4",
  paleGreen: "#DCE9C5",
  yellow: "#E9D65B",
  sand: "#F0E3B9",
  coral: "#E9795F",
  line: "#D8D4C5",
  dark: "#252A30",
  // Chunky buttons: a bright face with a darker "lip" along the bottom edge.
  buttonFace: "#F4D21F",
  buttonLip: "#D2A900",
  buttonFaceHover: "#F8DD55",
  creamLip: "#D9D0BA",
};

// One rounded geometric family for headings, body and buttons.
// Swap the family name and the files below to change the font everywhere.
const FONT = '"Outfit", "Trebuchet MS", ui-rounded, sans-serif';
const FONT_FILES = "https://cdn.jsdelivr.net/npm/@fontsource/outfit@5.3.0/files";
const FONT_FACES = ([400, 500, 600, 700] as const).map((weight) => ({
  family: "Outfit",
  src: `${FONT_FILES}/outfit-latin-${weight}-normal.woff2`,
  format: "woff2" as const,
  weight,
}));

const paperGardenTheme = defineTheme({
  colors: {
    background: COLORS.paper,
    foreground: COLORS.ink,
    primary: COLORS.yellow,
    primaryForeground: COLORS.ink,
    muted: COLORS.muted,
    border: COLORS.line,
  },
  fonts: {
    body: FONT,
    heading: FONT,
  },
  fontSizes: {
    body: 16,
  },
  lineHeights: {
    body: 1.6,
  },
  elements: {
    Heading: {
      fontFamily: FONT,
      color: COLORS.ink,
      fontWeight: 700,
      lineHeight: 1.06,
      by: {
        level: {
          1: {
            fontSize: 68,
            letterSpacing: -2.4,
            mobile: { fontSize: 43, letterSpacing: -1.2 },
          },
          2: { fontSize: 48, mobile: { fontSize: 34 } },
          3: { fontSize: 25, mobile: { fontSize: 22 } },
        },
      },
    },
    // Chunky, tactile buttons: rounded face, thick darker bottom edge.
    Button: {
      borderRadius: 16,
      backgroundColor: COLORS.buttonFace,
      color: COLORS.ink,
      fontSize: 15,
      fontWeight: 700,
      padding: [15, 26],
      border: { bottom: { width: 5, style: "solid", color: COLORS.buttonLip } },
      hover: { backgroundColor: COLORS.buttonFaceHover },
      variants: {
        secondary: {
          backgroundColor: COLORS.card,
          border: { bottom: { width: 5, style: "solid", color: COLORS.creamLip } },
          hover: { backgroundColor: "#FFFFFF" },
        },
      },
    },
    Link: {
      color: COLORS.green,
    },
  },
  styles: {
    eyebrow: {
      color: "#A56A32",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 1.8,
    },
    lead: {
      color: COLORS.body,
      fontSize: 19,
      lineHeight: 1.55,
      mobile: { fontSize: 17 },
    },
    leadSm: {
      color: COLORS.body,
      fontSize: 17,
      lineHeight: 1.55,
      mobile: { fontSize: 16 },
    },
    bodyCopy: {
      color: COLORS.body,
      fontSize: 15,
      lineHeight: 1.65,
    },
    mutedCopy: {
      color: COLORS.muted,
      fontSize: 13,
      lineHeight: 1.55,
    },
    statValue: {
      fontSize: 37,
      mobile: { fontSize: 32 },
    },
    paperCard: {
      backgroundColor: COLORS.card,
      border: { width: 1, style: "solid", color: "#E2DECF" },
      borderRadius: 22,
      padding: 24,
      gap: 13,
    },
  },
});

/* ------------------------------------------------------------------ */
/* Illustrations                                                       */
/* Each drawing is a list of ellipses: [cx, cy, rx, ry, fill], drawn   */
/* back to front. They are shown as images so they scale with the page. */
/* ------------------------------------------------------------------ */

type Oval = readonly [cx: number, cy: number, rx: number, ry: number, fill: string];
type Art = {
  width: number;
  height: number;
  viewBox?: string;
  shapes: readonly Oval[];
};

const HERO_TREE: Art = {
  width: 560,
  height: 430,
  shapes: [
    [280, 388, 250, 34, "#D3C69C"],
    [160, 360, 170, 48, "#DCE9C5"],
    [420, 365, 175, 52, "#A9D6B4"],
    [280, 220, 30, 145, "#9A7048"],
    [180, 170, 100, 93, "#6F9B72"],
    [285, 110, 116, 105, "#548C68"],
    [390, 177, 104, 95, "#A9D6B4"],
    [278, 232, 95, 88, "#78A77A"],
    [115, 80, 19, 19, "#E9D65B"],
    [448, 76, 12, 12, "#E9795F"],
    [390, 285, 8, 8, "#E9D65B"],
    [165, 285, 7, 7, "#FFFDF5"],
  ],
};

const HILLS_SHAPES: readonly Oval[] = [
  [660, 210, 760, 125, "#E7DDBB"],
  [340, 215, 520, 105, COLORS.paleGreen],
  [1010, 220, 530, 112, COLORS.leaf],
  [670, 238, 650, 90, "#6F9B72"],
  [665, 104, 38, 38, COLORS.green],
  [635, 125, 28, 27, "#78A77A"],
  [694, 127, 29, 28, "#A9D6B4"],
  [665, 162, 7, 35, "#9A7048"],
];

// Wide strip for desktop and tablet.
const HILLS: Art = { width: 1320, height: 210, shapes: HILLS_SHAPES };

// The same hills cropped around the tree, so it stays a readable size on phones.
const HILLS_CROPPED: Art = {
  width: 670,
  height: 210,
  viewBox: "330 0 670 210",
  shapes: HILLS_SHAPES,
};

const HABITAT_TREE: Art = {
  width: 560,
  height: 320,
  shapes: [
    [280, 290, 250, 25, "#D8D4C5"],
    [280, 172, 23, 110, "#9A7048"],
    [175, 112, 100, 83, "#6F9B72"],
    [278, 76, 110, 83, COLORS.green],
    [385, 120, 100, 85, COLORS.leaf],
    [280, 155, 88, 74, "#78A77A"],
    [120, 235, 48, 20, COLORS.sand],
    [440, 235, 50, 20, COLORS.paleGreen],
    [170, 88, 8, 8, COLORS.yellow],
    [350, 61, 7, 7, COLORS.coral],
    [420, 139, 8, 8, COLORS.yellow],
    [245, 205, 6, 6, COLORS.card],
  ],
};

const SMALL_TREE: Art = {
  width: 250,
  height: 230,
  shapes: [
    [125, 208, 105, 16, "#244A36"],
    [125, 142, 13, 65, "#A77B4E"],
    [78, 91, 49, 48, "#A9D6B4"],
    [125, 58, 57, 53, "#78A77A"],
    [175, 94, 47, 46, "#DCE9C5"],
    [125, 116, 42, 40, "#548C68"],
    [55, 37, 7, 7, COLORS.yellow],
    [195, 42, 6, 6, COLORS.coral],
  ],
};

function artSource({ width, height, viewBox, shapes }: Art) {
  const body = shapes
    .map(
      ([cx, cy, rx, ry, fill]) =>
        `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}"/>`,
    )
    .join("");
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" ` +
    `viewBox="${viewBox ?? `0 0 ${width} ${height}`}">${body}</svg>`;
  return {
    src: `data:image/svg+xml,${encodeURIComponent(svg)}`,
    width,
    height,
  };
}

/**
 * A drawing that never grows past its own size and shrinks to fit its parent.
 * With `fill` it stretches to the parent's width instead (still scaling down).
 */
function Picture({
  art,
  alt,
  fill = false,
  hidden,
}: {
  art: Art;
  alt: string;
  fill?: boolean;
  hidden?: { mobile?: boolean; desktop?: boolean };
}) {
  return (
    <Image
      src={artSource(art)}
      alt={alt}
      style={fill ? { width: "100%" } : undefined}
      hidden={hidden}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Small components                                                    */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: string }) {
  return <Text style={{ apply: ["eyebrow"] }}>{children}</Text>;
}

function PaperWordmark() {
  return (
    <Text
      style={{
        fontFamily: FONT,
        fontSize: 27,
        fontWeight: 700,
        letterSpacing: -1.4,
        color: COLORS.ink,
      }}
    >
      paper
      <Span style={{ color: COLORS.green }}>garden</Span>
      <Span style={{ color: COLORS.coral }}>.</Span>
    </Text>
  );
}

function Landscape() {
  return (
    <Column style={{ width: "100%", gap: 0 }}>
      <Picture
        art={HILLS}
        alt="Layered paper hills with a young tree"
        fill
        hidden={{ mobile: true }}
      />
      <Picture
        art={HILLS_CROPPED}
        alt="Layered paper hills with a young tree"
        fill
        hidden={{ desktop: true }}
      />
    </Column>
  );
}

function StatCard({
  value,
  label,
  detail,
  tone,
}: {
  value: string;
  label: string;
  detail: string;
  tone: "green" | "sand" | "coral";
}) {
  const background =
    tone === "green" ? "#DCE9C5" : tone === "sand" ? COLORS.sand : "#F5DDD3";
  const accent =
    tone === "coral" ? "#B94F3B" : COLORS.deepGreen;

  return (
    <Column
      style={{
        flex: 1,
        backgroundColor: background,
        borderRadius: 20,
        padding: 21,
        gap: 8,
      }}
    >
      <Heading level={2} style={{ apply: ["statValue"], color: accent }}>
        {value}
      </Heading>
      <Text style={{ color: COLORS.ink, fontSize: 14, fontWeight: 700 }}>
        {label}
      </Text>
      <Text
        style={{
          color: COLORS.body,
          fontSize: 12,
          lineHeight: 1.5,
          mobile: { fontSize: 13 },
        }}
      >
        {detail}
      </Text>
    </Column>
  );
}

function BenefitCard({
  number,
  title,
  description,
  symbol,
  background,
}: {
  number: string;
  title: string;
  description: string;
  symbol: string;
  background: string;
}) {
  return (
    <Column
      style={{
        flex: 1,
        minWidth: 0,
        backgroundColor: background,
        borderRadius: 20,
        padding: 22,
        gap: 13,
      }}
    >
      <Row
        stackOnMobile={false}
        style={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Text
          style={{
            color: "#A56A32",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1.4,
          }}
        >
          {number}
        </Text>
        <Text style={{ color: COLORS.green, fontSize: 27 }}>{symbol}</Text>
      </Row>
      <Heading level={3}>{title}</Heading>
      <Text
        style={{
          color: COLORS.body,
          fontSize: 13,
          lineHeight: 1.6,
          mobile: { fontSize: 14 },
        }}
      >
        {description}
      </Text>
    </Column>
  );
}

const SECTION_BAND = {
  padding: [82, 42] as [number, number],
  gap: 34,
  mobile: { padding: [52, 22] as [number, number], gap: 26 },
};

export default function PaperGardenTreesPage() {
  return (
    <Page
      theme={paperGardenTheme}
      width={1440}
      breakpoints={{ mobile: 900 }}
      fonts={FONT_FACES}
      lang="en"
      title="Paper Garden — A world with more trees"
      description="Discover how trees support climate, biodiversity, water and healthier communities."
      style={{
        backgroundColor: token("colors.background"),
        color: token("colors.foreground"),
        gap: 0,
      }}
    >
      {/* NAVIGATION — links stay in one wrapping line under the wordmark on phones */}
      <Section
        style={{
          backgroundColor: COLORS.card,
          padding: [18, 42],
          border: {
            bottom: { width: 1, style: "solid", color: "#E4E0D3" },
          },
          mobile: { padding: [14, 22] },
        }}
      >
        <Row
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            gap: 18,
            mobile: { gap: 10 },
          }}
        >
          <PaperWordmark />
          <Row
            stackOnMobile={false}
            style={{
              alignItems: "center",
              justifyContent: "start",
              gap: 22,
              flex: "none",
              flexWrap: "wrap",
              mobile: { gap: 18 },
            }}
          >
            <Link href="#why" style={{ color: COLORS.body, fontSize: 13, textDecoration: "none", flex: "none" }}>
              Why trees
            </Link>
            <Link href="#life" style={{ color: COLORS.body, fontSize: 13, textDecoration: "none", flex: "none" }}>
              Life & nature
            </Link>
            <Link href="#action" style={{ color: COLORS.body, fontSize: 13, textDecoration: "none", flex: "none" }}>
              Take action
            </Link>
            {/* The hero already has this call to action on phones. */}
            <Button href="#action" hidden={{ mobile: true }}>
              Grow a greener future
            </Button>
          </Row>
        </Row>
      </Section>

      {/* SECTION 1 — HERO */}
      <Section
        style={{
          padding: [76, 42, 30],
          gap: 26,
          mobile: { padding: [40, 22, 24], gap: 20 },
        }}
      >
        <Row
          stackOnMobile
          style={{ alignItems: "center", gap: 54, mobile: { gap: 26 } }}
        >
          <Column style={{ flex: 1.05, gap: 21 }}>
            <Eyebrow>A little more green changes everything</Eyebrow>
            <Heading level={1} style={{ maxWidth: 620 }}>
              A world with more trees is a world that can{" "}
              <Span style={{ color: COLORS.green }}>breathe.</Span>
            </Heading>
            <Text style={{ apply: ["lead"], maxWidth: 540 }}>
              Trees are more than beautiful parts of a landscape. They cool our
              cities, shelter wildlife, protect soil and help keep the natural
              systems we all depend on in balance.
            </Text>
            <Row
              stackOnMobile
              style={{ gap: 12, alignItems: "center", mobile: { gap: 10 } }}
            >
              <Button href="#why" style={{ flex: "none" }}>
                Discover why trees matter
              </Button>
              <Button
                href="#action"
                variant="secondary"
                style={{ flex: "none" }}
              >
                Find your part
              </Button>
            </Row>
            <Text style={{ color: COLORS.muted, fontSize: 12, mobile: { fontSize: 13 } }}>
              A small invitation to notice, protect and grow the living world.
            </Text>
          </Column>

          <Column
            style={{
              flex: 0.95,
              backgroundColor: COLORS.sand,
              borderRadius: 26,
              padding: 18,
              gap: 0,
              mobile: { padding: 14, maxWidth: 560 },
            }}
          >
            <Picture
              art={HERO_TREE}
              alt="Paper-cut illustration of a flourishing tree"
              fill
            />
            <Text
              style={{
                color: COLORS.deepGreen,
                fontFamily: FONT,
                fontSize: 15,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Rooted in nature. Connected to every life.
            </Text>
          </Column>
        </Row>
        <Landscape />
      </Section>

      {/* SECTION 2 — CLIMATE, AIR AND CITIES */}
      <Section
        style={{
          backgroundColor: COLORS.card,
          ...SECTION_BAND,
        }}
      >
        <Row
          stackOnMobile
          style={{ alignItems: "end", gap: 42, mobile: { gap: 14 } }}
        >
          <Column style={{ flex: 1.25, gap: 14 }}>
            <Link href="#why" attrs={{ id: "why" }} style={{ color: "#A56A32", fontSize: 12, fontWeight: 700, letterSpacing: 1.8, textDecoration: "none" }}>01 / THE PLANET'S NATURAL HELPERS</Link>
            <Heading level={2}>
              Trees keep our planet{" "}
              <Span style={{ color: COLORS.green }}>in balance.</Span>
            </Heading>
          </Column>
          <Column style={{ flex: 0.9, gap: 8 }}>
            <Text style={{ apply: ["leadSm"] }}>
              From the air we breathe to the temperature of our streets, trees
              quietly support the conditions that make life possible.
            </Text>
          </Column>
        </Row>

        <Row stackOnMobile style={{ gap: 17, mobile: { gap: 14 } }}>
          <BenefitCard
            number="01 / CLIMATE"
            title="A natural climate ally"
            description="Trees absorb carbon dioxide as they grow and store carbon in their trunks, branches, roots and surrounding soils."
            symbol="☼"
            background="#DCE9C5"
          />
          <BenefitCard
            number="02 / CLEANER AIR"
            title="A breath of fresh air"
            description="Leaves capture some airborne particles, while trees release oxygen through photosynthesis and help improve local air quality."
            symbol="✳"
            background="#F0E3B9"
          />
          <BenefitCard
            number="03 / COOLER PLACES"
            title="Shade that cools"
            description="Canopies shade buildings and streets, while water released by leaves helps cool the surrounding environment."
            symbol="❋"
            background="#F5DDD3"
          />
        </Row>

        <Row
          stackOnMobile
          style={{ alignItems: "center", gap: 20, mobile: { gap: 14 } }}
        >
          <StatCard
            value="CO₂"
            label="Carbon storage"
            detail="Trees and forest soils hold carbon that would otherwise add to the atmosphere."
            tone="green"
          />
          <StatCard
            value="SHADE"
            label="Cooler neighbourhoods"
            detail="Urban trees can reduce heat exposure on streets, paths and public spaces."
            tone="sand"
          />
          <StatCard
            value="O₂"
            label="Photosynthesis"
            detail="Leaves use sunlight, water and carbon dioxide to make sugars and release oxygen."
            tone="coral"
          />
        </Row>
        <Text style={{ color: COLORS.muted, fontSize: 11, mobile: { fontSize: 12 } }}>
          Note: Benefits vary by tree species, location, climate and how green
          spaces are planned and maintained.
        </Text>
      </Section>

      {/* SECTION 3 — BIODIVERSITY, WATER AND SOIL */}
      <Section
        style={{
          backgroundColor: "#EFEDDF",
          ...SECTION_BAND,
          gap: 32,
        }}
      >
        <Row
          stackOnMobile
          style={{ alignItems: "center", gap: 44, mobile: { gap: 26 } }}
        >
          <Column style={{ flex: 0.95, gap: 13 }}>
            <Link href="#life" attrs={{ id: "life" }} style={{ color: "#A56A32", fontSize: 12, fontWeight: 700, letterSpacing: 1.8, textDecoration: "none" }}>02 / A HOME FOR LIVING THINGS</Link>
            <Heading level={2}>
              Every tree is part of a much bigger{" "}
              <Span style={{ color: COLORS.green }}>story.</Span>
            </Heading>
            <Text style={{ apply: ["leadSm"] }}>
              A tree is not standing alone. It is a living neighbourhood for
              birds, insects, fungi, mammals and countless organisms beneath
              the soil.
            </Text>
            <Text style={{ apply: ["bodyCopy"] }}>
              Forests and healthy green spaces connect habitats, help protect
              watersheds and support the natural cycles that communities and
              wildlife rely on.
            </Text>
          </Column>

          <Column
            style={{
              flex: 1.05,
              backgroundColor: COLORS.card,
              borderRadius: 24,
              padding: 18,
              gap: 12,
              mobile: { padding: 14, maxWidth: 560 },
            }}
          >
            <Picture
              art={HABITAT_TREE}
              alt="Paper illustration of a tree canopy and living habitat"
              fill
            />
            <Text style={{ color: COLORS.muted, fontSize: 11, textAlign: "center", mobile: { fontSize: 12 } }}>
              A healthy tree supports life above and below the ground.
            </Text>
          </Column>
        </Row>

        <Row stackOnMobile style={{ gap: 17, mobile: { gap: 14 } }}>
          <BenefitCard
            number="01 / BIODIVERSITY"
            title="Shelter for wildlife"
            description="Trees provide nesting places, food and shelter for birds, insects and other animals. Native species are especially valuable to local ecosystems."
            symbol="✿"
            background={COLORS.card}
          />
          <BenefitCard
            number="02 / WATER"
            title="Part of the water cycle"
            description="Tree roots help water enter the soil, while canopies slow rainfall and forests can help protect rivers and watersheds."
            symbol="⌁"
            background="#DCE9C5"
          />
          <BenefitCard
            number="03 / HEALTHY SOIL"
            title="Ground that holds together"
            description="Roots help bind soil, reduce erosion and create conditions for the organisms that keep soil healthy and productive."
            symbol="♧"
            background={COLORS.sand}
          />
        </Row>
      </Section>

      {/* SECTION 4 — PRACTICAL ACTION */}
      <Section
        style={{
          padding: [84, 42],
          gap: 32,
          mobile: { padding: [52, 22], gap: 26 },
        }}
      >
        <Row
          stackOnMobile
          style={{ alignItems: "end", gap: 42, mobile: { gap: 14 } }}
        >
          <Column style={{ flex: 1.2, gap: 14 }}>
            <Link href="#action" attrs={{ id: "action" }} style={{ color: "#A56A32", fontSize: 12, fontWeight: 700, letterSpacing: 1.8, textDecoration: "none" }}>03 / SMALL ACTIONS, LASTING ROOTS</Link>
            <Heading level={2}>
              A greener future grows from{" "}
              <Span style={{ color: COLORS.green }}>what we do next.</Span>
            </Heading>
          </Column>
          <Column style={{ flex: 0.9, gap: 8 }}>
            <Text style={{ apply: ["leadSm"] }}>
              Planting a tree is a beginning. Caring for it, protecting existing
              forests and choosing the right native species are what help it
              thrive.
            </Text>
          </Column>
        </Row>

        <Row stackOnMobile style={{ gap: 17, mobile: { gap: 14 } }}>
          <BenefitCard
            number="01 / PLANT WELL"
            title="Choose the right tree"
            description="Select native or locally suitable species, consider the space they need and ask local experts about the best time to plant."
            symbol="✳"
            background="#DCE9C5"
          />
          <BenefitCard
            number="02 / CARE FOR IT"
            title="Help young trees thrive"
            description="Water appropriately, protect young roots and stems, and check on the tree as it grows. A planted tree needs ongoing care."
            symbol="⌁"
            background={COLORS.sand}
          />
          <BenefitCard
            number="03 / PROTECT HABITATS"
            title="Keep existing forests standing"
            description="Support responsible land use, reduce waste, respect green spaces and take part in local conservation efforts."
            symbol="♧"
            background="#F5DDD3"
          />
        </Row>

        <Column
          style={{
            backgroundColor: COLORS.deepGreen,
            borderRadius: 26,
            padding: [34, 34],
            gap: 20,
            mobile: { padding: [28, 22] },
          }}
        >
          <Row
            stackOnMobile
            style={{ alignItems: "center", gap: 28, mobile: { gap: 22 } }}
          >
            <Column style={{ flex: 1, gap: 13 }}>
              <Text
                style={{
                  color: COLORS.yellow,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 1.7,
                }}
              >
                START WHERE YOU ARE
              </Text>
              <Heading level={2} style={{ color: COLORS.card }}>
                Make room for one more tree.
              </Heading>
              <Text
                style={{
                  color: "#E7EBDD",
                  fontSize: 15,
                  lineHeight: 1.65,
                }}
              >
                Find a local planting group, care for a tree in your street,
                protect a nearby green space or help someone learn why trees
                matter. Every thoughtful action can help a living landscape
                flourish.
              </Text>
              <Button href="#top">Share the message</Button>
            </Column>
            <Column
              style={{
                flex: 0.65,
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              <Picture
                art={SMALL_TREE}
                alt="Small paper tree illustration"
              />
              <Text style={{ color: "#E7EBDD", fontSize: 12, mobile: { fontSize: 13 } }}>
                Plant. Protect. Pass it on.
              </Text>
            </Column>
          </Row>
        </Column>
      </Section>

      {/* FOOTER */}
      <Section
        style={{
          backgroundColor: COLORS.card,
          padding: [26, 42],
          gap: 14,
          border: {
            top: { width: 1, style: "solid", color: "#E4E0D3" },
          },
          mobile: { padding: [24, 22] },
        }}
      >
        <Row
          stackOnMobile
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
          }}
        >
          <PaperWordmark />
          <Row
            stackOnMobile={false}
            style={{ gap: 18, flex: "none", flexWrap: "wrap", mobile: { gap: 16 } }}
          >
            <Link href="#why" style={{ color: COLORS.body, fontSize: 12, textDecoration: "none", flex: "none", mobile: { fontSize: 13 } }}>
              Why trees
            </Link>
            <Link href="#life" style={{ color: COLORS.body, fontSize: 12, textDecoration: "none", flex: "none", mobile: { fontSize: 13 } }}>
              Life & nature
            </Link>
            <Link href="#action" style={{ color: COLORS.body, fontSize: 12, textDecoration: "none", flex: "none", mobile: { fontSize: 13 } }}>
              Take action
            </Link>
          </Row>
        </Row>
        <Divider
          style={{
            borderTop: { width: 1, style: "solid", color: "#E4E0D3" },
          }}
        />
        <Text style={{ color: COLORS.muted, fontSize: 11, mobile: { fontSize: 12 } }}>
          Paper Garden — a small reminder that a healthier world needs living
          trees, thriving habitats and people who care for them.
        </Text>
      </Section>
    </Page>
  );
}