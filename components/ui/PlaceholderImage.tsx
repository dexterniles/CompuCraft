type PlaceholderImageProps = {
  label: string;
  alt?: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  className?: string;
};

const ratioClass = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/9]",
};

/**
 * Neutral placeholder block with a descriptive label.
 * To swap in a real photo: replace this component with `<Image>` from `next/image`,
 * passing the same `alt` text. The `label` prop maps to `alt`.
 */
export function PlaceholderImage({
  label,
  alt,
  aspectRatio = "square",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={alt ?? label}
      className={`${ratioClass[aspectRatio]} ${className} relative flex items-center justify-center overflow-hidden rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface-warm)]`}
    >
      <span className="px-4 text-center text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
        {label}
      </span>
    </div>
  );
}
