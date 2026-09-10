import { CheckCircle2, MessageCircle, Phone, PhoneCall, Send } from 'lucide-react'
import { useState } from 'react'
import { addOrder } from '../services/storage'
import './BookingPage.css'

const PRIMARY_WA = import.meta.env.VITE_WHATSAPP_NUMBER || '917879474181'
const ALT_WA = import.meta.env.VITE_WHATSAPP_NUMBER_ALT || '917049404268'
const PHONE_1 = import.meta.env.VITE_PHONE_PRIMARY || '7879474181'
const PHONE_2 = import.meta.env.VITE_PHONE_SECONDARY || '7049404268'

const copy = {
  hi: {
    eyebrow: 'अपॉइंटमेंट बुक करें',
    title: 'अपनी अगली पोशाक की शुरुआत करें',
    intro: 'कवर्धा के फ़ैशन टेलर्स से सीधे बात करने के लिए विवरण भरें, या नीचे दिए नंबरों पर सीधे कॉल / WhatsApp करें।',
    note: 'फॉर्म भरने पर आपका संदेश पूरी जानकारी के साथ सीधे WhatsApp पर खुलेगा।',
    form: 'बुकिंग की जानकारी',
    sub: 'हमारी टीम जल्द ही आपसे नाप और समय पक्का करने के लिए संपर्क करेगी।',
    name: 'नाम',
    phone: 'मोबाइल नंबर',
    outfit: 'पोशाक',
    fabric: 'कपड़ा (वैकल्पिक)',
    occasion: 'मौका (वैकल्पिक)',
    date: 'डिलीवरी / नाप की तारीख (वैकल्पिक)',
    select: 'पोशाक चुनें *',
    selectFabric: 'कपड़ा चुनें (या टेलर से सलाह)',
    selectOccasion: 'मौका चुनें',
    notes: 'खास निर्देश या डिजाइन (वैकल्पिक)',
    placeholder: 'रंग, खास फिटिंग, या अपने डिजाइन के बारे में बताएं...',
    send: 'WhatsApp पर बुकिंग भेजें',
    response: 'आमतौर पर 15 मिनट में जवाब',
    directContact: 'दुकान से सीधे संपर्क करें:',
    phonePrimary: '78794-74181',
    phoneSecondary: '70494-04268',
    callNow: 'कॉल करें',
    greeting: 'नमस्ते Fashion Tailors! मुझे सिलाई की बुकिंग करनी है।',
    closing: 'कृपया मिलने या नाप का समय बताएं। धन्यवाद!',
    successTitle: 'आपकी बुकिंग जानकारी तैयार है!',
    successDesc: 'WhatsApp खुल रहा है। यदि WhatsApp नहीं खुला, तो नीचे दिए गए बटन पर टैप करें:',
    sendWhatsApp1: 'WhatsApp (78794-74181)',
    sendWhatsApp2: 'WhatsApp (70494-04268)',
    callBtn1: 'कॉल करें (78794-74181)',
    callBtn2: 'कॉल करें (70494-04268)',
    newBooking: 'नई बुकिंग करें',
    outfits: {
      coat: 'कोट ब्लेजर',
      sherwani: 'शेरवानी',
      jodhpuri: 'जोधपुरी',
      indoWestern: 'इंडो वेस्टर्न जैकेट',
      kurtaPajama: 'कुर्ता पाजामा',
      formalPants: 'फॉर्मल पैंट',
      casualPantShirt: 'कैजुअल पैंट शर्ट',
      customOrder: 'कस्टम सिलाई (मनपसंद डिजाइन)',
      policeUniform: 'पुलिस वर्दी'
    },
    fabrics: {
      advice: 'दुकान पर कपड़ा देखेंगे / सलाह चाहिए',
      ownFabric: 'खुद का कपड़ा लेकर आएंगे',
      Suiting: 'सूटिंग (कोट/ब्लेजर/पैंट)',
      Wedding: 'वेडिंग सिल्क / ब्रोकेड',
      Cotton: 'कॉटन / लिनन',
      Uniform: 'वर्दी का कपड़ा'
    },
    occasions: {
      Wedding: 'शादी / रिसेप्शन',
      Party: 'पार्टी / समारोह',
      Formal: 'ऑफिस / फॉर्मल',
      Daily: 'दैनिक / कैजुअल',
      Uniform: 'ड्यूटी / वर्दी',
      Other: 'अन्य'
    }
  },
  cg: {
    eyebrow: 'अपॉइंटमेंट बुक करव',
    title: 'अपन अगली पोशाक के सुरुवात करव',
    intro: 'कंवर्धा के फ़ैशन टेलर्स संग सीधे बात करे बर जानकारी भरव, या नीचे दिए नंबर मं सीधे फोन / WhatsApp करव।',
    note: 'फॉर्म भरे ले आपके संदेश WhatsApp मं पूरा जानकारी के संग खुलही।',
    form: 'बुकिंग के जानकारी',
    sub: 'हमर टीम समय अउ नाप पक्का करे बर जल्दीच आप मन ला फोन करही।',
    name: 'नांव',
    phone: 'मोबाइल नंबर',
    outfit: 'पोशाक',
    fabric: 'कपड़ा (वैकल्पिक)',
    occasion: 'कऊन बेरा (वैकल्पिक)',
    date: 'डिलीवरी / नाप के तारीख (वैकल्पिक)',
    select: 'पोशाक चुनव *',
    selectFabric: 'कपड़ा चुनव (या टेलर ले सलाह)',
    selectOccasion: 'कऊन बेरा बर',
    notes: 'खास बात (वैकल्पिक)',
    placeholder: 'रंग, डिजाइन या विशेष नाप के बारे मं बतावव...',
    send: 'WhatsApp मं बुकिंग भेजव',
    response: 'आमतौर मं 15 मिनट मं जवाब',
    directContact: 'दुकान ले सीधे संपर्क करव:',
    phonePrimary: '78794-74181',
    phoneSecondary: '70494-04268',
    callNow: 'फोन करव',
    greeting: 'नमस्ते Fashion Tailors! मोला सिलाई के बुकिंग करवाना हे।',
    closing: 'किरपा करके मिलन के समय बतावव। धन्यवाद!',
    successTitle: 'आपके बुकिंग तैयार हे!',
    successDesc: 'WhatsApp खुलत हे। अगर अपने-आप नई खुलिस त नीचे के बटन दबावहू:',
    sendWhatsApp1: 'WhatsApp (78794-74181)',
    sendWhatsApp2: 'WhatsApp (70494-04268)',
    callBtn1: 'फोन करव (78794-74181)',
    callBtn2: 'फोन करव (70494-04268)',
    newBooking: 'नवा बुकिंग करव',
    outfits: {
      coat: 'कोट ब्लेजर',
      sherwani: 'शेरवानी',
      jodhpuri: 'जोधपुरी',
      indoWestern: 'इंडो वेस्टर्न जैकेट',
      kurtaPajama: 'कुर्ता पाजामा',
      formalPants: 'फॉर्मल पैंट',
      casualPantShirt: 'कैजुअल पैंट शर्ट',
      customOrder: 'कस्टम सियाई (मनपसंद डिजाइन)',
      policeUniform: 'पुलिस वर्दी'
    },
    fabrics: {
      advice: 'दुकान मं कपड़ा देखबो / सलाह चाही',
      ownFabric: 'अपन कपड़ा लेके आबो',
      Suiting: 'सूटिंग (कोट/ब्लेजर/पैंट)',
      Wedding: 'वेडिंग सिल्क / ब्रोकेड',
      Cotton: 'कॉटन / लिनन',
      Uniform: 'वर्दी के कपड़ा'
    },
    occasions: {
      Wedding: 'बिहाव / रिसेप्शन',
      Party: 'पार्टी / तिहार',
      Formal: 'ऑफिस / फॉर्मल',
      Daily: 'रोज के पहिरन',
      Uniform: 'ड्यूटी / वर्दी',
      Other: 'दूसर'
    }
  },
  en: {
    eyebrow: 'Book an appointment',
    title: 'Start your next outfit',
    intro: 'Share your details to connect directly with Fashion Tailors Kawardha, or call / WhatsApp directly below.',
    note: 'Submitting will open your complete details pre-filled in WhatsApp.',
    form: 'Booking details',
    sub: 'Our team will contact you promptly to confirm measurements and fitting appointment.',
    name: 'Name',
    phone: 'Mobile number',
    outfit: 'Outfit',
    fabric: 'Fabric (Optional)',
    occasion: 'Occasion (Optional)',
    date: 'Delivery / measurement date (Optional)',
    select: 'Select outfit *',
    selectFabric: 'Select fabric (or tailor advice)',
    selectOccasion: 'Select occasion',
    notes: 'Special instructions (Optional)',
    placeholder: 'Colour, fit preference, or custom design details...',
    send: 'Send Booking on WhatsApp',
    response: 'Usually replies within 15 minutes',
    directContact: 'Direct shop contact:',
    phonePrimary: '78794-74181',
    phoneSecondary: '70494-04268',
    callNow: 'Call now',
    greeting: 'Hello Fashion Tailors! I would like to book a tailoring appointment.',
    closing: 'Please let me know a suitable time for measurements. Thank you!',
    successTitle: 'Booking details ready!',
    successDesc: 'Opening WhatsApp. If WhatsApp did not open automatically, tap below:',
    sendWhatsApp1: 'WhatsApp (78794-74181)',
    sendWhatsApp2: 'WhatsApp (70494-04268)',
    callBtn1: 'Call (78794-74181)',
    callBtn2: 'Call (70494-04268)',
    newBooking: 'Book another outfit',
    outfits: {
      coat: 'Coat Blazer',
      sherwani: 'Sherwani',
      jodhpuri: 'Jodhpuri',
      indoWestern: 'Indo Western Jacket',
      kurtaPajama: 'Kurta Pajama',
      formalPants: 'Formal Pants',
      casualPantShirt: 'Casual Pant Shirt',
      customOrder: 'Custom Tailoring & Design',
      policeUniform: 'Police Uniform'
    },
    fabrics: {
      advice: 'Need tailor advice / Pick at shop',
      ownFabric: 'Bringing my own fabric',
      Suiting: 'Suiting (Coat/Blazer/Trouser)',
      Wedding: 'Wedding Silk / Brocade',
      Cotton: 'Cotton / Linen',
      Uniform: 'Uniform Fabric'
    },
    occasions: {
      Wedding: 'Wedding / Reception',
      Party: 'Party / Event',
      Formal: 'Office / Formal',
      Daily: 'Casual / Daily wear',
      Uniform: 'Duty / Uniform',
      Other: 'Other'
    }
  },
}

export default function BookingPage({ language, initialOutfit }) {
  const local = copy[language] || copy.hi
  const [form, setForm] = useState({
    name: '',
    phone: '',
    outfit: initialOutfit || '',
    fabric: '',
    occasion: '',
    date: '',
    note: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [lastMessage, setLastMessage] = useState('')

  const update = (field, value) => setForm((current) => ({ ...current, [field]: value }))

  async function book(event) {
    event.preventDefault()

    const outfitLabel = local.outfits[form.outfit] || form.outfit || (language === 'en' ? 'General Tailoring' : 'सामान्य सिलाई')
    const fabricLabel = local.fabrics[form.fabric] || form.fabric || (language === 'en' ? 'Shop advice / Bring own' : 'दुकान पर तय / खुद का कपड़ा')
    const occasionLabel = local.occasions[form.occasion] || form.occasion || (language === 'en' ? 'General' : 'सामान्य')
    const dateLabel = form.date || (language === 'en' ? 'Flexible' : 'सुविधानुसार')
    const notesLabel = form.note?.trim() || '-'

    const message = `${local.greeting}\n\n` +
      `👤 ${local.name}: ${form.name.trim()}\n` +
      `📱 ${local.phone}: ${form.phone.trim()}\n` +
      `👔 ${local.outfit}: ${outfitLabel}\n` +
      `🧵 ${local.fabric}: ${fabricLabel}\n` +
      `🎉 ${local.occasion}: ${occasionLabel}\n` +
      `📅 ${local.date}: ${dateLabel}\n` +
      `📝 ${local.notes}: ${notesLabel}\n\n` +
      `${local.closing}`

    setLastMessage(message)
    setSubmitted(true)

    // Save order inquiry locally for offline record
    try {
      await addOrder({
        id: `BK-${Date.now()}`,
        customerName: form.name.trim(),
        phone: form.phone.trim(),
        outfit: outfitLabel,
        fabric: fabricLabel,
        occasion: occasionLabel,
        targetDate: form.date || '',
        status: 'pending',
        notes: form.note || '',
        createdAt: new Date().toISOString()
      })
    } catch (e) {
      console.warn('Local storage save skipped:', e)
    }

    // Direct WhatsApp navigation via anchor to prevent popup blocking
    const targetUrl = `https://wa.me/${PRIMARY_WA}?text=${encodeURIComponent(message)}`
    const link = document.createElement('a')
    link.href = targetUrl
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  function handleReset() {
    setForm({ name: '', phone: '', outfit: '', fabric: '', occasion: '', date: '', note: '' })
    setSubmitted(false)
    setLastMessage('')
  }

  return (
    <div className="public-page booking-page">
      <div className="booking-intro">
        <span className="eyebrow">{local.eyebrow}</span>
        <h1>{local.title}</h1>
        <p>{local.intro}</p>

        <div className="whatsapp-note">
          <MessageCircle size={19} />
          <span>{local.note}</span>
        </div>

        <div className="direct-call-box">
          <span className="direct-call-title">
            <PhoneCall size={16} />
            {local.directContact}
          </span>
          <div className="direct-call-actions">
            <a href={`tel:+91${PHONE_1}`} className="direct-call-pill">
              <Phone size={13} />
              {local.callNow}: {local.phonePrimary}
            </a>
            <a href={`tel:+91${PHONE_2}`} className="direct-call-pill">
              <Phone size={13} />
              {local.callNow}: {local.phoneSecondary}
            </a>
            <a
              href={`https://wa.me/${PRIMARY_WA}?text=${encodeURIComponent(local.greeting)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="direct-call-pill wa"
            >
              <MessageCircle size={13} />
              WhatsApp: {local.phonePrimary}
            </a>
            <a
              href={`https://wa.me/${ALT_WA}?text=${encodeURIComponent(local.greeting)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="direct-call-pill wa"
            >
              <MessageCircle size={13} />
              WhatsApp: {local.phoneSecondary}
            </a>
          </div>
        </div>
      </div>

      <div className="booking-form-container">
        {submitted ? (
          <div className="booking-success-box">
            <div className="booking-success-header">
              <CheckCircle2 size={28} className="success-check-icon" />
              <div>
                <h3>{local.successTitle}</h3>
                <p>{local.successDesc}</p>
              </div>
            </div>

            <div className="success-action-grid">
              <a
                href={`https://wa.me/${PRIMARY_WA}?text=${encodeURIComponent(lastMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="success-wa-btn"
              >
                <MessageCircle size={18} />
                <span>{local.sendWhatsApp1}</span>
              </a>
              <a
                href={`https://wa.me/${ALT_WA}?text=${encodeURIComponent(lastMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="success-wa-btn"
              >
                <MessageCircle size={18} />
                <span>{local.sendWhatsApp2}</span>
              </a>
              <a href={`tel:+91${PHONE_1}`} className="success-call-btn">
                <PhoneCall size={17} />
                <span>{local.callBtn1}</span>
              </a>
              <a href={`tel:+91${PHONE_2}`} className="success-call-btn">
                <PhoneCall size={17} />
                <span>{local.callBtn2}</span>
              </a>
            </div>

            <button type="button" className="new-booking-btn" onClick={handleReset}>
              ✦ {local.newBooking}
            </button>
          </div>
        ) : null}

        <form className="booking-card" onSubmit={book}>
          <div className="booking-card-heading">
            <div>
              <h2>{local.form}</h2>
              <p>{local.sub}</p>
            </div>
            <div className="whatsapp-badge">
              <MessageCircle size={18} />
              <span>WhatsApp Direct</span>
            </div>
          </div>

          <div className="form-grid">
            <label>
              {local.name} <span>*</span>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                placeholder="उदा. राहुल वर्मा / आकाश"
              />
            </label>

            <label>
              {local.phone} <span>*</span>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                placeholder="10 अंकों का मोबाइल नंबर"
                pattern="[0-9+ -]{10,14}"
              />
            </label>

            <label>
              {local.outfit} <span>*</span>
              <select
                required
                value={form.outfit}
                onChange={(e) => update('outfit', e.target.value)}
              >
                <option value="">{local.select}</option>
                {Object.entries(local.outfits).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </label>

            <label>
              {local.fabric}
              <select
                value={form.fabric}
                onChange={(e) => update('fabric', e.target.value)}
              >
                <option value="">{local.selectFabric}</option>
                {Object.entries(local.fabrics).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </label>

            <label>
              {local.occasion}
              <select
                value={form.occasion}
                onChange={(e) => update('occasion', e.target.value)}
              >
                <option value="">{local.selectOccasion}</option>
                {Object.entries(local.occasions).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </label>

            <label>
              {local.date}
              <input
                type="date"
                value={form.date}
                onChange={(e) => update('date', e.target.value)}
              />
            </label>
          </div>

          <label>
            {local.notes}
            <textarea
              rows="3"
              value={form.note}
              onChange={(e) => update('note', e.target.value)}
              placeholder={local.placeholder}
            />
          </label>

          <div className="booking-actions">
            <span>
              <Phone size={14} />
              {local.response}
            </span>
            <button className="primary-button" type="submit">
              <Send size={17} />
              {local.send}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
