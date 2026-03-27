"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Heart, Share2, Filter, Search, PlusCircle, TrendingUp, Compass, Grid, Lightbulb, MapPin, ChevronRight, MessageCircle } from "lucide-react";

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("stories");
  const [activeStoryFilter, setActiveStoryFilter] = useState("Terbaru");

  // DUMMY DATA: TRIP STORIES
  const stories = [
    {
      id: 1,
      title: "Chasing the Perfect Barrel at Tanjung Setia",
      author: "Mark S.",
      country: "🇺🇸",
      date: "2 days ago",
      image: "/images/surfing.jpg",
      excerpt: "I've surfed Bali, Lombok, and Sumbawa, but the consistency of the waves here in Krui, specifically Tanjung Setia, is unmatched. We had 6 footers clean offshore every single morning...",
      likes: 124,
      comments: 18,
      tags: ["Surfing", "Tanjung Setia"]
    },
    {
      id: 2,
      title: "Pecel Lele & Sunset di Bukit Selalau",
      author: "Dian P.",
      country: "🇮🇩",
      date: "1 week ago",
      image: "/images/turis_melokal.jpg",
      excerpt: "Sore yang luar biasa di Krui. Setelah main air di Labuhan Jukung, kami naik ke Bukit Selalau untuk lihat sunset sambil makan pecel lele lokal. Definisi bahagia itu sederhana...",
      likes: 89,
      comments: 5,
      tags: ["Family", "Culinary"]
    },
    {
      id: 3,
      title: "Mempelajari Tenun Tapis di Bumi Lebu",
      author: "Sarah L.",
      country: "🇬🇧",
      date: "2 weeks ago",
      image: "/images/tapis_lokal.jpg",
      excerpt: "Today we spent 4 hours with the incredible women of Bumi Lebu village learning the ancient art of Tapis weaving. The dedication and intricate gold threading is a true masterpiece...",
      likes: 215,
      comments: 32,
      tags: ["Culture", "Bumi Lebu"]
    }
  ];

  // DUMMY DATA: FORUM
  const questions = [
    { title: "Best time to surf at Tanjung Setia?", author: "Luke", replies: 12, hot: true, tag: "Activities" },
    { title: "How to get from Bandung to Krui? (Bus vs Flight)", author: "Anton", replies: 8, hot: false, tag: "Transportation" },
    { title: "Is Krui safe for solo female traveler?", author: "Jessica", replies: 15, hot: true, tag: "Safety" },
    { title: "Budget homestay recommendations near Labuhan Jukung?", author: "Rizal", replies: 4, hot: false, tag: "Accommodation" },
    { title: "Cash or QRIS? How widely accepted are digital payments?", author: "Emma", replies: 6, hot: false, tag: "Budget" },
  ];

  // DUMMY DATA: GALLERY
  const gallery = [
     "/images/buih_ombak.jpg",
     "/images/coastline.jpg",
     "/images/desa.jpg",
     "/images/family.jpg",
     "/images/fun.jpg",
     "/images/nelayan_laut_jernih.jpg",
     "/images/pantai_tanjung_setia.jpg",
     "/images/pulau_pisang.jpg"
  ];

  // DUMMY DATA: TIPS
  const tips = [
    { title: "Krui Surf Seasons Explained", icon: <Compass className="w-6 h-6 text-primary" />, desc: "Find out the best months for beginners vs pro surfers." },
    { title: "Ultimate Packing List", icon: <Lightbulb className="w-6 h-6 text-gold" />, desc: "What to bring for a 1-week trip to West Lampung." },
    { title: "Local Transport Guide", icon: <MapPin className="w-6 h-6 text-accent" />, desc: "Navigating Damri buses, local ojek, and scooter rentals." }
  ];

  return (
    <main className="min-h-screen bg-light">
      
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-16 bg-dark text-light overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
          style={{ backgroundImage: "url('/images/family.jpg')" }}
        ></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark to-transparent"></div>

        <div className="container relative z-20 mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            The Krui Traveler Community
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-light/80 mb-10">
            Share your adventures, ask questions, and connect with fellow explorers and local guides.
          </p>

          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
             <div className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl flex-1 min-w-[150px]">
               <h3 className="text-3xl font-heading font-bold text-gold">2.4k+</h3>
               <span className="text-xs uppercase tracking-widest text-light/70 font-bold">Members</span>
             </div>
             <div className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl flex-1 min-w-[150px]">
               <h3 className="text-3xl font-heading font-bold text-accent">890+</h3>
               <span className="text-xs uppercase tracking-widest text-light/70 font-bold">Trip Stories</span>
             </div>
             <div className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl flex-1 min-w-[150px]">
               <h3 className="text-3xl font-heading font-bold text-primary">150+</h3>
               <span className="text-xs uppercase tracking-widest text-light/70 font-bold">Q&A Answered</span>
             </div>
          </div>
        </div>
      </section>

      {/* TABS NAVIGATION */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-dark/5 pt-4">
        <div className="container mx-auto px-6 lg:px-12 flex overflow-x-auto hide-scrollbar">
          {[
            { id: "stories", label: "Trip Stories", icon: <Compass className="w-4 h-4" /> },
            { id: "qa", label: "Q&A Forum", icon: <MessageSquare className="w-4 h-4" /> },
            { id: "gallery", label: "Photo Gallery", icon: <Grid className="w-4 h-4" /> },
            { id: "tips", label: "Tips & Tricks", icon: <Lightbulb className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 font-bold text-sm border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.id 
                  ? "border-primary text-primary" 
                  : "border-transparent text-dark/50 hover:text-dark"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* TAB CONTENT: TRIP STORIES */}
      {activeTab === "stories" && (
        <section className="py-12 animate-fade-in-up">
          <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12">
            
            {/* Main Feed */}
            <div className="lg:w-2/3 flex flex-col gap-8">
              {/* Header & Filters */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-dark/10 pb-6">
                <div className="flex overflow-x-auto gap-2 hide-scrollbar">
                   {["Terbaru", "Terpopuler", "Surfing", "Culture", "Family"].map((f) => (
                     <button 
                       key={f}
                       onClick={() => setActiveStoryFilter(f)}
                       className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                         activeStoryFilter === f ? "bg-dark text-white" : "bg-dark/5 text-dark/60 hover:bg-dark/10"
                       }`}
                     >
                       {f}
                     </button>
                   ))}
                </div>
              </div>

              {/* Feed Posts */}
              {stories.map(story => (
                <div key={story.id} className="bg-white rounded-3xl border border-dark/5 shadow-sm overflow-hidden flex flex-col group">
                  <div className="p-6 flex items-center justify-between border-b border-dark/5">
                    <div className="flex items-center gap-3">
                      <Image src={`https://ui-avatars.com/api/?name=${story.author}&background=random`} alt={story.author} width={40} height={40} className="rounded-full" />
                      <div>
                        <h4 className="font-bold text-dark text-sm leading-tight flex items-center gap-1">{story.author} <span>{story.country}</span></h4>
                        <span className="text-xs text-dark/40 font-medium">{story.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                    <Image src={story.image} alt={story.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                       {story.tags.map((t, i) => (
                         <span key={i} className="text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded-md">{t}</span>
                       ))}
                    </div>
                    <h3 className="text-2xl font-bold font-heading mb-3 line-clamp-2">{story.title}</h3>
                    <p className="text-dark/70 text-sm leading-relaxed mb-6">
                      {story.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-dark/5">
                       <div className="flex items-center gap-4 text-dark/60 text-sm font-medium">
                          <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors"><Heart className="w-5 h-5" /> {story.likes}</button>
                          <button className="flex items-center gap-1.5 hover:text-primary transition-colors"><MessageCircle className="w-5 h-5" /> {story.comments}</button>
                       </div>
                       <button className="hover:bg-dark/5 p-2 rounded-full transition-colors"><Share2 className="w-5 h-5 text-dark/60" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar CTA */}
            <div className="lg:w-1/3">
               <div className="sticky top-40 bg-white rounded-3xl p-8 border border-dark/10 shadow-lg text-center">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                     <PlusCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-3">Share Your Experience</h3>
                  <p className="text-dark/60 text-sm mb-8">Inspire others by sharing your Krui itinerary, photos, and local guide recommendations.</p>
                  <button className="w-full py-3 bg-primary text-light font-bold rounded-full hover:bg-dark transition-colors shadow-md flex justify-center items-center gap-2">
                    <PlusCircle className="w-5 h-5" /> Write a Story
                  </button>
               </div>
            </div>

          </div>
        </section>
      )}

      {/* TAB CONTENT: Q&A FORUM */}
      {activeTab === "qa" && (
        <section className="py-12 animate-fade-in-up">
          <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
               <div className="flex items-center justify-between mb-8">
                 <h2 className="text-3xl font-heading font-bold text-dark">Discussion Forum</h2>
                 <div className="relative">
                   <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-dark/40" />
                   <input type="text" placeholder="Search topics..." className="pl-9 pr-4 py-2 border border-dark/10 rounded-full text-sm w-48 sm:w-64 focus:outline-none focus:border-primary" />
                 </div>
               </div>

               <div className="bg-white rounded-3xl border border-dark/10 shadow-sm overflow-hidden flex flex-col">
                 {questions.map((q, i) => (
                   <div key={i} className="p-6 border-b border-dark/5 hover:bg-secondary/5 transition-colors group cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                     <div>
                       <div className="flex items-center gap-2 mb-2">
                         {q.hot && <span className="bg-red-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm flex items-center gap-1"><TrendingUp className="w-3 h-3" /> Hot</span>}
                         <span className="text-xs font-bold text-primary border border-primary/20 px-2 py-0.5 rounded-sm">{q.tag}</span>
                       </div>
                       <h4 className="font-bold text-lg text-dark group-hover:text-primary transition-colors">{q.title}</h4>
                       <p className="text-sm text-dark/40 mt-1">Asked by <span className="font-bold">{q.author}</span> • 2 days ago</p>
                     </div>
                     <div className="flex items-center gap-6 sm:gap-4 shrink-0 justify-end">
                       <div className="text-center">
                         <span className="block font-bold text-lg text-dark">{q.replies}</span>
                         <span className="text-[10px] uppercase text-dark/50 font-bold">Replies</span>
                       </div>
                       <ChevronRight className="w-5 h-5 text-dark/30 group-hover:text-primary transition-colors" />
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:w-1/3">
               <div className="bg-dark text-white rounded-3xl p-8 shadow-xl text-center sticky top-40 border border-dark">
                  <MessageSquare className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="text-2xl font-bold font-heading mb-3">Can't find the answer?</h3>
                  <p className="text-white/60 text-sm mb-8">Our community of 50+ local guides and thousands of travelers are ready to help you plan.</p>
                  <button className="w-full py-3 bg-gold text-dark font-bold rounded-full hover:bg-light transition-colors shadow-lg">
                    Ask a Question
                  </button>
               </div>
            </div>
          </div>
        </section>
      )}

      {/* TAB CONTENT: GALLERY */}
      {activeTab === "gallery" && (
        <section className="py-12 animate-fade-in-up">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
               <h2 className="text-3xl font-heading font-bold text-dark">Community Gallery</h2>
               <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-dark/10 rounded-full text-sm font-medium hover:bg-dark/5"><Filter className="w-4 h-4" /> Filter By Destination</button>
               </div>
            </div>

            {/* Masonry-style Grid */}
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {gallery.map((src, i) => (
                <div key={i} className="break-inside-avoid relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow">
                  {/* Aspect ratio will be handled naturally by the image loaded, 
                      using standard img tag since next/image requires width/height known for masonry without complex setup */}
                  <img src={src} alt="Community Photo" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-end">
                    <div className="text-white">
                      <span className="font-bold text-sm block">@traveler_{i+1}</span>
                      <span className="text-xs flex items-center gap-1 text-white/80"><MapPin className="w-3 h-3" /> Krui, Lampung</span>
                    </div>
                    <button className="text-white hover:text-red-500 transition-colors"><Heart className="w-5 h-5" /></button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="px-8 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors">
                Load More Photos
              </button>
            </div>
          </div>
        </section>
      )}

      {/* TAB CONTENT: TIPS & TRICKS */}
      {activeTab === "tips" && (
        <section className="py-12 animate-fade-in-up">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-heading font-bold text-dark mb-10 text-center">Traveler Tips & Guides</h2>

            <div className="grid md:grid-cols-3 gap-8">
               {tips.map((tip, i) => (
                 <div key={i} className="bg-white border text-center border-dark/5 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl group cursor-pointer flex flex-col items-center">
                   <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     {tip.icon}
                   </div>
                   <h3 className="text-xl font-bold font-heading mb-3 line-clamp-2">{tip.title}</h3>
                   <p className="text-dark/60 text-sm mb-6">{tip.desc}</p>
                   <span className="mt-auto text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">Read Article <ChevronRight className="w-4 h-4" /></span>
                 </div>
               ))}
            </div>
            
            {/* Banner */}
            <div className="mt-16 bg-gradient-to-r from-primary to-dark rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
               <div className="text-white max-w-xl">
                 <h3 className="text-2xl md:text-3xl font-bold font-heading mb-3">Ready to plan your trip?</h3>
                 <p className="text-white/80">Our local guides know all the best routes and hidden spots. Let an expert handle the logistics.</p>
               </div>
               <Link href="/guides" className="px-8 py-4 bg-gold text-dark font-bold rounded-full hover:bg-white transition-colors whitespace-nowrap shadow-lg">
                 Hire a Local Guide
               </Link>
            </div>
          </div>
        </section>
      )}

      {/* GLOBAL BACKGROUND ELEMENTS (optional subtle décor) */}
      <div className="fixed top-24 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="fixed bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </main>
  );
}
