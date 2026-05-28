import { Link } from "wouter";
import { posts } from "../data/posts";
import { useLanguage } from "../context/LanguageContext";
import { PostCard } from "../components/PostCard";
import { NewsletterSignup } from "../components/NewsletterSignup";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter(post => 
    post.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category[language].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid-slate-200/20 dark:bg-grid-slate-800/20 bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,black)] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("hero.subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/articles">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full hover-elevate">
                {t("hero.cta")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container mx-auto px-4 flex-1">
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 gap-4">
          <h2 className="text-3xl font-bold">{t("home.latestPosts")}</h2>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder={t("home.searchPlaceholder")} 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 bg-card"
            />
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">{t("home.noResults")}</p>
          </div>
        )}

        {filteredPosts.length > 0 && (
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" disabled>
              {t("home.allCaughtUp")}
            </Button>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="py-16 container mx-auto px-4">
        <NewsletterSignup />
      </section>
    </div>
  );
}
