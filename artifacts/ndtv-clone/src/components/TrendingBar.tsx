import { useLocation } from "wouter";
import { TRENDING_TOPICS, trendingHref } from "@/lib/trending";
import { useAppNavigate, useTopicParam } from "@/hooks/use-search-params";

function pillClass(active: boolean) {
  return `inline-block px-2.5 py-0.5 rounded-full text-[12px] font-medium whitespace-nowrap transition-colors ${
    active
      ? "bg-primary text-primary-foreground font-semibold"
      : "text-white/85 bg-secondary hover:bg-primary/20 hover:text-sky-200"
  }`;
}

export default function TrendingBar() {
  const [location] = useLocation();
  const pathname = location.split("?")[0] ?? location;
  const activeTopic = useTopicParam();
  const go = useAppNavigate();

  return (
    <div className="w-full bg-card/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3 overflow-x-auto hide-scrollbar">
        <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-accent">
          Now trending
        </span>
        <ul className="flex items-center gap-2">
          {TRENDING_TOPICS.map((item) => {
            const href = trendingHref(item);
            const isActive =
              pathname === item.path &&
              activeTopic?.toLowerCase() === item.topic.toLowerCase();
            return (
              <li key={item.id}>
                <button type="button" onClick={() => go(href)} className={pillClass(isActive)}>
                  {item.label}
                </button>
              </li>
            );
          })}
          <li>
            <button type="button" onClick={() => go("/live")} className={pillClass(pathname === "/live")}>
              Live TV
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => go("/channels")}
              className={pillClass(pathname === "/channels")}
            >
              Channel guide
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
