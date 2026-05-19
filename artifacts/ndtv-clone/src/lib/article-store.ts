import type { NewsArticle } from "@/data/newspro";

const STORAGE_KEY = "newspro-published-articles";
const MIN_USER_ID = 10_000;

export function loadPublishedArticles(): NewsArticle[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as NewsArticle[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function savePublishedArticles(articles: NewsArticle[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}

export function addPublishedArticle(article: NewsArticle): void {
  const existing = loadPublishedArticles();
  savePublishedArticles([article, ...existing]);
}

export function nextArticleId(seedArticles: NewsArticle[], published: NewsArticle[]): number {
  const maxSeed = seedArticles.reduce((m, a) => Math.max(m, a.id), 0);
  const maxPub = published.reduce((m, a) => Math.max(m, a.id), MIN_USER_ID - 1);
  return Math.max(maxSeed, maxPub, MIN_USER_ID - 1) + 1;
}

export function readImageAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}
