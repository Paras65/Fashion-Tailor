import showcaseBanner from '../assets/showcase-banner.jpg'
import showcaseTrousers from '../assets/showcase-trousers.jpg'
import showcaseShirtsSuits from '../assets/showcase-shirts-suits.jpg'
import sherwaniImg from '../assets/sherwani.png'
import jodhpuriImg from '../assets/jodhpuri.png'
import indoWesternImg from '../assets/indo-western.png'
import kurtaPajamaImg from '../assets/kurta-pajama.png'
import policeUniformImg from '../assets/police-uniform.png'

const gallery = [
  {
    image: showcaseBanner,
    badge: { hi: 'ऑफिशियल शोकेस', cg: 'ऑफिशियल शोकेस', en: 'Official Showcase' },
    label: {
      hi: 'फ़ैशन टेलर्स कवर्धा — हमारा स्टाइल और डिजाइन कलेक्शन',
      cg: 'फ़ैशन टेलर्स कवर्धा — हमर स्टाइल अउ डिजाइन कलेक्शन',
      en: 'Fashion Tailors Kawardha — Style & Design Showcase'
    }
  },
  {
    image: showcaseShirtsSuits,
    badge: { hi: 'वर्कशॉप शोकेस', cg: 'वर्कशॉप शोकेस', en: 'Workshop Showcase' },
    label: {
      hi: 'शर्ट, कुर्ता एवं कोट कलेक्शन — दुकान का दृश्य',
      cg: 'शर्ट, कुर्ता अउ कोट कलेक्शन — दुकान के दृश्य',
      en: 'Shirts, Kurta & Coat Display — In Shop'
    }
  },
  {
    image: showcaseTrousers,
    badge: { hi: 'कारीगरी', cg: 'कारीगरी', en: 'Craftsmanship' },
    label: {
      hi: 'कारीगरी — तैयार फॉर्मल व कैजुअल पैंट्स',
      cg: 'कारीगरी — तैयार फॉर्मल अउ कैजुअल पैंट',
      en: 'Handcrafted — Tailored Formal & Casual Trousers'
    }
  },
  {
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=82',
    label: {
      hi: 'कोट व ब्लेजर',
      cg: 'कोट ब्लेजर',
      en: 'Coat Blazer'
    }
  },
  {
    image: sherwaniImg,
    badge: { hi: 'रॉयल वेडिंग', cg: 'रॉयल बिहाव', en: 'Royal Wedding' },
    label: {
      hi: 'रॉयल दूल्हा शेरवानी — सिल्क व एम्ब्रॉयडरी फिनिश',
      cg: 'शाही दूल्हा शेरवानी — सिल्क अउ कढ़ाई फिनिश',
      en: 'Royal Groom Sherwani — Silk & Embroidery Finish'
    }
  },
  {
    image: jodhpuriImg,
    badge: { hi: 'रॉयल सूट', cg: 'रॉयल सूट', en: 'Royal Suit' },
    label: {
      hi: 'जोधपुरी सूट — एम्ब्रॉयडर्ड बंदगला व क्राउन बटन्स',
      cg: 'जोधपुरी सूट — कढ़ाई बंदगला अउ क्राउन बटन',
      en: 'Jodhpuri Suit — Handcrafted Bandhgala & Buttons'
    }
  },
  {
    image: indoWesternImg,
    badge: { hi: 'इंडो-वेस्टर्न', cg: 'इंडो-वेस्टर्न', en: 'Indo-Western' },
    label: {
      hi: 'इंडो वेस्टर्न जैकेट — मॉडर्न व ट्रेडिशनल स्टाइल',
      cg: 'इंडो वेस्टर्न जैकेट — नवा अउ पारंपरिक स्टाइल',
      en: 'Indo Western Jacket — Modern Fusion Wedding Style'
    }
  },
  {
    image: kurtaPajamaImg,
    badge: { hi: 'त्योहार व रस्म', cg: 'तिहार अउ रस्म', en: 'Festive Wear' },
    label: {
      hi: 'कुर्ता पाजामा — मैचिंग जैकेट व फाइन स्टिचिंग',
      cg: 'कुर्ता पाजामा — मैचिंग जैकेट अउ बढ़िया सिलाई',
      en: 'Kurta Pajama — Tailored Silk Kurta with Jacket'
    }
  },
  {
    image: policeUniformImg,
    badge: { hi: 'ड्यूटी यूनिफॉर्म', cg: 'ड्यूटी ड्रेस', en: 'Duty Uniform' },
    label: {
      hi: 'पुलिस वर्दी — आधिकारिक मानक एवं टिकाऊ सिलाई',
      cg: 'पुलिस वर्दी — मजबूत सियाई अउ सही नाप',
      en: 'Police Uniform — Official Specifications & Durable Fit'
    }
  }
]

export default function GalleryPage({ language, onBook }) {
  const copy = language === 'cg' ? {
    eyebrow: 'हमर काम',
    title: 'हर पोशाक मं कंवर्धा के हुनर',
    intro: 'कोट, शेरवानी, जोधपुरी, शर्ट-पैंट अउ वर्दी के सिलाई के जीवंत झलक।',
    cta: 'अपन डिजाइन हे?',
    text: 'अपन सोच बतावव, हमन ओला पहिरे लायक बनाबो।',
    book: 'बुकिंग करव'
  } : language === 'hi' ? {
    eyebrow: 'हमारा काम',
    title: 'हर पोशाक में कवर्धा का हुनर',
    intro: 'कोट, शेरवानी, जोधपुरी, शर्ट-पैंट और वर्दी की सिलाई की जीवंत झलकियां।',
    cta: 'अपना डिजाइन है?',
    text: 'अपना विचार भेजें, हम उसे पहनने लायक बनाएंगे।',
    book: 'बुकिंग करें'
  } : {
    eyebrow: 'Our work',
    title: 'Kawardha craft in every outfit',
    intro: 'A glimpse at our real tailoring work — coat blazers, sherwanis, trousers, and uniforms.',
    cta: 'Have a design in mind?',
    text: 'Share your idea and we will make it wearable.',
    book: 'Book an appointment'
  }

  return (
    <div className="public-page">
      <div className="public-heading">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
      </div>
      <div className="gallery-grid">
        {gallery.map((item, index) => {
          const labelText = typeof item.label === 'object' ? (item.label[language] || item.label.hi) : item.label
          const badgeText = item.badge ? (item.badge[language] || item.badge.hi) : null
          return (
            <figure key={index}>
              {badgeText && <span className="gallery-badge">{badgeText}</span>}
              <img src={item.image} alt={`${labelText} - Fashion Tailors Kawardha`} loading="lazy" />
              <figcaption>{labelText}</figcaption>
            </figure>
          )
        })}
      </div>
      <div className="gallery-cta">
        <div>
          <h2>{copy.cta}</h2>
          <p>{copy.text}</p>
        </div>
        <button className="primary-button" onClick={onBook}>
          {copy.book}
        </button>
      </div>
    </div>
  )
}

