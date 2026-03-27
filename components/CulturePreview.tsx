import Link from "next/link";
import { BookA, Music, PenTool } from "lucide-react";

export default function CulturePreview() {
  return (
    <section className="relative py-24 bg-dark text-light overflow-hidden">
      {/* Subtle Tapis Texture Background Placeholder */}
      <div 
        className="absolute inset-0 opacity-10 bg-[url('/images/tapis_lokal.jpg')]" 
        style={{ mixBlendMode: 'overlay', backgroundSize: 'cover' }}
      ></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gold">Discover Lampung Culture</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center mb-6 text-gold relative overflow-hidden group">
              <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <BookA className="w-10 h-10 relative z-10 group-hover:text-dark transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-3 text-secondary">Aksara Lampung</h3>
            <p className="text-light/70 max-w-xs">
              Ancient script at risk of extinction. Learn to write your name in traditional Had Lampung.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center mb-6 text-gold relative overflow-hidden group">
              <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <Music className="w-10 h-10 relative z-10 group-hover:text-dark transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-3 text-secondary">Tari Nyambai</h3>
            <p className="text-light/70 max-w-xs">
              Sacred dance of the Saibatin people, performed during significant customary ceremonies.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center mb-6 text-gold relative overflow-hidden group">
              <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <PenTool className="w-10 h-10 relative z-10 group-hover:text-dark transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-3 text-secondary">Tenun Tapis</h3>
            <p className="text-light/70 max-w-xs">
              Gold-threaded weaving passed through generations, representing the pride of Lampung women.
            </p>
          </div>
        </div>

        <Link href="/culture" className="inline-block px-8 py-4 rounded-full bg-gold text-dark font-bold hover:bg-light transition-colors shadow-lg hover:shadow-gold/20">
          Explore Lampung Culture &rarr;
        </Link>
      </div>
    </section>
  );
}
