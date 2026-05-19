import { useMemo } from "react";
import { ExternalLink } from "lucide-react";
import { Link } from "wouter";
import NewsProLayout from "@/components/NewsProLayout";
import { pickRandomLiveChannels, type LiveChannelSource } from "@/data/newspro";
import { youtubeEmbedSrc, youtubeWatchUrl } from "@/lib/youtube";

export default function LivePage() {
  const streams = useMemo(() => pickRandomLiveChannels(6), []);

  return (
    <NewsProLayout
      breadcrumb={
        <div className="text-[11px] text-muted-foreground mb-1 uppercase tracking-wider font-semibold">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          {" › "}
          <span>Live</span>
        </div>
      }
    >
      <LivePageIntro />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {streams.map((stream) => (
          <article
            key={stream.id}
            className="rounded-[2px] overflow-hidden border border-border bg-card flex flex-col"
          >
            <div className="aspect-video relative bg-black">
              <iframe
                title={`${stream.title} live`}
                src={youtubeEmbedSrc(stream.youtubeVideoId)}
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <div className="pointer-events-none absolute top-2 left-2 z-10 bg-primary text-white text-[10px] font-bold px-2 py-0.5 uppercase shadow-lg">
                YouTube Live
              </div>
            </div>
            <div className="p-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h2 className="text-base font-bold text-white uppercase tracking-wide">
                  {stream.title}
                </h2>
                <p className="text-[13px] text-muted-foreground mt-1">{stream.subtitle}</p>
              </div>
              <a
                href={youtubeWatchUrl(stream.youtubeVideoId)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-primary hover:underline shrink-0"
              >
                Open on YouTube
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </NewsProLayout>
  );
}

function LivePageIntro() {
  return (
    <div className="border-b-2 border-primary pb-2 mb-6">
      <h1 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse-live shadow-[0_0_8px_rgba(226,0,26,0.8)]" />
        Live & simulcast hubs
      </h1>
      <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
        Direct YouTube live embeds (24/7 streams where available). Indian channels sometimes rotate
        stream IDs — use &quot;Open on YouTube&quot; if a tile shows unavailable.
      </p>
    </div>
  );
}
