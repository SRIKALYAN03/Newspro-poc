import { Link } from "wouter";

const TRENDING_LINKS = [
  "Iran War",
  "IPL 2026",
  "Gold Price",
  "Silver Price",
  "Pakistan News",
  "PM Modi",
  "Rupee vs Dollar",
  "Stock Market"
];

export default function TrendingBar() {
  return (
    <div className="w-full bg-muted border-l-4 border-l-primary flex items-center h-[34px] overflow-hidden text-[13px]">
      <div className="bg-primary text-primary-foreground font-bold h-full flex items-center px-3 text-[11px] uppercase tracking-wider shrink-0 shadow-lg z-10 relative">
        Trending Links <span className="ml-1.5 text-[9px]">▶</span>
        {/* Right pointing triangle to create flag effect */}
        <div className="absolute -right-2 top-0 border-y-[17px] border-y-transparent border-l-[8px] border-l-primary hidden md:block"></div>
      </div>
      
      <div className="flex-1 overflow-x-auto hide-scrollbar flex items-center md:ml-4 ml-2 px-2">
        <ul className="flex items-center space-x-4 whitespace-nowrap">
          {TRENDING_LINKS.map((link, i) => (
            <li key={i} className="flex items-center">
              <Link 
                href={`/topic/${link.toLowerCase().replace(/ /g, "-")}`}
                className="text-white hover:text-primary transition-colors font-medium whitespace-nowrap"
              >
                {link}
              </Link>
              {i < TRENDING_LINKS.length - 1 && (
                <span className="text-border mx-4 text-[10px]">|</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
