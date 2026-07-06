import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── Old WordPress URLs still indexed by Google ──────────────────────
      // These 301 (permanent) redirects reroute traffic from the previous
      // website's cached URLs to the correct pages on the new Next.js site.

      // Indexed pages (from GSC "Indexed pages" report)
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact-us/:path*",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about-us/:path*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/services-2",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/services-2/:path*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/author/:path*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/portfolios/transfer-foil",
        destination: "/foiling",
        permanent: true,
      },
      {
        source: "/portfolios/transfer-foil/:path*",
        destination: "/foiling",
        permanent: true,
      },
      {
        source: "/portfolios/foiled-leather-goods",
        destination: "/foiling",
        permanent: true,
      },
      {
        source: "/portfolios/foiled-leather-goods/:path*",
        destination: "/foiling",
        permanent: true,
      },
      {
        source: "/portfolios/finished-leather",
        destination: "/foiling",
        permanent: true,
      },
      {
        source: "/portfolios/finished-leather/:path*",
        destination: "/foiling",
        permanent: true,
      },
      {
        source: "/portfolios/:path*",
        destination: "/foiling",
        permanent: true,
      },

      // Crawled but not indexed (from GSC "Crawled - currently not indexed")
      {
        source: "/galleries/:path*",
        destination: "/foiling",
        permanent: true,
      },

      // Old WordPress admin/login URLs
      {
        source: "/wp-login.php",
        destination: "/login",
        permanent: true,
      },
      {
        source: "/wp-admin/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-content/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-includes/:path*",
        destination: "/",
        permanent: true,
      },

      // Common WordPress paths that might still be linked
      {
        source: "/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feed/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
