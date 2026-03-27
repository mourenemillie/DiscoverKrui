"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, CheckCircle2, MessageCircle, Clock, Calendar, Users, Languages, Image as ImageIcon, Map, MessageSquare } from "lucide-react";

export default function GuideProfile({ params }: { params: { id: string } }) {
  const [guests, setGuests] = useState(1);
  const [days, setDays] = useState(1);

  // Based on Ahmad Fauzi dummy data
  const isAhmad = params.id === "ahmad-fauzi";
  const name = isAhmad ? "Ahmad Fauzi" : "Ratna Sari";
  const specialty = isAhmad ? "Surfing & Beach Expert" : "Culture & Heritage Guide";
  const dailyRate = isAhmad ? 350000 : 300000;
  const trips = isAhmad ? 127 : 89;

  return (
    <main className="min-h-screen bg-light">
      {/* COVER PHOTO & PROFILE INTRO */}
      <section className="relative w-full pt-20">
        <div 
          className="absolute inset-x-0 top-0 h-[40vh] z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${isAhmad ? "/images/pantai_tanjung_setia.jpg" : "/images/desa.jpg"})` }}
        ></div>
        <div className="absolute inset-x-0 top-0 h-[40vh] z-10 bg-gradient-to-b from-dark/60 via-transparent to-light"></div>

        <div className="container relative z-20 mx-auto px-6 lg:px-12 pt-[25vh]">
          <div className="bg-white rounded-3xl p-6 lg:p-10 shadow-xl border border-dark/5 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
            
            <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg overflow-hidden shrink-0 mt-[-5rem] md:mt-[-5rem] bg-light">
              <Image 
                src={isAhmad ? '/images/avatar_1.jpg' : '/images/boy.png'} 
                alt={name} 
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1 justify-center md:justify-start">
                    <h1 className="text-3xl md:text-4xl font-bold font-heading text-dark">{name}</h1>
                    <div className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold w-fit mx-auto md:mx-0">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified Local
                    </div>
                  </div>
                  <p className="text-primary font-medium text-lg">{specialty}</p>
                </div>

                <div className="flex justify-center md:justify-end gap-3 text-dark">
                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-dark/20 font-bold text-sm hover:bg-dark/5 transition-colors">
                    <MessageSquare className="w-4 h-4 text-primary" /> Contact
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 border-t border-dark/10 pt-8 w-full">
                <div className="flex flex-col items-center md:items-start group">
                  <span className="text-dark/50 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1 group-hover:text-gold transition-colors"><Star className="w-3.5 h-3.5" /> Rating</span>
                  <span className="font-bold text-xl text-dark">4.9 <span className="text-sm font-normal text-dark/50">(34)</span></span>
                </div>
                <div className="flex flex-col items-center md:items-start group">
                  <span className="text-dark/50 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1 group-hover:text-primary transition-colors"><MessageCircle className="w-3.5 h-3.5" /> Completed Trips</span>
                  <span className="font-bold text-xl text-dark">{trips} trips</span>
                </div>
                <div className="flex flex-col items-center md:items-start group">
                  <span className="text-dark/50 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1 group-hover:text-accent transition-colors"><Clock className="w-3.5 h-3.5" /> Experience</span>
                  <span className="font-bold text-xl text-dark">5 Years</span>
                </div>
                <div className="flex flex-col items-center md:items-start group">
                  <span className="text-dark/50 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1 group-hover:text-gold transition-colors"><Languages className="w-3.5 h-3.5" /> Languages</span>
                  <span className="font-bold text-xl text-dark">ID, EN</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* DETAILED CONTENT & SIDEBAR */}
      <section className="py-12 bg-light relative">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            
            {/* About */}
            <div className="mb-12 border-b border-dark/10 pb-12">
              <h3 className="text-2xl font-bold font-heading mb-6">About {name.split(' ')[0]}</h3>
              <p className="text-dark/80 text-lg leading-relaxed mb-6">
                {isAhmad 
                  ? "Halo! I'm Ahmad. Born and raised in Krui, I've been surfing Tanjung Setia since I was 10. I know exactly when and where the waves are firing based on the tide and wind. If you're a beginner, I can teach you the basics. I also love taking guests to hidden beaches that only locals know about."
                  : "Welcome to Krui! I belong to the Saibatin community and am passionate about preserving our Tapis weaving heritage. I'd love to share our ancient traditions and authentic cuisine with you."}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-dark/50 text-xs mb-3">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">Surfing</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">Hidden Beaches</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">Photography</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-dark/50 text-xs mb-3">Favorite Destinations</h4>
                  <ul className="flex flex-col gap-2">
                    <li className="flex items-center gap-2 text-sm text-dark/80 font-medium"><MapPin className="w-4 h-4 text-accent" /> Tanjung Setia Beach</li>
                    <li className="flex items-center gap-2 text-sm text-dark/80 font-medium"><MapPin className="w-4 h-4 text-accent" /> Ujung Bocur Reef</li>
                    <li className="flex items-center gap-2 text-sm text-dark/80 font-medium"><MapPin className="w-4 h-4 text-accent" /> Walur Sunset Point</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="mb-12 border-b border-dark/10 pb-12">
               <div className="flex justify-between items-end mb-6">
                 <h3 className="text-2xl font-bold font-heading">Past Trips Photo Gallery</h3>
                 <button className="text-primary font-bold text-sm hover:underline">View All 42 Photos</button>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden group">
                    <Image src="/images/surfing.jpg" alt="Gallery" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden group">
                    <Image src="/images/family.jpg" alt="Gallery" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden group">
                    <Image src="/images/turis_melokal.jpg" alt="Gallery" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
               </div>
            </div>

            {/* Packages Handled */}
            <div className="mb-12 border-b border-dark/10 pb-12">
               <h3 className="text-2xl font-bold font-heading mb-6">Ready-Made Packages by {name.split(' ')[0]}</h3>
               <div className="grid sm:grid-cols-2 gap-6">
                 <div className="border border-dark/10 rounded-3xl p-6 bg-white shadow-sm flex flex-col gap-4 group hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center">
                      <Map className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-dark group-hover:text-primary transition-colors">Surfer's Escape (3D2N)</h4>
                      <p className="text-dark/60 text-sm mt-1 mb-4">A complete surfing experience with lessons, board rentals, and beachfront stay.</p>
                      <Link href="/packages/surfers-escape" className="text-sm font-bold border-b-2 border-primary text-primary pb-0.5">Explore Package</Link>
                    </div>
                 </div>
               </div>
            </div>

            {/* Reviews */}
            <div className="mb-12">
               <h3 className="text-2xl font-bold font-heading mb-6">Traveler Reviews</h3>
               <div className="flex flex-col gap-8">
                  <div className="bg-white p-8 rounded-3xl border border-dark/5 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                       <div className="flex gap-4 items-center">
                         <Image src="/images/traveler.png" alt="Jake" width={48} height={48} className="rounded-full" />
                         <div>
                           <h4 className="font-bold text-dark">Jake M. 🇦🇺</h4>
                           <span className="text-xs text-dark/40 font-medium">October 2023</span>
                         </div>
                       </div>
                       <div className="flex text-gold text-sm">★★★★★</div>
                    </div>
                    <p className="text-dark/80 italic leading-relaxed">"Best surf trip of my life. {name.split(' ')[0]} knew every secret spot and exactly what time the tide would be perfect. Will definitely book him again next year."</p>
                  </div>
               </div>
            </div>

          </div>

          {/* Sticky Booking Form */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 bg-white border border-dark/10 rounded-3xl p-8 shadow-2xl" id="book">
              <div className="mb-6 pb-6 border-b border-dark/10 text-center md:text-left">
                <span className="text-dark/50 font-bold uppercase tracking-widest text-xs block mb-1">Guide Fee</span>
                <span className="text-3xl font-bold font-heading text-primary">Rp {dailyRate.toLocaleString('id-ID')}</span>
                <span className="text-dark/50 font-medium"> / day</span>
              </div>

              <div className="flex flex-col gap-4 mb-6">
                {/* Date / Availability */}
                <div className="border border-dark/20 rounded-xl p-3 flex flex-col cursor-pointer hover:border-primary transition-colors hover:bg-light">
                  <span className="text-xs font-bold text-dark/50 uppercase">Start Date</span>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">Check Availability</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Duration */}
                  <div className="border border-dark/20 rounded-xl p-3 flex flex-col justify-between items-center bg-white">
                    <span className="text-xs font-bold text-dark/50 uppercase mb-2">Duration (Days)</span>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setDays(Math.max(1, days - 1))} className="w-6 h-6 rounded-full border border-dark/20 flex items-center justify-center hover:bg-light font-bold">-</button>
                      <span className="font-bold w-4 text-center">{days}</span>
                      <button onClick={() => setDays(days + 1)} className="w-6 h-6 rounded-full border border-dark/20 flex items-center justify-center hover:bg-light font-bold">+</button>
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="border border-dark/20 rounded-xl p-3 flex flex-col justify-between items-center bg-white">
                    <span className="text-xs font-bold text-dark/50 uppercase mb-2">Guests</span>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-6 h-6 rounded-full border border-dark/20 flex items-center justify-center hover:bg-light font-bold">-</button>
                      <span className="font-bold w-4 text-center">{guests}</span>
                      <button onClick={() => setGuests(guests + 1)} className="w-6 h-6 rounded-full border border-dark/20 flex items-center justify-center hover:bg-light font-bold">+</button>
                    </div>
                  </div>
                </div>
                
                {/* Special Request */}
                <div className="mt-2">
                  <span className="text-xs font-bold text-dark/50 uppercase block mb-2">Special Request (Optional)</span>
                  <textarea 
                    placeholder="E.g., We have a beginner surfer..." 
                    className="w-full border border-dark/20 rounded-xl p-3 focus:outline-none focus:border-primary text-sm h-24 resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="mb-6 flex flex-col gap-3 pt-2">
                <div className="flex justify-between text-dark/70">
                  <span>Rp {dailyRate.toLocaleString('id-ID')} x {days} days</span>
                  <span>Rp {(dailyRate * days).toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between font-bold text-xl border-t border-dark/10 pt-3 mt-1 text-dark">
                  <span>Total Due</span>
                  <span>Rp {(dailyRate * days).toLocaleString('id-ID')}</span>
                </div>
              </div>

              <button className="w-full py-4 rounded-full bg-primary text-light font-bold text-lg shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 mb-4">
                Book This Guide
              </button>
              
              <p className="text-center text-xs text-dark/50 font-medium">Free cancellation up to 48 hours before the trip.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
