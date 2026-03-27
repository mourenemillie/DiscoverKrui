"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookA, Music, PenTool, Coffee, Volume2, ArrowRight, Share2, CheckCircle2 } from "lucide-react";

export default function CulturePage() {
  const [quiz1Answer, setQuiz1Answer] = useState<string | null>(null);
  
  // Quiz State
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const cultureQuiz = [
    {
      q: "What is the traditional gold-threaded fabric of Lampung called?",
      options: ["Batik", "Songket", "Tapis", "Ulos"],
      answer: "Tapis"
    },
    {
      q: "Which of the following is an authentic Lampung dish?",
      options: ["Rendang", "Seruit", "Gudeg", "Papeda"],
      answer: "Seruit"
    },
    {
      q: "Which traditional dance is famously performed by the Saibatin people in Pesisir Barat?",
      options: ["Tari Cangget", "Tari Nyambai", "Tari Kecak", "Tari Piring"],
      answer: "Tari Nyambai"
    },
    {
      q: "What does the Lampung word 'Lapah' mean?",
      options: ["Eat", "Sleep", "Walk/Go", "Sit"],
      answer: "Walk/Go"
    },
    {
      q: "What is the native script of Lampung known as?",
      options: ["Hanacaraka", "Had Lampung", "Pallawa", "Lontara"],
      answer: "Had Lampung"
    }
  ];

  const handleQuizAnswer = (selected: string) => {
    if (selected === cultureQuiz[currentQ].answer) {
      setScore(score + 1);
    }
    
    if (currentQ < cultureQuiz.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <main className="min-h-screen bg-light">
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-multiply"
          style={{ backgroundImage: "url('/images/tapis_lokal.jpg')" }}
        ></div>
        <div className="absolute inset-0 z-10 bg-dark/80"></div>

        <div className="container relative z-20 mx-auto px-6 text-center text-light mt-16">
          <div className="flex items-center justify-center gap-2 mb-4 text-sm font-medium opacity-80 uppercase tracking-widest text-gold">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Culture</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold drop-shadow-lg mb-6 text-gold">
            Lampung Living Culture
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-light/90 mb-10 leading-relaxed">
            Ancient traditions, living stories — discover what makes Krui's culture unlike anywhere else in the world.
          </p>
          <div className="bg-red-500/20 border border-red-500/50 backdrop-blur-md text-red-100 max-w-lg mx-auto p-4 rounded-xl flex items-center gap-4 text-left">
            <div className="w-2 h-12 bg-red-500 shrink-0"></div>
            <p className="font-medium">
              <span className="font-bold text-lg block">Did you know?</span>
              The native Lampung language is predicted to disappear entirely in 36 years without active preservation.
            </p>
          </div>
        </div>
      </section>

      {/* AKSARA LAMPUNG SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">Aksara Lampung</h2>
              <div className="w-24 h-1 bg-gold mb-6"></div>
              <p className="text-dark/70 text-lg mb-6 leading-relaxed">
                Known as <strong>Had Lampung</strong>, this ancient Brahmic script is a vital piece of the region's heritage. In Krui (Pesisir Barat), the <strong>Saibatin</strong> dialect and customs are proudly upheld.
              </p>
              <p className="text-dark/70 text-lg mb-6 leading-relaxed">
                The script consists of 20 basic consonants called <strong>Kelabai Surat</strong>, read with an 'A' ending, and 12 diacritics (Anak Surat) to change the vowels or add closures.
              </p>
              
              <div className="bg-secondary/20 p-8 rounded-3xl border border-gold/20 shadow-inner flex items-center gap-6">
                 <PenTool className="w-10 h-10 text-gold shrink-0" />
                 <p className="font-medium text-dark italic">"Preserving our ancestral script is preserving the soul of the Saibatin people. Recognizing the authentic letters is the first step."</p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
               <div className="bg-white p-4 rounded-3xl shadow-xl border border-dark/10 relative group">
                 <div className="absolute -inset-1 bg-gradient-to-r from-gold to-accent rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                 <div className="relative aspect-auto bg-light rounded-2xl overflow-hidden border border-dark/5 flex items-center justify-center min-h-[400px]">
                   {/* USER INSTRUCTION: Replace this src with '/aksara-lampung.png' once saved in public folder */}
                   <img 
                     src="/aksara-lampung.png" 
                     alt="Aksara Lampung Saibatin 20 Kelabai Surat" 
                     className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                     onError={(e) => {
                       // Fallback if the user hasn't put the image in the public folder yet
                       e.currentTarget.src = "/images/desa.jpg"; 
                       e.currentTarget.className = "w-full h-full object-cover opacity-50 grayscale";
                     }}
                   />
                   
                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-dark/80 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                     Hover to inspect Kelabai Surat
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* BAHASA LAMPUNG SECTION */}
      <section className="py-24 bg-dark text-light relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gold">Everyday Expressions (Saibatin Hub)</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
            <p className="mt-6 text-light/70 max-w-2xl mx-auto text-lg">
              Learning a few words in the local Saibatin dialect goes a long way. The Krui locals will truly appreciate your effort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { word: "Lapah", mean: "To walk / Go", ex: "Lapah mit pantai (Let's go to the beach)" },
              { word: "Mejong", mean: "To sit", ex: "Mejong pai dija (Please sit here)" },
              { word: "Nenggalan", mean: "Alone", ex: "Nyak nenggalan (I am alone)" },
              { word: "Mengan", mean: "To eat", ex: "Nyak haga mengan (I want to eat)" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold font-heading text-gold group-hover:text-white transition-colors">{item.word}</h3>
                  <button className="w-8 h-8 rounded-full bg-light/10 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all">
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="font-medium text-lg mb-2">{item.mean}</p>
                <p className="text-sm text-light/50 italic">"{item.ex}"</p>
              </div>
            ))}
          </div>

          {/* Mini Quiz */}
          <div className="bg-gradient-to-br from-accent to-red-600 rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
               <h3 className="text-2xl font-bold font-heading mb-2">Mini Translation Game</h3>
               <p className="text-white/80 mb-8">What does "Mengan pai" mean?</p>
               
               <div className="flex flex-wrap justify-center gap-4">
                 <button onClick={() => setQuiz1Answer('wrong1')} className={`px-6 py-3 rounded-full font-bold transition-all ${quiz1Answer === 'wrong1' ? 'bg-red-800 text-white opacity-50' : 'bg-white text-dark hover:scale-105'}`}>Let's walk</button>
                 <button onClick={() => setQuiz1Answer('correct')} className={`px-6 py-3 rounded-full font-bold transition-all ${quiz1Answer === 'correct' ? 'bg-green-500 text-white scale-110' : 'bg-white text-dark hover:scale-105'}`}>Please eat</button>
                 <button onClick={() => setQuiz1Answer('wrong2')} className={`px-6 py-3 rounded-full font-bold transition-all ${quiz1Answer === 'wrong2' ? 'bg-red-800 text-white opacity-50' : 'bg-white text-dark hover:scale-105'}`}>Sit down</button>
               </div>
               
               {quiz1Answer === 'correct' && (
                 <p className="mt-6 text-green-100 font-bold animate-fade-in-up flex items-center justify-center gap-2">
                   <CheckCircle2 className="w-5 h-5" /> Benar! (Correct!) You are a natural.
                 </p>
               )}
             </div>
          </div>
        </div>
      </section>

      {/* DANCE, FABRIC, CULINARY TABS (Simulated stacking) */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-6 lg:px-12">
           
           {/* Section 1: Dance */}
           <div className="flex flex-col md:flex-row gap-12 items-center mb-32 border-b border-dark/10 pb-20">
             <div className="md:w-1/2 relative h-96 w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/desa.jpg" alt="Tari Nyambai" fill className="object-cover" />
                <div className="absolute inset-0 bg-dark/20 flex items-center justify-center group cursor-pointer">
                  <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/50 transition-all">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-dark border-b-[10px] border-b-transparent ml-2"></div>
                  </div>
                </div>
             </div>
             <div className="md:w-1/2">
                <Music className="w-12 h-12 text-gold mb-4" />
                <h2 className="text-4xl font-heading font-bold mb-4">Tari Tradisional: Nyambai</h2>
                <p className="text-dark/70 text-lg mb-8 leading-relaxed">
                  The traditional dance of the Saibatin people in Pesisir Barat. Historically performed by nobles and youth during major customary ceremonies and weddings (Nayuh). It represents the grace and honor of Krui's coastal communities.
                </p>
                <Link href="/packages/culture-nature" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
                  Experience live at Bumi Lebu <ArrowRight className="w-4 h-4" />
                </Link>
             </div>
           </div>

           {/* Section 2: Tapis */}
           <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-32 border-b border-dark/10 pb-20">
             <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-2xl overflow-hidden mt-8 shadow-lg">
                  <Image src="/images/tapis_lokal.jpg" alt="Tapis" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/tapis_lokal.jpg" alt="Tapis Process" fill className="object-cover" />
                </div>
             </div>
             <div className="md:w-1/2 pr-8">
                <PenTool className="w-12 h-12 text-accent mb-4" />
                <h2 className="text-4xl font-heading font-bold mb-4">The Golden Threads of Tapis</h2>
                <p className="text-dark/70 text-lg mb-8 leading-relaxed">
                  Tapis weaving is the pride of Lampung women. Made by meticulously embroidering gold or silver threads onto woven cotton, each motif tells a story of the region's relationship with nature, sea, and spirituality.
                </p>
                <Link href="/packages/culture-nature" className="inline-flex items-center gap-2 text-accent font-bold hover:underline">
                  Learn to weave with locals $\rightarrow$
                </Link>
             </div>
           </div>

           {/* Section 3: Culinary */}
           <div className="mb-12 text-center">
             <Coffee className="w-12 h-12 text-primary mx-auto mb-4" />
             <h2 className="text-4xl font-heading font-bold mb-4">Taste of Krui</h2>
             <p className="text-dark/70 text-lg max-w-2xl mx-auto mb-12">
               Lampung cuisine is bold, spicy, and heavily influenced by the ocean. Must-try dishes when visiting Krui.
             </p>

             <div className="grid md:grid-cols-3 gap-8 text-left">
               {[
                 {n:"Seruit", m:"Grilled fish mixed with sambal terasi, mango, and tempoyak.", i:"/images/seruit.jpg"},
                 {n:"Gulai Taboh", m:"A rich, coconut-milk based curry often cooked with tuna or local tuna.", i:"/images/gulai_taboh.webp"},
                 {n:"Kopi Krui", m:"World-renowned locally grown Robusta coffee with a strong, intense profile.", i:"/images/robusta_kopi.jpg"}
               ].map((c, i) => (
                 <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-md group border border-dark/5">
                   <div className="relative h-48 overflow-hidden">
                     <Image src={c.i} alt={c.n} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                   </div>
                   <div className="p-6">
                     <h3 className="text-xl font-bold font-heading mb-2">{c.n}</h3>
                     <p className="text-dark/60 text-sm">{c.m}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
           
           <div className="text-center mt-12">
             <Link href="/guides?specialty=Culinary" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-light font-bold hover:bg-dark transition-all shadow-xl hover:-translate-y-1">
               Book a Culinary Guide
             </Link>
           </div>
        </div>
      </section>

      {/* BIG CULTURE QUIZ */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gold mb-4">Test Your Lampung Knowledge</h2>
          <p className="text-light/70 mb-12 text-lg">See how much you've learned about the rich heritage of Krui and West Lampung.</p>

          {!showResults ? (
            <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl">
              <span className="text-gold font-bold tracking-widest uppercase text-sm block mb-4">Question {currentQ + 1} of {cultureQuiz.length}</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-8">{cultureQuiz[currentQ].q}</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {cultureQuiz[currentQ].options.map((opt, i) => (
                  <button 
                    key={i}
                    onClick={() => handleQuizAnswer(opt)}
                    className="p-4 border-2 border-white/20 rounded-xl hover:bg-gold hover:border-gold hover:text-dark font-bold text-lg transition-all"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 md:p-12 rounded-3xl text-dark text-center shadow-2xl animate-fade-in-up border-4 border-gold">
               <h3 className="text-3xl font-heading font-bold mb-2">Quiz Completed!</h3>
               <p className="text-dark/60 mb-8 font-medium">You scored</p>
               
               <div className="w-32 h-32 mx-auto rounded-full bg-light border-8 border-gold flex flex-col items-center justify-center mb-8">
                 <span className="text-4xl font-bold text-dark">{score}</span>
                 <span className="text-dark/40 text-sm font-bold uppercase border-t border-dark/10 pt-1 w-1/2 mt-1">out of {cultureQuiz.length}</span>
               </div>

               <p className="text-lg text-dark/80 max-w-md mx-auto mb-8 font-medium">
                 {score === 5 ? "Perfect! You're ready to be a Krui local." : 
                  score >= 3 ? "Great job! You know your stuff." : 
                  "Good try! Book a culture package to learn more firsthand."}
               </p>

               <button className="flex items-center justify-center gap-2 px-8 py-4 bg-[#1DA1F2] text-white rounded-full font-bold hover:bg-[#1A91DA] transition-colors mx-auto shadow-lg hover:-translate-y-1">
                 <Share2 className="w-5 h-5" /> Share Result
               </button>
            </div>
          )}
        </div>
      </section>
      
    </main>
  );
}
