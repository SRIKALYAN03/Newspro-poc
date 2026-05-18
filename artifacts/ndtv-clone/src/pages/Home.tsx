import { useState } from "react";
import TopNav from "@/components/TopNav";
import TrendingBar from "@/components/TrendingBar";
import HeroSection from "@/components/HeroSection";
import LatestNews from "@/components/LatestNews";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import SearchOverlay from "@/components/SearchOverlay";
import { Link } from "wouter";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <TopNav onSearchOpen={() => setSearchOpen(true)} />
      <TrendingBar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-3 flex flex-col gap-4">
        {/* BREADCRUMB */}
        <div className="text-[11px] text-muted-foreground mb-1 uppercase tracking-wider font-semibold">
          <Link href="/" className="hover:text-primary transition-colors cursor-pointer">News</Link>
          {" › "}
          <span>Latest News</span>
        </div>

        <HeroSection />

        <div className="flex flex-col lg:flex-row gap-6 mt-4">
          <div className="w-full lg:w-[22%] shrink-0">
            <LeftSidebar />
          </div>
          <div className="w-full lg:w-[53%] shrink-0">
            <LatestNews />
          </div>
          <div className="w-full lg:w-[25%] shrink-0">
            <RightSidebar />
          </div>
        </div>
      </main>
    </div>
  );
}
