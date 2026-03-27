// Creating dummy data and sections for the landing page
export function StatsBar() {
  return (
    <section className="bg-dark text-light py-12 relative z-10 -mt-10 mx-6 lg:mx-12 rounded-2xl shadow-2xl">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-light/20 text-center">
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-heading font-bold text-gold">210+</span>
          <span className="text-sm font-medium uppercase tracking-wider text-light/80">km Coastline</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-heading font-bold text-accent">17+</span>
          <span className="text-sm font-medium uppercase tracking-wider text-light/80">Destinations</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-heading font-bold text-secondary">50+</span>
          <span className="text-sm font-medium uppercase tracking-wider text-light/80">Local Guides</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-heading font-bold text-gold">⭐ 4.8</span>
          <span className="text-sm font-medium uppercase tracking-wider text-light/80">Average Rating</span>
        </div>
      </div>
    </section>
  )
}
