import { Share2 } from "lucide-react";
import { Link } from "wouter";
import NewsImage from "@/components/NewsImage";

interface NewsCardProps {
  articleId: number;
  headline: string;
  meta: string;
  excerpt: string;
  imageUrl: string;
  imageSeed?: number;
  isLast?: boolean;
}

export default function NewsCard({
  articleId,
  headline,
  meta,
  excerpt,
  imageUrl,
  imageSeed = 1,
  isLast,
}: NewsCardProps) {
  const articleHref = `/article/${articleId}`;

  return (
    <article
      className={`flex gap-4 py-4 group ${!isLast ? "border-b border-border" : ""}`}
      data-testid="card-news-item"
    >
      <Link href={articleHref} className="w-[140px] md:w-[160px] shrink-0 relative">
        <div className="aspect-[4/3] bg-card rounded-md overflow-hidden relative ring-1 ring-border group-hover:ring-primary/40 transition-all">
          <NewsImage
            src={imageUrl}
            fallbackSeed={imageSeed}
            className="absolute inset-0 w-full h-full object-cover"
            width={160}
            height={120}
          />
        </div>
      </Link>

      <div className="flex flex-col flex-1 relative pr-4 group-hover:bg-primary/5 p-1 -m-1 rounded-md transition-colors">
        <Link
          href={articleHref}
          className="text-[16px] md:text-[17px] font-bold text-white leading-tight mb-1.5 line-clamp-2 group-hover:text-sky-300 transition-colors"
        >
          {headline}
        </Link>
        <p className="text-[11px] text-muted-foreground font-medium mb-1.5 uppercase tracking-wide">
          {meta}
        </p>
        <p className="text-[13px] text-white/65 leading-snug line-clamp-2">{excerpt}</p>
        <Link
          href={articleHref}
          className="text-[12px] font-semibold text-sky-400/80 hover:text-sky-300 mt-2 inline-block"
        >
          Read full story →
        </Link>

        <button
          type="button"
          className="absolute bottom-1 right-1 text-muted-foreground hover:text-primary p-1 rounded-full hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all"
          aria-label="Share"
          onClick={(e) => e.preventDefault()}
        >
          <Share2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
}
