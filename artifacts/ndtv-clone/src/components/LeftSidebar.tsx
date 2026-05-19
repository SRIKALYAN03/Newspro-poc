import { Link } from "wouter";
import { Radio } from "lucide-react";
import { ALL_ARTICLES, LIVE_CHANNEL_POOL } from "@/data/newspro";

const TRENDING_STORIES = ALL_ARTICLES.slice(0, 5);

export default function LeftSidebar() {
  const livePicks = LIVE_CHANNEL_POOL.slice(0, 4);

  return (
    <aside className="flex flex-col gap-6">
      <div className="bg-sidebar border border-border p-4 rounded-lg">
        <h3 className="text-white font-bold text-[15px] mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-primary rounded-full" />
          Trending on NewsPro
        </h3>

        <ol className="flex flex-col gap-3">
          {TRENDING_STORIES.map((story, index) => (
            <li key={story.id} className="flex gap-3 group cursor-pointer">
              <span className="text-primary/70 font-black text-[20px] leading-none shrink-0 w-5 tabular-nums">
                {index + 1}
              </span>
              <Link
                href={`/article/${story.id}`}
                className="text-[14px] text-white/90 group-hover:text-sky-300 transition-colors font-medium leading-tight"
              >
                {story.headline}
              </Link>
            </li>
          ))}
        </ol>
      </div>

      <LiveNowWidget livePicks={livePicks} />
    </aside>
  );
}

function LiveNowWidget({
  livePicks,
}: {
  livePicks: typeof LIVE_CHANNEL_POOL;
}) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="px-3 py-2 border-b border-border flex items-center gap-2 bg-primary/10">
        <Radio className="w-4 h-4 text-red-400" />
        <span className="text-[11px] font-bold uppercase tracking-wider text-white">On air now</span>
      </div>
      <ul className="divide-y divide-border">
        {livePicks.map((ch) => (
          <li key={ch.id}>
            <Link
              href="/live"
              className="block px-3 py-2.5 hover:bg-primary/10 transition-colors"
            >
              <p className="text-[13px] font-semibold text-white">{ch.title}</p>
              <p className="text-[11px] text-muted-foreground">{ch.subtitle}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/live"
        className="block text-center py-2 text-[11px] font-bold text-sky-400 hover:bg-primary/5 uppercase tracking-wide"
      >
        View all live →
      </Link>
    </div>
  );
}
