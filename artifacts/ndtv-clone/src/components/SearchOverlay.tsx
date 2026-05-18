import { useState, useEffect, useRef } from "react";
import { Search, X, TrendingUp, Clock } from "lucide-react";

const ALL_NEWS = [
  {
    id: 1,
    headline: "India-Pakistan Tensions Rise As Border Skirmishes Continue For Third Day",
    meta: "May 18, 2026 · 12:45 PM · NDTV News Desk",
    excerpt: "Indian Army reported at least 4 incidents of unprovoked firing along the LoC. Defence Ministry calls for high alert.",
    tag: "India",
  },
  {
    id: 2,
    headline: "Budget Session: Government Tables Key Bills On Education Reform",
    meta: "May 18, 2026 · 11:30 AM · Anika Roy",
    excerpt: "The new education bill proposes mandatory coding in schools from Class 6 and revamps examination pattern.",
    tag: "Politics",
  },
  {
    id: 3,
    headline: "Sensex Crosses 80,000 Mark For First Time: What It Means For Investors",
    meta: "May 18, 2026 · 10:15 AM · Business Desk",
    excerpt: "Broad-based rally across sectors lifts benchmark index to historic high. Analysts cautiously optimistic.",
    tag: "Business",
  },
  {
    id: 4,
    headline: "Heavy Rains Lash Mumbai; Several Areas Waterlogged, IMD Issues Orange Alert",
    meta: "May 18, 2026 · 9:00 AM · Mumbai Bureau",
    excerpt: "BMC deploys emergency teams. Suburban trains running 15-20 minutes late. Citizens advised to avoid travel.",
    tag: "Cities",
  },
  {
    id: 5,
    headline: "T20 World Cup 2026: BCCI Announces Squad; Hardik Pandya Returns As Captain",
    meta: "May 18, 2026 · 8:30 AM · Sports Desk",
    excerpt: "Selection committee backs experienced lineup. Shubman Gill named vice-captain. Tournament begins June 2026.",
    tag: "Sports",
  },
  {
    id: 6,
    headline: "US Drops All Charges Against Gautam Adani, Case Closed Permanently",
    meta: "May 18, 2026 · 7:00 AM · World Desk",
    excerpt: "The US Department of Justice officially dismissed all criminal and civil charges in what was a landmark case.",
    tag: "World",
  },
  {
    id: 7,
    headline: "Iran Nuclear Talks: US And Iran Inch Closer To Deal Amid Tensions",
    meta: "May 17, 2026 · 6:45 PM · World Desk",
    excerpt: "Diplomats signal significant progress in Geneva negotiations. A formal agreement could be announced within days.",
    tag: "World",
  },
  {
    id: 8,
    headline: "India GDP Growth: Economy To Hit 7.2% In FY26, Says Report",
    meta: "May 17, 2026 · 4:20 PM · Business Desk",
    excerpt: "IMF and World Bank both revise India's growth projections upward, citing robust domestic consumption.",
    tag: "Business",
  },
  {
    id: 9,
    headline: "Gold Hits New Record High: Rs 72,000 Per 10 Gram",
    meta: "May 17, 2026 · 2:10 PM · Markets Desk",
    excerpt: "Safe-haven demand spikes amid global uncertainty. Silver also surges past Rs 85,000 per kg.",
    tag: "Markets",
  },
  {
    id: 10,
    headline: "IPL 2026: Mumbai Indians Vs Kolkata Knight Riders — Live Updates",
    meta: "May 17, 2026 · 7:30 PM · Sports Desk",
    excerpt: "An electrifying contest at Wankhede. Mumbai chasing 198, currently 110/3 in 14 overs.",
    tag: "Sports",
  },
];

const TRENDING_SEARCHES = ["Iran War", "IPL 2026", "Gold Price", "PM Modi", "Pakistan News", "Stock Market"];

function highlight(text: string, query: string) {
  if (!query.trim()) return <>{text}</>;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-primary/30 text-white rounded-[2px] px-[1px]">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.trim()
    ? ALL_NEWS.filter(
        (n) =>
          n.headline.toLowerCase().includes(query.toLowerCase()) ||
          n.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          n.tag.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex flex-col"
      style={{ background: "rgba(0,0,0,0.92)" }}
      data-testid="overlay-search"
    >
      {/* Search bar row */}
      <div className="bg-[#111] border-b border-[#333] px-4 py-3 flex items-center gap-3">
        <Search className="w-5 h-5 text-primary shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search news, topics, places..."
          className="flex-1 bg-transparent text-white text-[16px] outline-none placeholder:text-[#666] caret-primary"
          data-testid="input-search"
          autoComplete="off"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="text-[#666] hover:text-white transition-colors p-1"
            data-testid="button-clear-search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        <button
          onClick={onClose}
          className="text-[#888] hover:text-white transition-colors text-[13px] font-semibold ml-2 shrink-0"
          data-testid="button-close-search"
        >
          Cancel
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-4 py-5 max-w-4xl w-full mx-auto">
        {/* No query — show trending */}
        {!query.trim() && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-[12px] text-[#888] font-bold uppercase tracking-widest">Trending Searches</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {TRENDING_SEARCHES.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1.5 bg-[#1e1e1e] border border-[#333] text-white text-[13px] rounded-[2px] hover:border-primary hover:text-primary transition-colors"
                  data-testid={`button-trending-${term.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  {term}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-[#888]" />
                <span className="text-[12px] text-[#888] font-bold uppercase tracking-widest">Latest Headlines</span>
              </div>
              <div className="flex flex-col divide-y divide-[#222]">
                {ALL_NEWS.slice(0, 5).map((item) => (
                  <div key={item.id} className="py-3 flex items-start gap-3 group cursor-pointer">
                    <span className="mt-0.5 px-1.5 py-0.5 bg-[#1e1e1e] border border-[#333] text-primary text-[10px] font-bold uppercase tracking-wider shrink-0 rounded-[2px]">
                      {item.tag}
                    </span>
                    <span className="text-[14px] text-white group-hover:text-primary transition-colors leading-snug">
                      {item.headline}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Has query — show results */}
        {query.trim() && (
          <div>
            <div className="mb-4 text-[12px] text-[#666]">
              {results.length > 0
                ? `${results.length} result${results.length !== 1 ? "s" : ""} for "${query}"`
                : `No results for "${query}"`}
            </div>

            {results.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
                <Search className="w-12 h-12 text-[#333]" />
                <p className="text-[#555] text-[14px]">Try different keywords or check spelling</p>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  {TRENDING_SEARCHES.map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 bg-[#1e1e1e] border border-[#333] text-[#999] text-[12px] rounded-[2px] hover:border-primary hover:text-primary transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col divide-y divide-[#222]">
              {results.map((item) => (
                <div
                  key={item.id}
                  className="py-4 flex gap-4 group cursor-pointer hover:bg-[#1a1a1a] -mx-2 px-2 rounded-[2px] transition-colors"
                  data-testid={`result-card-${item.id}`}
                >
                  {/* Placeholder thumbnail */}
                  <div className="w-[100px] h-[68px] bg-[#222] shrink-0 rounded-[2px] flex items-center justify-center border border-[#2e2e2e]">
                    <Search className="w-5 h-5 text-[#444]" />
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="px-1.5 py-0.5 bg-[#1e1e1e] border border-[#333] text-primary text-[10px] font-bold uppercase tracking-wider rounded-[2px] self-start">
                      {item.tag}
                    </span>
                    <h3 className="text-[15px] font-bold text-white group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {highlight(item.headline, query)}
                    </h3>
                    <p className="text-[11px] text-[#666]">{item.meta}</p>
                    <p className="text-[12px] text-[#999] line-clamp-1">{highlight(item.excerpt, query)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
