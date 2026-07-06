import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/library", "/pending-approval", "/api/"],
      },
    ],
    sitemap: "https://www.foilcrafts.com/sitemap.xml",
  };
}
