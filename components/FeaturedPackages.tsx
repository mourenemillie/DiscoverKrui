import Image from "next/image";
import Link from "next/link";
import { Clock, Map, CheckCircle2, ArrowRight } from "lucide-react";

export default function FeaturedPackages() {
  const packages = [
    {
      title: "Surfer's Escape",
      duration: "3D2N",
      price: "1.200.000",
      image: "/images/surfing.jpg",
      badge: "Best Seller",
      highlights: ["Tanjung Setia Waves", "Surf Lessons", "Beachfront Stay"],
    },
    {
      title: "Hidden Gems Explorer",
      duration: "2D1N",
      price: "850.000",
      image: "/images/pulau_pisang_tourist.jpg",
      badge: "",
      highlights: ["Way Campang Waterfall", "Secret Beaches", "Local Transport"],
    },
    {
      title: "Culture & Nature",
      duration: "2D1N",
      price: "950.000",
      image: "/images/tapis_lokal.jpg",
      badge: "New",
      highlights: ["Tapis Weaving", "Bumi Lebu Village", "Traditional Dinner"],
    },
  ];

  return (
    <section className="py-24 bg-dark text-light overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Ready-Made Trip Packages</h2>
            <div className="w-24 h-1 bg-gold"></div>
            <p className="mt-4 text-light/70 text-lg max-w-2xl">
              Don't want the hassle of planning? Choose from our curated itineraries designed by local experts.
            </p>
          </div>
          <Link href="/packages" className="group flex items-center gap-2 font-medium text-gold hover:text-light transition-colors">
            View All Packages <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar">
          {packages.map((pkg, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-[400px] flex-shrink-0 snap-start bg-white rounded-3xl overflow-hidden shadow-2xl relative group">
              {pkg.badge && (
                <div className="absolute top-4 right-4 z-20 bg-accent text-light px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  {pkg.badge}
                </div>
              )}
              
              <div className="relative h-60 w-full overflow-hidden">
                <Image 
                  src={pkg.image} 
                  alt={pkg.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4 text-dark">
                  <h3 className="text-2xl font-bold font-heading">{pkg.title}</h3>
                  <div className="flex items-center gap-1 text-primary font-bold bg-secondary/50 px-3 py-1 rounded-full text-sm">
                    <Clock className="w-4 h-4" /> {pkg.duration}
                  </div>
                </div>

                <ul className="flex flex-col gap-3 mb-8 text-dark/70">
                  {pkg.highlights.map((highlight, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" /> {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-auto">
                  <div className="text-dark">
                    <span className="text-sm font-medium text-dark/50 block">Per Person</span>
                    <span className="text-xl font-bold font-heading">Rp {pkg.price}</span>
                  </div>
                  <Link href="/packages" className="px-6 py-3 bg-primary text-light font-bold rounded-full hover:bg-dark transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
