import { useLanguage } from "../context/LanguageContext";
import { Link } from "wouter";
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t bg-muted/40 mt-16">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-primary tracking-tight">AI Blog</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              {t("footer.description")}
            </p>
            <div className="flex gap-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><FaLinkedin size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><FaYoutube size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><FaInstagram size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">{t("nav.home")}</Link></li>
              <li><Link href="/articles" className="hover:text-primary transition-colors">{t("nav.articles")}</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">{t("nav.about")}</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">{t("nav.contact")}</Link></li>
              <li><Link href="/content-calendar" className="hover:text-primary transition-colors">{t("nav.calendar")}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">{t("footer.privacyPolicy")}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
