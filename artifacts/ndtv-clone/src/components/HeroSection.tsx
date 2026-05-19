import type { ReactNode } from "react";
import { Link } from "wouter";
import NewsImage from "@/components/NewsImage";
import {
  HERO_BULLETS,
  HERO_MAIN,
  HERO_SIDE,
  HOME_FEATURED_LIVE_VIDEO_ID,
  type NewsArticle,
} from "@/data/newspro";
import { avatarUrl } from "@/lib/images";
import { youtubeEmbedSrc } from "@/lib/youtube";

export default function HeroSection() {
  const [sideA, sideB] = HERO_SIDE;

  return (
    <PageGrid>
      <Link
        href={`/article/${HERO_MAIN.id}`}
        className="relative group cursor-pointer h-[340px] md:h-[400px] overflow-hidden rounded-lg block ring-1 ring-border"
        data-testid="card-hero-main"
      >
        <NewsImage
          src={HERO_MAIN.imageUrl}
          fallbackSeed={HERO_MAIN.id}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={800}
          height={600}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-[#0c1222]/75 to-transparent z-0" />
        <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-[11px] font-bold px-2.5 py-1 uppercase tracking-wider z-10 rounded-sm">
          Top story
        </div>
        <div className="absolute bottom-0 left-0 p-5 w-full z-10 pt-16">
          <h1 className="text-white font-bold text-[24px] md:text-[28px] leading-tight group-hover:text-sky-300 transition-colors drop-shadow-md">
            {HERO_MAIN.headline}
          </h1>
        </div>
      </Link>

      <div className="flex flex-col gap-4">
        <HeroSubStory article={sideA} testId="card-hero-sub-1" />
        <div className="h-px w-full bg-border/60" />
        <HeroSubStory article={sideB} testId="card-hero-sub-2" />
        <HeroBulletList />
      </div>

      <div className="flex flex-col gap-4 h-full">
        <LiveTvBlock />
        <div className="h-px w-full bg-border/60" />
        <AnalysisBlock />
      </div>
    </PageGrid>
  );
}

function PageGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_33%_calc(27%-1.5rem)] gap-6">
      {children}
    </div>
  );
}

function HeroBulletList() {
  return (
    <>
      <div className="h-px w-full bg-border/60 mt-1" />
      <ul className="flex flex-col gap-3 mt-1">
        {HERO_BULLETS.map((item) => (
          <li key={item.id} className="flex items-start gap-2 group">
            <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
            <Link
              href={`/article/${item.id}`}
              className="text-[14px] text-white/90 hover:text-sky-300 font-medium leading-snug transition-colors"
            >
              {item.headline}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function LiveTvBlock() {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse-live" />
          <h3 className="text-white font-bold text-[15px] tracking-wide">Live TV</h3>
        </div>
        <Link href="/live" className="text-[11px] font-semibold text-sky-400 hover:underline uppercase">
          All channels →
        </Link>
      </div>

      <div
        className="rounded-lg overflow-hidden border border-border bg-card ring-1 ring-sky-500/20"
        data-testid="card-hero-live"
      >
        <div className="aspect-video relative bg-black">
          <iframe
            title="NewsPro featured live"
            src={youtubeEmbedSrc(HOME_FEATURED_LIVE_VIDEO_ID)}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <div className="px-3 py-2 bg-card border-t border-border">
          <p className="text-[12px] font-bold text-white">NewsPro Live · International desk</p>
          <p className="text-[11px] text-muted-foreground">Al Jazeera English · 24/7</p>
        </div>
      </div>
    </div>
  );
}

function AnalysisBlock() {
  return (
    <div className="flex-1">
      <h3 className="text-muted-foreground font-bold text-[14px] uppercase tracking-wide mb-3">
        Analysis
      </h3>
      <div className="flex flex-col gap-4">
        <OpinionRow
          name="Priya Sharma"
          title="Why India's middle class is watching rural demand data again"
        />
        <OpinionRow
          name="Rajiv Mehta"
          title="Multipolar trade: what the next WTO season means for exporters"
        />
      </div>
    </div>
  );
}

function HeroSubStory({
  article,
  testId,
}: {
  article: NewsArticle;
  testId: string;
}) {
  return (
    <Link href={`/article/${article.id}`} className="flex gap-3 group cursor-pointer" data-testid={testId}>
      <div className="w-[130px] h-[86px] shrink-0 rounded-md relative overflow-hidden bg-card ring-1 ring-border">
        <NewsImage
          src={article.imageUrlThumb ?? article.imageUrl}
          fallbackSeed={article.id}
          className="absolute inset-0 w-full h-full object-cover"
          width={130}
          height={86}
        />
      </div>
      <h2 className="text-white font-bold text-[16px] leading-[1.3] group-hover:text-sky-300 transition-colors line-clamp-3">
        {article.headline}
      </h2>
    </Link>
  );
}

function OpinionRow({ name, title }: { name: string; title: string }) {
  return (
    <div className="flex gap-3 group cursor-pointer">
      <img
        src={avatarUrl(name)}
        alt=""
        className="w-10 h-10 rounded-full shrink-0 ring-2 ring-sky-500/30"
        width={40}
        height={40}
      />
      <div>
        <h4 className="text-[13px] text-white font-bold leading-tight group-hover:text-sky-300 transition-colors line-clamp-2 mb-1">
          {title}
        </h4>
        <p className="text-[11px] text-muted-foreground">By {name} · NewsPro</p>
      </div>
    </div>
  );
}
