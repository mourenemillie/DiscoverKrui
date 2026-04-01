"use client";
import Link from "next/link";
import { Waves, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark text-light pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <Waves className="w-8 h-8 text-gold group-hover:text-accent transition-colors" />
              <span className="text-3xl font-heading font-bold text-light">
                DiscoverKrui
              </span>
            </Link>
            <p className="text-light/70 text-base max-w-sm mb-8 leading-relaxed">
              {t("footDesc")}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center hover:bg-gold hover:text-dark transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center hover:bg-gold hover:text-dark transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center hover:bg-gold hover:text-dark transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center hover:bg-gold hover:text-dark transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl font-bold mb-6 text-secondary">{t("footExplore")}</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/destinations" className="text-light/70 hover:text-gold transition-colors">{t("navDestinations")}</Link></li>
              <li><Link href="/packages" className="text-light/70 hover:text-gold transition-colors">{t("navPackages")}</Link></li>
              <li><Link href="/guides" className="text-light/70 hover:text-gold transition-colors">{t("navGuides")}</Link></li>
              <li><Link href="/culture" className="text-light/70 hover:text-gold transition-colors">{t("navCulture")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-bold mb-6 text-secondary">{t("footSupport")}</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-light/70 hover:text-gold transition-colors">{t("footAbout")}</Link></li>
              <li><Link href="/faq" className="text-light/70 hover:text-gold transition-colors">{t("footFAQ")}</Link></li>
              <li><Link href="/terms" className="text-light/70 hover:text-gold transition-colors">{t("footTerms")}</Link></li>
              <li><Link href="/privacy" className="text-light/70 hover:text-gold transition-colors">{t("footPrivacy")}</Link></li>
              <li><Link href="/contact" className="text-light/70 hover:text-gold transition-colors">{t("footContact")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-light/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-light/50 text-sm">
            © {new Date().getFullYear()} {t("footCopy")}
          </p>
          <div className="flex gap-4 text-sm text-light/50">
            <span>Indonesia</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
