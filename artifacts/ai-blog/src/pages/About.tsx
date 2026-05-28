import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">{t("about.title")}</h1>
      
      <div className="prose prose-lg dark:prose-invert mx-auto mb-16 text-center">
        <p className="text-xl leading-relaxed text-muted-foreground">
          {t("about.description")}
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-8 text-center">Our Team</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card border rounded-2xl p-8 text-center hover-elevate transition-all">
          <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-6 text-3xl">
            👨‍💻
          </div>
          <h3 className="text-xl font-bold mb-2">{t("about.author1")}</h3>
          <p className="text-muted-foreground">
            {t("about.author1Bio")}
          </p>
        </div>
        
        <div className="bg-card border rounded-2xl p-8 text-center hover-elevate transition-all">
          <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-6 text-3xl">
            👩‍💻
          </div>
          <h3 className="text-xl font-bold mb-2">{t("about.author2")}</h3>
          <p className="text-muted-foreground">
            {t("about.author2Bio")}
          </p>
        </div>
      </div>
    </div>
  );
}
