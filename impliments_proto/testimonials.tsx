const testimonials = [
  {
    quote: "Changes Hair Studio has completely transformed my relationship with my hair. The attention to detail and personalized approach makes every visit feel like a retreat.",
    author: "Charlotte M.",
    location: "Manhattan",
  },
  {
    quote: "Finally, a salon that truly listens. Isabelle understood exactly what I wanted and delivered beyond my expectations. The atmosphere is pure tranquility.",
    author: "Sarah K.",
    location: "Brooklyn",
  },
  {
    quote: "The balayage Elena did for me is absolutely stunning. Natural, dimensional, and exactly what I envisioned. I get compliments everywhere I go.",
    author: "Jennifer L.",
    location: "Upper East Side",
  },
  {
    quote: "Marcus has been cutting my hair for three years now. His precision and artistry are unmatched. This is the only salon I trust.",
    author: "David R.",
    location: "SoHo",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Testimonials
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl tracking-wide text-foreground md:text-5xl text-balance">
            Kind words
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 lg:p-10"
            >
              <blockquote className="font-serif text-lg italic leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6">
                <p className="font-medium text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
