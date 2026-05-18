import { Camera, Share2 } from "lucide-react";
import { Link } from "wouter";

interface NewsCardProps {
  headline: string;
  meta: string;
  excerpt: string;
  isLast?: boolean;
}

export default function NewsCard({ headline, meta, excerpt, isLast }: NewsCardProps) {
  return (
    <article className={`flex gap-4 py-4 group cursor-pointer ${!isLast ? 'border-b border-border' : ''}`} data-testid="card-news-item">
      {/* Thumbnail */}
      <div className="w-[140px] md:w-[160px] shrink-0 relative">
        <div className="aspect-[4/3] bg-card rounded-[2px] overflow-hidden relative">
          {/* Subtle gradient effect for placeholder */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-[#2a2a2a]"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <Camera className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 relative pr-4 group-hover:bg-[#2e2e2e]/50 p-1 -m-1 rounded transition-colors">
        <Link href="/" className="text-[16px] md:text-[17px] font-bold text-white leading-tight mb-1.5 line-clamp-2 group-hover:text-primary transition-colors">
          {headline}
        </Link>
        <p className="text-[11px] text-muted-foreground font-medium mb-1.5 uppercase tracking-wide">
          {meta}
        </p>
        <p className="text-[13px] text-[#aaaaaa] leading-snug line-clamp-2">
          {excerpt}
        </p>
        
        {/* Share Icon - bottom right */}
        <button className="absolute bottom-1 right-1 text-muted-foreground hover:text-primary p-1 rounded-full hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all">
          <Share2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
}
