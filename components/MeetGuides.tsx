import Image from "next/image";
import Link from "next/link";
import { Star, MessageCircle, ArrowRight } from "lucide-react";

export default function MeetGuides() {
  const guides = [
    {
      name: "Ahmad",
      specialty: "Surfing & Beach Guide",
      rating: 4.9,
      trips: 127,
      langs: ["ID", "EN"],
      image: "/images/boy.png",
    },
    {
      name: "Ratna",
      specialty: "Culture & Heritage",
      rating: 4.8,
      trips: 89,
      langs: ["ID", "EN"],
      image: "/images/avatar_1.jpg",
    },
    {
      name: "Budi",
      specialty: "Nature & Hiking",
      rating: 4.7,
      trips: 203,
      langs: ["ID"],
      image: "/images/traveler.png",
    },
    {
      name: "Maya",
      specialty: "Diving & Snorkeling",
      rating: 4.9,
      trips: 156,
      langs: ["ID", "EN", "JP"],
      image: "/images/boy.png",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">Your Krui Experts</h2>
            <div className="w-24 h-1 bg-primary"></div>
          </div>
          <Link href="/guides" className="group flex items-center gap-2 font-medium text-dark hover:text-accent transition-colors">
            See All 50+ Guides <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {guides.map((guide, i) => (
            <div key={i} className="bg-light rounded-3xl overflow-hidden shadow-lg border border-dark/5 hover:-translate-y-2 transition-transform duration-300">
              <div className="relative h-64 w-full">
                <Image 
                  src={guide.image} 
                  alt={guide.name} 
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 text-dark shadow-sm">
                  <Star className="w-4 h-4 text-gold fill-current" /> {guide.rating}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading text-dark mb-1">{guide.name}</h3>
                <p className="text-primary font-medium text-sm mb-4">{guide.specialty}</p>

                <div className="flex items-center justify-between text-sm text-dark/60 mb-6">
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" /> {guide.trips} trips
                  </div>
                  <div className="font-medium text-dark">
                    Speaks: {guide.langs.join(", ")}
                  </div>
                </div>

                <Link href="/guides" className="w-full py-3 rounded-full border-2 border-primary text-primary font-bold flex items-center justify-center hover:bg-primary hover:text-light transition-colors">
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
