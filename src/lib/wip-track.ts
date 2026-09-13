export type WipTrackProperties = {
  category?: string;
  path?: string;
  isConversion?: boolean;
  source?: string;
  [key: string]: string | number | boolean | undefined;
};

declare global {
  interface Window {
    __wipTrack?: (eventName: string, properties?: WipTrackProperties) => void;
  }
}

/** Commit Happens conversion tracker (`window.__wipTrack`). */
export function trackWipEvent(
  eventName: string,
  properties: WipTrackProperties = {},
) {
  if (typeof window === "undefined") return;
  window.__wipTrack?.(eventName, {
    path: window.location.pathname,
    ...properties,
  });
}

export function trackContactClick(source: string) {
  trackWipEvent("contact_click", {
    category: "conversion",
    isConversion: true,
    source,
  });
}
