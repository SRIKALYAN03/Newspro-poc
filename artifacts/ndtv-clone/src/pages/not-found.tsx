import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md border-border bg-card">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 items-start">
            <AlertCircle className="h-8 w-8 text-primary shrink-0" />
            <h1 className="text-2xl font-bold text-foreground">404 — Page not found</h1>
          </div>

          <p className="mt-2 text-sm text-muted-foreground">
            This URL is not part of the NewsPro POC. Use the navigation bar or return home.
          </p>
          <Link
            href="/"
            className="inline-block mt-6 text-sm font-semibold text-primary hover:underline"
          >
            ← Back to NewsPro home
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
