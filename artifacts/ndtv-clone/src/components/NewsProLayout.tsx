import { useState, type ReactNode } from "react";
import TopNav from "@/components/TopNav";
import TrendingBar from "@/components/TrendingBar";
import SearchOverlay from "@/components/SearchOverlay";

interface NewsProLayoutProps {
  children: ReactNode;
  /** Optional breadcrumb row below the trending bar */
  breadcrumb?: ReactNode;
}

export default function NewsProLayout({ children, breadcrumb }: NewsProLayoutProps) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <TopNav onSearchOpen={() => setSearchOpen(true)} />
      <TrendingBar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-3 flex flex-col gap-4">
        {breadcrumb}
        {children}
      </main>

      <footer className="mt-auto border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center space-y-2">
          <p className="text-sm font-bold text-foreground">
            <span className="text-white">News</span>
            <span className="text-primary">Pro</span>
            <span className="text-muted-foreground font-normal"> · Proof of concept</span>
          </p>
          <p className="text-[11px] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Demonstration UI only. Not affiliated with NDTV.com, ndtv.com, or any broadcaster or wire
            service named in the channel directory. Stock photography via Unsplash.
          </p>
        </div>
      </footer>
    </div>
  );
}
