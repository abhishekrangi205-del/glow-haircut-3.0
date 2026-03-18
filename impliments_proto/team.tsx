const stylists = [
  {
    name: "Isabelle Laurent",
    role: "Creative Director",
    bio: "With over 15 years of experience in haute couture hair, Isabelle brings Parisian elegance to every creation.",
    image: "/images/stylist-1.jpg",
  },
  {
    name: "Marcus Chen",
    role: "Senior Stylist",
    bio: "Specializing in precision cuts and modern styling, Marcus transforms visions into reality with artistic flair.",
    image: "/images/stylist-2.jpg",
  },
  {
    name: "Elena Rossi",
    role: "Color Specialist",
    bio: "A master of balayage and dimensional color, Elena creates natural, luminous results that enhance your features.",
    image: "/images/stylist-3.jpg",
  },
]

export function Team() {
  return (
    <section id="team" className="bg-background py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Meet the Team
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl tracking-wide text-foreground md:text-5xl text-balance">
            Our artisans
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Passionate professionals dedicated to the art of hair, each bringing unique expertise and creative vision.
          </p>
        </div>

        <div className="mt-16 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {stylists.map((stylist) => (
            <div key={stylist.name} className="group w-[280px] flex-shrink-0 snap-center md:w-auto">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-serif text-xl tracking-wide text-foreground">
                  {stylist.name}
                </h3>
                <p className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">
                  {stylist.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {stylist.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
