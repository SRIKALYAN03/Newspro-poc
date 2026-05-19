import { Link } from "wouter";
import NewsProLayout from "@/components/NewsProLayout";
import NewsCard from "@/components/NewsCard";
import { useArticles } from "@/context/ArticlesContext";

export default function LatestPage() {
  const { articles } = useArticles();

  return (
    <NewsProLayout
      breadcrumb={
        <LatestBreadcrumb />
      }
    >
      <LatestPageHeader count={articles.length} />

      <section className="flex flex-col">
        {articles.map((news, index) => (
          <NewsCard
            key={news.id}
            articleId={news.id}
            headline={news.headline}
            meta={news.meta}
            excerpt={news.excerpt}
            imageUrl={news.imageUrlThumb ?? news.imageUrl}
            imageSeed={news.id}
            isLast={index === articles.length - 1}
          />
        ))}
      </section>
    </NewsProLayout>
  );
}

function LatestBreadcrumb() {
  return (
    <div className="text-[11px] text-muted-foreground mb-1 uppercase tracking-wider font-semibold">
      <Link href="/" className="hover:text-primary transition-colors">
        Home
      </Link>
      {" › "}
      <span>Latest News</span>
    </div>
  );
}

function LatestPageHeader({ count }: { count: number }) {
  return (
    <div className="border-b border-primary/40 pb-2 mb-4">
      <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
        All latest stories
      </h1>
      <p className="text-sm text-muted-foreground mt-1">
        {count} stories · India, world, business, sports & tech
      </p>
    </div>
  );
}
