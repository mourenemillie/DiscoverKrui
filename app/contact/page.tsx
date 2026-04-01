"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail } from "lucide-react";

export default function ContactPage() {
  const { lang, t } = useLanguage();

  return (
    <main className="min-h-screen pt-32 pb-24 bg-light flex flex-col items-center justify-center text-center">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="w-24 h-24 bg-dark/5 rounded-full flex items-center justify-center mx-auto mb-8">
          <Mail className="w-12 h-12 text-gold" />
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6">
          {t("footContact")}
        </h1>
        <p className="text-xl text-dark/70 leading-relaxed mb-8">
          {lang === "EN" 
            ? "We'd love to hear from you. Our contact form will be available shortly."
            : "Kami ingin mendengar dari Anda. Formulir kontak kami akan segera tersedia."}
        </p>
      </div>
    </main>
  );
}
