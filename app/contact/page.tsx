import { PageHero, ContactCTA } from "@/components/sections";
import { Marquee } from "@/components/Marquee";
import { CustomerLoginSection } from "@/components/CustomerLoginSection";
import { content } from "@/lib/content";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Write to the Atelier",
  description:
    "Samples, custom development, and trade enquiries — reach Foil Crafts at B-37, Sector 57, Noida. The founders read every inbound. info@foilcrafts.com · +91 9899 71 9197.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Foil Crafts — Write to the Atelier",
    description:
      "Samples, custom development, and trade enquiries. B-37, Sector 57, Noida. info@foilcrafts.com.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="06 — Contact"
        title="Write to the<br><em>atelier.</em>"
        image="/images/about/founders-conversation.jpg"
        sub="Samples, custom development, trade enquiries — the founders read every inbound."
      />
      <Marquee items={content.marquee} />
      <ContactCTA />
      <CustomerLoginSection />
    </>
  );
}
