"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, CheckCircle2, ChevronDown, MessageCircle, SlidersHorizontal, Map, Languages, Calendar } from "lucide-react";

export default function GuidesPage() {
  const [activeSpecialty, setActiveSpecialty] = useState("All");

  const specialties = ["All", "Surfing", "Diving", "Culture", "Nature", "Family", "Photography"];

  const guides = [
    {
      id: "ahmad-fauzi",
      name: "Ahmad Fauzi",
      specialty: "Surfing & Beach Expert",
      rating: 4.9,
      trips: 127,
      price: "350.000",
      languages: ["ID", "EN"],
      destinations: ["Tanjung Setia", "Labuhan Jukung", "Mandiri Beach"],
      image: "/images/boy.png",
    },
    {
      id: "ratna-sari",
      name: "Ratna Sari",
      specialty: "Culture & Heritage",
      rating: 4.8,
      trips: 89,
      price: "300.000",
      languages: ["ID", "EN"],
      destinations: ["Bumi Lebu", "Pugung Tampak", "Krui Pasar"],
      image: "/images/avatar_1.jpg",
    },
    {
      id: "budi-santoso",
      name: "Budi Santoso",
      specialty: "Nature & Hiking Guide",
      rating: 4.7,
      trips: 203,
      price: "325.000",
      languages: ["ID"],
      destinations: ["Way Campang", "Bukit Selalau", "Taman Nasional"],
      image: "/images/traveler.png",
    },
    {
      id: "maya-putri",
      name: "Maya Putri",
      specialty: "Diving & Snorkeling",
      rating: 4.9,
      trips: 156,
      price: "400.000",
      languages: ["ID", "EN", "JP"],
      destinations: ["Pulau Pisang", "Tanjung Setia Reef", "Gua Matu"],
      image: "/images/boy.png",
    },
  ];

  return (
    <main className="min-h-screen bg-light">
      {/* HEADER SECTION */}
      <section className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/desa.jpg')" }}
        ></div>
        <div className="absolute inset-0 z-10 bg-dark/50 backdrop-blur-sm"></div>

        <div className="container relative z-20 mx-auto px-6 text-center text-light mt-16">
          <div className="flex items-center justify-center gap-2 mb-4 text-sm font-medium opacity-80 uppercase tracking-widest">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Local Guides</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold drop-shadow-lg mb-6 text-balance">
            Meet Your Krui Experts
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-light/80">
            50+ verified local guides ready to show you the real Krui and safely navigate its hidden gems.
          </p>
        </div>
      </section>

      {/* FILTER BAR SECTION */}
      <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-dark/5 py-4">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          
          {/* Specialties Filter */}
          <div className="flex overflow-x-auto w-full xl:w-auto pb-2 xl:pb-0 gap-2 hide-scrollbar">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => setActiveSpecialty(spec)}
                className={`px-5 py-2 rounded-full whitespace-nowrap font-medium text-sm transition-colors ${
                  activeSpecialty === spec 
                    ? "bg-primary text-light" 
                    : "bg-light border border-dark/10 text-dark/70 hover:bg-dark/5"
                }`}
              >
                {spec}
              </button>
            ))}
          </div>

          {/* Deep Filters */}
          <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-light border border-dark/10 rounded-full text-sm font-medium hover:bg-dark/5 transition-colors">
              <Languages className="w-4 h-4 text-primary" /> 
              <span className="hidden sm:inline">Language:</span> All <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-light border border-dark/10 rounded-full text-sm font-medium hover:bg-dark/5 transition-colors">
              <span className="font-bold text-dark w-4 text-center">Rp</span> 
              <span className="hidden sm:inline">Price</span> <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-light border border-dark/10 rounded-full text-sm font-medium hover:bg-dark/5 transition-colors">
              <Calendar className="w-4 h-4 text-primary" /> 
              Date <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-light border border-dark/10 rounded-full text-sm font-medium hover:bg-dark/5 transition-colors">
              <SlidersHorizontal className="w-4 h-4 text-dark/50" />
              <span>Sort</span> <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          
        </div>
      </section>

      {/* GRID GUIDE */}
      <section className="py-12 bg-light min-h-[50vh]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {guides.map((guide) => (
              <div key={guide.id} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-dark/5 flex flex-col">
                
                {/* Header / Avatar */}
                <div className="relative h-24 bg-gradient-to-r from-primary/10 to-accent/5">
                  <div className="absolute -bottom-12 left-6">
                    <div className="relative w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-light">
                      <Image 
                        src={guide.image} 
                        alt={guide.name} 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-bold flex items-center gap-1 text-dark shadow-sm">
                    <Star className="w-4 h-4 text-gold fill-current" /> {guide.rating}
                  </div>
                </div>

                <div className="p-6 pt-16 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold font-heading text-dark">{guide.name}</h3>
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  </div>
                  <p className="text-primary font-medium text-sm mb-4">{guide.specialty}</p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-dark/70 mb-5 pb-5 border-b border-dark/5">
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 text-dark/40" /> {guide.trips} trips
                    </div>
                    <div className="flex items-center gap-1 font-medium bg-secondary/30 px-2 py-0.5 rounded-md text-dark">
                      <Languages className="w-3.5 h-3.5" /> {guide.languages.join(", ")}
                    </div>
                  </div>

                  <div className="mb-6 flex-1">
                    <h4 className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-3">Top Destinations</h4>
                    <ul className="flex flex-col gap-2">
                      {guide.destinations.map((dest, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-dark/80 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-accent" /> {dest}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-4 mt-auto">
                    <div className="flex items-center justify-between px-4 py-3 bg-light rounded-xl border border-dark/5">
                      <span className="text-sm text-dark/60 font-medium">Daily Rate</span>
                      <span className="text-lg font-bold font-heading text-dark">Rp {guide.price}</span>
                    </div>

                    <div className="flex gap-2">
                      <Link href={`/guides/${guide.id}`} className="flex-1 py-3 rounded-full border-2 border-primary text-primary font-bold text-center text-sm shadow-sm hover:bg-primary hover:text-light transition-colors">
                        View Profile
                      </Link>
                      <Link href={`/guides/${guide.id}#book`} className="flex-1 py-3 rounded-full bg-accent text-light font-bold text-center text-sm shadow-lg hover:shadow-accent/40 transition-all">
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
