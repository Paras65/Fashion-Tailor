export const festivals = [
  { name: 'Hareli', date: '2026-07-17', color: 'green', note: 'Harvest season rush' },
  { name: 'Teej', date: '2026-08-16', color: 'rose', note: 'Festive outfits' },
  { name: 'Pola', date: '2026-08-27', color: 'amber', note: 'Family celebrations' },
  { name: 'Rajim Mela', date: '2027-02-20', color: 'blue', note: 'Regional fair season' },
]

export function upcomingFestivals() {
  const today = new Date()
  return festivals.filter((festival) => new Date(festival.date) >= today).slice(0, 3)
}
