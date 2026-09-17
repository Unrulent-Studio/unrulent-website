export type ProjectStatus = "in-development" | "live";

export interface Project {
  /** Stable identifier, also used as the future detail-page slug. */
  slug: string;
  title: string;
  /** One-line description shown on the portfolio teaser card. */
  description: string;
  status: ProjectStatus;
  /**
   * Outbound link (itch.io page, app store, etc). Omit while the project
   * has no public page yet — the homepage renders a link-free teaser card
   * whenever this is unset.
   */
  url?: string;
}

export const projects: Project[] = [
  {
    slug: "data-tycoon",
    title: "Data Tycoon",
    description:
      "A satirical idle game about running a (fictional) data-broker business. Currently in early development — no public page yet.",
    status: "in-development",
    // No `url` yet — the itch.io page isn't live (UNR-11). Once it publishes,
    // add `url: "https://..."` here; no other change is needed.
  },
];
