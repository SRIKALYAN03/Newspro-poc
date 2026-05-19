import { useLocation, useSearchParams as useWouterSearchParams } from "wouter";

export function useTopicParam(): string | null {
  const [params] = useWouterSearchParams();
  return params.get("topic");
}

export function useAppNavigate() {
  const [, navigate] = useLocation();
  return (href: string) => navigate(href);
}
