import { CalendarDays, ChevronRight } from 'lucide-react'
import { upcomingFestivals } from '../data/festivals'

export default function FestivalBanner({ t }) {
  const festival = upcomingFestivals()[0]
  if (!festival) return null
  const date = new Date(festival.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
  return <section className="festival-banner"><div className="festival-icon"><CalendarDays size={20} /></div><div className="festival-copy"><span>{t.upcoming}</span><strong>{t.festivals[festival.name]} <small>· {date}</small></strong><p>{t.rushNote}</p></div><button className="text-button">{t.viewCalendar}<ChevronRight size={16} /></button></section>
}
