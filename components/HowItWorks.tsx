"use client";
import { Search, ShieldCheck, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-light overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">{t("howTitle")}</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-between relative z-10 gap-12 md:gap-6">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-dark/10 z-0 border-t-2 border-dashed border-primary/30"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center relative z-10 flex-1">
            <div className="w-24 h-24 rounded-full bg-primary text-light flex items-center justify-center text-3xl font-bold shadow-xl mb-6 shadow-primary/30 relative">
              <Search className="w-10 h-10 absolute opacity-30 right-4 bottom-4" />
              1
            </div>
            <h3 className="text-2xl font-bold font-heading text-dark mb-3">{t("howStep1Title")}</h3>
            <p className="text-dark/70 text-lg max-w-xs mx-auto">
              {t("howStep1Desc")}
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center relative z-10 flex-1">
            <div className="w-24 h-24 rounded-full bg-gold text-dark flex items-center justify-center text-3xl font-bold shadow-xl mb-6 shadow-gold/30 mt-0 md:mt-12 relative transform md:-translate-y-4">
              <ShieldCheck className="w-10 h-10 absolute opacity-30 right-4 bottom-4" />
              2
            </div>
            <h3 className="text-2xl font-bold font-heading text-dark mb-3">{t("howStep2Title")}</h3>
            <p className="text-dark/70 text-lg max-w-xs mx-auto">
              {t("howStep2Desc")}
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center relative z-10 flex-1">
            <div className="w-24 h-24 rounded-full bg-accent text-light flex items-center justify-center text-3xl font-bold shadow-xl mb-6 shadow-accent/30 relative">
              <MapPin className="w-10 h-10 absolute opacity-30 right-4 bottom-4" />
              3
            </div>
            <h3 className="text-2xl font-bold font-heading text-dark mb-3">{t("howStep3Title")}</h3>
            <p className="text-dark/70 text-lg max-w-xs mx-auto">
              {t("howStep3Desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
