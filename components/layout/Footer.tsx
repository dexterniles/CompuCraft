import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/content/site";
import { contact } from "@/content/contact";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--color-border)] bg-[var(--color-surface-warm)]">
      <Container
        size="wide"
        className="grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-3"
      >
        <div>
          <p className="text-lg font-semibold tracking-tight">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--color-text-muted)]">
            {site.shortTagline} Hourly billing, written estimates, and a 30-day
            labor warranty.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold">Site</h2>
          <ul className="mt-3 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={contact.emailHref}
                className="break-words text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                {contact.email}
              </a>
            </li>
            <li className="text-[var(--color-text-muted)]">
              {contact.messengerAvailable && contact.messengerUrl ? (
                <a
                  href={contact.messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--color-accent)]"
                >
                  Facebook Messenger
                </a>
              ) : (
                <span>Facebook Messenger — coming soon</span>
              )}
            </li>
            <li className="text-[var(--color-text-muted)]">
              Based in {site.baseLocation}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-[var(--color-border)]">
        <Container
          size="wide"
          className="flex flex-col gap-2 py-5 text-xs text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between"
        >
          <p>
            © {new Date().getFullYear()} {site.name}. Residential service only.
          </p>
          <p>Free travel within 15 miles of {site.baseLocation}.</p>
        </Container>
      </div>
    </footer>
  );
}
