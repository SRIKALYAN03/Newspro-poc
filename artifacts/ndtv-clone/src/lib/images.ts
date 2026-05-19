/** Reliable placeholder/news imagery (picsum — no API key, stable seeds). */
export function articleImageUrl(id: number, width = 800, height = 450): string {
  return `https://picsum.photos/seed/newspro-article-${id}/${width}/${height}`;
}

export function articleThumbUrl(id: number): string {
  return articleImageUrl(id, 320, 240);
}

export function channelImageUrl(slug: string): string {
  return `https://picsum.photos/seed/newspro-ch-${slug}/400/250`;
}

export function avatarUrl(name: string): string {
  const q = encodeURIComponent(name.replace(/\s+/g, "+"));
  return `https://ui-avatars.com/api/?name=${q}&background=0c4a6e&color=fff&size=80`;
}
