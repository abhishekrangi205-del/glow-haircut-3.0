# Changes Hair Studio - Studio Profile Section

## Project Overview
High-contrast "Studio Profile" section featuring Changes Hair Studio located in Greater Sudbury. Split-screen design with white information side and deep charcoal visual/services side.

---

## Design Specifications

### Color Palette
- Light Side: Clean white (#FFFFFF) with charcoal text (#1a1a1a)
- Dark Side: Deep charcoal (#1a1a1a / #2d2d2d) with white/cream text
- Accent: Facebook brand blue (#1877F2) for social elements
- Status Badge: Red for closed, green for open

### Typography
- Headers: Modern serif (Playfair Display or similar) - bold, sophisticated
- Body: Sans-serif (Inter) for readability
- Minimalist, professional aesthetic throughout

---

## Section Components

### 1. Header
- [ ] "Changes Hair Studio" in bold serif typography
- [ ] Positioned prominently at top of section

### 2. Contact & Status Block (Light Theme - Left Side)

#### Address Display
- [ ] 428 Westmount Ave, Greater Sudbury, ON P3A 5V8
- [ ] Include map pin icon (Lucide)

#### Phone Integration
- [ ] (705) 805-3335
- [ ] Implement as clickable `tel:` link
- [ ] Phone icon (Lucide)

#### Status Indicator Badge
- [ ] Real-time style badge component (Shadcn/UI Badge)
- [ ] Display: "Closed • Opens Tomorrow at 9:30 AM"
- [ ] Color-coded (red when closed, green when open)

#### Call-to-Action Buttons
- [ ] Primary: "Book via Facebook" button
  - Facebook icon
  - Links to Facebook booking
- [ ] Secondary: "Get Directions" button
  - Map/navigation icon (Lucide)
  - Opens Google Maps with address

### 3. Service Highlight (Dark Theme - Right Side)

#### Pricing List
- [ ] Wash, Cut & Style: Starting at $40
- [ ] Men's Cuts: Starting at $38
- [ ] Color & Highlights: "Call for Consultation" (specialty tag)

#### Visual Elements
- [ ] 2x2 grid placeholder for salon interior shots
- [ ] "Follow us on Facebook" social card
  - Facebook brand-accurate colors (#1877F2)
  - Social icon integration

---

## Technical Requirements

### Responsive Layout
- [ ] Desktop: Side-by-side split screen (50/50)
- [ ] Tablet: Stacked or adjusted proportions
- [ ] Mobile: 
  - Full-width stacked layout
  - "Call" button - full width for thumb access
  - "Directions" button - full width for thumb access

### Animation (Framer Motion)
- [ ] Fade-and-slide entrance animation
- [ ] Trigger on scroll into viewport
- [ ] Subtle, professional timing (0.5-0.8s duration)
- [ ] Staggered animation for child elements

### Component Library (Shadcn/UI)
- [ ] Status Badge component
- [ ] Contact Card container
- [ ] Button variants (primary/secondary)

---

## File Structure
```
change-hair-studio/
├── studio-profile.tsx      # Main section component
├── contact-card.tsx        # Light theme contact block
├── services-card.tsx       # Dark theme services block
├── status-badge.tsx        # Real-time open/closed badge
└── social-card.tsx         # Facebook follow card
```

---

## Dependencies Required
- framer-motion (animations)
- lucide-react (icons)
- @/components/ui/badge (Shadcn)
- @/components/ui/button (Shadcn)
- @/components/ui/card (Shadcn)

---

## Business Information Reference
- Name: Changes Hair Studio
- Address: 428 Westmount Ave, Greater Sudbury, ON P3A 5V8
- Phone: (705) 805-3335
- Platform: Facebook (booking & social)
