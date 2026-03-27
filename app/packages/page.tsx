"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ListFilter, ChevronDown, Clock, CheckCircle2, Star, Users, Briefcase } from "lucide-react";

export default function PackagesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const packages = [
    {
      id: "surfers-escape",
      title: "Surfer's Escape",
      duration: "3D2N",
      price: "1.200.000",
      image: "/images/surfing.jpg",
      badge: "Best Seller",
      category: "Surfing",
      rating: 4.9,
      reviews: 142,
      highlights: ["Tanjung Setia Waves", "Surf Lessons", "Beachfront Stay"],
      includes: ["Guide", "Penginapan lokal", "Makan 3x", "Rental Papan Selancar"],
    },
    {
      id: "hidden-gems-explorer",
      title: "Hidden Gems Explorer",
      duration: "2D1N",
      price: "850.000",
      image: "/images/pulau_pisang_tourist.jpg",
      badge: "",
      category: "Nature",
      rating: 4.8,
      reviews: 95,
      highlights: ["Way Campang Waterfall", "Pulau Pisang Snorkeling", "Secret Beaches"],
      includes: ["Guide", "Penginapan", "Makan", "Transportasi Lokal"],
    },
    {
      id: "culture-nature",
      title: "Culture & Nature",
      duration: "2D1N",
      price: "950.000",
      image: "/images/tapis_lokal.jpg",
      badge: "New",
      category: "Culture",
      rating: 4.8,
      reviews: 67,
      highlights: ["Tapis Weaving", "Bumi Lebu Village", "Traditional Dinner"],
      includes: ["Guide budaya", "Workshop tenun", "Penginapan homestay"],
    },
    {
      id: "family-beach-day",
      title: "Family Beach Day",
      duration: "1 Day",
      price: "450.000",
      image: "/images/family.jpg",
      badge: "",
      category: "Family",
      rating: 4.7,
      reviews: 210,
      highlights: ["Pantai Walur", "Labuhan Jukung", "Seafood Lunch"],
      includes: ["Guide", "Makan Siang", "Snorkeling equipment"],
    },
    {
      id: "krui-complete",
      title: "Krui Complete",
      duration: "5D4N",
      price: "2.800.000",
      image: "/images/turis_melokal.jpg",
      badge: "Best Value",
      category: "All",
      rating: 5.0,
      reviews: 48,
      highlights: ["All Top Destinations", "Premium Stay", "Full Experience"],
      includes: ["Semua aktivitas", "Penginapan premium", "Makan & Transportasi"],
    },
  ];

  return (
    <main className="min-h-screen bg-light">
      {/* HEADER SECTION */}
      <section className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/avatar_1.jpg')" }}
        ></div>
        <div className="absolute inset-0 z-10 bg-dark/60"></div>

        <div className="container relative z-20 mx-auto px-6 text-center text-light mt-16">
          <div className="flex items-center justify-center gap-2 mb-4 text-sm font-medium opacity-80 uppercase tracking-widest">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Trip Packages</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold drop-shadow-lg mb-6">
            Curated Krui Experiences
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-light/80">
            Hassle-free trips designed by local experts. Just show up and let us handle the rest.
          </p>
        </div>
      </section>

      {/* FILTER & SORT BAR */}
      <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-dark/5 py-4">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Filters */}
            <div className="flex flex-wrap md:flex-nowrap gap-3 w-full lg:w-auto overflow-x-auto hide-scrollbar pb-2 lg:pb-0">
              <button className="flex items-center gap-2 px-4 py-2 bg-light border border-dark/10 rounded-full text-sm font-medium whitespace-nowrap hover:bg-dark/5 transition-colors">
                <Clock className="w-4 h-4" /> Duration <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-light border border-dark/10 rounded-full text-sm font-medium whitespace-nowrap hover:bg-dark/5 transition-colors">
                <Briefcase className="w-4 h-4" /> Budget <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-light border border-dark/10 rounded-full text-sm font-medium whitespace-nowrap hover:bg-dark/5 transition-colors">
                <ListFilter className="w-4 h-4" /> Category <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-light border border-dark/10 rounded-full text-sm font-medium whitespace-nowrap hover:bg-dark/5 transition-colors">
                <Users className="w-4 h-4" /> People <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto border-t lg:border-t-0 pt-3 lg:pt-0 border-dark/5">
              <span className="text-sm font-medium text-dark/50 hidden md:inline">Sort by:</span>
              <select className="px-4 py-2 bg-light border border-dark/10 rounded-full text-sm font-medium focus:outline-none focus:border-primary appearance-none cursor-pointer pr-8 relative">
                <option>Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Duration: Short to Long</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES LISTING */}
      <section className="py-12 bg-light min-h-[50vh]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-dark/5 flex flex-col md:flex-row group">
                
                {/* Image Section */}
                <div className="relative h-64 md:h-auto md:w-2/5 lg:w-1/3 overflow-hidden flex-shrink-0">
                  {pkg.badge && (
                    <div className="absolute top-4 left-4 z-20 bg-accent text-light px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                      {pkg.badge}
                    </div>
                  )}
                  <Image 
                    src={pkg.image} 
                    alt={pkg.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-bold flex items-center gap-1 text-dark shadow-sm">
                    <Star className="w-4 h-4 text-gold fill-current" /> {pkg.rating}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-dark">{pkg.title}</h3>
                  </div>

                  <div className="flex items-center gap-3 mb-6 text-sm">
                    <div className="flex items-center gap-1 font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      <Clock className="w-4 h-4" /> {pkg.duration}
                    </div>
                    <span className="text-dark/50">•</span>
                    <span className="text-dark/70 font-medium">{pkg.reviews} bookings</span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 flex-1">
                    {/* Highlights */}
                    <div>
                      <h4 className="text-sm font-bold text-dark/50 uppercase tracking-widest mb-3">Highlights</h4>
                      <ul className="flex flex-col gap-2">
                        {pkg.highlights.map((highlight, j) => (
                          <li key={j} className="flex items-center gap-2 text-dark/80 font-medium">
                            <Star className="w-4 h-4 text-gold" /> {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Includes */}
                    <div>
                      <h4 className="text-sm font-bold text-dark/50 uppercase tracking-widest mb-3">Includes</h4>
                      <ul className="flex flex-col gap-2">
                        {pkg.includes.slice(0,3).map((inc, j) => (
                          <li key={j} className="flex items-center gap-2 text-dark/80 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary" /> {inc}
                          </li>
                        ))}
                        {pkg.includes.length > 3 && (
                          <li className="text-dark/50 text-xs italic pl-6">+ More</li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-dark/5 mt-auto">
                    <div>
                      <span className="text-sm font-medium text-dark/50 block mb-1">Price per person</span>
                      <span className="text-2xl font-bold font-heading text-dark">Rp {pkg.price}</span>
                    </div>
                    <div className="flex gap-3 w-full sm:w-auto">
                      <Link href={`/packages/${pkg.id}`} className="flex-1 sm:flex-none px-6 py-3 rounded-full border border-primary text-primary font-bold text-center hover:bg-primary hover:text-light transition-colors">
                        See Details
                      </Link>
                      <Link href={`/packages/${pkg.id}#book`} className="flex-1 sm:flex-none px-8 py-3 rounded-full bg-accent text-light font-bold text-center shadow-lg hover:shadow-accent/40 hover:-translate-y-0.5 transition-all">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
