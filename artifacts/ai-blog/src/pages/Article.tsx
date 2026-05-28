import { useParams } from "wouter";
import { posts } from "../data/posts";
import { useLanguage } from "../context/LanguageContext";
import { ScrollProgress } from "../components/ScrollProgress";
import { NewsletterSignup } from "../components/NewsletterSignup";
import { BackToTop } from "../components/BackToTop";
import { TableOfContents } from "../components/TableOfContents";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Clock, Calendar, User, Share2 } from "lucide-react";
import { FaTwitter, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Button } from "../components/ui/button";

export default function Article() {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground">The article you're looking for doesn't exist.</p>
      </div>
    );
  }

  const content = post.content[language];
  
  const headings = content
    .map((block, index) => {
      if (block.type === "h2" || block.type === "h3") {
        return {
          id: `heading-${index}`,
          text: block.text,
          level: block.type === "h2" ? 2 : 3
        };
      }
      return null;
    })
    .filter((h): h is NonNullable<typeof h> => h !== null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title[language],
    "author": {
      "@type": "Person",
      "name": post.author[language]
    },
    "datePublished": post.date,
    "image": post.thumbnail,
    "description": content.find(b => b.type === "p")?.text.substring(0, 150) + "..."
  };

  return (
    <div className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ScrollProgress />
      <BackToTop />

      <article className="container mx-auto px-4 py-12 max-w-6xl print:max-w-full">
        {/* Article Header */}
        <header className="mb-10 text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 text-sm px-4 py-1">
            {post.category[language]}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            {post.title[language]}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{t("article.writtenBy")} <strong className="text-foreground">{post.author[language]}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime} {t("article.readTime")}</span>
            </div>
          </div>
          
          <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-lg border">
            <img 
              src={post.thumbnail} 
              alt={post.title[language]}
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        {/* Article Layout */}
        <div className="flex flex-col lg:flex-row gap-12 relative max-w-5xl mx-auto">
          
          <TableOfContents headings={headings} />

          {/* Main Content */}
          <div className="flex-1 min-w-0 prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-primary max-w-none">
            {content.map((block, index) => {
              switch (block.type) {
                case "h2":
                  return <h2 key={index} id={`heading-${index}`}>{block.text}</h2>;
                case "h3":
                  return <h3 key={index} id={`heading-${index}`}>{block.text}</h3>;
                case "p":
                  return <p key={index}>{block.text}</p>;
                case "ul":
                  return <ul key={index}></ul>;
                case "li":
                  return <li key={index}>{block.text}</li>;
                default:
                  return null;
              }
            })}
          </div>

          {/* Sidebar / Share */}
          <aside className="w-full lg:w-16 flex flex-row lg:flex-col gap-4 print:hidden lg:sticky lg:top-24 lg:h-fit items-center shrink-0">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest hidden lg:block lg:-rotate-90 lg:-translate-y-6 mb-4">
              Share
            </div>
            <Button variant="outline" size="icon" className="rounded-full shrink-0"><FaTwitter size={18} /></Button>
            <Button variant="outline" size="icon" className="rounded-full shrink-0"><FaFacebook size={18} /></Button>
            <Button variant="outline" size="icon" className="rounded-full shrink-0"><FaLinkedin size={18} /></Button>
            <Button variant="outline" size="icon" className="rounded-full shrink-0"><FaWhatsapp size={18} /></Button>
          </aside>
        </div>

        <Separator className="my-16 print:hidden max-w-4xl mx-auto" />

        <div className="print:hidden max-w-4xl mx-auto">
          <NewsletterSignup />
        </div>

      </article>
    </div>
  );
}
