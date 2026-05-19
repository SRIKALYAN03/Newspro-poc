import { Link } from "wouter";

const QUICK_LINKS: { label: string; href: string }[] = [
  { label: "Latest headlines", href: "/latest" },
  { label: "India", href: "/india" },
  { label: "World", href: "/world" },
  { label: "Live TV & simulcasts", href: "/live" },
  { label: "Channel directory", href: "/channels" },
  { label: "Business & markets", href: "/latest" },
  { label: "Sports centre", href: "/latest" },
  { label: "Tech & science", href: "/latest" },
];

export default function RightSidebar() {
  return (
    <aside className="flex flex-col gap-6">
      <div className="bg-sidebar border border-border rounded-[2px] overflow-hidden">
        <div className="bg-muted border-l-4 border-primary p-2 mb-2">
          <h3 className="text-white font-bold text-[14px] uppercase tracking-wide flex items-center">
            Quick Links <span className="text-primary text-[10px] ml-1.5">▶</span>
          </h3>
        </div>

        <ul className="flex flex-col px-3 pb-3">
          {QUICK_LINKS.map((link, index) => (
            <li
              key={link.href + link.label}
              className={`py-2 ${index !== QUICK_LINKS.length - 1 ? "border-b border-border/60" : ""}`}
            >
              <Link
                href={link.href}
                className="text-[12px] text-white hover:text-primary transition-colors block w-full leading-tight font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-card border border-border rounded-[2px] p-2 text-center" data-testid="widget-ad">
        <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2 text-left">
          Advertisement
        </div>
        <div className="bg-[#2a2a2a] w-full h-[250px] flex items-center justify-center border border-[#333]">
          <span className="text-muted-foreground/40 font-bold text-2xl">AD</span>
        </div>
      </div>
    </aside>
  );
}
