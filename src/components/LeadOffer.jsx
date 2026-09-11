import { Gift, Handshake, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import './LeadOffer.css'

export default function LeadOffer({ language, onBook }) {
  const local = language === 'cg' ? { eyebrow: 'जल्दी खत्म होवत ऑफर', title: 'बिहाव के बुकिंग मं बचत करव', text: 'अपन दोस्त या परिवार के मनखे ला refer करव। दूनों मन ला बुकिंग मं discount मिलही।', offer: 'रेफरल ऑफर', partner: 'फोटोग्राफर, सैलून अउ वेडिंग प्लानर मन हमर पार्टनर बन सकथें।', action: 'ऑफर लेवव', expires: 'ऑफर जल्दी खत्म होही' } : language === 'hi' ? { eyebrow: 'ऑफर जल्द समाप्त होगा', title: 'शादी की बुकिंग पर बचत करें', text: 'अपने दोस्त या परिवार को refer करें। दोनों को booking पर discount मिलेगा।', offer: 'Referral offer', partner: 'Photographers, salons और wedding planners हमारे partner बन सकते हैं।', action: 'ऑफर लें', expires: 'ऑफर जल्द समाप्त होगा' } : { eyebrow: 'Expiring soon', title: 'Save on your wedding booking', text: 'Refer a friend or family member and both customers receive a booking discount.', offer: 'Referral offer', partner: 'Photographers, salons, and wedding planners can partner with us.', action: 'Claim offer', expires: 'Offer ends soon' }
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())
  useEffect(() => { const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000); return () => clearInterval(timer) }, [])
  const expired = timeLeft.total <= 0
  return <section className={`lead-offer ${expired ? 'offer-expired' : ''}`}><div className="offer-main"><div className="offer-icon"><Gift size={22} /></div><div><span className="eyebrow">{expired ? local.offer : local.eyebrow}</span><h2>{expired ? local.offer : local.title}</h2><p>{expired ? (language === 'en' ? 'This promotion has ended. Contact us for the next offer.' : 'यह promotion समाप्त हो गया है। अगले offer के लिए WhatsApp करें।') : local.text}</p>{!expired && <button className="offer-button" onClick={onBook}><MessageCircle size={15} />{local.action}</button>}</div></div><div className="partner-note"><Handshake size={20} /><div><strong>{local.offer}</strong><p>{local.partner}</p>{!expired && <><span className="offer-expiry-label">{local.expires}</span><div className="offer-countdown"><b>{timeLeft.days}<small>d</small></b><b>{timeLeft.hours}<small>h</small></b><b>{timeLeft.minutes}<small>m</small></b><b>{timeLeft.seconds}<small>s</small></b></div></>}</div></div></section>
}

function getTimeLeft() {
  const difference = new Date('2026-11-30T23:59:59+05:30').getTime() - Date.now()
  if (difference <= 0) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }
  return { total: difference, days: Math.floor(difference / 86400000), hours: Math.floor((difference / 3600000) % 24), minutes: Math.floor((difference / 60000) % 60), seconds: Math.floor((difference / 1000) % 60) }
}
