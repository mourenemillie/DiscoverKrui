"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  User, Calendar, Heart, Star, MessageSquare, Settings, LogOut, 
  MapPin, Clock, Navigation, CheckCircle2, AlertCircle, Edit, Trash2, ChevronRight 
} from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [bookingTab, setBookingTab] = useState("upcoming");

  // DUMMY DATA
  const user = {
    name: "Alex Johnson",
    from: "Melbourne, Australia",
    avatar: "/images/traveler.png",
    stats: {
      tripsCompleted: 2,
      upcomingTrips: 1,
      reviewsGiven: 3,
      savedPlaces: 8
    }
  };

  const upcomingBooking = {
    id: "BK-1090",
    title: "Surfer's Escape (3D2N)",
    date: "12 Oct 2026",
    daysLeft: 5,
    guide: "Ahmad Fauzi",
    status: "Confirmed",
    image: "/images/surfing.jpg"
  };

  const pastBookings = [
    {
      id: "BK-0842",
      title: "Family Beach Day",
      date: "15 Jul 2026",
      guide: "Budi Santoso",
      status: "Completed",
      image: "/images/family.jpg"
    },
    {
      id: "BK-0129",
      title: "Culture & Nature (2D1N)",
      date: "10 Jan 2026",
      guide: "Ratna Sari",
      status: "Completed",
      image: "/images/desa.jpg"
    }
  ];

  const savedItems = [
    { id: 1, type: "Destination", title: "Pulau Pisang", image: "/images/pulau_pisang.jpg" },
    { id: 2, type: "Package", title: "Hidden Gems Explorer", image: "/images/pulau_pisang_tourist.jpg" },
    { id: 3, type: "Guide", title: "Maya Putri (Diving)", image: "/images/nelayan_laut_jernih.jpg" },
    { id: 4, type: "Destination", title: "Tanjung Setia", image: "/images/pantai_tanjung_setia.jpg" },
  ];

  const myReviews = [
    { id: 1, target: "Family Beach Day", rating: 5, date: "17 Jul 2026", text: "Amazing experience! The kids loved the snorkeling spot Budi took us to. Highly recommended for families." },
    { id: 2, target: "Ratna Sari (Guide)", rating: 5, date: "12 Jan 2026", text: "Ratna is deeply knowledgeable about Tapis weaving and local traditions. Learned so much!" },
  ];

  return (
    <main className="min-h-screen bg-light pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-8">
        
        {/* SIDEBAR */}
        <aside className="lg:w-1/4 shrink-0">
          <div className="bg-white rounded-3xl border border-dark/10 shadow-sm overflow-hidden sticky top-28">
            {/* User Profile */}
            <div className="p-8 text-center border-b border-dark/5 bg-gradient-to-b from-primary/5 to-transparent">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full border-4 border-white shadow-md overflow-hidden">
                <Image src={user.avatar} alt={user.name} fill className="object-cover" />
              </div>
              <h2 className="text-xl font-bold font-heading text-dark">{user.name}</h2>
              <p className="text-dark/50 text-sm flex items-center justify-center gap-1 mt-1"><MapPin className="w-3.5 h-3.5" /> {user.from}</p>
            </div>

            {/* Navigation */}
            <nav className="p-4 flex flex-col gap-1">
              {[
                { id: "overview", label: "Overview", icon: <User className="w-5 h-5" /> },
                { id: "bookings", label: "My Bookings", icon: <Calendar className="w-5 h-5" /> },
                { id: "saved", label: "Saved", icon: <Heart className="w-5 h-5" /> },
                { id: "reviews", label: "Reviews", icon: <Star className="w-5 h-5" /> },
                { id: "messages", label: "Messages", icon: <MessageSquare className="w-5 h-5" /> },
                { id: "settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-bold ${
                    activeTab === item.id 
                      ? "bg-primary text-white shadow-md" 
                      : "text-dark/60 hover:bg-dark/5 hover:text-dark"
                  }`}
                >
                  {item.icon} {item.label}
                  {item.id === "messages" && <span className="ml-auto bg-accent text-white text-[10px] px-2 py-0.5 rounded-full">2</span>}
                </button>
              ))}
              
              <div className="border-t border-dark/10 my-2 pt-2"></div>
              <button className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-bold text-red-500 hover:bg-red-50">
                <LogOut className="w-5 h-5" /> Logout
              </button>
            </nav>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <div className="lg:w-3/4">
          
          {/* TAB: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-8 animate-fade-in-up">
              <div className="bg-white rounded-3xl p-8 border border-dark/10 shadow-sm">
                <h1 className="text-3xl font-heading font-bold text-dark mb-2">Welcome back, {user.name.split(' ')[0]}!</h1>
                <p className="text-dark/60 text-lg">Ready for your next Krui adventure?</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-dark/5 shadow-sm flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-3"><CheckCircle2 className="w-6 h-6" /></div>
                  <span className="text-3xl font-bold font-heading text-dark">{user.stats.tripsCompleted}</span>
                  <span className="text-xs uppercase text-dark/50 font-bold mt-1">Completed Trips</span>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-dark/5 shadow-sm flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-3"><Navigation className="w-6 h-6" /></div>
                  <span className="text-3xl font-bold font-heading text-dark">{user.stats.upcomingTrips}</span>
                  <span className="text-xs uppercase text-dark/50 font-bold mt-1">Upcoming</span>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-dark/5 shadow-sm flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center mb-3"><Star className="w-6 h-6" /></div>
                  <span className="text-3xl font-bold font-heading text-dark">{user.stats.reviewsGiven}</span>
                  <span className="text-xs uppercase text-dark/50 font-bold mt-1">Reviews Given</span>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-dark/5 shadow-sm flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center mb-3"><Heart className="w-6 h-6" /></div>
                  <span className="text-3xl font-bold font-heading text-dark">{user.stats.savedPlaces}</span>
                  <span className="text-xs uppercase text-dark/50 font-bold mt-1">Saved Items</span>
                </div>
              </div>

              {/* Upcoming Trip Alert */}
              <div className="bg-primary text-white rounded-3xl p-1 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
                <div className="border border-white/20 rounded-[1.35rem] p-6 lg:p-8 flex flex-col md:flex-row gap-6 items-center z-10 relative bg-dark/20 backdrop-blur-sm">
                  <div className="relative w-full md:w-48 h-32 rounded-xl overflow-hidden shadow-inner shrink-0">
                    <Image src={upcomingBooking.image} alt="Trip" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <span className="bg-accent px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Upcoming in {upcomingBooking.daysLeft} Days</span>
                      <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">{upcomingBooking.status}</span>
                    </div>
                    <h3 className="text-2xl font-bold font-heading mb-1">{upcomingBooking.title}</h3>
                    <p className="text-white/80 text-sm flex items-center justify-center md:justify-start gap-4 mb-4">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {upcomingBooking.date}</span>
                      <span className="flex items-center gap-1"><User className="w-4 h-4" /> Guide: {upcomingBooking.guide}</span>
                    </p>
                    <div className="flex justify-center md:justify-start gap-3">
                      <button className="px-5 py-2 rounded-full bg-white text-primary font-bold text-sm shadow-md hover:scale-105 transition-transform">View Itinerary</button>
                      <button className="px-5 py-2 rounded-full border border-white/40 text-white font-bold text-sm hover:bg-white/10 transition-colors">Message Guide</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommended for you */}
              <div>
                <div className="flex justify-between items-end mb-4 px-2">
                  <h3 className="text-xl font-bold font-heading">Recommended for you</h3>
                  <button className="text-primary font-bold text-sm hover:underline">See all</button>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-4 border border-dark/5 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
                    <Image src="/images/nelayan_laut_jernih.jpg" alt="Rec" width={80} height={80} className="rounded-xl object-cover" />
                    <div>
                      <h4 className="font-bold text-dark leading-tight mb-1">Pulau Pisang Snorkeling</h4>
                      <p className="text-xs text-dark/50 mb-2">Based on your family beach trip</p>
                      <div className="flex text-gold text-xs"><Star className="w-3 h-3 fill-current" /> 4.8</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border border-dark/5 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
                    <Image src="/images/buih_ombak.jpg" alt="Rec" width={80} height={80} className="rounded-xl object-cover" />
                    <div>
                      <h4 className="font-bold text-dark leading-tight mb-1">Authentic Culinary Tour</h4>
                      <p className="text-xs text-dark/50 mb-2">Based on your culture interest</p>
                      <div className="flex text-gold text-xs"><Star className="w-3 h-3 fill-current" /> 4.9</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: MY BOOKINGS */}
          {activeTab === "bookings" && (
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-3xl font-heading font-bold text-dark mb-6">My Bookings</h1>
              
              <div className="flex gap-2 border-b border-dark/10 pb-4">
                {["upcoming", "completed", "cancelled"].map(t => (
                  <button 
                    key={t}
                    onClick={() => setBookingTab(t)}
                    className={`px-5 py-2 rounded-full text-sm font-bold capitalize transition-colors ${
                      bookingTab === t ? "bg-dark text-white" : "bg-dark/5 text-dark/60 hover:bg-dark/10"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {bookingTab === "upcoming" && (
                  <div className="bg-white rounded-3xl p-6 border border-dark/10 shadow-sm flex flex-col sm:flex-row gap-6 items-center">
                    <div className="relative w-full sm:w-48 h-32 rounded-2xl overflow-hidden shrink-0">
                      <Image src={upcomingBooking.image} alt="Trip" fill className="object-cover" />
                    </div>
                    <div className="flex-1 w-full">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="flex gap-2 mb-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-dark/40">{upcomingBooking.id}</span>
                            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">{upcomingBooking.status}</span>
                          </div>
                          <h3 className="text-xl font-bold font-heading text-dark">{upcomingBooking.title}</h3>
                        </div>
                        <span className="text-accent font-bold text-sm bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">In {upcomingBooking.daysLeft} Days</span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-dark/70">
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {upcomingBooking.date}</span>
                        <span className="flex items-center gap-1"><User className="w-4 h-4" /> Guide: <Link href="#" className="font-bold text-primary hover:underline">{upcomingBooking.guide}</Link></span>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-dark/5">
                        <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold flex-1 sm:flex-none text-center hover:bg-dark transition-colors">View Details</button>
                        <button className="px-4 py-2 rounded-lg border border-dark/20 text-dark font-bold text-sm bg-light flex-1 sm:flex-none text-center hover:bg-dark/5 transition-colors">Contact Guide</button>
                        <button className="px-4 py-2 rounded-lg text-red-500 font-bold text-sm flex-1 sm:flex-none text-center hover:bg-red-50 transition-colors ml-auto sm:ml-0 border border-transparent hover:border-red-100">Cancel Booking</button>
                      </div>
                    </div>
                  </div>
                )}

                {bookingTab === "completed" && pastBookings.map(bk => (
                  <div key={bk.id} className="bg-white rounded-3xl p-6 border border-dark/10 shadow-sm flex flex-col sm:flex-row gap-6 items-center opacity-80 hover:opacity-100 transition-opacity">
                    <div className="relative w-full sm:w-40 h-28 rounded-2xl overflow-hidden shrink-0 grayscale hover:grayscale-0 transition-all">
                      <Image src={bk.image} alt="Trip" fill className="object-cover" />
                    </div>
                    <div className="flex-1 w-full">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-dark/40 block mb-1">{bk.id}</span>
                          <h3 className="text-lg font-bold font-heading text-dark leading-tight">{bk.title}</h3>
                        </div>
                        <span className="bg-dark/10 text-dark/70 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">{bk.status}</span>
                      </div>
                      <p className="text-sm text-dark/50 mb-4">{bk.date} • Guide: {bk.guide}</p>
                      
                      <div className="flex gap-2">
                        <button className="px-4 py-1.5 rounded-lg border-2 border-primary text-primary text-xs font-bold hover:bg-primary hover:text-white transition-colors">Leave a Review</button>
                        <button className="px-4 py-1.5 rounded-lg border border-dark/20 text-dark text-xs font-bold hover:bg-dark/5 transition-colors">Book Again</button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {bookingTab === "cancelled" && (
                  <div className="text-center py-12 text-dark/40 flex flex-col items-center">
                    <AlertCircle className="w-12 h-12 mb-3 opacity-20" />
                    <p className="font-medium">You have no cancelled bookings.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB: SAVED */}
          {activeTab === "saved" && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-heading font-bold text-dark">Saved Items</h1>
                <span className="text-sm font-bold text-dark/50">{savedItems.length} items</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {savedItems.map(item => (
                  <div key={item.id} className="bg-white border border-dark/10 rounded-2xl p-4 flex gap-4 pr-12 relative group shadow-sm hover:shadow-md transition-shadow">
                    <Image src={item.image} alt={item.title} width={80} height={80} className="rounded-xl object-cover shrink-0" />
                    <div className="flex flex-col justify-center">
                      <span className="text-[10px] uppercase font-bold text-primary tracking-widest mb-1">{item.type}</span>
                      <h4 className="font-bold text-dark leading-tight">{item.title}</h4>
                      <Link href="#" className="text-xs font-bold text-dark/40 hover:text-dark mt-2 border-b border-transparent hover:border-dark w-fit transition-colors">View Details</Link>
                    </div>
                    {/* Floating Actions */}
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-light flex items-center justify-center text-red-500 opacity-0 group-hover:opacity-100 shadow-sm hover:bg-red-50 hover:scale-110 transition-all">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: REVIEWS */}
          {activeTab === "reviews" && (
             <div className="space-y-6 animate-fade-in-up">
               <h1 className="text-3xl font-heading font-bold text-dark mb-6">Reviews Given</h1>
               
               <div className="flex flex-col gap-6">
                 {myReviews.map(rev => (
                   <div key={rev.id} className="bg-white rounded-3xl p-6 border border-dark/10 shadow-sm relative group">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-bold text-dark text-lg">{rev.target}</h4>
                          <span className="text-xs text-dark/40 font-medium">Reviewed on {rev.date}</span>
                        </div>
                        <div className="flex gap-0.5 text-gold">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < rev.rating ? "fill-current" : "opacity-30"}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-dark/80 italic bg-light p-4 rounded-xl border border-dark/5 relative text-sm">
                        "{rev.text}"
                      </p>
                      
                      <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                         <button className="w-8 h-8 rounded-full bg-light border border-dark/10 flex items-center justify-center text-dark/60 hover:text-primary hover:border-primary transition-colors"><Edit className="w-4 h-4" /></button>
                      </div>
                   </div>
                 ))}
               </div>
             </div>
          )}

          {/* FALLBACK FOR OTHER TABS */}
          {["messages", "settings"].includes(activeTab) && (
             <div className="h-[60vh] flex flex-col items-center justify-center bg-white rounded-3xl border border-dark/10 animate-fade-in-up text-center px-6">
                <Settings className="w-16 h-16 text-dark/20 mb-4 animate-spin-slow" />
                <h2 className="text-2xl font-bold font-heading mb-2 capitalize">{activeTab} section</h2>
                <p className="text-dark/50">This module is currently under active development. Check back later!</p>
             </div>
          )}

        </div>
      </div>
    </main>
  );
}
