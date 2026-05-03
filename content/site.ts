export const site = {
  name: "CompuCraft",
  tagline: "Custom PC builds and computer services in the North Attleboro area.",
  shortTagline: "PC builds and computer services, North Attleboro.",
  domain: "compucraft.com",
  url: "https://compucraft.com",
  baseLocation: "North Attleboro, MA",
  serviceAreaTowns: [
    "Attleboro",
    "Plainville",
    "Mansfield",
    "Norton",
    "Foxborough",
    "Wrentham",
    "Cumberland (RI)",
    "Pawtucket (RI)",
    "Seekonk",
    "Rehoboth",
  ],
  description:
    "Custom PC builds, component upgrades, diagnostics, basic networking, and home media servers. Hourly billing with written estimates and a 30-day labor warranty.",
} as const;

export type SiteInfo = typeof site;
