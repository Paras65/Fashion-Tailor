import { useEffect, useState } from 'react'
import { Globe2, Menu, MessageCircle } from 'lucide-react'
import logoImg from './assets/logo.jpg'
import HomePage from './components/HomePage'
import ServicesPage from './components/ServicesPage'
import GalleryPage from './components/GalleryPage'
import AboutPage from './components/AboutPage'
import BookingPage from './components/BookingPage'
import SiteFooter from './components/SiteFooter'
import { copy } from './i18n/translations'
import './App.css'

export default function App() {
  const [language, setLanguage] = useState('hi')
  const [view, setView] = useState('home')
  const [selectedOutfit, setSelectedOutfit] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[language]
  const goTo = (nextView, outfit = '') => {
    setSelectedOutfit(typeof outfit === 'string' ? outfit : '')
    setView(nextView)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const changeLanguage = () => setLanguage({ hi: 'cg', cg: 'en', en: 'hi' }[language])
  useEffect(() => { const openGallery = () => goTo('gallery'); window.addEventListener('navigate-gallery', openGallery); return () => window.removeEventListener('navigate-gallery', openGallery) }, [])

  return <div className="app-shell">
    <header className="topbar"><div className="brand-lockup"><div className="brand-mark"><img src={logoImg} alt="Fashion Tailors" className="brand-logo-img" /></div><div><strong>{language === 'en' ? 'Fashion Tailors' : 'फ़ैशन टेलर्स'}</strong><span>{language === 'en' ? 'Kawardha · Chhattisgarh' : 'कवर्धा · छत्तीसगढ़'}</span></div></div><div className="topbar-actions"><button className="topbar-cta" onClick={() => goTo('booking')}><MessageCircle size={16} />{t.bookNow}</button><button className="icon-button mobile-menu" aria-label={t.menu} onClick={() => setMenuOpen(!menuOpen)}><Menu size={21} /></button></div></header>
    <aside className={`sidebar ${menuOpen ? 'open' : ''}`}><nav><small className="nav-label">{language === 'cg' ? 'Silai स्टूडियो' : language === 'hi' ? 'Silai स्टूडियो' : 'Silai studio'}</small><button className={view === 'home' ? 'nav-item active' : 'nav-item'} onClick={() => goTo('home')}><span className="nav-icon">⌂</span>{t.home}</button><button className={view === 'services' ? 'nav-item active' : 'nav-item'} onClick={() => goTo('services')}><span className="nav-icon">✦</span>{t.services}</button><button className={view === 'gallery' ? 'nav-item active' : 'nav-item'} onClick={() => goTo('gallery')}><span className="nav-icon">▧</span>{t.gallery}</button><button className={view === 'about' ? 'nav-item active' : 'nav-item'} onClick={() => goTo('about')}><span className="nav-icon">♡</span>{t.about}</button><button className={view === 'booking' ? 'nav-item active' : 'nav-item'} onClick={() => goTo('booking')}><span className="nav-icon">＋</span>{t.booking}</button></nav><div className="sidebar-footer"><button className="language-toggle" onClick={changeLanguage}><Globe2 size={17} />{language === 'hi' ? 'छत्तीसगढ़ी' : language === 'cg' ? 'English' : 'हिन्दी'}</button><small>{language === 'cg' ? 'आप मन के अगली पोशाक के इंतजार हे' : language === 'hi' ? 'आपकी अगली पोशाक का इंतज़ार है' : 'Your next outfit awaits'}</small></div></aside>
    <main className="main-content">
      {view === 'home' && <HomePage t={t} language={language} onBook={(outfit) => goTo('booking', outfit)} onExplore={() => goTo('services')} />}
      {view === 'services' && <ServicesPage t={t} language={language} onBook={(outfit) => goTo('booking', outfit)} />}
      {view === 'gallery' && <GalleryPage t={t} language={language} onBook={(outfit) => goTo('booking', outfit)} />}
      {view === 'about' && <AboutPage t={t} language={language} onBook={(outfit) => goTo('booking', outfit)} />}
      {view === 'booking' && <BookingPage key={selectedOutfit || 'booking'} t={t} language={language} initialOutfit={selectedOutfit} />}
    </main>
    <SiteFooter language={language} onNavigate={goTo} onBook={(outfit) => goTo('booking', outfit)} />
  </div>
}
