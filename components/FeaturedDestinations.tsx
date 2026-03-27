import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, ArrowRight } from "lucide-react";

const destinations = [
  {
    name: "Pantai Tanjung Setia",
    category: "Surfing",
    rating: 4.9,
    image: "/images/pantai_tanjung_setia.jpg",
    color: "bg-primary",
  },
  {
    name: "Pulau Pisang",
    category: "Snorkeling",
    rating: 4.8,
    image: "/images/diving_in_pulau_pisan.jpg",
    color: "bg-accent",
  },
  {
    name: "Bukit Selalau",
    category: "Panorama",
    rating: 4.7,
    image: "/images/bukit_selalau.jpg",
    color: "bg-gold",
  },
  {
    name: "Desa Wisata Bumi Lebu",
    category: "Culture",
    rating: 4.8,
    image: "/images/desa.jpg",
    color: "bg-secondary text-dark",
  },
  {
    name: "Pantai Walur",
    category: "Family",
    rating: 4.6,
    image: "/images/family.jpg",
    color: "bg-primary",
  },
  {
    name: "Labuhan Jukung",
    category: "Diving",
    rating: 4.7,
    image: "/images/surfing.jpg",
    color: "bg-accent",
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">Top Destinations in Krui</h2>
            <div className="w-24 h-1 bg-accent"></div>
            <p className="mt-4 text-dark/70 text-lg max-w-2xl">
              From world-renowned surf breaks to hidden waterfalls and culturally rich villages, explore the best of what Krui has to offer.
            </p>
          </div>
          <Link href="/destinations" className="group flex items-center gap-2 font-medium text-primary hover:text-accent transition-colors">
            See All Destinations <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-80 w-full overflow-hidden">
                <Image 
                  src={dest.image} 
                  alt={dest.name} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent"></div>
              </div>

              <div className="absolute top-4 left-4 z-10 flex gap-2">
                <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${dest.color} ${dest.color.includes('text-dark') ? '' : 'text-light'}`}>
                  {dest.category}
                </span>
                <span className="bg-light/90 backdrop-blur-sm text-dark px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 text-gold fill-current" /> {dest.rating}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold font-heading text-light mb-1">{dest.name}</h3>
                <p className="text-light/80 text-sm flex items-center gap-1 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <MapPin className="w-4 h-4" /> Krui, Pesisir Barat
                </p>
                <Link href="/destinations" className="w-full py-3 rounded-full bg-light text-dark font-medium flex items-center justify-center hover:bg-gold hover:text-dark transition-colors opacity-0 group-hover:opacity-100 duration-300 delay-150">
                  Explore Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
