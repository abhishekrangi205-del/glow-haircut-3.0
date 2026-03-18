"use client"

export function Hero({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-salon.jpg"
          alt="Changes Hair Studio interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center pb-24">
        <p className="mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-[0.3em] text-background/90">
          Boutique Hair Studio
        </p>
        <h1 className="font-serif text-4xl leading-tight tracking-wide text-background sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-balance">
          Where elegance
          <br />
          meets artistry
        </h1>
        <p className="mt-4 sm:mt-6 max-w-xs sm:max-w-md text-base sm:text-lg leading-relaxed text-background/90">
          Experience personalized hair care in an atmosphere of quiet luxury and timeless sophistication.
        </p>
        <button
          onClick={onBookClick}
          className="mt-6 sm:mt-8 md:mt-10 border border-background bg-background px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-[0.2em] text-foreground transition-all hover:bg-transparent hover:text-background"
        >
          Book an Appointment
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-background/70">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-12 w-px bg-background/50" />
        </div>
      </div>
    </section>
  )
}
