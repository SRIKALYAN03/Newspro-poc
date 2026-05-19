import { useEffect, useMemo } from "react";
import { Link, useLocation } from "wouter";
import NewsProLayout from "@/components/NewsProLayout";
import NewsCard from "@/components/NewsCard";
import { useArticles } from "@/context/ArticlesContext";
import { SECTION_LABELS, type NewsSection } from "@/data/newspro";
import { useTopicParam } from "@/hooks/use-search-params";
import { findTrendingTopic, sortArticlesByTopic } from "@/lib/trending";

const SECTION_BLURBS: Record<NewsSection, string> = {
  india: "National politics, cities, and policy affecting India",
  world: "Global desk — diplomacy, conflict, and international markets",
  business: "Markets, corporate news, and economic indicators",
  sports: "Cricket, tournaments, and athlete updates",
  tech: "Innovation, platforms, AI, and digital policy",
};

interface SectionPageProps {
  section: NewsSection;
}

export default function SectionPage({ section }: SectionPageProps) {
  const { articlesBySection } = useArticles();
  const [location] = useLocation();
  const topicParam = useTopicParam();
  const trending = findTrendingTopic(topicParam);

  const stories = useMemo(() => {
    const base = articlesBySection(section);
    const topic = trending?.topic ?? topicParam;
    return sortArticlesByTopic(base, topic);
  }, [articlesBySection, section, topicParam, trending]);

  const title = SECTION_LABELS[section];
  const topicLabel = trending?.label ?? (topicParam ? topicParam : null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [section, topicParam]);

  return (
    <NewsProLayout
      breadcrumb={
        <div className="text-[11px] text-muted-foreground mb-1 uppercase tracking-wider font-semibold">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          {" › "}
          <span>{title}</span>
          {topicLabel ? (
            <>
              {" › "}
              <span className="text-sky-300">{topicLabel}</span>
            </>
          ) : null}
        </div>
      }
    >
      <div className="border-b border-primary/40 pb-2 mb-4">
        <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">{title}</h1>
        <p className="text-sm text-muted-foreground mt-1">{SECTION_BLURBS[section]}</p>
        {topicLabel ? (
          <p className="text-[12px] text-sky-400/90 mt-2">
            Showing stories for <strong className="text-sky-300">{topicLabel}</strong> first
            {stories.length > 0 && stories[0] ? (
              <>
                {" "}
                — top match:{" "}
                <Link href={`/article/${stories[0].id}`} className="underline hover:text-sky-200">
                  {stories[0].headline}
                </Link>
              </>
            ) : null}
            {" · "}
            <Link href={location.split("?")[0] ?? `/${section}`} className="underline hover:text-sky-200">
              Clear filter
            </Link>
          </p>
        ) : null}
      </div>

      <section className="flex flex-col" key={`${section}-${topicParam ?? "all"}`}>
        {stories.length === 0 ? (
          <p className="text-muted-foreground py-8">
            No stories in this section yet.{" "}
            <Link href="/publish" className="text-sky-400 hover:underline">
              Publish one
            </Link>
            .
          </p>
        ) : (
          stories.map((news, index) => (
            <NewsCard
              key={news.id}
              articleId={news.id}
              headline={news.headline}
              meta={news.meta}
              excerpt={news.excerpt}
              imageUrl={news.imageUrlThumb ?? news.imageUrl}
              imageSeed={news.id}
              isLast={index === stories.length - 1}
            />
          ))
        )}
      </section>
    </NewsProLayout>
  );
}
