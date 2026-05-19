import { Menu, Search, Radio, PenLine } from "lucide-react";
import { Link, useLocation } from "wouter";

interface TopNavProps {
  onSearchOpen: () => void;
}

const NAV = [
  { href: "/live", label: "Live TV" },
  { href: "/latest", label: "Latest" },
  { href: "/india", label: "India" },
  { href: "/world", label: "World" },
  { href: "/business", label: "Business" },
  { href: "/sports", label: "Sports" },
  { href: "/tech", label: "Tech" },
  { href: "/channels", label: "Channels" },
] as const;

export default function TopNav({ onSearchOpen }: TopNavProps) {
  const [location] = useLocation();
  const path = location.split("?")[0] ?? location;

  return (
    <header className="flex flex-col w-full border-b border-border bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto w-full px-4 h-14 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="p-2 hover:bg-white/5 rounded-md transition-colors lg:hidden"
            data-testid="button-menu"
            aria-label="Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <Link href="/" className="flex items-center gap-2" data-testid="link-home">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-black text-sm">
              NP
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-white font-black text-lg tracking-tight">NewsPro</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                Your briefing
              </span>
            </span>
          </Link>
        </div>

        <nav className="hidden xl:flex items-center gap-1">
          {NAV.map((item) => {
            const active = path === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2.5 py-1.5 rounded-md text-[12px] font-semibold transition-colors ${
                  active
                    ? "bg-primary/15 text-sky-300"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label === "Live TV" ? (
                  <span className="inline-flex items-center gap-1">
                    <Radio className="w-3 h-3 text-red-400" />
                    {item.label}
                  </span>
                ) : (
                  item.label
                )}
              </Link>
            );
          })}
        </nav>

        <NavActions onSearchOpen={onSearchOpen} />
      </div>

      <nav className="xl:hidden flex gap-1 overflow-x-auto px-4 pb-2 hide-scrollbar">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 px-3 py-1 text-[12px] font-semibold rounded-full bg-card border border-border text-white/90 hover:border-primary/50"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function NavActions({ onSearchOpen }: { onSearchOpen: () => void }) {
  return (
    <div className="flex items-center gap-2">
      <Link
        href="/publish"
        className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-[12px] font-bold hover:opacity-90 transition-opacity"
      >
        <PenLine className="w-3.5 h-3.5" />
        Publish
      </Link>
      <button
        type="button"
        onClick={onSearchOpen}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-card/50 text-muted-foreground hover:text-white hover:border-primary/40 text-[12px] transition-colors"
        data-testid="button-search"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline">Search</span>
      </button>
    </div>
  );
}
