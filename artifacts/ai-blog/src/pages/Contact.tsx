import { useLanguage } from "../context/LanguageContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <Card className="border-border shadow-lg">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-4xl font-bold mb-4">{t("contact.title")}</CardTitle>
          <CardDescription className="text-lg">
            {t("contact.description")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isSubmitted ? (
            <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-2">🎉</h3>
              <p className="text-lg font-medium">{t("contact.success")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("contact.name")}</Label>
                  <Input id="name" required placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("contact.email")}</Label>
                  <Input id="email" type="email" required placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">{t("contact.subject")}</Label>
                <Input id="subject" required placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{t("contact.message")}</Label>
                <Textarea id="message" required placeholder="Your message here..." className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full" size="lg">
                {t("contact.send")}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
