import { Menu, Search, Grid, User } from "lucide-react";
import { Link } from "wouter";

interface TopNavProps {
  onSearchOpen: () => void;
}

export default function TopNav({ onSearchOpen }: TopNavProps) {
  return (
    <header className="flex flex-col w-full">
      {/* NETWORK BAR */}
      <div className="bg-[#121212] text-white/80 h-7 flex items-center justify-between px-4 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider">
        <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto whitespace-nowrap hide-scrollbar">
          <span className="hover:text-white cursor-pointer font-bold">NDTV</span>
          <span className="text-border">|</span>
          <span className="hover:text-white cursor-pointer">WORLD</span>
          <span className="text-border">|</span>
          <span className="hover:text-white cursor-pointer">PROFIT</span>
          <span className="text-border">|</span>
          <span className="hover:text-white cursor-pointer text-[12px]">हिं</span>
          <span className="text-border">|</span>
          <span className="hover:text-white cursor-pointer">MOVIES</span>
          <span className="text-border">|</span>
          <span className="hover:text-white cursor-pointer">CRICKET</span>
          <span className="text-border">|</span>
          <span className="hover:text-white cursor-pointer">FOOD</span>
          <span className="text-border">|</span>
          <span className="hover:text-white cursor-pointer hidden sm:inline">LIFESTYLE</span>
          <span className="text-border hidden sm:inline">|</span>
          <span className="hover:text-white cursor-pointer hidden sm:inline">HEALTH</span>
          <span className="text-border hidden md:inline">|</span>
          <span className="hover:text-white cursor-pointer hidden md:inline">TECH</span>
          <span className="text-border hidden lg:inline">|</span>
          <span className="hover:text-white cursor-pointer hidden lg:inline">GAMES</span>
          <span className="text-border hidden lg:inline">|</span>
          <span className="hover:text-white cursor-pointer hidden xl:inline">SHOPPING</span>
        </div>
        <div className="flex items-center space-x-3 shrink-0 ml-4">
          <Search className="w-3.5 h-3.5 cursor-pointer hover:text-white" onClick={onSearchOpen} data-testid="button-search" />
        </div>
      </div>

      {/* MAIN NAV BAR */}
      <div className="bg-black text-white h-[44px] flex items-center justify-between px-4 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button className="p-1 hover:bg-white/10 rounded-sm transition-colors" data-testid="button-menu">
            <Menu className="w-5 h-5" />
          </button>
          <Link href="/" className="flex items-center leading-none" data-testid="link-home">
            <span className="text-white font-black text-xl tracking-tight">ND</span>
            <span className="text-primary font-black text-xl tracking-tight">TV</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-4 text-[13px] font-semibold tracking-wide">
          <Link href="/live" className="flex items-center gap-1.5 text-white hover:text-primary transition-colors cursor-pointer group">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-live shadow-[0_0_8px_rgba(226,0,26,0.8)]"></span>
            Live TV <span className="text-[10px] text-white/50 group-hover:text-primary/70">▾</span>
          </Link>
          <span className="text-border h-3 w-px bg-border"></span>
          <Link href="/latest" className="hover:text-white text-white/90 transition-colors">Latest</Link>
          <span className="text-border h-3 w-px bg-border"></span>
          <Link href="/india" className="hover:text-white text-white/90 transition-colors flex items-center gap-1">India <span className="text-[10px] text-white/50">▾</span></Link>
          <span className="text-border h-3 w-px bg-border"></span>
          <Link href="/world" className="hover:text-white text-white/90 transition-colors">World</Link>
          <span className="text-border h-3 w-px bg-border"></span>
          <Link href="/videos" className="hover:text-white text-white/90 transition-colors">Videos</Link>
          <span className="text-border h-3 w-px bg-border"></span>
          <Link href="/opinion" className="hover:text-white text-white/90 transition-colors">Opinion</Link>
          <span className="text-border h-3 w-px bg-border"></span>
          <Link href="/cities" className="hover:text-white text-white/90 transition-colors flex items-center gap-1">Cities <span className="text-[10px] text-white/50">▾</span></Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1 text-[12px] text-muted-foreground mr-2">
            <span>Delhi</span>
            <span className="text-sm">☁</span>
            <span>38°C</span>
          </div>
          <button className="hover:text-primary transition-colors" data-testid="button-grid">
            <Grid className="w-4 h-4" />
          </button>
          <button className="w-7 h-7 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors" data-testid="button-user">
            <User className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}
