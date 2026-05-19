import { Link } from "wouter";
import NewsProLayout from "@/components/NewsProLayout";
import HeroSection from "@/components/HeroSection";
import LatestNews from "@/components/LatestNews";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <NewsProLayout
      breadcrumb={
        <div className="text-[11px] text-muted-foreground mb-1 uppercase tracking-wider font-semibold">
          <Link href="/" className="hover:text-primary transition-colors cursor-pointer">
            Home
          </Link>
          {" › "}
          <span>Today&apos;s briefing</span>
        </div>
      }
    >
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
    </NewsProLayout>
  );
}
