"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "EN" | "ID";

const dictionaries = {
  EN: {
    // Navbar
    navDestinations: "Destinations",
    navPackages: "Trip Packages",
    navGuides: "Local Guides",
    navCulture: "Culture",
    navCommunity: "Community",
    navBecomeGuide: "Become a Guide",
    navPlanTrip: "Plan My Trip",
    
    // Hero
    heroTitle: "Find What Others Miss.",
    heroSubtitle: "Krui, West Lampung — Indonesia's best-kept secret. Surf world-class waves, explore hidden beaches, and immerse in authentic Lampung culture with local guides.",
    heroWhere: "Where do you want to go?",
    heroDates: "Dates",
    heroPerson: "Person",
    heroPeople: "People",
    heroExplore: "Explore",
    heroScroll: "Scroll Down",

    // StatsBar
    statsCoastline: "km Coastline",
    statsDestinations: "Destinations",
    statsGuides: "Local Guides",
    statsRating: "Average Rating",

    // WhyKrui
    whyTitle: "Why Krui?",
    whyWavesTitle: "World-Class Waves",
    whyWavesDesc: "Pantai Tanjung Setia's 6-7m waves attract surfers globally. The long barrels and consistent swell make Krui a true surfer's paradise, away from the crowded lineups of Bali.",
    whyGemsTitle: "Hidden Gems",
    whyGemsDesc: "Most spots are only accessible with a local guide. Discover untouched beaches, hidden waterfalls, and secret snorkeling reefs that remain off the beaten path.",
    whyCultureTitle: "Living Culture",
    whyCultureDesc: "Ancient Lampung traditions are still alive in every village. Experience authentic ceremonies, taste rich culinary heritage, and learn traditional weaving techniques.",

    // FeaturedDestinations
    destTitle: "Top Destinations in Krui",
    destSubtitle: "From world-renowned surf breaks to hidden waterfalls and culturally rich villages, explore the best of what Krui has to offer.",
    destSeeAll: "See All Destinations",
    destExplore: "Explore Details",
    catSurfing: "Surfing",
    catSnorkeling: "Snorkeling",
    catPanorama: "Panorama",
    catCulture: "Culture",
    catFamily: "Family",
    catDiving: "Diving",

    // HowItWorks
    howTitle: "Plan Your Krui Trip in 3 Steps",
    howStep1Title: "Browse & Choose",
    howStep1Desc: "Explore our curated list of destinations, hidden gems, and ready-made trip packages.",
    howStep2Title: "Book a Local Guide",
    howStep2Desc: "Hire a verified local expert who knows the area best and can ensure a safe, authentic experience.",
    howStep3Title: "Discover Krui",
    howStep3Desc: "Immerse yourself in world-class waves, breathtaking nature, and genuine Lampung hospitality.",

    // FeaturedPackages
    pkgTitle: "Ready-Made Trip Packages",
    pkgSubtitle: "Don't want the hassle of planning? Choose from our curated itineraries designed by local experts.",
    pkgViewAll: "View All Packages",
    pkgBadgeBest: "Best Seller",
    pkgBadgeNew: "New",
    pkgPerPerson: "Per Person",
    pkgBook: "Book Now",
    pkgTitle1: "Surfer's Escape",
    pkgTitle2: "Hidden Gems Explorer",
    pkgTitle3: "Culture & Nature",
    pkgHigh1a: "Pantai Tanjung Setia",
    pkgHigh1b: "Surf Lessons",
    pkgHigh1c: "Beachfront Stay",
    pkgHigh2a: "Air Terjun Way Campang",
    pkgHigh2b: "Secret Beaches",
    pkgHigh2c: "Local Transport",
    pkgHigh3a: "Tapis Weaving",
    pkgHigh3b: "Desa Wisata Bumi Lebu",
    pkgHigh3c: "Traditional Dinner",

    // MeetGuides
    guideTitle: "Your Krui Experts",
    guideSeeAll: "See All 50+ Guides",
    guideTrips: "trips",
    guideSpeaks: "Speaks",
    guideView: "View Profile",
    guideSpec1: "Surfing & Beach Guide",
    guideSpec2: "Culture & Heritage",
    guideSpec3: "Nature & Hiking",
    guideSpec4: "Diving & Snorkeling",

    // CulturePreview
    culTitle: "Discover Lampung Culture",
    culAksaraDesc: "Ancient script at risk of extinction. Learn to write your name in traditional Had Lampung.",
    culTariDesc: "Sacred dance of the Saibatin people, performed during significant customary ceremonies.",
    culTenunDesc: "Gold-threaded weaving passed through generations, representing the pride of Lampung women.",
    culExplore: "Explore Lampung Culture \u2192",

    // TestimonialsAndCta
    testTitle: "What Travelers Say",
    test1rev: "Best surf trip of my life. My local guide knew every secret spot and exact swell timing.",
    test2rev: "Tidak menyangka Lampung memiliki tempat seindah ini. Kulinernya lezat dan warga lokal sangat ramah. Wajib kembali lagi!",
    test3rev: "The culture program was unexpectedly moving. Learning to weave Tapis with the village elders was an honor.",
    ctaTitle: "Are You From Krui?",
    ctaDesc: "Turn your local knowledge into sustainable income. Follow your passion, meet new friends globally, and join 50+ guides already earning on DiscoverKrui.",
    ctaBtn: "Become a Guide — It's Free",

    // Footer
    footDesc: "Find What Others Miss. Connect with local experts, explore hidden beaches, and experience the authentic culture of West Lampung.",
    footExplore: "Explore",
    footCompany: "Company",
    footSupport: "Support",
    footAbout: "About Us",
    footCareers: "Careers",
    footPress: "Press",
    footBlog: "Blog",
    footFAQ: "Help Center & FAQ",
    footTerms: "Terms of Service",
    footPrivacy: "Privacy Policy",
    footContact: "Contact Us",
    footCopy: "DiscoverKrui. Made with \u2764\ufe0f for Krui.",
  },
  ID: {
    // Navbar
    navDestinations: "Destinasi",
    navPackages: "Paket Perjalanan",
    navGuides: "Pemandu Lokal",
    navCulture: "Budaya",
    navCommunity: "Komunitas",
    navBecomeGuide: "Menjadi Pemandu",
    navPlanTrip: "Rencanakan Perjalanan",

    // Hero
    heroTitle: "Temukan Surga Tersembunyi.",
    heroSubtitle: "Krui, Lampung Barat \u2014 Rahasia terbaik Indonesia. Nikmati ombak kelas dunia, jelajahi deretan pantai yang sepi, serta rasakan budaya lokal yang autentik bersama pemandu asli daerah.",
    heroWhere: "Ke mana Anda ingin pergi?",
    heroDates: "Tanggal",
    heroPerson: "Orang",
    heroPeople: "Orang",
    heroExplore: "Eksplorasi",
    heroScroll: "Gulir ke Bawah",

    // StatsBar
    statsCoastline: "km Garis Pantai",
    statsDestinations: "Destinasi",
    statsGuides: "Pemandu Lokal",
    statsRating: "Rata-rata Penilaian",

    // WhyKrui
    whyTitle: "Mengapa Krui?",
    whyWavesTitle: "Ombak Kelas Dunia",
    whyWavesDesc: "Ombak setinggi 6-7 meter di Pantai Tanjung Setia menarik peselancar dari seluruh dunia. Gulungan ombak yang panjang dan konsisten menjadikan Krui surga bagi para peselancar, jauh dari keramaian Bali.",
    whyGemsTitle: "Permata Tersembunyi",
    whyGemsDesc: "Banyak lokasi menarik yang hanya dapat diakses bersama pemandu lokal. Temukan pantai perawan, air terjun tersembunyi, dan terumbu karang rahasia yang masih asri.",
    whyCultureTitle: "Budaya yang Hidup",
    whyCultureDesc: "Tradisi kuno masyarakat Lampung masih lestari di setiap desa. Rasakan pengalaman mengikuti upacara adat autentik, cicipi warisan kuliner yang kaya, dan pelajari menenun tradisional.",

    // FeaturedDestinations
    destTitle: "Destinasi Terbaik di Krui",
    destSubtitle: "Dari spot selancar terkenal di dunia hingga air terjun tersembunyi dan desa kaya akan budaya, jelajahi semua keindahan yang ditawarkan oleh Krui.",
    destSeeAll: "Lihat Semua Destinasi",
    destExplore: "Eksplorasi Detail",
    catSurfing: "Selancar",
    catSnorkeling: "Snorkeling",
    catPanorama: "Panorama",
    catCulture: "Budaya",
    catFamily: "Keluarga",
    catDiving: "Menyelam",

    // HowItWorks
    howTitle: "Perjalanan ke Krui dalam 3 Langkah",
    howStep1Title: "Telusuri & Pilih",
    howStep1Desc: "Jelajahi daftar pilihan destinasi kami, lokasi tersembunyi, dan paket perjalanan yang siap Anda gunakan.",
    howStep2Title: "Pesan Pemandu Lokal",
    howStep2Desc: "Sewa seorang pakar lokal terverifikasi yang sangat memahami area tersebut dan dapat memastikan pengalaman yang aman serta autentik.",
    howStep3Title: "Jelajahi Krui",
    howStep3Desc: "Hanyutkan diri Anda dalam ombak kelas dunia, alam yang menakjubkan, dan keramahtamahan asli masyarakat Lampung.",

    // FeaturedPackages
    pkgTitle: "Paket Perjalanan Siap Pakai",
    pkgSubtitle: "Tidak ingin repot merencanakan? Pilih dari rencana perjalanan pilihan kami yang dirancang khusus oleh para ahli lokal.",
    pkgViewAll: "Lihat Semua Paket",
    pkgBadgeBest: "Terlaris",
    pkgBadgeNew: "Baru",
    pkgPerPerson: "Per Orang",
    pkgBook: "Pesan Sekarang",
    pkgTitle1: "Liburan Peselancar",
    pkgTitle2: "Penjelajah Permata Tersembunyi",
    pkgTitle3: "Budaya & Alam",
    pkgHigh1a: "Pantai Tanjung Setia",
    pkgHigh1b: "Pelajaran Selancar",
    pkgHigh1c: "Penginapan Tepi Pantai",
    pkgHigh2a: "Air Terjun Way Campang",
    pkgHigh2b: "Pantai Rahasia",
    pkgHigh2c: "Transportasi Lokal",
    pkgHigh3a: "Menenun Tapis",
    pkgHigh3b: "Desa Wisata Bumi Lebu",
    pkgHigh3c: "Makan Malam Tradisional",

    // MeetGuides
    guideTitle: "Pakar Krui Anda",
    guideSeeAll: "Lihat Semua 50+ Pemandu",
    guideTrips: "perjalanan",
    guideSpeaks: "Bahasa",
    guideView: "Lihat Profil",
    guideSpec1: "Pemandu Selancar & Pantai",
    guideSpec2: "Budaya & Warisan",
    guideSpec3: "Alam & Pendakian",
    guideSpec4: "Menyelam & Snorkeling",

    // CulturePreview
    culTitle: "Jelajahi Budaya Lampung",
    culAksaraDesc: "Aksara kuno yang berisiko punah. Pelajari cara menulis nama Anda dengan aksara tradisional Had Lampung.",
    culTariDesc: "Tarian sakral masyarakat adat Saibatin yang dipertunjukkan pada upacara adat penting.",
    culTenunDesc: "Tenun benang emas yang diwariskan secara turun-temurun, melambangkan kebanggaan wanita Lampung.",
    culExplore: "Eksplorasi Budaya Lampung \u2192",

    // TestimonialsAndCta
    testTitle: "Apa Kata Wisatawan",
    test1rev: "Perjalanan selancar terbaik dalam hidup saya. Pemandu lokal saya mengetahui setiap spot rahasia dan waktu ombak yang tepat.",
    test2rev: "Tidak menyangka Lampung memiliki tempat seindah ini. Kulinernya lezat dan warga lokal sangat ramah. Wajib kembali lagi!",
    test3rev: "Program budayanya sungguh tak terlupakan. Belajar menenun Tapis bersama para tetua desa adalah sebuah kehormatan.",
    ctaTitle: "Apakah Anda Berasal dari Krui?",
    ctaDesc: "Ubah pengetahuan lokal Anda menjadi pendapatan yang berkelanjutan. Ikuti renjana Anda, temui teman baru dari seluruh dunia, dan bergabunglah bersama lebih dari 50 pemandu.",
    ctaBtn: "Menjadi Pemandu \u2014 Daftar Gratis",

    // Footer
    footDesc: "Temukan Apa yang Terlewatkan oleh Orang Lain. Terhubung dengan pakar lokal, jelajahi pantai tersembunyi, dan rasakan budaya autentik Lampung Barat.",
    footExplore: "Eksplorasi",
    footCompany: "Perusahaan",
    footSupport: "Bantuan",
    footAbout: "Tentang Kami",
    footCareers: "Karier",
    footPress: "Pers",
    footBlog: "Blog",
    footFAQ: "Pusat Bantuan & FAQ",
    footTerms: "Syarat dan Ketentuan",
    footPrivacy: "Kebijakan Privasi",
    footContact: "Hubungi Kami",
    footCopy: "DiscoverKrui. Dibuat dengan \u2764\ufe0f untuk Krui.",
  }
};

export type DictionaryKey = keyof typeof dictionaries.EN;

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: (key: DictionaryKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("EN");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem("discover_krui_lang") as Language;
      if (savedLang === "EN" || savedLang === "ID") {
        setLang(savedLang);
      }
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "EN" ? "ID" : "EN";
    setLang(newLang);
    localStorage.setItem("discover_krui_lang", newLang);
  };

  const t = (key: DictionaryKey): string => {
    return dictionaries[lang][key] || key; 
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
