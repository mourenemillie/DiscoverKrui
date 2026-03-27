import { Waves, Map, Flame } from "lucide-react";

export default function WhyKrui() {
  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">Why Krui?</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Bigger Card */}
          <div className="bg-primary text-light p-10 rounded-3xl shadow-xl transform md:-translate-y-4 hover:-translate-y-6 transition-transform duration-300">
            <div className="w-16 h-16 bg-light/10 rounded-2xl flex items-center justify-center mb-8">
              <Waves className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-4">World-Class Waves</h3>
            <p className="text-light/80 leading-relaxed text-lg">
              Tanjung Setia's 6-7m waves attract surfers globally. The long barrels and consistent swell make Krui a true surfer's paradise, away from the crowded lineups of Bali.
            </p>
          </div>

          <div className="bg-white border border-dark/5 p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-secondary/30 text-gold rounded-2xl flex items-center justify-center mb-6">
              <Map className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-heading text-dark mb-3">Hidden Gems</h3>
            <p className="text-dark/70 leading-relaxed">
              Most spots are only accessible with a local guide. Discover untouched beaches, hidden waterfalls, and secret snorkeling reefs that remain off the beaten path.
            </p>
          </div>

          <div className="bg-white border border-dark/5 p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-accent/10 border-accent/20 border text-accent rounded-2xl flex items-center justify-center mb-6">
              <Flame className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-heading text-dark mb-3">Living Culture</h3>
            <p className="text-dark/70 leading-relaxed">
              Ancient Lampung traditions are still alive in every village. Experience authentic ceremonies, taste rich culinary heritage, and learn traditional weaving techniques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
