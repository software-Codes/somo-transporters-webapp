/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.somotransporter.co.ke",
  generateRobotsTxt: false, // We manage robots.txt manually
  sitemapSize: 7000,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/404", "/500", "/api/*"],
  additionalPaths: async () => [
    {
      loc: "/",
      changefreq: "weekly",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/services",
      changefreq: "monthly",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/get-quote",
      changefreq: "monthly",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
  ],
};
