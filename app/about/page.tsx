"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Construction } from "lucide-react";

export default function AboutPage() {
  const { lang, t } = useLanguage();

  return (
    <main className="min-h-screen pt-32 pb-24 bg-light flex flex-col items-center justify-center text-center">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="w-24 h-24 bg-dark/5 rounded-full flex items-center justify-center mx-auto mb-8">
          <Construction className="w-12 h-12 text-gold" />
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6">
          {t("footAbout")}
        </h1>
        <p className="text-xl text-dark/70 leading-relaxed mb-8">
          {lang === "EN" 
            ? "We are currently preparing an amazing story about DiscoverKrui. Stay tuned!"
            : "Kami sedang menyiapkan cerita luar biasa tentang DiscoverKrui. Nantikan segera!"}
        </p>
      </div>
    </main>
  );
}
