import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/Button";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)]">
      <Container size="wide" className="relative pt-20 pb-24 sm:pt-28 sm:pb-28">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
            {site.baseLocation}
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)] text-pretty sm:text-xl">
            Builds, upgrades, diagnostics, networking, and home media servers.
            Hourly rate, written estimate, 30-day labor warranty.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <LinkButton href="/contact" variant="primary">
              Get a quote
            </LinkButton>
            <LinkButton href="/services" variant="secondary">
              See services
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
