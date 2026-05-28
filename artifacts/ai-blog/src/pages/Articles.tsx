import { useState } from "react";
import { posts } from "../data/posts";
import { useLanguage } from "../context/LanguageContext";
import { PostCard } from "../components/PostCard";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";

export default function Articles() {
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "AI Tools", "Tutorials", "News", "Opinion"];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title[language].toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.category[language].toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category.en === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-end md:space-y-0">
          <div>
            <h1 className="text-4xl font-bold mb-2">{t("nav.articles")}</h1>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder={t("home.searchPlaceholder")} 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <Tabs defaultValue="All" onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent">
            {categories.map((cat) => (
              <TabsTrigger 
                key={cat} 
                value={cat}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border rounded-full px-4 py-2"
              >
                {t(`categories.${cat}` as any) || cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 text-muted-foreground bg-muted/20 rounded-xl border">
            <p className="text-lg">{t("home.noResults")}</p>
          </div>
        )}
      </div>
    </div>
  );
}
