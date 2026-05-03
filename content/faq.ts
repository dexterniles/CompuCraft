export type FAQ = {
  q: string;
  a: string;
};

export const faqs: FAQ[] = [
  {
    q: "Do you build PCs for crypto mining, AI workstations, or servers?",
    a: "Standard gaming and productivity builds only. Specialty workloads aren't part of the service.",
  },
  {
    q: "Can you transfer files from my old PC to the new one?",
    a: "Yes, as long as the old drive is functional. This is billed hourly along with the rest of the work.",
  },
  {
    q: "Do you offer remote support?",
    a: "No, all work is done in person — either at the customer's location or via drop-off.",
  },
  {
    q: "Can you work on Macs or laptops?",
    a: "Yes — Mac and laptop work is offered in the same capacity as desktop PC work: RAM and SSD upgrades, OS reinstalls, cleaning, thermal paste, diagnostics, and general troubleshooting. Hardware-level repairs like screen replacements, keyboard replacements, or board-level work aren't offered.",
  },
  {
    q: "What if I already bought parts that turn out to be incompatible?",
    a: "I'll let you know during the consultation or as soon as I see them. Returning incompatible parts is the customer's responsibility, but I'll help identify the right replacement.",
  },
  {
    q: "Do you provide a written quote before starting work?",
    a: "Yes, always. Every job gets a time estimate and total cost range up front before any work begins.",
  },
  {
    q: "What happens if a part arrives DOA from the retailer?",
    a: "The RMA goes through the retailer or manufacturer, handled by the customer. I'll help diagnose and confirm the part is bad, and install the replacement when it arrives (billed for the install time only).",
  },
  {
    q: "Can you overclock my CPU or GPU?",
    a: "Basic XMP/EXPO memory tuning and minor undervolting yes. Aggressive overclocking, no.",
  },
  {
    q: "Do you offer payment plans?",
    a: "No. Payment is due on completion for service work, and parts are paid in full before ordering.",
  },
  {
    q: "How far in advance do I need to book?",
    a: "Depends on workload. Reach out and I'll give you a realistic timeline.",
  },
  {
    q: "Do you do business or commercial work?",
    a: "Residential only at this time.",
  },
  {
    q: "Is the diagnostic fee refunded if you can't fix the problem?",
    a: "The diagnostic fee covers the time spent identifying the issue. If the problem is identified but the customer chooses not to proceed, the $45 still applies. If the diagnostic is inconclusive, no charge.",
  },
];
