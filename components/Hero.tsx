"use client";
import { Search, Calendar, Users, MapPin, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/coastline.jpg')" }}
      ></div>
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>

      <div className="container relative z-20 mx-auto px-6 lg:px-12 text-center text-light mt-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 drop-shadow-lg text-balance animate-fade-in-up">
          Find What Others Miss.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 drop-shadow-md text-light/90 font-medium">
          Krui, West Lampung — Indonesia's best-kept secret. Surf world-class waves, explore hidden beaches, and immerse in authentic Lampung culture with local guides.
        </p>

        {/* Search Bar */}
        <div className="bg-light p-3 md:p-4 rounded-full max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4 shadow-2xl">
          <div className="flex-1 flex items-center gap-3 px-4 border-b md:border-b-0 md:border-r border-dark/10 pb-3 md:pb-0 w-full">
            <MapPin className="text-primary w-5 h-5 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Where do you want to go?" 
              className="bg-transparent border-none outline-none text-dark w-full placeholder:text-dark/50 font-medium"
            />
          </div>
          <div className="flex-1 flex items-center gap-3 px-4 border-b md:border-b-0 md:border-r border-dark/10 pb-3 md:pb-0 w-full">
            <Calendar className="text-primary w-5 h-5 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Dates" 
              className="bg-transparent border-none outline-none text-dark w-full placeholder:text-dark/50 font-medium"
            />
          </div>
          <div className="flex-1 flex items-center gap-3 px-4 pb-3 md:pb-0 w-full">
            <Users className="text-primary w-5 h-5 flex-shrink-0" />
            <select className="bg-transparent border-none outline-none text-dark w-full appearance-none font-medium cursor-pointer">
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4+">4+ People</option>
            </select>
          </div>
          <button className="bg-accent text-light w-full md:w-auto px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-accent/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
            <Search className="w-5 h-5" /> Explore
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-light/80 text-sm font-medium tracking-widest uppercase">Scroll Down</span>
        <ChevronDown className="text-light w-6 h-6" />
      </div>
    </section>
  );
}
