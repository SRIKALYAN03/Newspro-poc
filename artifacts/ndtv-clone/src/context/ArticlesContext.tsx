import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ALL_ARTICLES as SEED_ARTICLES, type NewsArticle, type NewsSection } from "@/data/newspro";
import {
  addPublishedArticle,
  loadPublishedArticles,
  nextArticleId,
} from "@/lib/article-store";

export type PublishInput = {
  headline: string;
  excerpt: string;
  body: string;
  tag: string;
  section: NewsSection;
  byline: string;
  imageUrl: string;
  imageUrlThumb?: string;
};

type ArticlesContextValue = {
  articles: NewsArticle[];
  getArticle: (id: number) => NewsArticle | undefined;
  articlesBySection: (section: NewsSection) => NewsArticle[];
  searchArticles: (q: string) => NewsArticle[];
  publishArticle: (input: PublishInput) => NewsArticle;
};

const ArticlesContext = createContext<ArticlesContextValue | null>(null);

export function ArticlesProvider({ children }: { children: ReactNode }) {
  const [published, setPublished] = useState<NewsArticle[]>(() => loadPublishedArticles());

  const articles = useMemo(() => {
    const seedIds = new Set(SEED_ARTICLES.map((a) => a.id));
    const userOnly = published.filter((a) => !seedIds.has(a.id));
    return [...userOnly, ...SEED_ARTICLES];
  }, [published]);

  const getArticle = useCallback(
    (id: number) => articles.find((a) => a.id === id),
    [articles],
  );

  const articlesBySection = useCallback(
    (section: NewsSection) => articles.filter((a) => a.section === section),
    [articles],
  );

  const searchArticles = useCallback(
    (q: string) => {
      const s = q.trim().toLowerCase();
      if (!s) return [];
      return articles.filter(
        (a) =>
          a.headline.toLowerCase().includes(s) ||
          a.excerpt.toLowerCase().includes(s) ||
          a.tag.toLowerCase().includes(s) ||
          a.meta.toLowerCase().includes(s) ||
          (a.body?.toLowerCase().includes(s) ?? false),
      );
    },
    [articles],
  );

  const publishArticle = useCallback(
    (input: PublishInput): NewsArticle => {
      const now = new Date();
      const meta = `${now.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })} · ${now.toLocaleTimeString("en-IN", {
        hour: "numeric",
        minute: "2-digit",
      })} · ${input.byline || "NewsPro Contributor"}`;

      const article: NewsArticle = {
        id: nextArticleId(SEED_ARTICLES, published),
        headline: input.headline.trim(),
        excerpt: input.excerpt.trim(),
        body: input.body.trim(),
        tag: input.tag.trim() || "News",
        section: input.section,
        meta,
        imageUrl: input.imageUrl,
        imageUrlThumb: input.imageUrlThumb ?? input.imageUrl,
        isUserPublished: true,
      };

      addPublishedArticle(article);
      setPublished((prev) => [article, ...prev]);
      return article;
    },
    [published],
  );

  const value = useMemo(
    () => ({
      articles,
      getArticle,
      articlesBySection,
      searchArticles,
      publishArticle,
    }),
    [articles, getArticle, articlesBySection, searchArticles, publishArticle],
  );

  return <ArticlesContext.Provider value={value}>{children}</ArticlesContext.Provider>;
}

export function useArticles() {
  const ctx = useContext(ArticlesContext);
  if (!ctx) throw new Error("useArticles must be used within ArticlesProvider");
  return ctx;
}
