import { Share2 } from "lucide-react";
import { Link } from "wouter";
import NewsCard from "./NewsCard";
import { useArticles } from "@/context/ArticlesContext";

export default function LatestNews() {
  const { articles } = useArticles();
  const homeLatest = articles.slice(0, 7);

  return (
    <section className="flex flex-col bg-background h-full">
      <div className="flex items-center justify-between mb-4 border-b border-primary/40 pb-2">
        <h2 className="text-[18px] font-bold text-white tracking-wide">Latest headlines</h2>
        <button type="button" className="text-muted-foreground hover:text-white transition-colors" aria-label="Share">
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col">
        {homeLatest.map((news, index) => (
          <NewsCard
            key={news.id}
            articleId={news.id}
            headline={news.headline}
            meta={news.meta}
            excerpt={news.excerpt}
            imageUrl={news.imageUrlThumb ?? news.imageUrl}
            imageSeed={news.id}
            isLast={index === homeLatest.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
