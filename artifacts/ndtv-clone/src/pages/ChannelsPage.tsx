import { Link } from "wouter";
import NewsImage from "@/components/NewsImage";
import NewsProLayout from "@/components/NewsProLayout";
import { PARTNER_CHANNELS } from "@/data/newspro";

export default function ChannelsPage() {
  return (
    <NewsProLayout
      breadcrumb={
        <div className="text-[11px] text-muted-foreground mb-1 uppercase tracking-wider font-semibold">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          {" › "}
          <span>Channel directory</span>
        </div>
      }
    >
      <div className="border-b-2 border-primary pb-2 mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
          News channels & wires
        </h1>
        <p className="text-sm text-muted-foreground mt-1 max-w-3xl">
          Reference directory for the NewsPro POC — major English and Hindi news brands plus global
          wire complements. Names are factual industry references only; no endorsement or
          partnership is implied.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PARTNER_CHANNELS.map((ch) => (
          <article
            key={ch.id}
            className="bg-card border border-border rounded-[2px] overflow-hidden group hover:border-primary/60 transition-colors"
          >
            <div className="aspect-[16/10] relative overflow-hidden bg-muted">
              <NewsImage
                src={ch.imageUrl}
                fallbackSeed={ch.id.length + 10}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                width={320}
                height={200}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <h2 className="text-lg font-black text-white drop-shadow-md">{ch.name}</h2>
                <p className="text-[11px] text-white/80">{ch.locale}</p>
              </div>
            </div>
            <p className="p-3 text-[13px] text-[#aaaaaa] leading-snug border-t border-border">
              {ch.description}
            </p>
          </article>
        ))}
      </div>
    </NewsProLayout>
  );
}
