# Mobile Improvements - Action Points

## Issue 1: Hero Section Spacing Problems

**Current Problem:**
- `px-6` padding is tight on small screens
- Content uses `min-h-screen` with centered flex, but no safe area for button positioning
- Booking button (`mt-10`) can overlap or crowd text on smaller viewports

**Proposed Fixes:**
- Increase horizontal padding on mobile: `px-4 sm:px-6 md:px-8`
- Add more vertical spacing between elements on mobile
- Reduce heading font size further for mobile: `text-4xl md:text-5xl lg:text-7xl xl:text-8xl`
- Position booking button with better spacing: `mt-8 sm:mt-10`
- Add `pb-24` to content container to prevent button overlapping scroll indicator

**Files Affected:**
- `impliments_proto/hero.tsx`

---

## Issue 2: Booking Button Overlapping Text

**Current Problem:**
- Button has fixed `mt-10` margin regardless of screen size
- On small screens with long text content, button can visually crowd or overlap description
- No responsive text sizing for description paragraph

**Proposed Fixes:**
- Make button margin responsive: `mt-6 sm:mt-8 md:mt-10`
- Reduce description text on mobile: `text-base md:text-lg`
- Reduce max-width of description on mobile: `max-w-sm sm:max-w-md`
- Add minimum spacing below heading: `mb-4 sm:mb-6`

**Files Affected:**
- `impliments_proto/hero.tsx`

---

## Issue 3: Services - Combine All Categories for Mobile

**Current Problem:**
- Three separate category cards stack vertically on mobile (`lg:grid-cols-3`)
- Each card has `p-8` padding which takes up too much vertical space
- Repetitive headers for each category create visual clutter on small screens

**Proposed Fixes:**
- Create unified "All Services" view for mobile using accordion or tabbed interface
- Use horizontal scrollable tabs: "Cutting & Styling | Color | Treatments"
- Reduce card padding on mobile: `p-4 sm:p-6 md:p-8`
- Option A: Collapse all into single scrollable list with category dividers
- Option B: Use expandable accordion sections for each category
- Consider horizontal scroll container: `flex overflow-x-auto snap-x snap-mandatory gap-4 md:grid md:grid-cols-3`

**Files Affected:**
- `impliments_proto/services.tsx`

---

## Issue 4: Artists Section - Add Horizontal Sliding Scroll

**Current Problem:**
- Grid layout forces vertical stacking on mobile (`md:grid-cols-3`)
- Users must scroll entire page to see all stylists
- `gap-8` creates large gaps between vertically stacked items

**Proposed Fixes:**
- Convert to horizontal scroll carousel on mobile
- Use `flex overflow-x-auto snap-x snap-mandatory` for touch-friendly swipe
- Each stylist card: `w-[280px] flex-shrink-0 snap-center`
- Hide scrollbar: `scrollbar-hide` or CSS `-webkit-scrollbar: none`
- Add optional dot indicators for carousel position
- Keep grid layout for desktop: `md:grid md:grid-cols-3 md:overflow-visible`
- Consider adding left/right arrow buttons for non-touch devices

**Mobile Carousel Structure:**
```
<div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-3 md:overflow-visible">
  {stylists.map(...)}
</div>
```

**Files Affected:**
- `impliments_proto/team.tsx`

---

## General Mobile Improvements

### Typography Scaling
- All `text-4xl md:text-5xl` should become `text-3xl sm:text-4xl md:text-5xl`
- Section padding `py-24 lg:py-32` should become `py-16 sm:py-20 lg:py-32`

### Touch Targets
- Ensure all buttons are minimum 44x44px on mobile
- Add more padding to interactive elements

### Scroll Behavior
- Add `scroll-smooth` to html element
- Consider `scroll-padding-top` for sticky nav offset

---

## Implementation Priority

1. **High** - Hero spacing and button overlap (most visible issue)
2. **High** - Artists horizontal scroll (improves UX significantly)
3. **Medium** - Services consolidation (reduces scroll fatigue)
4. **Low** - General typography scaling (refinement)
