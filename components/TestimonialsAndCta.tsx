"use client";
import Link from "next/link";
import Image from "next/image";
import { Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();

  const reviews = [
    {
      name: "Jake M.",
      country: "🇦🇺",
      review: t("test1rev"),
      image: "/images/boy.png",
    },
    {
      name: "Sari D.",
      country: "🇮🇩",
      review: t("test2rev"),
      image: "/images/avatar_1.jpg",
    },
    {
      name: "Thomas K.",
      country: "🇩🇪",
      review: t("test3rev"),
      image: "/images/traveler.png",
    },
  ];

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">{t("testTitle")}</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg relative text-left">
              <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
              <div className="flex items-center gap-4 mb-6">
                <Image src={r.image} alt={r.name} width={50} height={50} className="rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-dark">{r.name}</h4>
                  <span className="text-2xl">{r.country}</span>
                </div>
              </div>
              <div className="text-gold flex gap-1 mb-4">
                {"★★★★★"}
              </div>
              <p className="text-dark/80 italic text-lg leading-relaxed">
                "{r.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaGuide() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 bg-dark overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/images/desa.jpg')" }}
      ></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>

      <div className="container relative z-20 mx-auto px-6 lg:px-12 flex items-center min-h-[40vh]">
        <div className="max-w-2xl text-left">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-light mb-6">{t("ctaTitle")}</h2>
          <p className="text-xl text-light/80 mb-10 leading-relaxed">
            {t("ctaDesc")}
          </p>
          <Link href="/guides/join" className="inline-block px-10 py-5 bg-accent text-light rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-transform hover:shadow-accent/50">
            {t("ctaBtn")}
          </Link>
        </div>
      </div>
    </section>
  );
}
