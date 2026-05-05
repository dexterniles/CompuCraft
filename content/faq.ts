export type FAQ = {
  q: string;
  a: string;
};

export const faqs: FAQ[] = [
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
    a: "Yes — Mac and laptop work covers RAM/SSD upgrades, OS reinstalls, cleaning, thermal paste, and diagnostics. Hardware-level repairs (screens, keyboards, board-level) aren't offered.",
  },
  {
    q: "What if I already bought parts that turn out to be incompatible?",
    a: "I'll flag incompatibilities during consultation. Returning the parts is your responsibility, but I'll help identify the right replacement.",
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
    q: "How far in advance do I need to book?",
    a: "Depends on workload. Reach out and I'll give you a realistic timeline.",
  },
  {
    q: "Is the diagnostic fee refunded if you can't fix the problem?",
    a: "The diagnostic fee covers the time spent identifying the issue. If the problem is identified but the customer chooses not to proceed, the $45 still applies. If the diagnostic is inconclusive, no charge.",
  },
];
