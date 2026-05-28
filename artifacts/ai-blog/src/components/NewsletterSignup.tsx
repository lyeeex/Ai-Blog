import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Mail } from "lucide-react";

export function NewsletterSignup() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <Card className="bg-primary/5 border-primary/20 overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-10 pointer-events-none">
        <Mail size={120} />
      </div>
      <CardContent className="p-8 md:p-12">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">{t("newsletter.title")}</h2>
          <p className="text-muted-foreground text-lg">
            {t("newsletter.description")}
          </p>
          
          {subscribed ? (
            <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-4 rounded-lg font-medium inline-block mx-auto">
              {t("newsletter.success")}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={t("newsletter.emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background"
              />
              <Button type="submit" className="shrink-0">
                {t("newsletter.subscribe")}
              </Button>
            </form>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
