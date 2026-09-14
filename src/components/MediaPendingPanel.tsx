type MediaPendingPanelProps = {
  /** Compact card tile vs taller pick-page panel */
  variant?: "card" | "detail";
  className?: string;
};

/**
 * Intentional branded pending state — not product photography.
 * Do not point this at Amazon/CDN imagery.
 */
export function MediaPendingPanel({
  variant = "card",
  className = "",
}: MediaPendingPanelProps) {
  const isDetail = variant === "detail";

  return (
    <div
      className={`relative flex h-full w-full flex-col justify-between overflow-hidden ${
        isDetail
          ? "min-h-[20rem] bg-[linear-gradient(160deg,#f7f4ef_0%,#e8f2f8_48%,#fce8ef_100%)] sm:min-h-[22rem]"
          : "bg-[linear-gradient(155deg,#f7f4ef_0%,#e8f2f8_55%,#fce8ef_100%)]"
      } ${className}`}
      aria-label="Product photo pending"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)",
          backgroundSize: "14px 14px",
        }}
        aria-hidden
      />
      <div className={`relative ${isDetail ? "p-6 sm:p-8" : "p-4 sm:p-5"}`}>
        <p className="font-serif text-lg tracking-tight text-foreground sm:text-xl">
          Purrstrings
        </p>
        <p className="mt-1 max-w-[12rem] text-[0.65rem] font-bold uppercase tracking-[0.16em] text-foreground/70">
          They pull the strings.
        </p>
      </div>
      <div className={`relative ${isDetail ? "px-6 pb-6 sm:px-8 sm:pb-8" : "px-4 pb-4 sm:px-5 sm:pb-5"}`}>
        <p
          className={`inline-block border border-foreground/20 bg-background/80 font-bold uppercase tracking-[0.16em] text-foreground ${
            isDetail ? "px-3 py-2 text-[0.7rem]" : "px-2.5 py-1.5 text-[0.62rem]"
          }`}
        >
          Product photo pending
        </p>
        {isDetail ? (
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            This pick is live for shopping. Owner or authorized product media
            still needs to land here — this panel is not a product photo.
          </p>
        ) : null}
      </div>
    </div>
  );
}
