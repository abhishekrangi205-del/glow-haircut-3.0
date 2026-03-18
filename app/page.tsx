"use client"

import { useState, useRef } from "react"
import { Navigation } from "@/impliments_proto/navigation"
import { Hero } from "@/impliments_proto/hero"
import { Services } from "@/impliments_proto/services"
import { Team } from "@/impliments_proto/team"
import { Testimonials } from "@/impliments_proto/testimonials"
import { BookingSection } from "@/impliments_proto/booking"
import { Footer } from "@/impliments_proto/footer"

export default function HomePage() {
  const [isBookingVisible, setIsBookingVisible] = useState(false)
  const bookingRef = useRef<HTMLElement>(null)

  const handleBookClick = () => {
    setIsBookingVisible(true)
    // Wait for the section to render, then scroll to it
    setTimeout(() => {
      bookingRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <main>
      <Navigation />
      <Hero onBookClick={handleBookClick} />
      <Services />
      <Team />
      <Testimonials />
      <BookingSection 
        ref={bookingRef}
        isVisible={isBookingVisible} 
        onClose={() => setIsBookingVisible(false)} 
      />
      <Footer />
    </main>
  )
}
