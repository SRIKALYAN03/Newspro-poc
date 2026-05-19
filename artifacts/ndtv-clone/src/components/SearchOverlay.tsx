import { useMemo, useState, useEffect, useRef } from "react";
import { Search, X, TrendingUp, Clock } from "lucide-react";
import { Link } from "wouter";
import NewsImage from "@/components/NewsImage";
import { useArticles } from "@/context/ArticlesContext";

const TRENDING_SEARCHES = [
  "monsoon",
  "IPL",
  "GDP",
  "Sensex",
  "Delhi Metro",
  "climate",
  "ceasefire",
];

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
  const { articles, searchArticles } = useArticles();

  const results = useMemo(() => searchArticles(query), [query, searchArticles]);

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
                {articles.slice(0, 5).map((item) => (
                  <Link
                    key={item.id}
                    href={`/article/${item.id}`}
                    onClick={onClose}
                    className="py-3 flex items-start gap-3 group cursor-pointer"
                  >
                    <span className="mt-0.5 px-1.5 py-0.5 bg-[#1e1e1e] border border-[#333] text-primary text-[10px] font-bold uppercase tracking-wider shrink-0 rounded-[2px]">
                      {item.tag}
                    </span>
                    <span className="text-[14px] text-white group-hover:text-primary transition-colors leading-snug">
                      {item.headline}
                    </span>
                  </Link>
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
                <Link
                  key={item.id}
                  href={`/article/${item.id}`}
                  onClick={onClose}
                  className="py-4 flex gap-4 group cursor-pointer hover:bg-[#1a1a1a] -mx-2 px-2 rounded-[2px] transition-colors"
                  data-testid={`result-card-${item.id}`}
                >
                  <div className="w-[100px] h-[68px] shrink-0 rounded-[2px] overflow-hidden border border-[#2e2e2e] bg-[#222]">
                    <NewsImage
                      src={item.imageUrlThumb ?? item.imageUrl}
                      fallbackSeed={item.id}
                      className="w-full h-full object-cover"
                      width={100}
                      height={68}
                    />
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
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
