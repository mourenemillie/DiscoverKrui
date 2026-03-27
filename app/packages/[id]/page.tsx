"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, MapPin, CheckCircle2, XCircle, ChevronDown, User, Calendar, MessageCircle, Info } from "lucide-react";

export default function PackageDetail({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("itinerary");
  const [guests, setGuests] = useState(1);
  
  // Basic dummy data matching the ID
  const title = params.id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const isSurfer = params.id === "surfers-escape";
  const price = isSurfer ? 1200000 : 850000;

  return (
    <main className="min-h-screen bg-light">
      {/* GALLERY / HERO SECTION */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full flex items-end justify-start overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${isSurfer ? '/images/coastline.jpg' : '/images/pulau_pisang_landscape.jpg'})` }}
        ></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>

        <div className="container relative z-20 mx-auto px-6 lg:px-12 pb-12 flex justify-between items-end">
          <div className="text-light">
            <div className="flex items-center gap-2 mb-4 text-sm font-medium opacity-80 uppercase tracking-widest">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/packages" className="hover:text-gold transition-colors">Trip Packages</Link>
              <span>/</span>
              <span className="text-gold">{title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold drop-shadow-lg mb-4">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm md:text-base font-medium">
              <div className="flex items-center gap-1 bg-primary/80 backdrop-blur-md px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" /> {isSurfer ? "3D2N" : "2D1N"}
              </div>
              <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5" /> Krui, Pesisir Barat
              </div>
              <div className="flex items-center gap-1 bg-white/90 text-dark px-4 py-2 rounded-full font-bold">
                <Star className="w-5 h-5 text-gold fill-current" /> 4.9 <span className="text-dark/50">(142 Reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Mini Gallery Button */}
        <button className="absolute bottom-12 right-6 lg:right-12 z-20 bg-light text-dark px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2">
          <Image src="/images/beach.png" alt="Gallery" width={24} height={24} className="rounded-full" />
          See All 12 Photos
        </button>
      </section>

      {/* CONTENT AND SIDEBAR */}
      <section className="py-12 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Tabs Navigation */}
            <div className="flex overflow-x-auto border-b border-dark/10 mb-8 hide-scrollbar">
              {["Itinerary", "Included", "Meeting Info", "Reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`px-6 py-4 font-bold text-lg border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.toLowerCase() 
                      ? "border-primary text-primary" 
                      : "border-transparent text-dark/50 hover:text-dark"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Itinerary Tab */}
            {activeTab === "itinerary" && (
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-bold font-heading mb-6">Trip Itinerary</h3>
                
                <div className="flex flex-col gap-6 relative before:absolute before:inset-0 before:ml-[1.2rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-dark/10 before:to-transparent">
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-light font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md mx-4 md:mx-0 z-10">
                      1
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-light p-6 rounded-2xl shadow-sm border border-dark/5">
                      <h4 className="font-bold text-lg mb-2">Arrival & Sunset Orientation</h4>
                      <p className="text-dark/70 text-sm">Arrive in Krui, check into your local homestay. In the afternoon, we head to Bukit Selalau for an orientation session accompanied by a stunning Indian Ocean sunset.</p>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gold text-dark font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md mx-4 md:mx-0 z-10">
                      2
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-light p-6 rounded-2xl shadow-sm border border-dark/5">
                      <h4 className="font-bold text-lg mb-2">{isSurfer ? "Full Day Surf & Lesson" : "Hidden Beach & Snorkeling"}</h4>
                      <p className="text-dark/70 text-sm">{isSurfer ? "Start early at Tanjung Setia. Surf lesson for beginners or guided session for advanced surfers. Lunch at a local warung." : "Visit secret beaches only accessible with our guide. Snorkeling at pristine reefs."}</p>
                    </div>
                  </div>

                  {isSurfer && (
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-accent text-light font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md mx-4 md:mx-0 z-10">
                        3
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-light p-6 rounded-2xl shadow-sm border border-dark/5">
                        <h4 className="font-bold text-lg mb-2">Morning Session & Departure</h4>
                        <p className="text-dark/70 text-sm">One last dawn patrol surf session at Labuhan Jukung. Enjoy local breakfast before packing up and heading home.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Other tabs would go here... */}
            {activeTab === "included" && (
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-bold font-heading mb-6">What's Included?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-light p-8 rounded-3xl border border-dark/5">
                  <div>
                    <h4 className="font-bold flex items-center gap-2 mb-4 text-primary"><CheckCircle2 className="w-5 h-5" /> Included</h4>
                    <ul className="flex flex-col gap-3 text-dark/80">
                      <li>Local Guide (English/Indonesian)</li>
                      <li>Accommodation ({isSurfer ? "3" : "2"} days)</li>
                      <li>3x Meals per day</li>
                      <li>{isSurfer ? "Surfboard rental & lesson" : "Snorkeling gear"}</li>
                      <li>Local transportation in Krui</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold flex items-center gap-2 mb-4 text-accent"><XCircle className="w-5 h-5" /> Not Included</h4>
                    <ul className="flex flex-col gap-3 text-dark/80">
                      <li>Flights/Transport to Krui</li>
                      <li>Personal expenses</li>
                      <li>Travel insurance</li>
                      <li>Alcoholic beverages</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "meeting info" && (
              <div className="animate-fade-in-up">
                  <h3 className="text-2xl font-bold font-heading mb-6">Meeting Info</h3>
                  <div className="bg-light p-8 rounded-3xl border border-dark/5 text-dark/80">
                    <p className="mb-4"><strong>Meeting Point:</strong> Krui Bus Terminal or your hotel in Bandar Lampung (additional shuttle fee applies).</p>
                    <p><strong>Time:</strong> By 14:00 PM on Day 1.</p>
                    <div className="mt-6 flex items-start gap-4 p-4 bg-secondary/20 rounded-xl">
                      <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <p className="text-sm">Detailed instructions will be sent to your email after booking confirmation. Our guide will contact you via WhatsApp 24 hours prior to the trip.</p>
                    </div>
                  </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="animate-fade-in-up">
                  <h3 className="text-2xl font-bold font-heading mb-6">Reviews</h3>
                  <div className="bg-light p-8 rounded-3xl border border-dark/5 flex flex-col gap-6">
                    <div className="flex gap-4 border-b border-dark/10 pb-6">
                       <Image src="/images/avatar_1.jpg" alt="User" width={50} height={50} className="rounded-full shrink-0" />
                       <div>
                         <h4 className="font-bold">Michael B. 🇺🇸</h4>
                         <div className="flex text-gold text-sm mb-2">★★★★★ <span className="text-dark/40 ml-2">2 weeks ago</span></div>
                         <p className="text-dark/80 text-sm">"Absolutely insane trip! The guide put us on the best waves every day away from the crowd. Highlight of my Indo trip."</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <Image src="/images/boy.png" alt="User" width={50} height={50} className="rounded-full shrink-0" />
                       <div>
                         <h4 className="font-bold">Ayu N. 🇮🇩</h4>
                         <div className="flex text-gold text-sm mb-2">★★★★★ <span className="text-dark/40 ml-2">1 month ago</span></div>
                         <p className="text-dark/80 text-sm">"Sangat puas! Penginapannya nyaman banget di pinggir pantai. Pak Ahmad (guide) super ramah dan sangat helpful. Highly recommended."</p>
                       </div>
                    </div>
                  </div>
              </div>
            )}

            {/* Guide Info */}
            <div className="mt-12 bg-white rounded-3xl p-8 border border-dark/10 flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-sm">
              <Image src="/images/avatar_1.jpg" alt="Guide" width={100} height={100} className="rounded-full object-cover shadow-md" />
              <div>
                <h4 className="text-sm font-bold text-dark/50 uppercase tracking-widest mb-1">Your Trip Guide</h4>
                <h3 className="text-2xl font-bold font-heading mb-2">Ahmad Fauzi</h3>
                <p className="text-dark/70 mb-4">{isSurfer ? "Surfing expert born and raised in Tanjung Setia. Knows every break along the 210km coastline." : "Local Krui expert with deep knowledge of hidden gems."}</p>
                <Link href="/guides/ahmad" className="font-bold text-primary hover:text-accent flex items-center gap-2">
                  View Guide Profile &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar / Booking Form */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 bg-white border border-dark/10 rounded-3xl p-8 shadow-2xl" id="book">
              <div className="mb-6 pb-6 border-b border-dark/10">
                <span className="text-3xl font-bold font-heading">Rp {price.toLocaleString('id-ID')}</span>
                <span className="text-dark/50 font-medium"> / person</span>
              </div>

              <div className="flex flex-col gap-4 mb-6">
                {/* Date Picker (Dummy) */}
                <div className="border border-dark/20 rounded-xl p-3 flex flex-col cursor-pointer hover:border-primary transition-colors hover:bg-light">
                  <span className="text-xs font-bold text-dark/50 uppercase">Date</span>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">Select Date</span>
                  </div>
                </div>

                {/* Guests */}
                <div className="border border-dark/20 rounded-xl p-3 flex justify-between items-center bg-white">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-dark/50 uppercase">Guests</span>
                    <div className="flex items-center gap-2 mt-1">
                      <User className="w-5 h-5 text-primary" />
                      <span className="font-medium text-dark">{guests} Person</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-8 h-8 rounded-full border border-dark/20 flex items-center justify-center hover:bg-light"
                    >-</button>
                    <span className="font-bold w-4 text-center">{guests}</span>
                    <button 
                      onClick={() => setGuests(guests + 1)}
                      className="w-8 h-8 rounded-full border border-dark/20 flex items-center justify-center hover:bg-light"
                    >+</button>
                  </div>
                </div>
              </div>

              <div className="mb-6 flex flex-col gap-3">
                <div className="flex justify-between text-dark/70">
                  <span>Rp {price.toLocaleString('id-ID')} x {guests} adults</span>
                  <span>Rp {(price * guests).toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-dark/70">
                  <span>Platform fee</span>
                  <span>Rp 0 <span className="line-through text-dark/30 text-xs ml-1">50.000</span></span>
                </div>
                <div className="flex justify-between font-bold text-xl border-t border-dark/10 pt-3 mt-1 text-dark">
                  <span>Total</span>
                  <span>Rp {(price * guests).toLocaleString('id-ID')}</span>
                </div>
              </div>

              <button className="w-full py-4 rounded-full bg-accent text-light font-bold text-lg shadow-xl hover:shadow-accent/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 mb-4">
                Reserve Package
              </button>
              
              <p className="text-center text-xs text-dark/50 font-medium">You won't be charged yet. Payment handled securely via Midtrans.</p>
              
              <div className="mt-6 pt-6 border-t border-dark/10 text-center">
                <button className="inline-flex items-center gap-2 text-primary font-bold hover:text-dark transition-colors">
                  <MessageCircle className="w-5 h-5" /> Contact host before booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
