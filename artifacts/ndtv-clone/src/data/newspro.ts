/**
 * NewsPro POC — mock editorial data and partner channel directory.
 * Not affiliated with any broadcaster.
 */

import { articleImageUrl, articleThumbUrl, channelImageUrl } from "@/lib/images";

export type NewsSection = "india" | "world" | "business" | "sports" | "tech";

export interface NewsArticle {
  id: number;
  headline: string;
  meta: string;
  excerpt: string;
  tag: string;
  section: NewsSection;
  imageUrl: string;
  imageUrlThumb?: string;
  /** Full article for reading / study (optional on seed data — generated on view) */
  body?: string;
  isUserPublished?: boolean;
}

export const SECTION_LABELS: Record<NewsSection, string> = {
  india: "India",
  world: "World",
  business: "Business",
  sports: "Sports",
  tech: "Tech",
};

const img = articleImageUrl;
const thumb = articleThumbUrl;

export const ALL_ARTICLES: NewsArticle[] = [
  {
    id: 1,
    headline:
      "India–Pakistan border calm after fresh flag talks; DGMO hotline restored",
    meta: "May 19, 2026 · 12:45 PM · NewsPro India Desk",
    excerpt:
      "Army officials report no overnight firing along the LoC. Diplomats eye next round of DGMO-level talks this week.",
    tag: "India",
    section: "india",
    imageUrl: img(1),
    imageUrlThumb: thumb(1),
  },
  {
    id: 2,
    headline: "Parliament session: Opposition seeks debate on MSP, price rise",
    meta: "May 19, 2026 · 11:30 AM · NewsPro Bureau",
    excerpt:
      "Treasury benches defend farm policy; Speaker lists business for the week including key education and labour bills.",
    tag: "Politics",
    section: "india",
    imageUrl: img(2),
    imageUrlThumb: thumb(2),
  },
  {
    id: 3,
    headline: "Sensex nears record as FII flows turn positive after six sessions",
    meta: "May 19, 2026 · 10:15 AM · Business Desk",
    excerpt:
      "IT and banks lead gains. Analysts watch RBI meet for guidance cues; mid-caps outperform broader index.",
    tag: "Business",
    section: "business",
    imageUrl: img(3),
    imageUrlThumb: thumb(3),
  },
  {
    id: 4,
    headline: "Mumbai rain: trains slowed, orange alert for Konkan on Wednesday",
    meta: "May 19, 2026 · 9:00 AM · Mumbai Bureau",
    excerpt:
      "BMC opens control room 24×7; schools in low-lying pockets advised to switch to hybrid classes if waterlogging worsens.",
    tag: "Cities",
    section: "india",
    imageUrl: img(4),
    imageUrlThumb: thumb(4),
  },
  {
    id: 5,
    headline: "T20 World Cup 2026: squads to be named; fitness camp in Bengaluru",
    meta: "May 19, 2026 · 8:30 AM · Sports Desk",
    excerpt:
      "Selectors watch IPL finishing league stage; net bowlers and spin options under final review before departure.",
    tag: "Sports",
    section: "sports",
    imageUrl: img(5),
    imageUrlThumb: thumb(5),
  },
  {
    id: 6,
    headline: "US, EU signal progress on tariffs; Asian markets track Wall Street higher",
    meta: "May 19, 2026 · 7:00 AM · World Desk",
    excerpt:
      "Trade negotiators cite ‘constructive’ sessions; tech and energy stocks lead overnight gains in New York.",
    tag: "World",
    section: "world",
    imageUrl: img(6),
    imageUrlThumb: thumb(6),
  },
  {
    id: 7,
    headline: "Middle East: ceasefire monitors report fewer incidents along buffer zone",
    meta: "May 18, 2026 · 6:45 PM · World Desk",
    excerpt:
      "UN-backed team shares weekly report; aid convoys cleared through two additional checkpoints.",
    tag: "World",
    section: "world",
    imageUrl: img(7),
    imageUrlThumb: thumb(7),
  },
  {
    id: 8,
    headline: "GDP: agency retains FY26 outlook; rural demand seen stabilising",
    meta: "May 18, 2026 · 4:20 PM · Business Desk",
    excerpt:
      "Monsoon onset map tracks normal rains; capex pipeline in roads and power still robust, note economists.",
    tag: "Business",
    section: "business",
    imageUrl: img(8),
    imageUrlThumb: thumb(8),
  },
  {
    id: 9,
    headline: "Gold near lifetime highs; jewellers see wedding-season buying",
    meta: "May 18, 2026 · 2:10 PM · Markets Desk",
    excerpt:
      "Spot prices track global cues; RBI FX reserves data due Friday; silver volatility spikes in COMEX session.",
    tag: "Markets",
    section: "business",
    imageUrl: img(9),
    imageUrlThumb: thumb(9),
  },
  {
    id: 10,
    headline: "IPL 2026: playoff race tightens as net run-rate swings mid-week",
    meta: "May 18, 2026 · 7:30 PM · Sports Desk",
    excerpt:
      "Champions on the brink; rain forecast may force reserve days—franchises recalculate qualification paths.",
    tag: "Sports",
    section: "sports",
    imageUrl: img(10),
    imageUrlThumb: thumb(10),
  },
  {
    id: 11,
    headline: "Delhi Metro: new corridor trials on schedule; airport express frequency up",
    meta: "May 18, 2026 · 1:00 PM · Cities",
    excerpt:
      "Commuters get real-time crowding on app pilot; interchange signage overhaul at Rajiv Chowk by month-end.",
    tag: "Cities",
    section: "india",
    imageUrl: img(11),
    imageUrlThumb: thumb(11),
  },
  {
    id: 12,
    headline: "Semiconductor policy: states pitch land banks for display fab cluster",
    meta: "May 18, 2026 · 11:00 AM · Tech",
    excerpt:
      "Industry wants faster customs clearance for tooling; skilling tie-ups with IITs expanded under Chips mission.",
    tag: "Tech",
    section: "tech",
    imageUrl: img(12),
    imageUrlThumb: thumb(12),
  },
  {
    id: 13,
    headline: "Climate summit side-lines: India stresses common but differentiated responsibilities",
    meta: "May 17, 2026 · 8:00 PM · World Desk",
    excerpt:
      "Draft language on finance mechanism still contested; small island states push for loss-and-damage clarity.",
    tag: "World",
    section: "world",
    imageUrl: img(1),
    imageUrlThumb: thumb(1),
  },
  {
    id: 14,
    headline: "West Asia shipping: insurers update war-risk clauses; freight indices dip",
    meta: "May 17, 2026 · 3:30 PM · World Desk",
    excerpt:
      "Container lines reroute fewer sailings; crude futures volatile after inventory surprise in the US.",
    tag: "World",
    section: "world",
    imageUrl: img(2),
    imageUrlThumb: thumb(2),
  },
  {
    id: 15,
    headline: "Startup funding: SaaS and health see cheques despite valuation discipline",
    meta: "May 17, 2026 · 10:20 AM · Business Desk",
    excerpt:
      "Angels and micro-VCs active in tier-2 cities; due diligence cycles longer than 2021 peak, insiders say.",
    tag: "Business",
    section: "business",
    imageUrl: img(3),
    imageUrlThumb: thumb(3),
  },
  {
    id: 16,
    headline: "Election schedule: ECI to announce dates for two state assemblies",
    meta: "May 17, 2026 · 9:40 AM · Politics",
    excerpt:
      "Model code expected next week; security mapping and EVM readiness reviews concluded in sensitive districts.",
    tag: "Politics",
    section: "india",
    imageUrl: img(4),
    imageUrlThumb: thumb(4),
  },
  {
    id: 17,
    headline: "AI safety: firms adopt watermarking for synthetic newsroom graphics",
    meta: "May 16, 2026 · 5:15 PM · Tech",
    excerpt:
      "Industry group publishes checklist for election coverage; public interest law clinics track deepfake takedowns.",
    tag: "Tech",
    section: "tech",
    imageUrl: img(5),
    imageUrlThumb: thumb(5),
  },
  {
    id: 18,
    headline: "Badminton: India enters two finals at Thailand Open; injuries monitored",
    meta: "May 16, 2026 · 4:00 PM · Sports Desk",
    excerpt:
      "Physio team clears singles spearhead for Saturday; doubles pair credits new service coach for net dominance.",
    tag: "Sports",
    section: "sports",
    imageUrl: img(6),
    imageUrlThumb: thumb(6),
  },
];

export const HERO_MAIN = ALL_ARTICLES[5]!;
export const HERO_SIDE = [ALL_ARTICLES[6]!, ALL_ARTICLES[7]!];
export const HERO_BULLETS = [
  ALL_ARTICLES[10]!,
  ALL_ARTICLES[1]!,
  ALL_ARTICLES[3]!,
];

export interface PartnerChannel {
  id: string;
  name: string;
  locale: string;
  description: string;
  imageUrl: string;
}

/** Referenced for POC navigation — names only; no logos or affiliation claims */
export const PARTNER_CHANNELS: PartnerChannel[] = [
  {
    id: "ndtv",
    name: "NDTV",
    locale: "India · English",
    description: "Legacy English news channel and digital — general news and analysis.",
    imageUrl: channelImageUrl("ndtv"),
  },
  {
    id: "aajtak",
    name: "Aaj Tak",
    locale: "India · Hindi",
    description: "Hindi news leader — fast updates and election-day programming.",
    imageUrl: channelImageUrl("aajtak"),
  },
  {
    id: "abp",
    name: "ABP News",
    locale: "India · Hindi",
    description: "National and regional coverage with strong state bureau network.",
    imageUrl: channelImageUrl("abp"),
  },
  {
    id: "indiatv",
    name: "India TV",
    locale: "India · Hindi",
    description: "Prime-time debate format and ground reporting from NCR.",
    imageUrl: channelImageUrl("indiatv"),
  },
  {
    id: "republic",
    name: "Republic TV",
    locale: "India · English",
    description: "English news with extensive studio and field crew in Mumbai.",
    imageUrl: channelImageUrl("republic"),
  },
  {
    id: "timesnow",
    name: "Times Now",
    locale: "India · English",
    description: "Breaking news focus with global wire partnerships.",
    imageUrl: channelImageUrl("timesnow"),
  },
  {
    id: "cnn18",
    name: "CNN-News18",
    locale: "India · English",
    description: "International desk tie-ups and business dayparts.",
    imageUrl: channelImageUrl("cnn18"),
  },
  {
    id: "zee",
    name: "Zee News",
    locale: "India · Hindi",
    description: "Hindi general news plus regional language sister channels.",
    imageUrl: channelImageUrl("zee"),
  },
  {
    id: "dd",
    name: "DD News",
    locale: "India · English & Hindi",
    description: "Public service broadcaster — parliament and rural reach.",
    imageUrl: channelImageUrl("dd"),
  },
  {
    id: "bbc",
    name: "BBC News (India)",
    locale: "UK · Global",
    description: "International perspective with India business and South Asia desk.",
    imageUrl: channelImageUrl("bbc"),
  },
  {
    id: "cnn",
    name: "CNN International",
    locale: "US · Global",
    description: "World news hub — Asia-Pacific bureaus and commodity markets.",
    imageUrl: channelImageUrl("cnn"),
  },
  {
    id: "reuters",
    name: "Reuters",
    locale: "Global · Wire",
    description: "Agency feeds power hundreds of publishers including NewsPro wire slots.",
    imageUrl: channelImageUrl("reuters"),
  },
];

/**
 * Live TV: direct YouTube **video** IDs for `/embed/VIDEO_ID`.
 * Do not use `embed/live_stream?channel=` — that only works while a channel is
 * actively broadcasting and often shows "This video is unavailable".
 */
export interface LiveChannelSource {
  id: string;
  title: string;
  subtitle: string;
  /** YouTube watch/live video id (e.g. gCNeDWCI0vo) */
  youtubeVideoId: string;
}

/** Verified 24/7 or long-running live streams suitable for iframe embed */
export const LIVE_CHANNEL_POOL: LiveChannelSource[] = [
  {
    id: "aljazeera",
    title: "Al Jazeera English",
    subtitle: "24/7 · International",
    youtubeVideoId: "gCNeDWCI0vo",
  },
  {
    id: "dw",
    title: "DW News",
    subtitle: "24/7 · Global headlines",
    youtubeVideoId: "Drj-LhfUX1Q",
  },
  {
    id: "france24",
    title: "FRANCE 24 English",
    subtitle: "24/7 · International",
    youtubeVideoId: "h3MuIUNCCzI",
  },
  {
    id: "euronews",
    title: "Euronews English",
    subtitle: "24/7 · Europe & world",
    youtubeVideoId: "pykpO5kQJ98",
  },
  {
    id: "aajtak",
    title: "Aaj Tak",
    subtitle: "Hindi · India live",
    youtubeVideoId: "cvFoxljopHU",
  },
  {
    id: "indiatoday",
    title: "India Today",
    subtitle: "English · India live",
    youtubeVideoId: "Q-XQgowMhds",
  },
  {
    id: "hindi-india",
    title: "Hindi India Live",
    subtitle: "Hindi · rolling news",
    youtubeVideoId: "cvFoxljopHU",
  },
  {
    id: "republic",
    title: "Republic TV",
    subtitle: "English · India live",
    youtubeVideoId: "Hn1BMkWsL-A",
  },
];

function shuffleInPlace<T>(items: T[]): void {
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j]!, items[i]!];
  }
}

/** Default embed on home hero — stable 24/7 international feed */
export const HOME_FEATURED_LIVE_VIDEO_ID = "gCNeDWCI0vo";

/** Prefer reliable 24/7 international feeds, then shuffle the rest. */
export function pickRandomLiveChannels(count: number): LiveChannelSource[] {
  const reliable = LIVE_CHANNEL_POOL.filter((c) =>
    ["aljazeera", "dw", "france24", "euronews"].includes(c.id),
  );
  const rest = LIVE_CHANNEL_POOL.filter((c) => !reliable.includes(c));
  shuffleInPlace(rest);
  const merged = [...reliable, ...rest];
  return merged.slice(0, Math.min(count, merged.length));
}

