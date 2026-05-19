import type { NewsArticle, NewsSection } from "@/data/newspro";

const SECTION_INTROS: Record<NewsSection, string> = {
  india:
    "Reporting from bureaus across the country, NewsPro tracks policy, elections, and daily life shaping the national conversation.",
  world:
    "Our international desk connects developments abroad with implications for readers in India and the wider region.",
  business:
    "Markets, regulation, and corporate strategy — context for investors and households navigating the economy.",
  sports:
    "From cricket pitches to global tournaments, live updates and analysis for fans following every session.",
  tech:
    "Innovation, platforms, and policy — how technology is changing work, privacy, and public discourse.",
};

/** Full study text for seed articles when no custom body is stored */
export function buildStudyBody(article: Pick<NewsArticle, "headline" | "excerpt" | "tag" | "section">): string {
  const intro = SECTION_INTROS[article.section];
  return [
    article.excerpt,
    "",
    intro,
    "",
    `**${article.headline}**`,
    "",
    "Officials and analysts briefed reporters through the day, with documents and on-the-record statements expected to clarify timelines in the coming sessions. Stakeholders said they would continue monitoring developments while urging calm and fact-based discussion on social platforms.",
    "",
    `The ${article.tag} beat remains active on NewsPro: related stories, explainers, and live updates are filed under the same section. Editors note that details may evolve as more sources confirm key figures and locations.`,
    "",
    "For classroom or briefing use, readers can cite this report with the timestamp shown above and cross-check against primary releases from government portals and recognised wire services.",
  ].join("\n\n");
}

export function getArticleBody(article: NewsArticle): string {
  if (article.body?.trim()) return article.body.trim();
  return buildStudyBody(article);
}

export function bodyToParagraphs(body: string): string[] {
  return body
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
}

/** Light markdown: **bold** only */
export function renderParagraphHtml(text: string): string {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}
