"use client"

import { useState, forwardRef } from "react"
import { ChevronLeft, ChevronRight, X, Clock, User } from "lucide-react"

const stylists = [
  { id: "isabelle", name: "Isabelle Laurent", role: "Creative Director" },
  { id: "marcus", name: "Marcus Chen", role: "Senior Stylist" },
  { id: "elena", name: "Elena Rossi", role: "Color Specialist" },
]

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
]

// Generate availability for the next 14 days
function generateAvailability() {
  const availability: Record<string, Record<string, string[]>> = {}
  const today = new Date()
  
  for (let i = 0; i < 14; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    const dateStr = date.toISOString().split('T')[0]
    
    availability[dateStr] = {}
    stylists.forEach(stylist => {
      // Randomly assign available slots (simulating real availability)
      const availableSlots = timeSlots.filter(() => Math.random() > 0.3)
      availability[dateStr][stylist.id] = availableSlots
    })
  }
  
  return availability
}

const availability = generateAvailability()

interface BookingSectionProps {
  isVisible: boolean
  onClose: () => void
}

export const BookingSection = forwardRef<HTMLElement, BookingSectionProps>(
  function BookingSection({ isVisible, onClose }, ref) {
    const [selectedStylist, setSelectedStylist] = useState<string | null>(null)
    const [selectedDate, setSelectedDate] = useState<string | null>(null)
    const [selectedTime, setSelectedTime] = useState<string | null>(null)
    const [currentMonth, setCurrentMonth] = useState(new Date())

    const getDaysInMonth = (date: Date) => {
      const year = date.getFullYear()
      const month = date.getMonth()
      const firstDay = new Date(year, month, 1)
      const lastDay = new Date(year, month + 1, 0)
      const days: (Date | null)[] = []
      
      // Add empty cells for days before the first day of the month
      for (let i = 0; i < firstDay.getDay(); i++) {
        days.push(null)
      }
      
      // Add all days in the month
      for (let i = 1; i <= lastDay.getDate(); i++) {
        days.push(new Date(year, month, i))
      }
      
      return days
    }

    const isDateAvailable = (date: Date) => {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (date < today) return false
      
      const dateStr = date.toISOString().split('T')[0]
      if (!selectedStylist) return false
      
      return availability[dateStr]?.[selectedStylist]?.length > 0
    }

    const getAvailableSlots = () => {
      if (!selectedDate || !selectedStylist) return []
      return availability[selectedDate]?.[selectedStylist] || []
    }

    const formatDate = (dateStr: string) => {
      const date = new Date(dateStr)
      return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
    }

    const handleBooking = () => {
      if (selectedStylist && selectedDate && selectedTime) {
        const stylist = stylists.find(s => s.id === selectedStylist)
        alert(`Booking confirmed!\n\nStylist: ${stylist?.name}\nDate: ${formatDate(selectedDate)}\nTime: ${selectedTime}\n\nWe'll send you a confirmation email shortly.`)
        setSelectedStylist(null)
        setSelectedDate(null)
        setSelectedTime(null)
        onClose()
      }
    }

    if (!isVisible) return null

    return (
      <section 
        ref={ref}
        id="book" 
        className="bg-background py-16 sm:py-20 lg:py-32 border-t border-border"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Reservations</p>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl tracking-wide text-foreground md:text-5xl">
                Check Availability
              </h2>
            </div>
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
              Close
            </button>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Step 1: Select Stylist */}
            <div className="bg-card p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-8 w-8 items-center justify-center bg-foreground text-background text-sm font-medium">
                  1
                </div>
                <h3 className="font-serif text-xl tracking-wide text-foreground">
                  Select Stylist
                </h3>
              </div>
              <div className="space-y-3">
                {stylists.map((stylist) => (
                  <button
                    key={stylist.id}
                    onClick={() => {
                      setSelectedStylist(stylist.id)
                      setSelectedDate(null)
                      setSelectedTime(null)
                    }}
                    className={`w-full p-4 text-left transition-all border ${
                      selectedStylist === stylist.id
                        ? "border-foreground bg-foreground/5"
                        : "border-border hover:border-foreground/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <User size={20} className="text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">{stylist.name}</p>
                        <p className="text-sm text-muted-foreground">{stylist.role}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Date */}
            <div className="bg-card p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className={`flex h-8 w-8 items-center justify-center text-sm font-medium ${
                  selectedStylist ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
                }`}>
                  2
                </div>
                <h3 className="font-serif text-xl tracking-wide text-foreground">
                  Select Date
                </h3>
              </div>
              
              {selectedStylist ? (
                <div>
                  {/* Calendar Header */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <span className="font-medium text-foreground">
                      {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </span>
                    <button
                      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                      <div key={day} className="py-2 text-xs text-muted-foreground">
                        {day}
                      </div>
                    ))}
                    {getDaysInMonth(currentMonth).map((date, index) => {
                      if (!date) {
                        return <div key={`empty-${index}`} />
                      }
                      
                      const dateStr = date.toISOString().split('T')[0]
                      const isAvailable = isDateAvailable(date)
                      const isSelected = selectedDate === dateStr
                      
                      return (
                        <button
                          key={dateStr}
                          onClick={() => {
                            if (isAvailable) {
                              setSelectedDate(dateStr)
                              setSelectedTime(null)
                            }
                          }}
                          disabled={!isAvailable}
                          className={`py-2 text-sm transition-colors ${
                            isSelected
                              ? "bg-foreground text-background"
                              : isAvailable
                              ? "text-foreground hover:bg-muted"
                              : "text-muted-foreground/40 cursor-not-allowed"
                          }`}
                        >
                          {date.getDate()}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Please select a stylist first
                </p>
              )}
            </div>

            {/* Step 3: Select Time */}
            <div className="bg-card p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className={`flex h-8 w-8 items-center justify-center text-sm font-medium ${
                  selectedDate ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
                }`}>
                  3
                </div>
                <h3 className="font-serif text-xl tracking-wide text-foreground">
                  Select Time
                </h3>
              </div>
              
              {selectedDate ? (
                <div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Available times for {formatDate(selectedDate)}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {getAvailableSlots().map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`flex items-center justify-center gap-2 p-3 text-sm transition-all border ${
                          selectedTime === time
                            ? "border-foreground bg-foreground/5"
                            : "border-border hover:border-foreground/50"
                        }`}
                      >
                        <Clock size={14} className="text-muted-foreground" />
                        {time}
                      </button>
                    ))}
                  </div>
                  
                  {selectedTime && (
                    <button
                      onClick={handleBooking}
                      className="mt-6 w-full border border-foreground bg-foreground py-4 text-sm uppercase tracking-[0.2em] text-background transition-all hover:bg-transparent hover:text-foreground"
                    >
                      Confirm Booking
                    </button>
                  )}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Please select a date first
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }
)
