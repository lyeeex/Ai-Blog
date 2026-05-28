import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export function TableOfContents({ headings }: { headings: { id: string; text: string; level: number }[] }) {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0% -80% 0%" }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => {
      headings.forEach((heading) => {
        const el = document.getElementById(heading.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-auto bg-card rounded-xl border p-6 hidden lg:block w-64 shrink-0">
      <h3 className="font-bold mb-4">{t("article.toc")}</h3>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li 
            key={heading.id} 
            className={`transition-colors hover:text-primary ${heading.level === 3 ? "ml-4" : ""} ${activeId === heading.id ? "text-primary font-medium" : "text-muted-foreground"}`}
          >
            <a href={`#${heading.id}`} onClick={(e) => {
              e.preventDefault();
              document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" });
            }}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
