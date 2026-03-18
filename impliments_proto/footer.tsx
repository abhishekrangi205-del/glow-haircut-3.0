import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground py-16 lg:py-24 text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="font-serif text-3xl tracking-wide text-background">
              Changes Hair Studio
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-background/70">
              A sanctuary of quiet luxury where artistry and elegance converge. Experience personalized hair care in an atmosphere of refined sophistication.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center border border-background/30 text-background/70 transition-colors hover:border-background hover:text-background"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center border border-background/30 text-background/70 transition-colors hover:border-background hover:text-background"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-background">
              Hours
            </h4>
            <div className="mt-4 space-y-2 text-sm text-background/70">
              <p>Tuesday - Friday: 9am - 7pm</p>
              <p>Saturday: 9am - 5pm</p>
              <p>Sunday - Monday: Closed</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-background">
              Contact
            </h4>
            <div className="mt-4 space-y-3 text-sm text-background/70">
              <a href="#" className="flex items-center gap-3 hover:text-background transition-colors">
                <MapPin size={16} />
                <span>142 Madison Avenue<br />New York, NY 10016</span>
              </a>
              <a href="tel:+12125551234" className="flex items-center gap-3 hover:text-background transition-colors">
                <Phone size={16} />
                <span>(212) 555-1234</span>
              </a>
              <a href="mailto:hello@changeshairstudio.com" className="flex items-center gap-3 hover:text-background transition-colors">
                <Mail size={16} />
                <span>hello@changeshairstudio.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-background/20 pt-8">
          <p className="text-center text-xs text-background/50">
            &copy; {new Date().getFullYear()} Changes Hair Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
