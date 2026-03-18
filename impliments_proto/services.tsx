"use client"

import { useState } from "react"

const services = [
  {
    category: "Cutting & Styling",
    items: [
      { name: "Signature Haircut", price: "$95+", description: "Consultation, precision cut, and styling" },
      { name: "Blowout & Style", price: "$65+", description: "Shampoo, conditioning, and professional styling" },
      { name: "Special Occasion", price: "$120+", description: "Updo or formal styling for events" },
    ],
  },
  {
    category: "Color Services",
    items: [
      { name: "Single Process Color", price: "$150+", description: "Full coverage or root touch-up" },
      { name: "Balayage", price: "$250+", description: "Hand-painted, sun-kissed highlights" },
      { name: "Full Highlights", price: "$220+", description: "Foil highlights throughout" },
    ],
  },
  {
    category: "Treatments",
    items: [
      { name: "Deep Conditioning", price: "$45+", description: "Intensive moisture therapy" },
      { name: "Keratin Treatment", price: "$350+", description: "Smoothing and frizz control" },
      { name: "Scalp Treatment", price: "$55+", description: "Detox and rejuvenation" },
    ],
  },
]

export function Services() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="services" className="bg-secondary py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Our Services
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl tracking-wide text-foreground md:text-5xl text-balance">
            Crafted for you
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Each service is tailored to your unique needs, delivered with meticulous attention to detail and the finest products.
          </p>
        </div>

        {/* Mobile Tabs */}
        <div className="mt-10 lg:hidden">
          <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-hide snap-x snap-mandatory -mx-4 px-4">
            {services.map((category, index) => (
              <button
                key={category.category}
                onClick={() => setActiveTab(index)}
                className={`flex-shrink-0 snap-center px-4 py-2 text-sm whitespace-nowrap transition-all border ${
                  activeTab === index
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:border-primary/50"
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>
          
          {/* Mobile Content */}
          <div className="bg-card p-4 sm:p-6">
            <div className="space-y-4">
              {services[activeTab].items.map((item) => (
                <div key={item.name} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-medium text-foreground text-sm sm:text-base">{item.name}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground flex-shrink-0">{item.price}</span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="mt-16 hidden lg:grid gap-12 lg:grid-cols-3">
          {services.map((category) => (
            <div key={category.category} className="bg-card p-8">
              <h3 className="font-serif text-2xl tracking-wide text-foreground">
                {category.category}
              </h3>
              <div className="mt-8 space-y-6">
                {category.items.map((item) => (
                  <div key={item.name} className="border-b border-border pb-6 last:border-0 last:pb-0">
                    <div className="flex items-baseline justify-between">
                      <span className="font-medium text-foreground">{item.name}</span>
                      <span className="text-sm text-muted-foreground">{item.price}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
