import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans } from "next/font/google";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE, ADDRESS_LINES } from "@/lib/constants/site";
import { SOLUTIONS } from "@/lib/content/solutions";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["500", "600", "700"],
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "InspireX | IT Consulting, Cybersecurity & Technology Staffing",
    template: "%s | InspireX",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName }],
  keywords: [
    "IT consulting",
    "IT staffing",
    "cybersecurity",
    "regulatory compliance",
    "disaster recovery",
    "SAP managed services",
    "infrastructure monitoring",
    "Toronto",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_CA",
    url: SITE.domain,
    title: "InspireX | IT Consulting, Cybersecurity & Technology Staffing",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "InspireX | IT Consulting, Cybersecurity & Technology Staffing",
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  category: "technology",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE.domain}/#organization`,
      name: SITE.legalName,
      alternateName: SITE.name,
      url: SITE.domain,
      email: SITE.email,
      description: SITE.description,
      slogan: "Technology that never interrupts the business.",
      logo: { "@type": "ImageObject", url: `${SITE.domain}/icon` },
      image: `${SITE.domain}/opengraph-image`,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postalCode,
        addressCountry: "CA",
      },
      areaServed: { "@type": "Country", name: "Canada" },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: SITE.email,
          areaServed: "CA",
          availableLanguage: "English",
        },
        {
          "@type": "ContactPoint",
          contactType: "human resources",
          email: SITE.hrEmail,
          areaServed: "CA",
          availableLanguage: "English",
        },
      ],
      identifier: [
        { "@type": "PropertyValue", name: "CAGE", value: "87PLO" },
        {
          "@type": "PropertyValue",
          name: "California Certified Small Business",
          value: "2013947",
        },
      ],
      knowsAbout: [
        "IT consulting",
        "Cybersecurity",
        "Regulatory compliance",
        "Disaster recovery",
        "Infrastructure monitoring",
        "SAP managed services",
        "IT staffing",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "InspireX solutions",
        itemListElement: SOLUTIONS.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.summary,
            url: `${SITE.domain}/solutions/${s.slug}`,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.domain}/#website`,
      url: SITE.domain,
      name: SITE.name,
      description: SITE.description,
      publisher: { "@id": `${SITE.domain}/#organization` },
      inLanguage: "en-CA",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${archivo.variable} ${plex.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <span className="sr-only">{ADDRESS_LINES.join(", ")}</span>
      </body>
    </html>
  );
}
