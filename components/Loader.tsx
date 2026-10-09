export default function Loader({ visible = true }: { visible?: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-blush transition-opacity duration-300 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-pink border-t-transparent" />
      <span className="font-display text-sm tracking-wide text-mauve">
        Ivy Villafranca. Virtual assistant services...
      </span>
    </div>
  );
}
