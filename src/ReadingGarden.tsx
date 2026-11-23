import {
  Button,
  Column,
  Divider,
  Heading,
  Link,
  Page,
  Row,
  Section,
  Span,
  Svg,
  Ellipse,
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
 * Built with native Hyper Elements components:
 * Page, Section, Row, Column, Heading, Text, Span, Link, Button,
 * Divider, Svg and Ellipse.
 *
 * No raw HTML island is used for the page structure.
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
};

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
    body: '"DM Sans", "Trebuchet MS", sans-serif',
    heading: '"Chillax", "Trebuchet MS", ui-rounded, sans-serif',
  },
  fontSizes: {
    body: 16,
  },
  lineHeights: {
    body: 1.6,
  },
  elements: {
    Heading: {
      fontFamily: '"Chillax", "Trebuchet MS", ui-rounded, sans-serif',
      color: COLORS.ink,
      fontWeight: 600,
      lineHeight: 1.06,
      by: {
        level: {
          1: { fontSize: 68, mobile: { fontSize: 43 } },
          2: { fontSize: 48, mobile: { fontSize: 34 } },
          3: { fontSize: 25, mobile: { fontSize: 22 } },
        },
      },
    },
    Button: {
      borderRadius: 14,
      backgroundColor: COLORS.yellow,
      color: COLORS.ink,
      fontWeight: 700,
      padding: [14, 21],
      hover: { backgroundColor: "#F0E18A" },
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
    paperCard: {
      backgroundColor: COLORS.card,
      border: { width: 1, style: "solid", color: "#E2DECF" },
      borderRadius: 22,
      padding: 24,
      gap: 13,
    },
  },
});

function Eyebrow({ children }: { children: string }) {
  return <Text style={{ apply: ["eyebrow"] }}>{children}</Text>;
}

function PaperWordmark() {
  return (
    <Text
      style={{
        fontFamily: '"Chillax", "Trebuchet MS", sans-serif',
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

function LeafMark({ color = COLORS.green }: { color?: string }) {
  return (
    <Svg width={54} height={54} viewBox="0 0 54 54" title="Leaf illustration">
      <Ellipse cx={27} cy={27} rx={18} ry={11} style={{ fill: color }} />
      <Ellipse
        cx={27}
        cy={27}
        rx={2}
        ry={17}
        style={{ fill: COLORS.card }}
      />
    </Svg>
  );
}

function Landscape() {
  return (
    <Column style={{ width: "100%", gap: 0 }}>
      <Svg
        width={1320}
        height={210}
        viewBox="0 0 1320 210"
        title="Layered paper hills with a young tree"
      >
        <Ellipse cx={660} cy={210} rx={760} ry={125} style={{ fill: "#E7DDBB" }} />
        <Ellipse cx={340} cy={215} rx={520} ry={105} style={{ fill: COLORS.paleGreen }} />
        <Ellipse cx={1010} cy={220} rx={530} ry={112} style={{ fill: COLORS.leaf }} />
        <Ellipse cx={670} cy={238} rx={650} ry={90} style={{ fill: "#6F9B72" }} />
        <Ellipse cx={665} cy={104} rx={38} ry={38} style={{ fill: COLORS.green }} />
        <Ellipse cx={635} cy={125} rx={28} ry={27} style={{ fill: "#78A77A" }} />
        <Ellipse cx={694} cy={127} rx={29} ry={28} style={{ fill: "#A9D6B4" }} />
        <Ellipse cx={665} cy={162} rx={7} ry={35} style={{ fill: "#9A7048" }} />
      </Svg>
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
      <Heading level={2} style={{ color: accent, fontSize: 37 }}>
        {value}
      </Heading>
      <Text style={{ color: COLORS.ink, fontSize: 14, fontWeight: 700 }}>
        {label}
      </Text>
      <Text style={{ color: COLORS.body, fontSize: 12, lineHeight: 1.5 }}>
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
      <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
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
      <Text style={{ color: COLORS.body, fontSize: 13, lineHeight: 1.6 }}>
        {description}
      </Text>
    </Column>
  );
}

export default function PaperGardenTreesPage() {
  return (
    <Page
      theme={paperGardenTheme}
      width={1440}
      lang="en"
      title="Paper Garden — A world with more trees"
      description="Discover how trees support climate, biodiversity, water and healthier communities."
      style={{
        backgroundColor: token("colors.background"),
        color: token("colors.foreground"),
        gap: 0,
      }}
    >
      {/* NAVIGATION */}
      <Section
        style={{
          backgroundColor: COLORS.card,
          padding: [18, 42],
          border: {
            bottom: { width: 1, style: "solid", color: "#E4E0D3" },
          },
        }}
      >
        <Row style={{ alignItems: "center", justifyContent: "space-between", gap: 18 }}>
          <PaperWordmark />
          <Row
            stackOnMobile
            style={{ alignItems: "center", justifyContent: "end", gap: 22 }}
          >
            <Link href="#why" style={{ color: COLORS.body, fontSize: 13, textDecoration: "none" }}>
              Why trees
            </Link>
            <Link href="#life" style={{ color: COLORS.body, fontSize: 13, textDecoration: "none" }}>
              Life & nature
            </Link>
            <Link href="#action" style={{ color: COLORS.body, fontSize: 13, textDecoration: "none" }}>
              Take action
            </Link>
            <Button href="#action">Grow a greener future</Button>
          </Row>
        </Row>
      </Section>

      {/* SECTION 1 — HERO */}
      <Section style={{ padding: [76, 42, 30], gap: 26 }}>
        <Row stackOnMobile style={{ alignItems: "center", gap: 54 }}>
          <Column style={{ flex: 1.05, gap: 21 }}>
            <Eyebrow>A little more green changes everything</Eyebrow>
            <Heading
              level={1}
              style={{
                fontSize: 68,
                mobile: { fontSize: 43 },
                maxWidth: 620,
                letterSpacing: -3.2,
              }}
            >
              A world with more trees is a world that can{" "}
              <Span style={{ color: COLORS.green }}>breathe.</Span>
            </Heading>
            <Text style={{ apply: ["lead"], maxWidth: 540 }}>
              Trees are more than beautiful parts of a landscape. They cool our
              cities, shelter wildlife, protect soil and help keep the natural
              systems we all depend on in balance.
            </Text>
            <Row stackOnMobile style={{ gap: 12, alignItems: "center" }}>
              <Button href="#why">Discover why trees matter</Button>
              <Button
                href="#action"
                style={{
                  backgroundColor: COLORS.card,
                  color: COLORS.ink,
                  border: { width: 1, style: "solid", color: COLORS.line },
                }}
              >
                Find your part
              </Button>
            </Row>
            <Text style={{ color: COLORS.muted, fontSize: 12 }}>
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
            }}
          >
            <Svg
              width={560}
              height={430}
              viewBox="0 0 560 430"
              title="Paper-cut illustration of a flourishing tree"
            >
              <Ellipse cx={280} cy={388} rx={250} ry={34} style={{ fill: "#D3C69C" }} />
              <Ellipse cx={160} cy={360} rx={170} ry={48} style={{ fill: "#DCE9C5" }} />
              <Ellipse cx={420} cy={365} rx={175} ry={52} style={{ fill: "#A9D6B4" }} />
              <Ellipse cx={280} cy={220} rx={30} ry={145} style={{ fill: "#9A7048" }} />
              <Ellipse cx={180} cy={170} rx={100} ry={93} style={{ fill: "#6F9B72" }} />
              <Ellipse cx={285} cy={110} rx={116} ry={105} style={{ fill: "#548C68" }} />
              <Ellipse cx={390} cy={177} rx={104} ry={95} style={{ fill: "#A9D6B4" }} />
              <Ellipse cx={278} cy={232} rx={95} ry={88} style={{ fill: "#78A77A" }} />
              <Ellipse cx={115} cy={80} rx={19} ry={19} style={{ fill: "#E9D65B" }} />
              <Ellipse cx={448} cy={76} rx={12} ry={12} style={{ fill: "#E9795F" }} />
              <Ellipse cx={390} cy={285} rx={8} ry={8} style={{ fill: "#E9D65B" }} />
              <Ellipse cx={165} cy={285} rx={7} ry={7} style={{ fill: "#FFFDF5" }} />
            </Svg>
            <Text
              style={{
                color: COLORS.deepGreen,
                fontFamily: '"Chillax", sans-serif',
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
          padding: [82, 42],
          gap: 34,
        }}
      >
        <Row stackOnMobile style={{ alignItems: "end", gap: 42 }}>
          <Column style={{ flex: 1.25, gap: 14 }}>
            <Link href="#why" attrs={{ id: "why" }} style={{ color: "#A56A32", fontSize: 12, fontWeight: 700, letterSpacing: 1.8, textDecoration: "none" }}>01 / THE PLANET'S NATURAL HELPERS</Link>
            <Heading level={2}>
              Trees keep our planet{" "}
              <Span style={{ color: COLORS.green }}>in balance.</Span>
            </Heading>
          </Column>
          <Column style={{ flex: 0.9, gap: 8 }}>
            <Text style={{ apply: ["lead"], fontSize: 17 }}>
              From the air we breathe to the temperature of our streets, trees
              quietly support the conditions that make life possible.
            </Text>
          </Column>
        </Row>

        <Row stackOnMobile style={{ gap: 17 }}>
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

        <Row stackOnMobile style={{ alignItems: "center", gap: 20 }}>
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
        <Text style={{ color: COLORS.muted, fontSize: 11 }}>
          Note: Benefits vary by tree species, location, climate and how green
          spaces are planned and maintained.
        </Text>
      </Section>

      {/* SECTION 3 — BIODIVERSITY, WATER AND SOIL */}
      <Section
        style={{
          backgroundColor: "#EFEDDF",
          padding: [82, 42],
          gap: 32,
        }}
      >
        <Row stackOnMobile style={{ alignItems: "center", gap: 44 }}>
          <Column style={{ flex: 0.95, gap: 13 }}>
            <Link href="#life" attrs={{ id: "life" }} style={{ color: "#A56A32", fontSize: 12, fontWeight: 700, letterSpacing: 1.8, textDecoration: "none" }}>02 / A HOME FOR LIVING THINGS</Link>
            <Heading level={2}>
              Every tree is part of a much bigger{" "}
              <Span style={{ color: COLORS.green }}>story.</Span>
            </Heading>
            <Text style={{ apply: ["lead"], fontSize: 17 }}>
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
            }}
          >
            <Svg
              width={560}
              height={320}
              viewBox="0 0 560 320"
              title="Paper illustration of a tree canopy and living habitat"
            >
              <Ellipse cx={280} cy={290} rx={250} ry={25} style={{ fill: "#D8D4C5" }} />
              <Ellipse cx={280} cy={172} rx={23} ry={110} style={{ fill: "#9A7048" }} />
              <Ellipse cx={175} cy={112} rx={100} ry={83} style={{ fill: "#6F9B72" }} />
              <Ellipse cx={278} cy={76} rx={110} ry={83} style={{ fill: COLORS.green }} />
              <Ellipse cx={385} cy={120} rx={100} ry={85} style={{ fill: COLORS.leaf }} />
              <Ellipse cx={280} cy={155} rx={88} ry={74} style={{ fill: "#78A77A" }} />
              <Ellipse cx={120} cy={235} rx={48} ry={20} style={{ fill: COLORS.sand }} />
              <Ellipse cx={440} cy={235} rx={50} ry={20} style={{ fill: COLORS.paleGreen }} />
              <Ellipse cx={170} cy={88} rx={8} ry={8} style={{ fill: COLORS.yellow }} />
              <Ellipse cx={350} cy={61} rx={7} ry={7} style={{ fill: COLORS.coral }} />
              <Ellipse cx={420} cy={139} rx={8} ry={8} style={{ fill: COLORS.yellow }} />
              <Ellipse cx={245} cy={205} rx={6} ry={6} style={{ fill: COLORS.card }} />
            </Svg>
            <Text style={{ color: COLORS.muted, fontSize: 11, textAlign: "center" }}>
              A healthy tree supports life above and below the ground.
            </Text>
          </Column>
        </Row>

        <Row stackOnMobile style={{ gap: 17 }}>
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
      <Section style={{ padding: [84, 42], gap: 32 }}>
        <Row stackOnMobile style={{ alignItems: "end", gap: 42 }}>
          <Column style={{ flex: 1.2, gap: 14 }}>
            <Link href="#action" attrs={{ id: "action" }} style={{ color: "#A56A32", fontSize: 12, fontWeight: 700, letterSpacing: 1.8, textDecoration: "none" }}>03 / SMALL ACTIONS, LASTING ROOTS</Link>
            <Heading level={2}>
              A greener future grows from{" "}
              <Span style={{ color: COLORS.green }}>what we do next.</Span>
            </Heading>
          </Column>
          <Column style={{ flex: 0.9, gap: 8 }}>
            <Text style={{ apply: ["lead"], fontSize: 17 }}>
              Planting a tree is a beginning. Caring for it, protecting existing
              forests and choosing the right native species are what help it
              thrive.
            </Text>
          </Column>
        </Row>

        <Row stackOnMobile style={{ gap: 17 }}>
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
          }}
        >
          <Row stackOnMobile style={{ alignItems: "center", gap: 28 }}>
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
              <Text style={{ color: "#E7EBDD", fontSize: 15, lineHeight: 1.65 }}>
                Find a local planting group, care for a tree in your street,
                protect a nearby green space or help someone learn why trees
                matter. Every thoughtful action can help a living landscape
                flourish.
              </Text>
              <Button
                href="#top"
                style={{
                  backgroundColor: COLORS.yellow,
                  color: COLORS.ink,
                }}
              >
                Share the message
              </Button>
            </Column>
            <Column
              style={{
                flex: 0.65,
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              <Svg
                width={250}
                height={230}
                viewBox="0 0 250 230"
                title="Small paper tree illustration"
              >
                <Ellipse cx={125} cy={208} rx={105} ry={16} style={{ fill: "#244A36" }} />
                <Ellipse cx={125} cy={142} rx={13} ry={65} style={{ fill: "#A77B4E" }} />
                <Ellipse cx={78} cy={91} rx={49} ry={48} style={{ fill: "#A9D6B4" }} />
                <Ellipse cx={125} cy={58} rx={57} ry={53} style={{ fill: "#78A77A" }} />
                <Ellipse cx={175} cy={94} rx={47} ry={46} style={{ fill: "#DCE9C5" }} />
                <Ellipse cx={125} cy={116} rx={42} ry={40} style={{ fill: "#548C68" }} />
                <Ellipse cx={55} cy={37} rx={7} ry={7} style={{ fill: COLORS.yellow }} />
                <Ellipse cx={195} cy={42} rx={6} ry={6} style={{ fill: COLORS.coral }} />
              </Svg>
              <Text style={{ color: "#E7EBDD", fontSize: 12 }}>
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
        }}
      >
        <Row stackOnMobile style={{ alignItems: "center", justifyContent: "space-between", gap: 14 }}>
          <PaperWordmark />
          <Row stackOnMobile style={{ gap: 18 }}>
            <Link href="#why" style={{ color: COLORS.body, fontSize: 12, textDecoration: "none" }}>
              Why trees
            </Link>
            <Link href="#life" style={{ color: COLORS.body, fontSize: 12, textDecoration: "none" }}>
              Life & nature
            </Link>
            <Link href="#action" style={{ color: COLORS.body, fontSize: 12, textDecoration: "none" }}>
              Take action
            </Link>
          </Row>
        </Row>
        <Divider
          style={{
            borderTop: { width: 1, style: "solid", color: "#E4E0D3" },
          }}
        />
        <Text style={{ color: COLORS.muted, fontSize: 11 }}>
          Paper Garden — a small reminder that a healthier world needs living
          trees, thriving habitats and people who care for them.
        </Text>
      </Section>
    </Page>
  );
}