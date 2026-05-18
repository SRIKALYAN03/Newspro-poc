import { Play, Camera, User } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_33%_calc(27%-1.5rem)] gap-6">
      
      {/* LEFT COLUMN - Main breaking story */}
      <div className="relative group cursor-pointer h-[340px] md:h-[400px] overflow-hidden rounded-[2px]" data-testid="card-hero-main">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-[#1a1a1a] to-border/30 z-0"></div>
        {/* Placeholder image representation */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <Camera className="w-12 h-12 text-white" />
        </div>
        
        <div className="absolute top-0 left-0 bg-primary text-white text-[11px] font-bold px-2 py-1 uppercase tracking-wider z-10">
          Breaking
        </div>
        
        <div className="absolute bottom-0 left-0 p-5 w-full z-10 bg-gradient-to-t from-black via-black/80 to-transparent pt-12">
          <h1 className="text-white font-bold text-[24px] md:text-[28px] leading-tight group-hover:text-primary transition-colors drop-shadow-md">
            US Drops All Charges Against Gautam Adani, Case Closed Permanently
          </h1>
        </div>
      </div>

      {/* CENTER COLUMN - Stacked smaller stories */}
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 group cursor-pointer" data-testid="card-hero-sub-1">
          <div className="w-[130px] h-[86px] shrink-0 bg-card rounded-[2px] relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30"><Camera className="w-6 h-6"/></div>
          </div>
          <h2 className="text-white font-bold text-[16px] leading-[1.3] group-hover:text-primary transition-colors line-clamp-3">
            Iran Nuclear Talks: US And Iran Inch Closer To Deal Amid Tensions
          </h2>
        </div>
        
        <div className="h-px w-full bg-border/50"></div>
        
        <div className="flex gap-3 group cursor-pointer" data-testid="card-hero-sub-2">
          <div className="w-[130px] h-[86px] shrink-0 bg-card rounded-[2px] relative overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30"><Camera className="w-6 h-6"/></div>
          </div>
          <h2 className="text-white font-bold text-[16px] leading-[1.3] group-hover:text-primary transition-colors line-clamp-3">
            India GDP Growth: Economy To Hit 7.2% In FY26, Says Report
          </h2>
        </div>

        <div className="h-px w-full bg-border/50 mt-1"></div>
        
        <ul className="flex flex-col gap-3 mt-1">
          <li className="flex items-start gap-2 group">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
            <Link href="/" className="text-[14px] text-white/90 hover:text-primary font-medium leading-snug transition-colors">
              Supreme Court Stays Demolition Of Houses In Delhi's Jahangirpuri
            </Link>
          </li>
          <li className="flex items-start gap-2 group">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
            <Link href="/" className="text-[14px] text-white/90 hover:text-primary font-medium leading-snug transition-colors">
              PM Modi Speaks To Trump, Discusses Trade And Strategic Ties
            </Link>
          </li>
          <li className="flex items-start gap-2 group">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
            <Link href="/" className="text-[14px] text-white/90 hover:text-primary font-medium leading-snug transition-colors">
              Stock Market Today: Sensex Surges 800 Points, Nifty Above 24,500
            </Link>
          </li>
        </ul>
      </div>

      {/* RIGHT COLUMN - Watch Live / Opinion */}
      <div className="flex flex-col gap-4 h-full">
        {/* Watch Live */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2.5 h-2.5 bg-primary animate-pulse-live rounded-full"></div>
            <h3 className="text-white font-bold text-[15px] tracking-wide uppercase">Watch Live</h3>
          </div>
          
          <div className="relative group cursor-pointer rounded-[2px] overflow-hidden border border-border bg-card pb-2" data-testid="card-hero-live">
            <div className="aspect-video bg-black relative flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
              </div>
              <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 uppercase z-10">
                Breaking News
              </div>
              <div className="absolute bottom-2 left-2 right-2 z-10">
                 <span className="bg-black/80 px-2 py-1 text-[11px] font-bold text-white uppercase inline-block">Multiple U.S. Cases Now Closed</span>
              </div>
            </div>
            <div className="px-3 pt-2 text-[12px] font-bold text-white uppercase tracking-wider">
              NDTV Live
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-border my-1"></div>

        {/* Opinions */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3 group cursor-pointer">
            <h3 className="text-muted-foreground font-bold text-[14px] uppercase tracking-wide group-hover:text-white transition-colors">Opinion</h3>
            <span className="text-[10px] text-muted-foreground group-hover:text-primary transition-colors">▶</span>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-border shrink-0 overflow-hidden flex items-center justify-center">
                 <User className="w-5 h-5 text-muted-foreground/50"/>
              </div>
              <div>
                <h4 className="text-[13px] text-white font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2 mb-1">
                  Why India's Middle Class Is Feeling The Pinch Despite GDP Growth
                </h4>
                <p className="text-[11px] text-muted-foreground">By Priya Sharma</p>
              </div>
            </div>
            
            <div className="flex gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-border shrink-0 overflow-hidden flex items-center justify-center">
                 <User className="w-5 h-5 text-muted-foreground/50"/>
              </div>
              <div>
                <h4 className="text-[13px] text-white font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2 mb-1">
                  The New World Order: India's Strategic Autonomy In A Multipolar World
                </h4>
                <p className="text-[11px] text-muted-foreground">By Rajiv Mehta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
