import { Link, useRoute } from "wouter";
import { ArrowLeft, BookOpen } from "lucide-react";
import NewsProLayout from "@/components/NewsProLayout";
import NewsImage from "@/components/NewsImage";
import { useArticles } from "@/context/ArticlesContext";
import { SECTION_LABELS, type NewsSection } from "@/data/newspro";
import { bodyToParagraphs, getArticleBody, renderParagraphHtml } from "@/lib/article-content";

const SECTION_PATH: Record<NewsSection, string> = {
  india: "/india",
  world: "/world",
  business: "/business",
  sports: "/sports",
  tech: "/tech",
};

export default function ArticlePage() {
  const [, params] = useRoute("/article/:id");
  const id = Number(params?.id);
  const { getArticle } = useArticles();
  const article = Number.isFinite(id) ? getArticle(id) : undefined;

  if (!article) {
    return (
      <NewsProLayout>
        <div className="py-16 text-center">
          <p className="text-white text-lg font-semibold mb-2">Article not found</p>
          <Link href="/latest" className="text-sky-400 hover:underline text-sm">
            Browse latest headlines
          </Link>
        </div>
      </NewsProLayout>
    );
  }

  const paragraphs = bodyToParagraphs(getArticleBody(article));
  const sectionLabel = SECTION_LABELS[article.section];

  return (
    <NewsProLayout
      breadcrumb={
        <div className="text-[11px] text-muted-foreground mb-1 uppercase tracking-wider font-semibold">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          {" › "}
          <Link
            href={SECTION_PATH[article.section]}
            className="hover:text-primary transition-colors"
          >
            {sectionLabel}
          </Link>
          {" › "}
          <span>Story</span>
        </div>
      }
    >
      <Link
        href={SECTION_PATH[article.section]}
        className="inline-flex items-center gap-1.5 text-sm text-sky-400 hover:underline mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to {sectionLabel}
      </Link>

      <article className="max-w-3xl">
        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold uppercase bg-primary/15 text-sky-300 mb-3">
          {article.tag}
        </span>
        <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-3">
          {article.headline}
        </h1>
        <p className="text-[12px] text-muted-foreground uppercase tracking-wide mb-6">
          {article.meta}
        </p>

        <div className="aspect-[16/9] rounded-lg overflow-hidden ring-1 ring-border mb-8 relative bg-card">
          <NewsImage
            src={article.imageUrl}
            fallbackSeed={article.id}
            className="absolute inset-0 w-full h-full object-cover"
            width={1200}
            height={675}
            loading="eager"
          />
        </div>

        <p className="text-lg text-white/90 leading-relaxed mb-8 border-l-4 border-primary pl-4">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-2 mb-6 pb-2 border-b border-border">
          <BookOpen className="w-5 h-5 text-primary" />
          <h2 className="text-sm font-bold uppercase tracking-widest text-white">
            Full report · study edition
          </h2>
        </div>

        <div className="space-y-5 text-[16px] leading-relaxed text-white/85">
          {paragraphs.map((para, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: renderParagraphHtml(para) }} />
          ))}
        </div>
      </article>
    </NewsProLayout>
  );
}
