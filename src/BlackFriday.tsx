import {
  Button,
  Column,
  defineTheme,
  Divider,
  Email,
  Grid,
  Heading,
  Html,
  Image,
  Link,
  Menu,
  Row,
  Section,
  Text,
  Span,
} from "@hyper-elements/react";

const COLORS = {
  paper: "#F7F2D8",
  paperDeep: "#EDE6C6",
  card: "#FFFDF0",
  ink: "#182431",
  muted: "#515B60",
  rule: "#D8D1B3",
  pear: "#F4D21F",
  pearDeep: "#D2AD00",
  blue: "#1266B0",
  coral: "#EF6C69",
  mint: "#9ED9B0",
  fringe: "#E2D9B6",
};

const INTERACTION_STYLES = `<style>
/* Hallmark v2.0.0; redesign full; theme Hum requested; genre playful; job buy; posture full-palette; signature up to 70% off; draw 3301d6; nav slab; footer colophon */
/* Hallmark critique: P5 H5 E4 S4 R4 V4; restraint held to three accents and one coral offer band */
a:focus-visible { outline: 3px solid ${COLORS.blue}; outline-offset: 3px; }
a:active { transform: translateY(3px); }
a:disabled, a[aria-disabled="true"] { opacity: 0.55; cursor: not-allowed; }
@media (prefers-reduced-motion: reduce) { a:active { transform: none; } }
</style>`;

const FONT_FACES = [
  {
    family: "Chillax",
    src: "https://cdn.fontshare.com/wf/XASL35KKT35X3ACCBCOQKKABSR6AT3FX/6MU5BWUUPHCFUHM2F3E3QPQGKXCVBUOO/WZY5PMNTII6NKOB2TTIAX7QVAWMSY2DQ.woff2",
    format: "woff2" as const,
    weight: 500,
  },
  {
    family: "Chillax",
    src: "https://cdn.fontshare.com/wf/2T24MWUOKZU65SZJ33GPRGNOKE4KPOBX/T6LIXZJIPB23UDPMTIKURYWSZLXZBJ3A/THF5L6EHVL4N4NNE3GYDZNZSHABL5CH5.woff2",
    format: "woff2" as const,
    weight: 600,
  },
];

const saleTheme = defineTheme({
  colors: {
    background: COLORS.paper,
    foreground: COLORS.ink,
    primary: COLORS.pear,
    primaryForeground: COLORS.ink,
    muted: COLORS.muted,
    border: COLORS.rule,
  },
  fonts: {
    body: '"Chillax", "Trebuchet MS", ui-rounded, sans-serif',
    heading: '"Chillax", "Trebuchet MS", ui-rounded, sans-serif',
  },
  fontSizes: {
    body: 16,
  },
  lineHeights: {
    body: 1.5,
  },
  elements: {
    Heading: {
      color: COLORS.ink,
      fontFamily: '"Chillax", "Trebuchet MS", ui-rounded, sans-serif',
      fontWeight: 600,
      lineHeight: 1.08,
      by: {
        level: {
          1: { fontSize: 44, mobile: { fontSize: 36 } },
          2: { fontSize: 31, mobile: { fontSize: 27 } },
          3: { fontSize: 20, mobile: { fontSize: 19 } },
        },
      },
    },
    Button: {
      borderRadius: 16,
      backgroundColor: COLORS.pear,
      color: COLORS.ink,
      fontFamily: '"Chillax", "Trebuchet MS", ui-rounded, sans-serif',
      fontSize: 15,
      fontWeight: 600,
      padding: [14, 24],
      border: {
        bottom: { width: 5, style: "solid", color: COLORS.pearDeep },
      },
      hover: { backgroundColor: "#F8DD55" },
    },
    Link: {
      color: COLORS.blue,
    },
  },
});

const STORE_URL = "https://your-store.com";

const products = [
  {
    name: "Classic Sneakers",
    category: "Footwear",
    oldPrice: "$120",
    price: "$69",
    discount: "42% off",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: `${STORE_URL}/products/sneakers`,
  },
  {
    name: "Premium Watch",
    category: "Accessories",
    oldPrice: "$180",
    price: "$99",
    discount: "45% off",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: `${STORE_URL}/products/watch`,
  },
  {
    name: "Wireless Headphones",
    category: "Electronics",
    oldPrice: "$150",
    price: "$79",
    discount: "47% off",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: `${STORE_URL}/products/headphones`,
  },
  {
    name: "Everyday Backpack",
    category: "Lifestyle",
    oldPrice: "$90",
    price: "$49",
    discount: "46% off",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: `${STORE_URL}/products/backpack`,
  },
];

export default function BlackFridayEmail() {
  return (
    <Email
      theme={saleTheme}
      fonts={FONT_FACES}
      width={600}
      lang="en"
      title="Black Friday Sale"
      previewText="The biggest deals of the year are here. Save up to 70%!"
      style={{
        backgroundColor: COLORS.paper,
        color: COLORS.ink,
        gap: 0,
      }}
    >
      <Html html={INTERACTION_STYLES} />
      <Section
        style={{
          backgroundColor: COLORS.ink,
          padding: [16, 24],
        }}
      >
        <Column style={{ gap: 13 }}>
          <Row
            style={{
                alignItems: "center",
                justifyContent: "center",
            
            }}
          >
            <Heading
              level={2}
              style={{
                color: COLORS.card,
                fontSize: 26,
                textAlign: "center",
                
              }}
            >
              NOVA<Span style={{ color: COLORS.pear }}>.</Span>
            </Heading>
          </Row>
          <Menu
            items={[
              { text: "New arrivals", href: `${STORE_URL}/new` },
              { text: "Men", href: `${STORE_URL}/men` },
              { text: "Women", href: `${STORE_URL}/women` },
              { text: "Sale", href: `${STORE_URL}/sale` },
            ]}
            separator="  /  "
            layout="horizontal"
            style={{
              color: COLORS.card,
              fontSize: 13,
              justifyContent: "center",
            }}
          />
        </Column>
      </Section>

      <Section
        style={{
          backgroundColor: COLORS.paper,
          padding: [34, 24],
          alignItems: "center",
          gap: 12,
        }}
      >
        <Heading
          level={1}
          style={{
            textAlign: "center",
            maxWidth: 520,
          }}
        >
          Up to 70% off
        </Heading>
        <Text
          style={{
            textAlign: "center",
            maxWidth: 430,
            fontSize: 16,
          }}
        >
          Your favorite products at unbelievable prices.
        </Text>
        <Button href={`${STORE_URL}/collections/black-friday`}>
          Shop the sale
        </Button>
        <Text
          style={{
            color: COLORS.muted,
            textAlign: "center",
            maxWidth: 460,
            fontSize: 13,
          }}
        >
          This is the sale you’ve been waiting for. Limited time offer, while
          stocks last.
        </Text>
      </Section>

      <Section
        style={{
          backgroundColor: COLORS.paperDeep,
          padding: [28, 20],
          gap: 18,
        }}
      >
        <Column style={{ alignItems: "center", gap: 5 }}>
          <Heading level={2} style={{ textAlign: "center" }}>
            Hottest deals
          </Heading>
          <Text style={{ textAlign: "center", color: COLORS.muted }}>
            Grab your favorites before they’re gone.
          </Text>
        </Column>

        <Grid
          columns={2}
          stackOnMobile
          style={{
            gap: 14,
          }}
        >
          {products.map((product) => (
            <Column
              key={product.name}
              style={{
                backgroundColor: COLORS.card,
                border: { width: 1, style: "solid", color: COLORS.fringe },
                borderRadius: 22,
                padding: 12,
                gap: 8,
              }}
            >
              <Image
                src={{ src: product.image, width: 560, height: 420 }}
                alt={product.name}
                style={{
                  width: "100%",
                  borderRadius: 14,
                }}
              />
              <Row
                style={{
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Text style={{ color: COLORS.muted, fontSize: 13 }}>
                  {product.category}
                </Text>
                <Text
                  style={{
                    backgroundColor: COLORS.coral,
                    color: COLORS.ink,
                    borderRadius: 10,
                    padding: [4, 8],
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {product.discount}
                </Text>
              </Row>
              <Heading level={3}>{product.name}</Heading>
              <Row style={{ alignItems: "center", gap: 8 }}>
                <Text style={{ color: COLORS.blue, fontSize: 20, fontWeight: 600 }}>
                  {product.price}
                </Text>
                <Text
                  style={{
                    color: COLORS.muted,
                    fontSize: 14,
                    textDecoration: "line-through",
                  }}
                >
                  {product.oldPrice}
                </Text>
              </Row>
              <Button href={product.href}>Shop now</Button>
            </Column>
          ))}
        </Grid>
      </Section>

      <Section
        style={{
          backgroundColor: COLORS.coral,
          padding: [30, 24],
          alignItems: "center",
          gap: 12,
        }}
      >
        <Heading level={2} style={{ textAlign: "center" }}>
          Don’t miss out!
        </Heading>
        <Text style={{ textAlign: "center", maxWidth: 440 }}>
          These deals won’t last forever. Shop now and enjoy incredible savings.
        </Text>
        <Button href={`${STORE_URL}/collections/black-friday`}>
          Explore all deals
        </Button>
      </Section>

      <Section
        style={{
          backgroundColor: COLORS.ink,
          padding: [26, 24],
          gap: 13,
          alignItems: "center",
        }}
      >
        <Heading level={2} style={{ color: COLORS.card, fontSize: 24, textAlign: "center" }}>
          NOVA<Span style={{ color: COLORS.pear }}>.</Span>
        </Heading>
        <Text
          style={{
            color: COLORS.card,
            textAlign: "center",
            fontSize: 14,
          }}
        >
          Style. Quality. Unbeatable prices. Thanks for shopping with NOVA.
        </Text>
        <Menu
          items={[
            { text: "Shop", href: `${STORE_URL}/shop` },
            { text: "Contact", href: `${STORE_URL}/contact` },
            { text: "Privacy", href: `${STORE_URL}/privacy` },
          ]}
          separator="  /  "
          layout="horizontal"
          style={{
            color: COLORS.card,
            fontSize: 13,
            justifyContent: "center",
          }}
        />
        <Divider
          style={{
            borderTop: `1px solid ${COLORS.muted}`,
            width: "100%",
          }}
        />
        <Text
          style={{
            color: COLORS.card,
            textAlign: "center",
            fontSize: 12,
            lineHeight: 1.6,
          }}
        >
          You’re receiving this email because you subscribed to NOVA updates.
        </Text>
        <Link
          href={`${STORE_URL}/unsubscribe`}
          style={{
            color: COLORS.pear,
            fontSize: 13,
            textDecoration: "underline",
          }}
        >
          Unsubscribe
        </Link>
        <Text style={{ color: COLORS.card, textAlign: "center", fontSize: 12 }}>
          © 2026 NOVA Store. All rights reserved.
        </Text>
      </Section>
    </Email>
  );
}