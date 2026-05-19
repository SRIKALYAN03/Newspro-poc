import { useState, type ChangeEvent, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Upload } from "lucide-react";
import NewsProLayout from "@/components/NewsProLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useArticles } from "@/context/ArticlesContext";
import { SECTION_LABELS, type NewsSection } from "@/data/newspro";
import { articleImageUrl } from "@/lib/images";
import { readImageAsDataUrl } from "@/lib/article-store";
import { useToast } from "@/hooks/use-toast";

const SECTIONS: NewsSection[] = ["india", "world", "business", "sports", "tech"];

export default function PublishPage() {
  const { publishArticle } = useArticles();
  const [, navigate] = useLocation();
  const { toast } = useToast();

  const [headline, setHeadline] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState("");
  const [section, setSection] = useState<NewsSection>("india");
  const [byline, setByline] = useState("NewsPro Contributor");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function onImageChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast({ title: "Please choose an image file", variant: "destructive" });
      return;
    }
    if (file.size > 2_500_000) {
      toast({
        title: "Image too large",
        description: "Use an image under 2.5 MB for this POC (stored in your browser).",
        variant: "destructive",
      });
      return;
    }
    const dataUrl = await readImageAsDataUrl(file);
    setImageDataUrl(dataUrl);
    setImagePreview(dataUrl);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!headline.trim() || !excerpt.trim() || !body.trim()) {
      toast({ title: "Fill headline, summary, and full story", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const fallbackImg = articleImageUrl(Date.now() % 1000, 800, 450);
      const article = publishArticle({
        headline,
        excerpt,
        body,
        tag: tag || SECTION_LABELS[section],
        section,
        byline,
        imageUrl: imageDataUrl ?? fallbackImg,
        imageUrlThumb: imageDataUrl ?? fallbackImg,
      });

      toast({ title: "Published", description: "Your story is live on NewsPro." });
      navigate(`/article/${article.id}`);
    } catch {
      toast({ title: "Could not publish", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <NewsProLayout
      breadcrumb={
        <div className="text-[11px] text-muted-foreground mb-1 uppercase tracking-wider font-semibold">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          {" › "}
          <span>Publish story</span>
        </div>
      }
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-1">Publish to NewsPro</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Upload a story with image for any section. Content is saved in your browser (local storage) for
          this POC — no server required.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-lg p-6">
          <FormField label="Section" htmlFor="section">
            <select
              id="section"
              value={section}
              onChange={(e) => setSection(e.target.value as NewsSection)}
              className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm text-white"
            >
              {SECTIONS.map((s) => (
                <option key={s} value={s}>
                  {SECTION_LABELS[s]}
                </option>
              ))}
            </select>
          </FormField>

          <FormField label="Headline" htmlFor="headline">
            <Input
              id="headline"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              placeholder="Main headline"
              className="bg-background"
            />
          </FormField>

          <FormField label="Summary (shown in lists)" htmlFor="excerpt">
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={2}
              placeholder="One or two sentences"
              className="bg-background"
            />
          </FormField>

          <FormField
            label="Full story (study content)"
            htmlFor="body"
            hint="Separate paragraphs with a blank line. Use **text** for bold."
          >
            <Textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={10}
              placeholder="Write the full article here…"
              className="bg-background font-mono text-sm"
            />
          </FormField>

          <FormField label="Topic tag" htmlFor="tag">
            <Input
              id="tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              placeholder="e.g. Politics, Markets"
              className="bg-background"
            />
          </FormField>

          <FormField label="Byline" htmlFor="byline">
            <Input
              id="byline"
              value={byline}
              onChange={(e) => setByline(e.target.value)}
              className="bg-background"
            />
          </FormField>

          <FormField label="Cover image" htmlFor="image">
            <ImageUploadField
              imagePreview={imagePreview}
              onImageChange={onImageChange}
            />
          </FormField>

          <div className="flex gap-3 pt-2">
            <Button type="submit" disabled={submitting} className="flex-1">
              {submitting ? "Publishing…" : "Publish story"}
            </Button>
            <Button type="button" variant="outline" asChild>
              <Link href="/latest">Cancel</Link>
            </Button>
          </div>
        </form>
      </div>
    </NewsProLayout>
  );
}

function FormField({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor} className="text-white">
        {label}
      </Label>
      {hint ? <p className="text-[11px] text-muted-foreground">{hint}</p> : null}
      {children}
    </div>
  );
}

function ImageUploadField({
  imagePreview,
  onImageChange,
}: {
  imagePreview: string | null;
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="space-y-3">
      <label
        htmlFor="image"
        className="flex flex-col items-center justify-center gap-2 border border-dashed border-border rounded-lg p-6 cursor-pointer hover:border-primary/50 transition-colors"
      >
        <Upload className="w-8 h-8 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Click to upload image (optional)</span>
        <input
          id="image"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onImageChange}
        />
      </label>
      {imagePreview ? (
        <img
          src={imagePreview}
          alt="Preview"
          className="w-full max-h-48 object-cover rounded-md ring-1 ring-border"
        />
      ) : null}
    </div>
  );
}
