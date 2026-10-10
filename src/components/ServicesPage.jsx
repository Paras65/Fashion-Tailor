import { ArrowRight, Check, Crown, Gift, Palette, Scissors, ShieldCheck, Shirt, Sparkles, UserRound } from 'lucide-react'
import sherwaniImg from '../assets/sherwani.png'
import jodhpuriImg from '../assets/jodhpuri.png'
import indoWesternImg from '../assets/indo-western.png'
import kurtaPajamaImg from '../assets/kurta-pajama.png'
import policeUniformImg from '../assets/police-uniform.png'
import showcaseTrousers from '../assets/showcase-trousers.jpg'
import showcaseShirtsSuits from '../assets/showcase-shirts-suits.jpg'
import './ServicesPage.css'

const services = [
  { key: 'coat', icon: Crown, tone: 'rose', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=82' },
  { key: 'sherwani', icon: Sparkles, tone: 'gold', image: sherwaniImg },
  { key: 'jodhpuri', icon: UserRound, tone: 'teal', image: jodhpuriImg },
  { key: 'indoWestern', icon: Shirt, tone: 'blue', image: indoWesternImg },
  { key: 'kurtaPajama', icon: Shirt, tone: 'gold', image: kurtaPajamaImg },
  { key: 'formalPants', icon: Scissors, tone: 'teal', image: showcaseTrousers },
  { key: 'casualPantShirt', icon: Shirt, tone: 'blue', image: showcaseShirtsSuits },
  { key: 'customOrder', icon: Palette, tone: 'rose', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=82' },
  { key: 'policeUniform', icon: ShieldCheck, tone: 'blue', image: policeUniformImg },
]

const content = {
  hi: {
    eyebrow: 'फ़ैशन टेलर्स कवर्धा',
    title: 'सभी प्रकार के कपड़ों की भरोसेमंद सिलाई',
    intro: 'किफायती दाम, बेहतरीन फिटिंग और शानदार फिनिशिंग के साथ आपकी हर खास जरूरत के लिए गारंटीड क्वालिटी।',
    group: 'वेडिंग, पार्टी, फॉर्मल व कैजुअल वेअर',
    uniform: 'वर्दी और प्रोफेशनल ड्रेस',
    quality: 'परफेक्ट फिटिंग और शानदार फिनिशिंग',
    rate: 'सबसे कम रेट में बेहतरीन सिलाई',
    finish: 'स्टाइल और कम्फर्ट का पूरा ध्यान',
    weddingCombo: {
      badge: '👑 दूल्हा व शादी स्पेशल कॉम्बो',
      title: 'शाही दूल्हा वेडिंग कॉम्बो पैकेज',
      desc: 'शादी के सबसे खास दिन के लिए संपूर्ण राजसी लुक — एक ही छत के नीचे विशेष कॉम्बो ऑफर, वीआईपी ट्रायल और प्राथमिकता सिलाई।',
      specialTag: 'कवर्धा का एकमात्र कोट-ब्लेजर स्पेशलिस्ट',
      freeGiftTitle: 'मुफ़्त कॉम्बो गिफ्ट्स',
      freeGiftDesc: 'प्रीमियम डस्ट-प्रूफ सूट कवर बैग व वुडन हैंगर बिल्कुल फ्री',
      cta: 'वेडिंग कॉम्बो बुक करें',
      perks: [
        '3-पीस कोट सूट (कोट + पैंट + वेस्टकोट - परफेक्ट फिटिंग)',
        'रॉयल शेरवानी या इंडो-वेस्टर्न (हैंडक्राफ्टेड फिनिशिंग)',
        'मैचिंग कुर्ता-पाजामा (हल्दी व संगीत रस्मों के लिए)',
        'शादी की तारीख से पहले वीआईपी ट्रायल और 100% फिटिंग गारंटी'
      ]
    },
    items: {
      coat: ['कोट ब्लेजर', 'शादी, पार्टी और ऑफिस के लिए कस्टम फिट'],
      sherwani: ['शेरवानी', 'वेडिंग लुक के लिए रॉयल फिनिशिंग'],
      jodhpuri: ['जोधपुरी', 'क्लासिक कॉलर और प्रीमियम फिट'],
      indoWestern: ['इंडो वेस्टर्न जैकेट', 'मॉडर्न और पारंपरिक स्टाइल का मेल'],
      kurtaPajama: ['कुर्ता पाजामा', 'त्योहार और रोजमर्रा के लिए आरामदायक'],
      formalPants: ['फॉर्मल पैंट', 'ऑफिस और यूनिफॉर्म के लिए साफ फिट'],
      casualPantShirt: ['कैजुअल पैंट शर्ट', 'रोजमर्रा और आउटिंग के लिए आरामदायक व ट्रेंडी फिट'],
      customOrder: ['कस्टम सिलाई (मनपसंद डिजाइन)', 'आपकी पसंद का कपड़ा, फोटो डिजाइन व खास फरमाइश'],
      policeUniform: ['पुलिस वर्दी', 'सटीक माप और टिकाऊ फिनिश']
    },
    book: 'इस सेवा की बुकिंग करें'
  },
  cg: {
    eyebrow: 'फ़ैशन टेलर्स कवर्धा',
    title: 'सब्बो प्रकार के कपड़ा के भरोसेमंद सियाई',
    intro: 'कम दाम मं बढ़िया फिटिंग, शानदार फिनिशिंग अउ गारंटीड क्वालिटी के संग हर जरूरत के सिलाई।',
    group: 'बिहाव, पार्टी, फॉर्मल अउ कैजुअल पहिरन',
    uniform: 'वर्दी अउ काम के ड्रेस',
    quality: 'एकदम सही फिटिंग अउ बढ़िया फिनिशिंग',
    rate: 'कम रेट मं बढ़िया सियाई',
    finish: 'स्टाइल अउ कम्फर्ट के पूरा ध्यान',
    weddingCombo: {
      badge: '👑 दूल्हा अउ बिहाव स्पेशल कॉम्बो',
      title: 'शाही दूल्हा बिहाव कॉम्बो पैकेज',
      desc: 'बिहाव के खास दिन बर पूरा साजो-सामान — कम खरचा मं बढ़िया पैकेज, वीआईपी ट्रायल अउ पहिली सिलाई।',
      specialTag: 'कंवर्धा के एकमात्र कोट-ब्लेजर टेलर',
      freeGiftTitle: 'मुफ़्त कॉम्बो उपहार',
      freeGiftDesc: 'प्रीमियम सूट कवर बैग अउ हैंगर बिल्कुल फ्री',
      cta: 'बिहाव कॉम्बो बुक करव',
      perks: [
        '3-पीस कोट सूट (कोट + पैंट + वेस्टकोट - एकदम सही फिटिंग)',
        'रॉयल शेरवानी या इंडो-वेस्टर्न (शानदार कारीगरी)',
        'मैचिंग कुर्ता-पाजामा (हल्दी-संगीत रस्म बर)',
        'बिहाव के तारीख ले पहिली ट्रायल अउ मुफ़्त सुधार गारंटी'
      ]
    },
    items: {
      coat: ['कोट ब्लेजर', 'बिहाव, पार्टी अउ ऑफिस बर कस्टम फिट'],
      sherwani: ['शेरवानी', 'बिहाव के शाही लुक बर बढ़िया फिनिशिंग'],
      jodhpuri: ['जोधपुरी', 'क्लासिक कॉलर अउ प्रीमियम फिट'],
      indoWestern: ['इंडो वेस्टर्न जैकेट', 'नवा अउ परंपरागत स्टाइल के संगम'],
      kurtaPajama: ['कुर्ता पाजामा', 'तिहार अउ रोज के पहिरन बर आरामदायक'],
      formalPants: ['फॉर्मल पैंट', 'ऑफिस अउ यूनिफॉर्म बर साफ फिट'],
      casualPantShirt: ['कैजुअल पैंट शर्ट', 'रोज के पहिरन अउ घुमई-फिरई बर नवा स्टाइल'],
      customOrder: ['कस्टम सियाई (मनपसंद डिजाइन)', 'अपन पसंद के कपड़ा, फोटो डिजाइन अउ खास नाप'],
      policeUniform: ['पुलिस वर्दी', 'सही नाप अउ मजबूत फिनिश']
    },
    book: 'ये सेवा बुक करव'
  },
  en: {
    eyebrow: 'Fashion Tailors Kawardha',
    title: 'Reliable tailoring for all types of clothing',
    intro: 'Guaranteed quality, affordable rates, excellent fitting, and a polished finish for every custom outfit.',
    group: 'Wedding, party, formal & casual wear',
    uniform: 'Uniforms and professional dress',
    quality: 'Perfect fitting and polished finishing',
    rate: 'Excellent tailoring at fair rates',
    finish: 'Style and comfort, both considered',
    weddingCombo: {
      badge: '👑 Groom & Wedding Special Combo',
      title: 'Royal Groom Wedding Wardrobe Package',
      desc: 'Complete royal wedding wardrobe crafted under one roof with VIP priority fitting and special package savings.',
      specialTag: "Kawardha's Exclusive Coat & Blazer Specialist",
      freeGiftTitle: 'Complimentary Free Gifts',
      freeGiftDesc: 'Premium dust-proof suit cover bag & luxury hanger included free',
      cta: 'Book Wedding Combo',
      perks: [
        '3-Piece Coat Suit (Coat + Formal Trouser + Matching Waistcoat)',
        'Royal Sherwani or Indo-Western (Handcrafted buttons & embroidery)',
        'Matching Kurta-Pajama (For Haldi, Mehendi & Sangeet functions)',
        'VIP pre-wedding trial fitting with 100% free alteration guarantee'
      ]
    },
    items: {
      coat: ['Coat Blazer', 'Custom fit for weddings, parties, and office'],
      sherwani: ['Sherwani', 'Royal finishing for your wedding day'],
      jodhpuri: ['Jodhpuri', 'Classic collar and premium fit'],
      indoWestern: ['Indo Western Jacket', 'A modern meeting of tradition and style'],
      kurtaPajama: ['Kurta Pajama', 'Comfortable for festivals and everyday wear'],
      formalPants: ['Formal Pants', 'Clean fitting for office and uniform wear'],
      casualPantShirt: ['Casual Pant Shirt', 'Everyday comfort, smart styling, and durable stitching'],
      customOrder: ['Custom Tailoring & Design', 'Bespoke stitching tailored to your photo, fabric & style'],
      policeUniform: ['Police Uniform', 'Accurate measurements and durable finishing']
    },
    book: 'Book this service'
  }
}

export default function ServicesPage({ language, onBook }) {
  const local = content[language] || content.hi

  const renderCard = ({ key, icon: Icon, tone, image }) => (
    <article className="service-card" key={key}>
      <div className="service-image-wrap">
        <img src={image} alt={`${local.items[key][0]} - Fashion Tailors Kawardha`} loading="lazy" />
        <div className={`service-icon ${tone}`}><Icon size={21} /></div>
      </div>
      <h2>{local.items[key][0]}</h2>
      <p>{local.items[key][1]}</p>
      <ul>
        <li><Check size={14} />{local.quality}</li>
        <li><Check size={14} />{local.rate}</li>
        <li><Check size={14} />{local.finish}</li>
      </ul>
      <button className="text-button" onClick={() => onBook(key)}>
        {local.book}<ArrowRight size={15} />
      </button>
    </article>
  )

  return (
    <div className="public-page">
      <div className="public-heading">
        <span className="eyebrow">{local.eyebrow}</span>
        <h1>{local.title}</h1>
        <p>{local.intro}</p>
      </div>

      {/* Featured Wedding & Groom Special Combo Card */}
      <section className="wedding-combo-card">
        <div className="wedding-combo-content">
          <div className="wedding-combo-badge">
            <Sparkles size={14} />
            <span>{local.weddingCombo.badge}</span>
          </div>
          <h2>{local.weddingCombo.title}</h2>
          <p className="wedding-combo-desc">{local.weddingCombo.desc}</p>
          <div className="wedding-combo-perks">
            {local.weddingCombo.perks.map((perk, index) => (
              <div className="wedding-perk-item" key={index}>
                <Check size={16} />
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="wedding-combo-action-card">
          <div className="wedding-action-badge">
            <Crown size={22} />
            <span>{local.weddingCombo.specialTag}</span>
          </div>
          <div className="wedding-action-freebies">
            <strong><Gift size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />{local.weddingCombo.freeGiftTitle}</strong>
            <span>{local.weddingCombo.freeGiftDesc}</span>
          </div>
          <button
            type="button"
            className="primary-button wedding-book-btn"
            onClick={() => onBook('weddingCombo')}
          >
            {local.weddingCombo.cta}
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <div className="service-group-title"><span>{local.group}</span></div>
      <div className="service-grid menwear-grid">{services.slice(0, 8).map(renderCard)}</div>
      <div className="service-group-title uniform-title"><span>{local.uniform}</span></div>
      <div className="service-grid uniform-grid">{services.slice(8).map(renderCard)}</div>
    </div>
  )
}

