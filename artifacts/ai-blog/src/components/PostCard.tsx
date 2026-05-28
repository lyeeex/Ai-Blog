import { Link } from "wouter";
import { Post } from "../data/posts";
import { useLanguage } from "../context/LanguageContext";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

export function PostCard({ post, index = 0 }: { post: Post; index?: number }) {
  const { language, t } = useLanguage();
  const title = post.title[language];
  const category = post.category[language];
  const excerpt = post.content[language].find(block => block.type === "p")?.text.substring(0, 120) + "...";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/article/${post.slug}`}>
        <Card className="h-full overflow-hidden hover-elevate hover:border-primary/50 transition-all cursor-pointer group flex flex-col border border-border">
          <div className="relative aspect-video overflow-hidden">
            <img 
              src={post.thumbnail} 
              alt={title} 
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-background/80 backdrop-blur text-foreground">
                {category}
              </Badge>
            </div>
          </div>
          <CardContent className="p-6 flex-1 flex flex-col">
            <div className="flex items-center text-xs text-muted-foreground mb-3 gap-3">
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readingTime} {t("article.readTime")}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
              {excerpt}
            </p>
            <div className="text-sm font-medium text-primary mt-auto">
              Read article →
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
