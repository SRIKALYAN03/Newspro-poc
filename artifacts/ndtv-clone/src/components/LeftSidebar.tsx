import { Link } from "wouter";

const TRENDING_STORIES = [
  "Pakistan Violates Ceasefire Again, India Responds Firmly",
  "Rahul Gandhi Addresses Nation On Economic Slowdown",
  "IPL 2026: Mumbai Indians Vs Kolkata Knight Riders — Live Updates",
  "Gold Hits New Record High: ₹72,000 Per 10 Gram",
  "Monsoon 2026 Forecast: IMD Predicts Normal Rainfall This Year"
];

export default function LeftSidebar() {
  return (
    <aside className="flex flex-col gap-6">
      
      {/* TRENDING NEWS WIDGET */}
      <div className="bg-sidebar border border-border p-4 rounded-[2px]">
        <h3 className="text-white font-bold text-[16px] mb-4 border-l-4 border-primary pl-2 uppercase tracking-wide">
          Trending News
        </h3>
        
        <ol className="flex flex-col gap-3">
          {TRENDING_STORIES.map((story, index) => (
            <li key={index} className="flex gap-3 group cursor-pointer">
              <span className="text-muted-foreground font-black text-[22px] leading-none shrink-0 w-4 font-serif italic">
                {index + 1}
              </span>
              <Link href="/" className="text-[14px] text-white/90 group-hover:text-primary transition-colors font-medium leading-tight">
                {story}
              </Link>
            </li>
          ))}
        </ol>
      </div>

      {/* CRICKET SCOREBOARD WIDGET */}
      <div className="bg-[#1b3a2b] border border-[#234d39] rounded-[4px] overflow-hidden flex flex-col font-sans" data-testid="widget-cricket">
        <div className="bg-[#152e22] px-3 py-1.5 flex justify-between items-center border-b border-[#234d39]">
          <span className="text-[10px] font-bold text-[#4ade80] uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full animate-pulse"></span>
            Match Live
          </span>
          <span className="text-[10px] text-white/70">T20</span>
        </div>
        
        <div className="p-3">
          <div className="flex justify-between items-end mb-3">
            <h4 className="text-white font-black text-[18px]">SRH <span className="text-white/50 text-[14px]">vs</span> CSK</h4>
          </div>
          
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-white font-black text-[32px] leading-none">75/2</span>
            <span className="text-white/70 text-[12px] font-medium">DVR 16.0</span>
          </div>
          
          <div className="flex flex-col gap-1.5 border-t border-[#234d39] pt-2">
            <div className="flex justify-between text-[11px]">
              <span className="text-white font-semibold">Ishan Kishan*</span>
              <span className="text-white/80 font-mono">24 (20) <span className="text-white/50 ml-1">SR 120</span></span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-white font-semibold">Abhishek Sharma</span>
              <span className="text-white/80 font-mono">18 (13)</span>
            </div>
          </div>

          <div className="flex justify-between text-[11px] border-t border-[#234d39] pt-2 mt-2">
             <span className="text-white/80">Mukesh Kumar*</span>
             <span className="text-white/80 font-mono">1/19 <span className="text-white/50 ml-1">(2.0)</span></span>
          </div>
        </div>
      </div>
      
    </aside>
  );
}
