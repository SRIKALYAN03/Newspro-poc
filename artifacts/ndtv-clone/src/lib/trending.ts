import type { NewsArticle, NewsSection } from "@/data/newspro";

export interface TrendingTopic {
  id: string;
  label: string;
  /** Section page to open */
  path: string;
  /** Filter keyword — matches headline, excerpt, tag, meta, body */
  topic: string;
  section: NewsSection;
}

export const TRENDING_TOPICS: TrendingTopic[] = [
  {
    id: "world-desk",
    label: "World desk",
    path: "/world",
    topic: "world desk",
    section: "world",
  },
  { id: "markets", label: "Markets", path: "/business", topic: "markets", section: "business" },
  { id: "parliament", label: "Parliament", path: "/india", topic: "parliament", section: "india" },
  { id: "metros", label: "Metros", path: "/india", topic: "mumbai", section: "india" },
  { id: "sports", label: "Sports", path: "/sports", topic: "ipl", section: "sports" },
  { id: "tech", label: "Tech", path: "/tech", topic: "ai", section: "tech" },
];

export function trendingHref(item: TrendingTopic): string {
  return `${item.path}?topic=${encodeURIComponent(item.topic)}`;
}

function articleHaystack(article: NewsArticle): string {
  return [article.headline, article.excerpt, article.tag, article.meta, article.body ?? ""]
    .join(" ")
    .toLowerCase();
}

function articleMatchesTopic(article: NewsArticle, topic: string): boolean {
  const t = topic.toLowerCase().trim();
  if (!t) return false;
  const haystack = articleHaystack(article);
  return haystack.includes(t);
}

/** Matching stories first, then the rest — list order changes when a topic is picked */
export function sortArticlesByTopic(articles: NewsArticle[], topic: string | null): NewsArticle[] {
  if (!topic?.trim()) return articles;

  const matched: NewsArticle[] = [];
  const rest: NewsArticle[] = [];

  for (const article of articles) {
    if (articleMatchesTopic(article, topic)) matched.push(article);
    else rest.push(article);
  }

  if (matched.length === 0) return articles;
  return [...matched, ...rest];
}

export function findTrendingTopic(topicParam: string | null): TrendingTopic | undefined {
  if (!topicParam) return undefined;
  const key = topicParam.toLowerCase();
  return TRENDING_TOPICS.find(
    (t) => t.topic.toLowerCase() === key || t.id === key || t.label.toLowerCase() === key,
  );
}
