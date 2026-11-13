import { ArrowUp } from "lucide-react";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-sm font-bold text-ink">Zamokuhle Mazibuko</p>
          <p className="mt-1 text-xs text-ink-muted">
            Designed &amp; Developed with purpose.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <SocialLinks />
          <button
            type="button"
            aria-label="Back to top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches
                  ? "instant"
                  : "smooth",
              })
            }
            className="inline-flex h-9 w-9 items-center justify-center border border-line text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="border-t border-line px-6 py-4 text-center text-xs text-ink-muted lg:px-8">
        © {new Date().getFullYear()} Zamokuhle Mazibuko. All rights reserved.
      </div>
    </footer>
  );
}
