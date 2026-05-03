export type TimeEstimate = {
  job: string;
  hours: string;
};

export const pricing = {
  hourlyRate: 50,
  hourlyRateDisplay: "$50/hour",
  minimum: "1-hour minimum",
  hourlyExplanation:
    "Hourly billing means you only pay for the time the job actually takes. Every quote includes an estimated time range up front. If a job runs more than 25% over the estimate, work stops and the customer is consulted before continuing.",
  diagnosticFee: 45,
  diagnosticFeeDisplay: "$45",
  diagnosticNote:
    "Applied toward repair cost if the customer proceeds with the work.",
} as const;

export const pcEstimates: TimeEstimate[] = [
  { job: "Tune-up & cleaning", hours: "1.5–2 hours" },
  { job: "Thermal paste replacement", hours: "1 hour" },
  { job: "Windows reinstall + drivers", hours: "1.5–2 hours" },
  { job: "Component upgrade (GPU, RAM, storage, etc.)", hours: "1 hour" },
  {
    job: "Custom PC build assembly (customer supplies parts)",
    hours: "4–6 hours",
  },
  {
    job: "Full-service build (parts sourcing + assembly)",
    hours: "6–8 hours of labor, plus consultation time",
  },
];

export const networkServerEstimates: TimeEstimate[] = [
  { job: "Basic networking / router setup", hours: "1.5–2 hours" },
  { job: "Media server setup (prebuilt NAS, on-site)", hours: "2–3 hours" },
  {
    job: "Media server setup (DIY two-stage build + on-site integration)",
    hours: "4–5 hours total",
  },
  {
    job: "Add-ons (audio integration, multi-room, remote access, transcoding tuning, library organization)",
    hours: "Quoted on request",
  },
];

export const mediaServerNote =
  "Base media server setup covers getting the device installed, configured, and successfully streaming video to one display of the customer's choice. Anything beyond that is an add-on.";

export const travel = {
  freeRadiusMiles: 15,
  surchargePerExtraTen: 20,
  maxRadiusMiles: 50,
  description:
    "Free on-site service within 15 miles of North Attleboro. $20 added for every additional 10 miles beyond that. No travel beyond approximately 50 miles.",
  dropOff: "Drop-off also available.",
};

export const partsPolicy =
  "If the customer would like CompuCraft to handle parts sourcing, full payment for the parts must be received before any orders are placed. No parts are fronted. After the parts list is agreed upon, the customer sends payment, parts are ordered, and the build is scheduled once everything arrives.";

export const paymentMethods = ["Cash", "Venmo", "Cash App", "Zelle"];
export const paymentMethodsNote = "No credit or debit cards.";

export const warranty = {
  laborTitle: "30-Day Labor Warranty",
  laborBody:
    "If something I installed fails due to my workmanship, I'll fix it free of charge within 30 days of the original service.",
  partsTitle: "Part Failures",
  partsBody:
    "Component warranties (GPU, CPU, motherboard, PSU, NAS units, routers, etc.) are between the customer and the manufacturer or retailer. If a part fails, I'm glad to help identify the issue and install the replacement, but the RMA process — contacting the manufacturer, shipping, paperwork — is the customer's responsibility.",
};
