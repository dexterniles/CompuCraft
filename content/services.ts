export type ServiceCategory = {
  id: string;
  title: string;
  summary: string;
  items: string[];
  note?: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "computers",
    title: "Computer Building & Maintenance",
    summary:
      "Builds, upgrades, diagnostics, and tune-ups for desktops, laptops, and Macs.",
    items: [
      "Custom PC builds (gaming, productivity, budget to high-end)",
      "Component upgrades — GPU, RAM, storage, cooling, PSU (desktops); RAM and storage upgrades where supported (laptops and Macs)",
      "Diagnostics and troubleshooting (won't boot, BSODs, kernel panics, overheating, crashes)",
      "OS installation, driver setup, and tune-ups (Windows and macOS)",
      "Cleaning, thermal paste / pad replacement, and cable management",
      "BIOS, XMP/EXPO, and fan-curve tuning",
    ],
  },
  {
    id: "networking",
    title: "Basic Networking",
    summary:
      "Standard ISP router setup and Wi-Fi troubleshooting for home use.",
    items: [
      "ISP router setup and configuration",
      "Firmware updates",
      "Password resets and Wi-Fi name/password changes",
      "Basic Wi-Fi troubleshooting",
    ],
    note:
      "Advanced networking (VLANs, VPNs, pi-hole, business-grade gear) is outside scope.",
  },
  {
    id: "servers",
    title: "Home Server & Storage",
    summary:
      "NAS units, local media servers, and home backup setups.",
    items: [
      "Basic NAS setup and configuration (Synology, QNAP, or DIY)",
      "Local media server setup (Plex, Jellyfin, Emby)",
      "Network share configuration for home backups",
      "Initial drive setup and folder structure",
    ],
  },
];

export const notOffered: string[] = [
  "Data recovery or hard drive repair (no equipment for it)",
  "Laptop or Mac hardware-level repairs (screen, keyboard, battery, or board-level work)",
  "Specialty workloads — crypto mining, AI workstations, dedicated servers",
  "Business or commercial work — residential only",
  "Payment plans or financing — payment is due on completion",
];
