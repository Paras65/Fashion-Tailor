import { MessageCircle, Phone } from 'lucide-react'
import './StickyMobileBar.css'

const PRIMARY_PHONE = '7879474181'
const PRIMARY_PHONE_DISPLAY = '78794-74181'

const copy = {
  hi: {
    call: 'कॉल करें',
    callSub: PRIMARY_PHONE_DISPLAY,
    whatsapp: 'WhatsApp चैट',
    msg: 'नमस्ते Fashion Tailors! मुझे सिलाई के बारे में जानकारी चाहिए।'
  },
  cg: {
    call: 'फोन करव',
    callSub: PRIMARY_PHONE_DISPLAY,
    whatsapp: 'WhatsApp चैट',
    msg: 'नमस्ते Fashion Tailors! मोला सियाई के बारे मं जानकारी चाही।'
  },
  en: {
    call: 'Call Now',
    callSub: PRIMARY_PHONE_DISPLAY,
    whatsapp: 'WhatsApp Chat',
    msg: 'Hello Fashion Tailors! I would like to enquire about tailoring services.'
  }
}

export default function StickyMobileBar({ language }) {
  const local = copy[language] || copy.hi
  const waUrl = `https://wa.me/91${PRIMARY_PHONE}?text=${encodeURIComponent(local.msg)}`

  return (
    <aside className="sticky-mobile-bar" aria-label="Quick contact actions">
      <a
        href={`tel:+91${PRIMARY_PHONE}`}
        className="sticky-bar-btn sticky-bar-call"
        aria-label={`${local.call} ${PRIMARY_PHONE_DISPLAY}`}
      >
        <Phone size={17} />
        <span className="sticky-btn-text">
          <strong>{local.call}</strong>
          <small>{local.callSub}</small>
        </span>
      </a>

      <a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        className="sticky-bar-btn sticky-bar-wa"
        aria-label={local.whatsapp}
      >
        <MessageCircle size={17} />
        <span className="sticky-btn-text">
          <strong>{local.whatsapp}</strong>
          <small>Instant Reply</small>
        </span>
      </a>
    </aside>
  )
}
