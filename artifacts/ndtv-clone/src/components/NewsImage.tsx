import { useState } from "react";
import { articleImageUrl } from "@/lib/images";

interface NewsImageProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  fallbackSeed?: number;
  loading?: "lazy" | "eager";
}

export default function NewsImage({
  src,
  alt = "",
  className = "",
  width,
  height,
  fallbackSeed = 1,
  loading = "lazy",
}: NewsImageProps) {
  const [failed, setFailed] = useState(false);
  const resolved = failed ? articleImageUrl(fallbackSeed, width ?? 800, height ?? 450) : src;

  return (
    <img
      src={resolved}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      onError={() => setFailed(true)}
    />
  );
}
