import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function CookieConsent() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (value: "accept" | "decline") => {
    localStorage.setItem("cookieConsent", value);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-card border shadow-lg rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-card-foreground">
                {t("cookie.message")}
              </p>
              <div className="flex gap-2 shrink-0">
                <Button variant="outline" size="sm" onClick={() => handleConsent("decline")}>
                  {t("cookie.decline")}
                </Button>
                <Button size="sm" onClick={() => handleConsent("accept")}>
                  {t("cookie.accept")}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
