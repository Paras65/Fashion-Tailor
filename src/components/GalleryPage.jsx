import showcaseBanner from '../assets/showcase-banner.jpg'
import showcaseTrousers from '../assets/showcase-trousers.jpg'
import showcaseShirtsSuits from '../assets/showcase-shirts-suits.jpg'

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
    image: 'https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=800&q=82',
    label: {
      hi: 'रॉयल शेरवानी लुक',
      cg: 'शाही शेरवानी लुक',
      en: 'Royal Sherwani Look'
    }
  },
  {
    image: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=800&q=82',
    label: {
      hi: 'जोधपुरी सूट स्टाइल',
      cg: 'जोधपुरी सूट स्टाइल',
      en: 'Jodhpuri Suit Style'
    }
  },
  {
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=82',
    label: {
      hi: 'इंडो वेस्टर्न जैकेट',
      cg: 'इंडो वेस्टर्न जैकेट',
      en: 'Indo Western Jacket'
    }
  },
  {
    image: 'https://images.unsplash.com/photo-1626497769138-5e8f8d7e8c1b?auto=format&fit=crop&w=800&q=82',
    label: {
      hi: 'कुर्ता पाजामा',
      cg: 'कुर्ता पाजामा',
      en: 'Kurta Pajama'
    }
  },
  {
    image: 'https://images.unsplash.com/photo-1588731234159-8b9963143fca?auto=format&fit=crop&w=800&q=82',
    label: {
      hi: 'पुलिस वर्दी एवं प्रोफेशनल यूनिफॉर्म',
      cg: 'पुलिस वर्दी अउ काम के ड्रेस',
      en: 'Police & Duty Uniforms'
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

