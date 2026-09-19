// Globals installed by the GA4 bootstrap in src/layouts/Base.astro.
// Both are absent when SITE.gaMeasurementId is empty, so callers must
// use optional chaining: window.gtag?.('event', ...).
interface Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
}
