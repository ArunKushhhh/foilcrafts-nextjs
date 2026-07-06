import { PageHero, ContactCTA } from "@/components/sections";
import { Marquee } from "@/components/Marquee";
import { ItemsInline } from "@/components/ItemsInline";
import { content } from "@/lib/content";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cut Plates & Embossing Dies",
  description:
    "In-house library of cut plates and embossing dies for leather finishing — used independently or as the structural layer beneath transfer foiling. Foil Crafts, Noida.",
  alternates: { canonical: "/cut-plates-embossing" },
  openGraph: {
    title: "Cut Plates & Embossing Dies | Foil Crafts",
    description:
      "Cut plates and embossing dies for leather — used independently or beneath transfer foiling.",
  },
};

export default function CutPlatesEmbossingPage() {
  return (
    <>
      <PageHero
        eyebrow="04 — Cut Plates and Embossing"
        title="Cut plates &amp;<br><em>embossing dies.</em>"
        image="/images/cut-plates/CP-001.jpg"
        sub="Our in-house cut and embossing library — 24 cut plates and 23 embossing dies, used independently of foiling or as the structural layer beneath it."
      />
      <Marquee items={content.marquee} />
      <ItemsInline fromSlug="cut-plates" isApproved={true} />
      <ContactCTA />
    </>
  );
}
