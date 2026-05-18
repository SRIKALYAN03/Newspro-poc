import { Share2 } from "lucide-react";
import NewsCard from "./NewsCard";

const LATEST_NEWS_DATA = [
  {
    id: 1,
    headline: "India-Pakistan Tensions Rise As Border Skirmishes Continue For Third Day",
    meta: "May 18, 2026 · 12:45 PM · NDTV News Desk",
    excerpt: "Indian Army reported at least 4 incidents of unprovoked firing along the LoC. Defence Ministry calls for high alert.",
  },
  {
    id: 2,
    headline: "Budget Session: Government Tables Key Bills On Education Reform",
    meta: "May 18, 2026 · 11:30 AM · Anika Roy",
    excerpt: "The new education bill proposes mandatory coding in schools from Class 6 and revamps examination pattern.",
  },
  {
    id: 3,
    headline: "Sensex Crosses 80,000 Mark For First Time: What It Means For Investors",
    meta: "May 18, 2026 · 10:15 AM · Business Desk",
    excerpt: "Broad-based rally across sectors lifts benchmark index to historic high. Analysts cautiously optimistic.",
  },
  {
    id: 4,
    headline: "Heavy Rains Lash Mumbai; Several Areas Waterlogged, IMD Issues Orange Alert",
    meta: "May 18, 2026 · 9:00 AM · Mumbai Bureau",
    excerpt: "BMC deploys emergency teams. Suburban trains running 15-20 minutes late. Citizens advised to avoid travel.",
  },
  {
    id: 5,
    headline: "T20 World Cup 2026: BCCI Announces Squad; Hardik Pandya Returns As Captain",
    meta: "May 18, 2026 · 8:30 AM · Sports Desk",
    excerpt: "Selection committee backs experienced lineup. Shubman Gill named vice-captain. Tournament begins June 2026.",
  }
];

export default function LatestNews() {
  return (
    <section className="flex flex-col bg-background h-full">
      <div className="flex items-center justify-between mb-4 border-b-2 border-primary pb-1">
        <h2 className="text-[18px] font-bold text-white uppercase tracking-wide">Latest News</h2>
        <button className="text-muted-foreground hover:text-white transition-colors" aria-label="Share">
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col">
        {LATEST_NEWS_DATA.map((news, index) => (
          <NewsCard 
            key={news.id} 
            {...news} 
            isLast={index === LATEST_NEWS_DATA.length - 1} 
          />
        ))}
      </div>
      
      <button className="w-full py-2.5 mt-4 bg-card hover:bg-secondary text-white font-bold text-[13px] tracking-wide border border-border uppercase transition-colors" data-testid="button-load-more">
        More Latest News
      </button>
    </section>
  );
}
