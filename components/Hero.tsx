"use client";
import { Search, Calendar, Users, MapPin, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const router = useRouter();
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useState({
    location: "",
    date: "",
    guests: "1"
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams({
      location: searchParams.location,
      date: searchParams.date,
      guests: searchParams.guests,
    }).toString();
    router.push(`/packages?${query}`);
  };

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden pt-32 pb-32 lg:pb-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/coastline.jpg')" }}
      ></div>
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>

      <div className="container relative z-20 mx-auto px-6 lg:px-12 text-center text-light mt-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 drop-shadow-lg text-balance animate-fade-in-up">
          {t("heroTitle")}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 drop-shadow-md text-light/90 font-medium">
          {t("heroSubtitle")}
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="bg-light p-6 lg:p-4 rounded-2xl lg:rounded-full w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-4 shadow-2xl relative z-30">
          <div className="flex-1 flex items-center gap-4 px-2 lg:px-4 border-b lg:border-b-0 lg:border-r border-dark/10 pb-4 lg:pb-0 w-full pt-2 lg:pt-0">
            <MapPin className="text-primary w-6 h-6 flex-shrink-0" />
            <input 
              type="text" 
              placeholder={t("heroWhere")} 
              value={searchParams.location}
              onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
              className="bg-transparent border-none outline-none text-dark w-full placeholder:text-dark/50 text-lg font-medium"
            />
          </div>
          <div className="flex-1 flex items-center gap-4 px-2 lg:px-4 border-b lg:border-b-0 lg:border-r border-dark/10 pb-4 lg:pb-0 w-full pt-4 lg:pt-0">
            <Calendar className="text-primary w-6 h-6 flex-shrink-0" />
            <input 
              type="date" 
              placeholder="Dates" 
              value={searchParams.date}
              onChange={(e) => setSearchParams({...searchParams, date: e.target.value})}
              className="bg-transparent border-none outline-none text-dark w-full placeholder:text-dark/50 text-lg font-medium cursor-pointer"
              style={{ colorScheme: 'light' }}
            />
          </div>
          <div className="flex-1 flex items-center gap-4 px-2 lg:px-4 pb-4 lg:pb-0 w-full pt-4 lg:pt-0">
            <Users className="text-primary w-6 h-6 flex-shrink-0" />
            <select 
              value={searchParams.guests}
              onChange={(e) => setSearchParams({...searchParams, guests: e.target.value})}
              className="bg-transparent border-none outline-none text-dark w-full appearance-none text-lg font-medium cursor-pointer"
            >
              <option value="1">1 {t("heroPerson")}</option>
              <option value="2">2 {t("heroPeople")}</option>
              <option value="3">3 {t("heroPeople")}</option>
              <option value="4+">4+ {t("heroPeople")}</option>
            </select>
          </div>
          <button type="submit" className="bg-accent text-light w-full lg:w-auto px-8 py-4 rounded-xl lg:rounded-full font-bold shadow-lg hover:shadow-accent/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 mt-4 lg:mt-0 text-lg">
            <Search className="w-5 h-5" /> {t("heroExplore")}
          </button>
        </form>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-20 lg:mt-0 w-full lg:absolute lg:bottom-12 lg:left-0 lg:right-0 z-20 flex justify-center pointer-events-none">
        <div className="flex flex-col items-center gap-2 animate-bounce pointer-events-auto">
          <span className="text-light/80 text-sm font-medium tracking-wide uppercase whitespace-nowrap">{t("heroScroll")}</span>
          <ChevronDown className="text-light w-6 h-6" />
        </div>
      </div>
    </section>
  );
}
