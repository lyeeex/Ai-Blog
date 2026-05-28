import { Switch, Route, Router as WouterRouter } from "wouter";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "./context/LanguageContext";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CookieConsent } from "./components/CookieConsent";

import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import ContentCalendar from "./pages/ContentCalendar";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/articles" component={Articles} />
      <Route path="/article/:slug" component={Article} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/content-calendar" component={ContentCalendar} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <LanguageProvider>
        <TooltipProvider>
          <div className="flex flex-col min-h-screen">
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <Navbar />
              <main className="flex-1">
                <Router />
              </main>
              <Footer />
            </WouterRouter>
            <CookieConsent />
            <Toaster />
          </div>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
