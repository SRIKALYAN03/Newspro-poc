import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ArticlesProvider } from "@/context/ArticlesContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import LatestPage from "@/pages/LatestPage";
import LivePage from "@/pages/LivePage";
import ChannelsPage from "@/pages/ChannelsPage";
import IndiaPage from "@/pages/IndiaPage";
import WorldPage from "@/pages/WorldPage";
import BusinessPage from "@/pages/BusinessPage";
import SportsPage from "@/pages/SportsPage";
import TechPage from "@/pages/TechPage";
import ArticlePage from "@/pages/ArticlePage";
import PublishPage from "@/pages/PublishPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/latest" component={LatestPage} />
      <Route path="/live" component={LivePage} />
      <Route path="/channels" component={ChannelsPage} />
      <Route path="/india" component={IndiaPage} />
      <Route path="/world" component={WorldPage} />
      <Route path="/business" component={BusinessPage} />
      <Route path="/sports" component={SportsPage} />
      <Route path="/tech" component={TechPage} />
      <Route path="/publish" component={PublishPage} />
      <Route path="/article/:id" component={ArticlePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ArticlesProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </ArticlesProvider>
    </QueryClientProvider>
  );
}

export default App;
