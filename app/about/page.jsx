import AboutContent from "./AboutContent";

export const metadata = {
  title: "About Floramade | Authentic Ayurvedic Heritage & Wellness",
  description: "Learn about Floramade Healthcare based in Delhi, India. Discover our mission of bringing pure, lab-tested classical Ayurvedic formulations for blood sugar, vitality, and digestive wellness.",
  keywords: [
    "Floramade",
    "About Floramade",
    "Floramade founder",
    "Ayurvedic wellness Delhi",
    "Floramade Healthcare",
    "Ayurvedic heritage India",
    "herbal formulations India",
    "Pancha Mahabhutas Ayurveda",
  ],
  alternates: {
    canonical: "https://floramade.in/about",
  },
  openGraph: {
    title: "About Floramade | Authentic Ayurvedic Heritage & Wellness",
    description: "Learn about Floramade Healthcare based in Delhi, India. Pure, lab-tested classical Ayurvedic formulations.",
    url: "https://floramade.in/about",
    siteName: "Floramade",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/aboutus2.webp",
        width: 1200,
        height: 630,
        alt: "Floramade Ayurvedic Heritage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Floramade | Authentic Ayurvedic Heritage",
    description: "Learn about Floramade Healthcare based in Delhi, India.",
    images: ["/assets/aboutus2.webp"],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://floramade.in/about#webpage",
  "url": "https://floramade.in/about",
  "name": "About Floramade Healthcare",
  "description": "Floramade is an authentic Ayurvedic wellness brand based in Delhi, India, bringing pure, lab-tested herbal remedies to modern living.",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://floramade.in/#website",
    "name": "Floramade",
    "url": "https://floramade.in"
  },
  "mainEntity": {
    "@type": "Organization",
    "@id": "https://floramade.in/#organization",
    "name": "Floramade Healthcare",
    "url": "https://floramade.in",
    "description": "Floramade Healthcare, dedicated to classical Ayurvedic formulations and botanical standardization based in Delhi, India.",
    "image": "https://floramade.in/assets/aboutus2.webp",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    }
  }
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutContent />
    </>
  );
}
