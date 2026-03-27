"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, LayoutDashboard, CalendarDays, PackageOpen, 
  Wallet, Star, UserCircle, Settings, Bell, ChevronRight, 
  MapPin, Clock, XCircle, TrendingUp, PlusCircle, Calendar,
  MoreVertical, Edit, SwitchCamera, Trash2, ArrowUpRight, MessageSquare
} from "lucide-react";

export default function GuideDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [bookingTab, setBookingTab] = useState("new_requests");
  const [showCreateForm, setShowCreateForm] = useState(false);

  // DUMMY DATA FOR GUIDE
  const guide = {
    name: "Ahmad Fauzi",
    specialty: "Surfing & Beach Expert",
    avatar: "/images/boy.png",
    stats: {
      bookingsToday: 2,
      pendingRequests: 3,
      earningsMonth: "Rp 8.500.000",
      rating: 4.9
    }
  };

  const newRequests = [
    { id: "REQ-01", traveler: "Sarah Jennings", country: "🇦🇺", date: "24 Oct 2026", duration: "3 Days", package: "Surfer's Escape", pax: 2, request: "Hi Ahmad! One of us is a total beginner, is that okay?" },
    { id: "REQ-02", traveler: "Budi Pratama", country: "🇮🇩", date: "27 Oct 2026", duration: "1 Day", package: "Hidden Beach Tour", pax: 4, request: "Bisa minta jemput di terminal Krui jam 8 pagi?" },
  ];

  const upcomingSchedule = [
    { date: "Oct 12", title: "Surfer's Escape (Day 1)", traveler: "Mark S." },
    { date: "Oct 13", title: "Surfer's Escape (Day 2)", traveler: "Mark S." },
    { date: "Oct 15", title: "Family Beach Day", traveler: "Dian Family" }
  ];

  const myPackages = [
    { id: 1, title: "Surfer's Escape (3D2N)", price: "1.200.000", bookings: 45, active: true, image: "/images/surfing.jpg" },
    { id: 2, title: "Hidden Gems Explorer (2D1N)", price: "850.000", bookings: 12, active: true, image: "/images/pulau_pisang_tourist.jpg" },
    { id: 3, title: "Advanced Barrel Hunt", price: "500.000", bookings: 8, active: false, image: "/images/nelayan_laut_jernih.jpg" },
  ];

  const transactions = [
    { date: "10 Oct 2026", traveler: "Mark S.", package: "Surfer's Escape (2 pax)", amount: "2.400.000", status: "Paid" },
    { date: "05 Oct 2026", traveler: "Chloe W.", package: "Hidden Gems Explorer (1 pax)", amount: "850.000", status: "Paid" },
    { date: "02 Oct 2026", traveler: "Dian Fam", package: "Family Beach Day (4 pax)", amount: "1.800.000", status: "Pending" },
  ];

  const reviews = [
    { id: 1, traveler: "Jake M.", country: "🇦🇺", rating: 5, date: "15 Sep 2026", text: "Ahmad is a legend! Put us right on the peak every single session. Best guide in Krui hands down." },
    { id: 2, traveler: "Siti N.", country: "🇮🇩", rating: 5, date: "02 Sep 2026", text: "Pak Ahmad sangaaat sabar ngajarin anak saya surfing. Pengalaman luar biasa." },
  ];

  // Warm, earthy theme classes
  const theme = {
    primary: "bg-[#8C5A35] text-white", // Warm brown
    primaryLight: "bg-[#8C5A35]/10 text-[#8C5A35]",
    primaryBorder: "border-[#8C5A35]",
    primaryText: "text-[#8C5A35]",
    hover: "hover:bg-[#8C5A35] hover:text-white",
    hoverBorder: "hover:border-[#8C5A35]",
    accent: "bg-[#D4A843]", // Gold
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-8">
        
        {/* SIDEBAR FOR GUIDES */}
        <aside className="lg:w-1/4 shrink-0 mt-8 lg:mt-0">
          <div className="bg-white rounded-3xl border border-dark/10 shadow-lg overflow-hidden lg:sticky lg:top-28">
            {/* Guide Profile */}
            <div className={`p-8 text-center border-b border-dark/5 bg-gradient-to-b from-[#8C5A35]/10 to-transparent relative`}>
              <div className="absolute top-4 right-4 relative cursor-pointer group">
                 <Bell className={`w-6 h-6 ${theme.primaryText}`} />
                 <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </div>
              <div className="relative w-28 h-28 mx-auto mb-4 rounded-full border-4 border-white shadow-md overflow-hidden bg-light">
                 <Image src={guide.avatar} alt={guide.name} fill className="object-cover" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-dark">{guide.name}</h2>
              <div className="flex items-center justify-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold w-fit mx-auto mt-2">
                <CheckCircle2 className="w-3 h-3" /> Verified Guide
              </div>
            </div>

            {/* Navigation */}
            <nav className="p-4 flex flex-col gap-1">
              {[
                { id: "overview", label: "Overview", icon: <LayoutDashboard className="w-5 h-5" /> },
                { id: "bookings", label: "Bookings", icon: <CalendarDays className="w-5 h-5" />, badge: 3 },
                { id: "packages", label: "My Packages", icon: <PackageOpen className="w-5 h-5" /> },
                { id: "calendar", label: "Calendar", icon: <Calendar className="w-5 h-5" /> },
                { id: "earnings", label: "Earnings", icon: <Wallet className="w-5 h-5" /> },
                { id: "reviews", label: "Reviews", icon: <Star className="w-5 h-5" /> },
                { id: "profile", label: "Profile Setup", icon: <UserCircle className="w-5 h-5" /> },
                { id: "settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors text-sm font-bold ${
                    activeTab === item.id 
                      ? `${theme.primary} shadow-md` 
                      : "text-dark/60 hover:bg-dark/5 hover:text-dark"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon} {item.label}
                  </div>
                  {item.badge && <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">{item.badge}</span>}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <div className="lg:w-3/4">
          
          {/* TAB: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-8 animate-fade-in-up">
              
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="text-3xl font-heading font-bold text-dark">Welcome, {guide.name.split(' ')[0]}</h1>
                  <p className="text-dark/60">Here is what&apos;s happening today.</p>
                </div>
                <button className={`px-5 py-2.5 rounded-full ${theme.primary} text-sm font-bold shadow-md hover:-translate-y-0.5 transition-transform flex items-center gap-2`}>
                   <PlusCircle className="w-4 h-4" /> Create Package
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-dark/5 shadow-sm">
                  <span className="text-xs uppercase text-dark/50 font-bold mb-1 block">Bookings Today</span>
                  <div className="flex items-end gap-3 mt-2">
                    <span className="text-4xl font-bold font-heading text-dark">{guide.stats.bookingsToday}</span>
                    <span className="text-xs font-bold text-green-500 flex items-center mb-1"><TrendingUp className="w-3 h-3 mr-1"/> Up</span>
                  </div>
                </div>
                <div className={`bg-white p-6 rounded-2xl border ${theme.primaryBorder} shadow-sm relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-16 h-16 ${theme.primaryLight} rounded-bl-full -z-10`}></div>
                  <span className={`text-xs uppercase ${theme.primaryText} font-bold mb-1 block`}>Pending Requests</span>
                  <div className="flex items-end gap-3 mt-2">
                    <span className="text-4xl font-bold font-heading text-dark">{guide.stats.pendingRequests}</span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-dark/5 shadow-sm">
                  <span className="text-xs uppercase text-dark/50 font-bold mb-1 block">Month Earnings</span>
                  <div className="flex items-end gap-3 mt-2">
                    <span className="text-2xl font-bold font-heading text-dark text-nowrap">{guide.stats.earningsMonth}</span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-dark/5 shadow-sm flex flex-col items-center justify-center text-center">
                  <div className="flex gap-1 text-gold mb-2">
                     <Star className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-3xl font-bold font-heading text-dark">{guide.stats.rating}</span>
                  <span className="text-xs uppercase text-dark/50 font-bold mt-1">Overall Rating</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Upcoming Schedule Timeline */}
                <div className="lg:col-span-1 bg-white rounded-3xl p-6 md:p-8 border border-dark/5 shadow-sm">
                  <h3 className="text-lg font-bold font-heading mb-6 flex justify-between items-center">
                    This Week <Link href="#" className={`text-xs ${theme.primaryText} hover:underline`}>View Calendar</Link>
                  </h3>
                  <div className="relative border-l-2 border-dark/10 ml-3 space-y-6">
                     {upcomingSchedule.map((s, i) => (
                       <div key={i} className="relative pl-6">
                         <div className={`absolute -left-[5px] top-1.5 w-2 h-2 rounded-full ${i===0 ? theme.primary : 'bg-dark/20'}`}></div>
                         <span className={`text-xs font-bold uppercase tracking-wider ${i===0 ? theme.primaryText : 'text-dark/40'} block mb-1`}>{s.date}</span>
                         <h4 className="font-bold text-dark text-sm leading-tight">{s.title}</h4>
                         <p className="text-xs text-dark/60 flex items-center gap-1 mt-1"><UserCircle className="w-3 h-3" /> {s.traveler}</p>
                       </div>
                     ))}
                  </div>
                </div>

                {/* Performance Chart Simulation & Banner */}
                <div className="lg:col-span-2 space-y-6">
                   <div className={`rounded-3xl p-6 md:p-8 ${theme.primaryLight} border ${theme.primaryBorder} flex flex-col md:flex-row items-center gap-6 justify-between`}>
                      <div>
                        <div className="flex gap-2 items-center mb-2">
                           <Bell className={`w-5 h-5 ${theme.primaryText}`} />
                           <h3 className={`font-bold ${theme.primaryText}`}>New Booking Requests!</h3>
                        </div>
                        <p className="text-dark/70 text-sm">You have 3 new package requests from travelers waiting for your confirmation.</p>
                      </div>
                      <button onClick={() => {setActiveTab("bookings"); setBookingTab("new_requests");}} className={`px-6 py-3 rounded-full ${theme.primary} text-sm font-bold shadow-md hover:opacity-90 transition-opacity whitespace-nowrap`}>
                        Review Requests
                      </button>
                   </div>
                   
                   <div className="bg-white rounded-3xl p-6 md:p-8 border border-dark/5 shadow-sm">
                     <h3 className="text-lg font-bold font-heading mb-6">Booking Performance (Last 6 Months)</h3>
                     {/* CSS Simulated Line Chart */}
                     <div className="h-48 w-full flex items-end justify-between gap-2 border-b border-l border-dark/10 pb-4 pl-4 relative">
                        {/* Fake Y Axis */}
                        <div className="absolute left-0 top-0 bottom-4 flex flex-col justify-between text-[10px] text-dark/30 font-bold -translate-x-full pr-2">
                          <span>30</span><span>20</span><span>10</span><span>0</span>
                        </div>
                        {/* Bars / Points */}
                        {[40, 60, 45, 80, 70, 95].map((h, i) => (
                           <div key={i} className="flex flex-col items-center flex-1 group">
                             <div className={`w-full max-w-[40px] rounded-t-sm transition-all duration-700 ease-out group-hover:opacity-80`} style={{height: `${h}%`, backgroundColor: i === 5 ? '#8C5A35' : '#e5d9d0'}}></div>
                             <span className="text-[10px] uppercase font-bold text-dark/40 mt-2 block w-full text-center">
                               {['May','Jun','Jul','Aug','Sep','Oct'][i]}
                             </span>
                           </div>
                        ))}
                     </div>
                   </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: BOOKINGS */}
          {activeTab === "bookings" && (
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-3xl font-heading font-bold text-dark mb-6">Manage Bookings</h1>
              
              <div className="flex overflow-x-auto gap-2 border-b border-dark/10 pb-4 hide-scrollbar">
                {["new_requests", "upcoming", "completed", "cancelled"].map(t => (
                  <button 
                    key={t}
                    onClick={() => setBookingTab(t)}
                    className={`px-5 py-2 rounded-full text-sm font-bold capitalize whitespace-nowrap transition-colors ${
                      bookingTab === t ? theme.primary : "bg-dark/5 text-dark/60 hover:bg-dark/10"
                    }`}
                  >
                    {t.replace('_', ' ')} {t === "new_requests" && <span className="ml-1 bg-white text-[#8C5A35] px-1.5 py-0.5 rounded-full text-[10px]">3</span>}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {bookingTab === "new_requests" && newRequests.map((req) => (
                  <div key={req.id} className="bg-white rounded-3xl p-6 lg:p-8 border border-[#8C5A35]/30 shadow-md">
                    <div className="flex flex-col lg:flex-row justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`bg-red-100 text-red-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider`}>Needs Action</span>
                          <span className="text-dark/40 text-[10px] font-bold uppercase tracking-wider">{req.id}</span>
                        </div>
                        <h3 className="text-xl font-bold font-heading text-dark border-b border-dark/5 pb-3">{req.package}</h3>
                        
                        <div className="grid sm:grid-cols-2 gap-4 mt-4 text-sm text-dark/80">
                           <div className="flex items-center gap-2"><UserCircle className={`w-4 h-4 ${theme.primaryText}`} /> <span className="font-bold">{req.traveler}</span> {req.country}</div>
                           <div className="flex items-center gap-2"><Calendar className={`w-4 h-4 ${theme.primaryText}`} /> {req.date}</div>
                           <div className="flex items-center gap-2"><Clock className={`w-4 h-4 ${theme.primaryText}`} /> {req.duration}</div>
                           <div className="flex items-center gap-2"><UserCircle className={`w-4 h-4 ${theme.primaryText}`} /> {req.pax} Pax</div>
                        </div>

                        <div className={`mt-4 p-4 rounded-xl ${theme.primaryLight} text-sm flex gap-3`}>
                           <MessageSquare className={`w-5 h-5 shrink-0 ${theme.primaryText}`} />
                           <p className="italic text-dark/80">&quot;{req.request}&quot;</p>
                        </div>
                      </div>
                      
                      <div className="lg:w-48 shrink-0 flex flex-col justify-end gap-3 border-t lg:border-t-0 lg:border-l border-dark/10 pt-4 lg:pt-0 lg:pl-6">
                         <button className={`w-full py-3 rounded-xl ${theme.primary} font-bold text-sm hover:shadow-lg transition-all`}>Accept Request</button>
                         <button className="w-full py-3 rounded-xl border border-dark/20 text-dark/60 font-bold text-sm hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors">Decline / Not Available</button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {bookingTab === "upcoming" && (
                   <div className="bg-white rounded-3xl p-6 border border-dark/10 shadow-sm text-dark/60 text-center py-12">
                     No upcoming bookings approved yet.
                   </div>
                )}
              </div>
            </div>
          )}

          {/* TAB: MY PACKAGES */}
          {activeTab === "packages" && (
            <div className="space-y-6 animate-fade-in-up relative">
              
              {!showCreateForm ? (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-heading font-bold text-dark">My Tour Packages</h1>
                    <button onClick={() => setShowCreateForm(true)} className={`px-5 py-2.5 rounded-full ${theme.primary} text-sm font-bold shadow-md hover:-translate-y-0.5 transition-transform hidden sm:flex items-center gap-2`}>
                       <PlusCircle className="w-4 h-4" /> Create New
                    </button>
                  </div>

                  <div className="flex flex-col gap-6">
                     {myPackages.map(pkg => (
                       <div key={pkg.id} className={`bg-white rounded-3xl p-6 border ${pkg.active ? 'border-dark/10' : 'border-red-200 bg-red-50/30'} shadow-sm flex flex-col md:flex-row gap-6 items-center`}>
                          <div className="relative w-full md:w-48 h-32 rounded-2xl overflow-hidden shrink-0">
                            <Image src={pkg.image} alt="Package" fill className={`object-cover ${!pkg.active && 'grayscale'}`} />
                            {pkg.active ? 
                               <span className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">ACTIVE</span> :
                               <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">INACTIVE</span>
                            }
                          </div>

                          <div className="flex-1 w-full">
                             <div className="flex justify-between items-start mb-2">
                               <h3 className={`text-xl font-bold font-heading ${pkg.active ? 'text-dark' : 'text-dark/40'}`}>{pkg.title}</h3>
                               <span className="font-bold text-dark">Rp {pkg.price} <span className="text-xs text-dark/40 font-normal">/pax</span></span>
                             </div>
                             <p className="text-sm text-dark/60 mb-4">{pkg.bookings} successful bookings</p>

                             <div className="flex flex-wrap gap-2">
                               <button className="flex items-center gap-1 px-4 py-2 bg-light border border-dark/10 rounded-lg text-xs font-bold hover:bg-dark/5"><Edit className="w-3.5 h-3.5" /> Edit Details</button>
                               <button className="flex items-center gap-1 px-4 py-2 bg-light border border-dark/10 rounded-lg text-xs font-bold hover:bg-dark/5"><SwitchCamera className="w-3.5 h-3.5" /> Toggle Active</button>
                               <button className="flex items-center gap-1 px-4 py-2 ml-auto text-red-500 rounded-lg text-xs font-bold hover:bg-red-50"><Trash2 className="w-3.5 h-3.5" /> Delete</button>
                             </div>
                          </div>
                       </div>
                     ))}
                     
                     {/* Mobile floating button */}
                     <button onClick={() => setShowCreateForm(true)} className={`fixed bottom-6 right-6 w-14 h-14 rounded-full ${theme.primary} text-white shadow-xl flex items-center justify-center sm:hidden z-50`}>
                        <PlusCircle className="w-6 h-6" />
                     </button>
                  </div>
                </>
              ) : (
                /* CREATE PACKAGE FORM */
                <div className="bg-white rounded-3xl p-6 lg:p-10 border border-dark/10 shadow-lg relative">
                   <button onClick={() => setShowCreateForm(false)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-light text-dark/40 hover:text-dark">
                     <XCircle className="w-6 h-6" />
                   </button>
                   <h2 className="text-2xl font-bold font-heading mb-6 border-b border-dark/10 pb-4">Create New Package</h2>
                   
                   <form className="space-y-6">
                     <div className="grid md:grid-cols-2 gap-6">
                       <div>
                         <label className="text-xs font-bold text-dark/50 uppercase tracking-widest block mb-1.5">Package Title</label>
                         <input type="text" placeholder="e.g. Sunset Surfing Experience" className="w-full border border-dark/20 rounded-xl p-3 focus:outline-none focus:border-[#8C5A35]" />
                       </div>
                       <div>
                         <label className="text-xs font-bold text-dark/50 uppercase tracking-widest block mb-1.5">Price / Pax (Rp)</label>
                         <input type="number" placeholder="500000" className="w-full border border-dark/20 rounded-xl p-3 focus:outline-none focus:border-[#8C5A35]" />
                       </div>
                       <div>
                         <label className="text-xs font-bold text-dark/50 uppercase tracking-widest block mb-1.5">Duration</label>
                         <input type="text" placeholder="e.g. 1 Day OR 3D2N" className="w-full border border-dark/20 rounded-xl p-3 focus:outline-none focus:border-[#8C5A35]" />
                       </div>
                       <div>
                         <label className="text-xs font-bold text-dark/50 uppercase tracking-widest block mb-1.5">Max Participants</label>
                         <input type="number" placeholder="4" className="w-full border border-dark/20 rounded-xl p-3 focus:outline-none focus:border-[#8C5A35]" />
                       </div>
                     </div>
                     
                     <div>
                       <label className="text-xs font-bold text-dark/50 uppercase tracking-widest block mb-1.5">Description & Activities</label>
                       <textarea rows={4} placeholder="Describe the trip..." className="w-full border border-dark/20 rounded-xl p-3 focus:outline-none focus:border-[#8C5A35] resize-none"></textarea>
                     </div>

                     <div>
                       <label className="text-xs font-bold text-dark/50 uppercase tracking-widest block mb-1.5">Cover Photo</label>
                       <div className="border-2 border-dashed border-dark/20 rounded-xl p-6 text-center cursor-pointer hover:bg-light transition-colors">
                         <Image src="" alt="" className="hidden" />
                         <PlusCircle className="w-8 h-8 mx-auto text-dark/30 mb-2" />
                         <span className="text-sm font-bold text-dark/50">Click to upload image</span>
                       </div>
                     </div>

                     <div className="flex justify-end gap-3 pt-4 border-t border-dark/5">
                        <button type="button" onClick={() => setShowCreateForm(false)} className="px-6 py-3 rounded-xl border border-dark/20 text-dark font-bold hover:bg-light">Cancel</button>
                        <button type="button" className={`px-6 py-3 rounded-xl ${theme.primary} font-bold shadow-md hover:opacity-90`}>Publish Package</button>
                     </div>
                   </form>
                </div>
              )}
            </div>
          )}

          {/* TAB: CALENDAR */}
          {activeTab === "calendar" && (
             <div className="space-y-6 animate-fade-in-up">
                <h1 className="text-3xl font-heading font-bold text-dark mb-6">Availability Calendar</h1>
                <div className="bg-white rounded-3xl p-8 border border-dark/10 shadow-sm text-center">
                   <div className="flex justify-between items-center mb-8 pb-4 border-b border-dark/10">
                      <h3 className="font-bold text-xl">October 2026</h3>
                      <div className="flex gap-4 text-xs font-bold">
                         <span className="flex items-center gap-1"><div className="w-3 h-3 bg-green-500 rounded-sm"></div> Available</span>
                         <span className="flex items-center gap-1"><div className="w-3 h-3 bg-red-500 rounded-sm"></div> Booked</span>
                         <span className="flex items-center gap-1"><div className="w-3 h-3 bg-gray-300 rounded-sm"></div> Blocked</span>
                      </div>
                   </div>
                   {/* Dummy Grid */}
                   <div className="grid grid-cols-7 gap-2 md:gap-4 mb-4">
                     {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => <div key={d} className="font-bold text-dark/40 text-sm py-2">{d}</div>)}
                     {[...Array(30)].map((_, i) => {
                       const d = i + 1;
                       let statusClass = "bg-green-50 text-green-700 border-green-200 hover:bg-green-100 cursor-pointer";
                       if (d === 12 || d === 13 || d===15) statusClass = "bg-red-500 text-white border-red-600 shadow-md cursor-not-allowed";
                       if (d === 20 || d === 21) statusClass = "bg-gray-100 text-gray-400 border-gray-200 hover:bg-gray-200 cursor-pointer";
                       
                       return (
                         <div key={d} className={`aspect-square rounded-xl md:rounded-2xl border flex flex-col items-center justify-center text-lg font-bold transition-all ${statusClass}`}>
                           {d}
                         </div>
                       )
                     })}
                   </div>
                   <p className="text-dark/40 text-sm mt-6">Click on a green date to block it, or a gray date to make it available.</p>
                </div>
             </div>
          )}

          {/* TAB: EARNINGS */}
          {activeTab === "earnings" && (
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-3xl font-heading font-bold text-dark mb-6">Earnings & Withdrawals</h1>
              
              <div className={`bg-gradient-to-br from-[#8C5A35] to-[#5C3A21] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden`}>
                 <Wallet className="absolute -right-4 -top-4 w-48 h-48 opacity-10 text-white" />
                 <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                   <div>
                     <span className="uppercase text-white/70 font-bold text-xs tracking-widest mb-2 block">Balance Available to Withdraw</span>
                     <h2 className="text-4xl md:text-5xl font-heading font-bold line-clamp-1 break-all mb-2">Rp 4.250.000</h2>
                     <p className="text-white/60 text-sm">Next scheduled payout: 15 Oct 2026</p>
                   </div>
                   <button className="bg-white text-[#8C5A35] px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-50 flex items-center gap-2 whitespace-nowrap">
                     <ArrowUpRight className="w-5 h-5" /> Request Withdrawal
                   </button>
                 </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-dark/10 shadow-sm overflow-hidden">
                <h3 className="font-bold font-heading text-lg mb-4">Transaction History</h3>
                <div className="overflow-x-auto">
                   <table className="w-full text-left text-sm">
                     <thead className="text-dark/40 font-bold uppercase text-[10px] border-b border-dark/10">
                       <tr>
                         <th className="pb-3 pr-4">Date</th>
                         <th className="pb-3 pr-4">Traveler</th>
                         <th className="pb-3 pr-4">Package</th>
                         <th className="pb-3 pr-4">Amount</th>
                         <th className="pb-3">Status</th>
                       </tr>
                     </thead>
                     <tbody>
                       {transactions.map((t, i) => (
                         <tr key={i} className="border-b border-dark/5 last:border-0 hover:bg-light transition-colors">
                           <td className="py-4 pr-4 text-dark/70 whitespace-nowrap">{t.date}</td>
                           <td className="py-4 pr-4 font-bold text-dark">{t.traveler}</td>
                           <td className="py-4 pr-4 text-dark/80">{t.package}</td>
                           <td className="py-4 pr-4 font-bold text-dark font-heading">Rp {t.amount}</td>
                           <td className="py-4">
                             <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                               t.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                             }`}>
                               {t.status}
                             </span>
                           </td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                </div>
              </div>

            </div>
          )}

          {/* TAB: REVIEWS */}
           {activeTab === "reviews" && (
             <div className="space-y-6 animate-fade-in-up">
                <h1 className="text-3xl font-heading font-bold text-dark mb-6">Guest Reviews</h1>
                
                <div className="bg-white rounded-3xl p-8 border border-dark/10 shadow-sm flex flex-col md:flex-row items-center gap-8 mb-6">
                   <div className="text-center">
                      <h2 className="text-6xl font-heading font-bold text-dark">4.9</h2>
                      <div className="flex gap-1 text-gold my-2 justify-center"><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/></div>
                      <span className="text-sm text-dark/50">Based on 32 reviews</span>
                   </div>
                   <div className="flex-1 w-full space-y-2">
                     {[5,4,3,2,1].map(s => (
                       <div key={s} className="flex items-center gap-3 text-sm">
                         <span className="font-bold text-dark w-4">{s}</span>
                         <Star className="w-4 h-4 text-dark/30" />
                         <div className="flex-1 h-2 bg-dark/5 rounded-full overflow-hidden">
                           <div className={`h-full ${theme.accent} rounded-full`} style={{width: s===5?'90%':s===4?'10%':'0%'}}></div>
                         </div>
                       </div>
                     ))}
                   </div>
                </div>

                <div className="space-y-4">
                  {reviews.map(r => (
                    <div key={r.id} className="bg-white rounded-3xl p-6 border border-dark/10 shadow-sm">
                      <div className="flex justify-between items-start mb-3">
                         <div className="font-bold text-dark text-lg flex items-center gap-2">{r.traveler} {r.country}</div>
                         <span className="text-xs text-dark/50 font-medium">{r.date}</span>
                      </div>
                      <div className="flex gap-0.5 text-gold mb-3">
                        {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current"/>)}
                      </div>
                      <p className="text-dark/80 italic bg-light p-4 rounded-xl border border-dark/5 mb-4">&quot;{r.text}&quot;</p>
                      <button className={`text-sm font-bold ${theme.primaryText} hover:underline flex items-center gap-1`}><MessageSquare className="w-4 h-4"/> Reply to Guest</button>
                    </div>
                  ))}
                </div>
             </div>
           )}

          {/* FALLBACK */}
          {["profile", "settings"].includes(activeTab) && (
             <div className="h-[60vh] flex flex-col items-center justify-center bg-white rounded-3xl border border-dark/10 animate-fade-in-up text-center px-6">
                <Settings className="w-16 h-16 text-dark/20 mb-4 animate-spin-slow" />
                <h2 className="text-2xl font-bold font-heading mb-2 capitalize">{activeTab} Setup</h2>
                <p className="text-dark/50">This configuration module is under development.</p>
             </div>
          )}

        </div>
      </div>
    </main>
  );
}
