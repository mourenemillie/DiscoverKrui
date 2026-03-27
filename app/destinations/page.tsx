"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Map, Grid, ChevronDown, ListFilter, Star, MapPin } from "lucide-react";

export default function DestinationsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Beach", "Surfing", "Diving", "Culture", "Nature", "Family"];

  const destinations = [
    {
      id: 1,
      name: "Pantai Tanjung Setia",
      category: "Surfing",
      rating: 4.9,
      reviews: 1284,
      distance: "2.1km",
      guideFee: "Rp 350.000",
      description: "World-class 6-7m waves attracting surfers globally. A true surfer's paradise.",
      image: "/images/pantai_tanjung_setia.jpg",
      color: "bg-primary",
    },
    {
      id: 2,
      name: "Pulau Pisang",
      category: "Diving",
      rating: 4.8,
      reviews: 843,
      distance: "12km + Boat",
      guideFee: "Rp 450.000",
      description: "Pristine island vibes with crystal clear water, perfect for snorkeling and diving.",
      image: "/images/diving_in_pulau_pisan.jpg",
      color: "bg-accent",
    },
    {
      id: 3,
      name: "Bukit Selalau",
      category: "Nature",
      rating: 4.7,
      reviews: 512,
      distance: "0.5km",
      guideFee: "Rp 150.000",
      description: "The best panoramic view of Krui's coastline, especially stunning during sunset.",
      image: "/images/bukit_selalau.jpg",
      color: "bg-gold",
    },
    {
      id: 4,
      name: "Desa Wisata Bumi Lebu",
      category: "Culture",
      rating: 4.8,
      reviews: 320,
      distance: "8km",
      guideFee: "Rp 250.000",
      description: "Experience authentic Lampung traditions, Tapis weaving, and cultural heritage.",
      image: "/images/desa.jpg",
      color: "bg-secondary text-dark",
    },
    {
      id: 5,
      name: "Pantai Walur",
      category: "Family",
      rating: 4.6,
      reviews: 621,
      distance: "4km",
      guideFee: "Rp 200.000",
      description: "Calm waters and soft white sand make this the perfect spot for family picnics.",
      image: "/images/family.jpg",
      color: "bg-primary",
    },
    {
      id: 6,
      name: "Labuhan Jukung",
      category: "Beach",
      rating: 4.7,
      reviews: 890,
      distance: "1km",
      guideFee: "Rp 150.000",
      description: "The iconic center of Krui's beach life. Great for casual surfing and sunsets.",
      image: "/images/surfing.jpg",
      color: "bg-accent",
    },
    {
      id: 7,
      name: "Air Terjun Way Wangi",
      category: "Nature",
      rating: 4.5,
      reviews: 145,
      distance: "15km",
      guideFee: "Rp 300.000",
      description: "A hidden waterfall deep in the jungle, requiring a short adventurous hike.",
      image: "/images/angel_waterfall.jpg",
      color: "bg-gold",
    },
    {
      id: 8,
      name: "Pantai Mandiri",
      category: "Beach",
      rating: 4.6,
      reviews: 402,
      distance: "6km",
      guideFee: "Rp 200.000",
      description: "Miles of untouched black sand beach facing the Indian Ocean.",
      image: "/images/pantai_tanjung_setia.jpg",
      color: "bg-primary",
    },
  ];

  return (
    <main className="min-h-screen bg-light">
      {/* HEADER SECTION */}
      <section className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/coastline.jpg')" }}
        ></div>
        <div className="absolute inset-0 z-10 bg-dark/50"></div>

        <div className="container relative z-20 mx-auto px-6 text-center text-light mt-16">
          <div className="flex items-center justify-center gap-2 mb-4 text-sm font-medium opacity-80 uppercase tracking-widest">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Destinations</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold drop-shadow-lg">
            Explore Krui's Hidden Wonders
          </h1>
        </div>
      </section>

      {/* FILTER BAR SECTION */}
      <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-dark/5 py-4">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Categories */}
            <div className="flex overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 gap-2 hide-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full whitespace-nowrap font-medium text-sm transition-colors ${
                    activeCategory === cat 
                      ? "bg-dark text-gold" 
                      : "bg-light text-dark/70 hover:bg-dark/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto">
              {/* Search */}
              <div className="relative flex-1 lg:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-dark/40" />
                <input 
                  type="text" 
                  placeholder="Search destination..." 
                  className="w-full pl-9 pr-4 py-2 bg-light rounded-full border border-dark/10 focus:outline-none focus:border-primary text-sm"
                />
              </div>

              {/* Sort */}
              <button className="flex items-center gap-2 px-4 py-2 bg-light border border-dark/10 rounded-full text-sm font-medium hover:bg-dark/5 transition-colors">
                <ListFilter className="w-4 h-4" />
                <span className="hidden sm:inline">Sort</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* View Toggle */}
              <div className="flex bg-light border border-dark/10 rounded-full p-1 hidden sm:flex">
                <button 
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-full transition-colors ${viewMode === "grid" ? "bg-white shadow-sm text-primary" : "text-dark/40 hover:text-dark"}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setViewMode("map")}
                  className={`p-1.5 rounded-full transition-colors ${viewMode === "map" ? "bg-white shadow-sm text-primary" : "text-dark/40 hover:text-dark"}`}
                >
                  <Map className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRID DESTINASI */}
      <section className="py-12 bg-light min-h-[50vh]">
        <div className="container mx-auto px-6 lg:px-12">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations
               .filter(d => activeCategory === "All" || d.category === activeCategory)
               .map((dest) => (
                <div key={dest.id} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-dark/5">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image 
                      src={dest.image} 
                      alt={dest.name} 
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${dest.color} ${dest.color.includes('text-dark') ? '' : 'text-light'} shadow-sm`}>
                        {dest.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold font-heading text-dark line-clamp-1" title={dest.name}>{dest.name}</h3>
                      <div className="flex items-center gap-1 text-sm font-bold bg-gold/10 px-2 py-1 rounded-lg text-dark mt-1">
                        <Star className="w-3 h-3 text-gold fill-current" /> {dest.rating}
                      </div>
                    </div>
                    
                    <p className="text-dark/60 text-sm mb-4 line-clamp-2 min-h-[40px]">
                      {dest.description}
                    </p>

                    <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-dark/70 mb-6 bg-secondary/20 p-4 rounded-2xl mt-auto">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-medium">{dest.distance}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-dark/50 uppercase tracking-wider">Reviews</span>
                        <span className="font-medium">({dest.reviews})</span>
                      </div>
                      <div className="col-span-2 flex items-center gap-2 border-t border-dark/5 pt-3">
                        <span className="text-xs text-dark/50 uppercase tracking-wider">Est. Guide Fee</span>
                        <span className="font-bold text-accent">{dest.guideFee}<span className="text-dark/50 font-normal text-xs">/day</span></span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link href={`/destinations/${dest.id}`} className="flex-1 py-3 rounded-full border-2 border-primary text-primary font-bold text-center hover:bg-primary hover:text-light transition-colors">
                        Explore
                      </Link>
                      <Link href={`/guides?destination=${dest.id}`} className="flex-1 py-3 rounded-full bg-accent text-light font-bold text-center hover:bg-accent/90 shadow-md hover:shadow-accent/40 transition-all">
                        Book Guide
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-[600px] w-full bg-dark/5 rounded-3xl flex items-center justify-center border-2 border-dashed border-dark/10">
              <div className="text-center text-dark/50 flex flex-col items-center gap-4">
                <Map className="w-16 h-16 opacity-50" />
                <p className="font-medium text-lg">Interactive Map View Placeholder</p>
                <p className="text-sm">(Would naturally integrate with Leaflet.js or Mapbox here)</p>
              </div>
            </div>
          )}
        </div>
      </section>

    </main>
  );
}
