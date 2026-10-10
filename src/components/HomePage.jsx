import { useState } from 'react'
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  ChevronDown,
  Crown,
  HeartHandshake,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Star
} from 'lucide-react'
import LeadOffer from './LeadOffer'
import SocialEngagement from './SocialEngagement'
import heroBanner from '../assets/hero-banner.jpg'
import sherwaniImg from '../assets/sherwani.png'
import jodhpuriImg from '../assets/jodhpuri.png'
import policeUniformImg from '../assets/police-uniform.png'
import './HomePage.css'

const popularServices = [
  { key: 'coat', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=82' },
  { key: 'sherwani', image: sherwaniImg },
  { key: 'jodhpuri', image: jodhpuriImg },
  { key: 'policeUniform', image: policeUniformImg },
]

const copy = {
  hi: {
    vipRibbon: '👑 कवर्धा का एकमात्र कोट-ब्लेजर स्पेशलिस्ट टेलर्स',
    eyebrow: 'कवर्धा का अपना फ़ैशन टेलर्स',
    title: 'आपका स्टाइल, हमारी शानदार सिलाई',
    intro: 'दैनिक पहनावे से लेकर खास मौकों तक, किफायती दामों पर बेहतरीन फिटिंग और शानदार फिनिशिंग।',
    book: 'बुकिंग करें',
    explore: 'सेवाएं देखें',
    handmade: 'आपके लिए हाथ से तैयार',
    serviceEyebrow: 'लोकप्रिय सेवाएं',
    serviceTitle: 'जिस पोशाक की जरूरत हो, वही सिलाई',
    viewAll: 'सभी सेवाएं देखें',
    quality: 'गारंटीड क्वालिटी',
    price: 'किफायती रेट',
    comfort: 'स्टाइल और कम्फर्ट',
    why: 'हमें क्यों चुनें',
    promise: 'हर मौके के लिए सही फिट और भरोसेमंद क्वालिटी',
    areas: 'कवर्धा · राजनांदगांव · मुंगेली · बेमेतरा',
    fitText: 'डिलीवरी से पहले सही नाप और फिनिशिंग की पूरी जांच।',
    priceText: 'वेडिंग, फॉर्मल, दैनिक ,वर्दी ... के लिए साफ और उचित रेट।',
    galleryEyebrow: 'हमारा काम',
    galleryTitle: 'हर पोशाक में कवर्धा का हुनर',
    galleryText: 'कोट, शेरवानी, जोधपुरी , वर्दी ... की सिलाई की झलकियां।',
    gallery: 'गैलरी देखें',
    contactTitle: 'कवर्धा में सिलाई बुक करें',
    contactText: 'अपनी पोशाक, नाप और तारीख बताएं। हम WhatsApp पर जल्दी जवाब देंगे।',
    address: 'कवर्धा, छत्तीसगढ़ · सोमवार से शनिवार',
    call: 'WhatsApp पर बुक करें',
    serviceNames: { coat: 'कोट ब्लेजर', sherwani: 'शेरवानी', jodhpuri: 'जोधपुरी', policeUniform: 'पुलिस वर्दी' },
    reviewsEyebrow: 'ग्राहकों का अनुभव',
    reviewsTitle: 'कवर्धा का भरोसेमंद सिलाई संस्थान',
    googleReviewCta: 'Google Maps पर 5-स्टार रेटिंग देखें या रिव्यू दें',
    reviews: [
      {
        tag: 'शादी व 3-पीस कोट सूट',
        text: 'शादी के 3-पीस कोट सूट की फिटिंग लाजवाब रही। कंधे, कॉलर और वेस्टकोट की फिनिशिंग ऐसी कि रेडीमेड ब्रांड्स भी फीके लगें। कवर्धा में इनसे बेहतर कोट कोई नहीं सिल सकता।',
        name: 'आकाश साहू',
        location: 'कवर्धा · वेडिंग ग्राहक'
      },
      {
        tag: 'फॉर्मल व कैजुअल पैंट-शर्ट',
        text: 'पिछले 7 वर्षों से मैं अपनी सभी फॉर्मल शर्ट और पैंट यहीं सिलवाता हूँ। कपड़े की सटीक कटिंग और सिलाई की मजबूती हमेशा नंबर 1 रहती है।',
        name: 'राजेश वर्मा',
        location: 'कवर्धा · नियमित ग्राहक'
      },
      {
        tag: 'पुलिस वर्दी विशेषज्ञ',
        text: 'वर्दी के सख्त मानकों, सही नाप और ड्यूटी के अनुकूल कम्फर्ट का पूरा ध्यान रखते हैं। समय पर डिलीवरी और मजबूत सिलाई के लिए कवर्धा पुलिस का पहला भरोसा।',
        name: 'सुरेश चंद्रवंशी',
        location: 'कबीरधाम · सब-इंस्पेक्टर'
      }
    ],
    faqEyebrow: 'अक्सर पूछे जाने वाले सवाल',
    faqTitle: 'सिलाई और डिलीवरी से जुड़ी ज़रूरी बातें',
    faqSubtitle: 'नाप, कपड़ा, डिलीवरी समय और ट्रायल से जुड़े आपके सवालों के स्पष्ट जवाब।',
    faqs: [
      {
        q: 'डिलीवरी में कितना समय लगता है? क्या जल्दी (Express) सिलाई मिल सकती है?',
        a: 'सामान्यतः 4 से 6 दिनों में आपकी पोशाक पूरी फिनिशिंग और प्रेसिंग के साथ तैयार हो जाती है। शादी, त्योहार या किसी खास तारीख के लिए हमारे पास 24 से 48 घंटे में "एक्सप्रेस डिलीवरी" की सुविधा भी उपलब्ध है।'
      },
      {
        q: 'क्या कपड़ा भी दुकान पर मिलता है या खुद लेकर आना होगा?',
        a: 'दोनों विकल्प उपलब्ध हैं! आप अपनी पसंद का कपड़ा कहीं से भी ला सकते हैं, अथवा हमारी दुकान पर रेमंड्स, सियाराम्स व अन्य प्रीमियम ब्रांड्स के कोट, सफारी, पैंट-शर्ट और कुर्ते के बेहतरीन कपड़ों में से चुन सकते हैं।'
      },
      {
        q: 'क्या फाइनल डिलीवरी से पहले ट्रायल या फिटिंग की गारंटी है?',
        a: 'हां, बिल्कुल! हम फाइनल स्टिचिंग व प्रेसिंग से पहले ट्रायल फिटिंग कराते हैं ताकि 100% सटीक फिटिंग सुनिश्चित हो सके। यदि कोई भी फेरबदल या अल्टरेशन चाहिए, तो वह बिना किसी अतिरिक्त शुल्क के तुरंत किया जाता है।'
      },
      {
        q: 'क्या पुलिस वर्दी और शादी के लिए बल्क/ग्रुप ऑर्डर सिलते हैं?',
        a: 'हां! हम छत्तीसगढ़ पुलिस वर्दी, एडवोकेट कोट, कॉलेज/स्कूल यूनिफॉर्म और शादी-समारोह में दूल्हे के पूरे परिवार व बारातियों के लिए मैचिंग कुर्ते-पाजामे व कोट के ग्रुप ऑर्डर विशेष रियायती दरों पर तैयार करते हैं।'
      }
    ]
  },
  cg: {
    vipRibbon: '👑 कंवर्धा के एकमात्र कोट-ब्लेजर टेलर',
    eyebrow: 'कंवर्धा के अपन फ़ैशन टेलर्स',
    title: 'आपके रूप, हमर सियाई',
    intro: 'रोज के पहिरन ले खास बेरा तक, कम दाम मं बढ़िया फिटिंग अउ शानदार फिनिशिंग।',
    book: 'बुकिंग करव',
    explore: 'सेवा देखव',
    handmade: 'आप मन बर हाथ ले बनाय',
    serviceEyebrow: 'लोकप्रिय सेवा',
    serviceTitle: 'जऊन पोशाक चाही, ओकरे सियाई',
    viewAll: 'सब्बो सेवा देखव',
    quality: 'गारंटीड क्वालिटी',
    price: 'किफायती रेट',
    comfort: 'स्टाइल अउ कम्फर्ट',
    why: 'हमन ला काबर चुनव',
    promise: 'हर बेरा बढ़िया फिट अउ भरोसेमंद क्वालिटी',
    areas: 'कंवर्धा · राजनांदगांव · मुंगेली · बेमेतरा',
    fitText: 'डिलीवरी ले पहिली सही नाप अउ फिनिशिंग के पूरा जांच।',
    priceText: 'बिहाव, फॉर्मल, रोज के पहिरन अउ वर्दी बर साफ रेट।',
    galleryEyebrow: 'हमर काम',
    galleryTitle: 'हर पोशाक मं कंवर्धा के हुनर',
    galleryText: 'कोट, शेरवानी, जोधपुरी अउ वर्दी के सियाई के झलक।',
    gallery: 'गैलरी देखव',
    contactTitle: 'कंवर्धा मं सियाई बुक करव',
    contactText: 'अपन पोशाक अउ तारीख बतावव। हमन WhatsApp मं जल्दी जवाब देबो।',
    address: 'कंवर्धा, छत्तीसगढ़ · सोमवार ले शनिवार',
    call: 'WhatsApp मं बुक करव',
    serviceNames: { coat: 'कोट ब्लेजर', sherwani: 'शेरवानी', jodhpuri: 'जोधपुरी', policeUniform: 'पुलिस वर्दी' },
    reviewsEyebrow: 'ग्राहक मन के भरोसा',
    reviewsTitle: 'कंवर्धा के सबले भरोसेमंद सिलाई',
    googleReviewCta: 'Google Maps मं 5-स्टार रिव्यू देखव या लिखव',
    reviews: [
      {
        tag: 'बिहाव 3-पीस कोट सूट',
        text: 'बिहाव बर 3-पीस कोट सूट सिलवाए रहेंव। कंधा, कॉलर अउ फिनिशिंग एकदम शानदार आइस। कंवर्धा मं कोट बर इनसे बढ़िया कोनो टेलर नइ हे।',
        name: 'आकाश साहू',
        location: 'कंवर्धा · बिहाव ग्राहक'
      },
      {
        tag: 'फॉर्मल पैंट-शर्ट',
        text: '7 बछर ले अपन सब फॉर्मल पैंट-शर्ट इहीं ले सिलवाथंव। सियाई के मजबूती अउ कटिंग हमेशा एक नंबर रहिथे।',
        name: 'राजेश वर्मा',
        location: 'कंवर्धा · नियमित ग्राहक'
      },
      {
        tag: 'पुलिस वर्दी विशेषज्ञ',
        text: 'पुलिस वर्दी के सही नाप अउ मजबूत सियाई के पूरा ध्यान रखथें। सही समय मं डिलीवरी अउ फिनिशिंग बहुत बढ़िया हे।',
        name: 'सुरेश चंद्रवंशी',
        location: 'कबीरधाम · सब-इंस्पेक्टर'
      }
    ],
    faqEyebrow: 'अक्सर पूछे जाने वाला सवाल',
    faqTitle: 'सियाई अउ डिलीवरी के जरूरी बात',
    faqSubtitle: 'नाप, कपड़ा, डिलीवरी समय अउ ट्रायल से जुड़े सवाल मन के साफ जवाब।',
    faqs: [
      {
        q: 'डिलीवरी मं कतका दिन लागथे? का जल्दी सिलाई मिल सकही?',
        a: 'सामान्य रूप ले 4 ले 6 दिन मं पोशाक पूरा तैयार हो जाथे। बिहाव या तिहार बर जल्दी चाही त 24 ले 48 घंटा मं "एक्सप्रेस डिलीवरी" के सुभीता घलो हे।'
      },
      {
        q: 'का कपड़ा घलो दुकान मं मिलथे कि अपन ले के आना परही?',
        a: 'दुनो सुभीता हे! आप मन अपन कपड़ा घलो ला सकथो, अउ हमर दुकान मं घलो कोट, पैंट-शर्ट अउ कुर्ता बर बढ़िया ब्रांडेड कपड़ा के शानदार वैरायटी उपलब्ध हे।'
      },
      {
        q: 'का फाइनल डिलीवरी ले पहिली ट्रायल या फिटिंग होथे?',
        a: 'हओ, बिलकुल! डिलीवरी ले पहिली कच्चा ट्रायल कराथन जेकर ले नाप एकदम सही बइठे। कोनो फेरबदल करे बर कोनो अतिरिक्त खरचा नइ लागे।'
      },
      {
        q: 'का पुलिस वर्दी अउ बिहाव बर बल्क आर्डर के सियाई होथे?',
        a: 'हओ! पुलिस वर्दी, एडवोकेट कोट, स्कूल-कॉलेज ड्रेस अउ बिहाव मं परिवार-बरियाती बर एक जैसे कुर्ता-पाजामा या कोट के बल्क आर्डर कम रेट मं तैयार करे जाथे।'
      }
    ]
  },
  en: {
    vipRibbon: "👑 Kawardha's Exclusive Coat & Blazer Specialist",
    eyebrow: 'Kawardha Fashion Tailors',
    title: 'Your style, our precise Silai',
    intro: 'From everyday wear to special occasions, excellent fitting and polished finishing at affordable rates.',
    book: 'Book an appointment',
    explore: 'View services',
    handmade: 'Handcrafted for your fit',
    serviceEyebrow: 'Popular services',
    serviceTitle: 'Tailoring for the outfit you need',
    viewAll: 'View all services',
    quality: 'Guaranteed quality',
    price: 'Affordable rates',
    comfort: 'Style and comfort',
    why: 'Why choose us',
    promise: 'The right fit for every occasion, with trusted quality',
    areas: 'Kawardha · Rajnandgaon · Mungeli · Bemetara',
    fitText: 'Careful measurements and a clean finishing check before delivery.',
    priceText: 'Clear, fair pricing for wedding, formal, daily, and uniform wear.',
    galleryEyebrow: 'Our work',
    galleryTitle: 'Kawardha craft in every outfit',
    galleryText: 'A glimpse at our coat, sherwani, Jodhpuri, and uniform tailoring.',
    gallery: 'View gallery',
    contactTitle: 'Book tailoring in Kawardha',
    contactText: 'Share your outfit, measurements, and date. We reply quickly on WhatsApp.',
    address: 'Kawardha, Chhattisgarh · Monday to Saturday',
    call: 'Book on WhatsApp',
    serviceNames: { coat: 'Coat Blazer', sherwani: 'Sherwani', jodhpuri: 'Jodhpuri', policeUniform: 'Police Uniform' },
    reviewsEyebrow: 'Customer Reviews',
    reviewsTitle: 'Kawardha’s Most Trusted Tailoring House',
    googleReviewCta: 'View 5-Star Reviews on Google Maps',
    reviews: [
      {
        tag: 'Wedding 3-Piece Suit',
        text: 'The fitting of my wedding 3-piece suit was immaculate. The shoulder silhouette and collar finish surpassed luxury readymade brands. The finest suit tailoring in Kawardha.',
        name: 'Akash Sahu',
        location: 'Kawardha · Wedding Client'
      },
      {
        tag: 'Formal & Daily Wear',
        text: 'I have had all my formal shirts and trousers tailored here for over 7 years. Cutting accuracy and stitch durability are consistently top-notch.',
        name: 'Rajesh Verma',
        location: 'Kawardha · Regular Client'
      },
      {
        tag: 'Police Uniform Specialist',
        text: 'Exact uniform guidelines, rugged double stitching, and all-day duty comfort. The first choice for officers across the Kawardha police department.',
        name: 'Suresh Chandravanshi',
        location: 'Kawardha · Sub-Inspector'
      }
    ],
    faqEyebrow: 'Frequently Asked Questions',
    faqTitle: 'Tailoring & Delivery Details',
    faqSubtitle: 'Clear answers on measurements, fabric, delivery timelines, and trial fitting.',
    faqs: [
      {
        q: 'How long does delivery take? Is express stitching available?',
        a: 'Standard delivery takes 4 to 6 days with full finishing and steam press. For urgent wedding or festival dates, express delivery within 24–48 hours is also available.'
      },
      {
        q: 'Is fabric available at your shop, or should I bring my own?',
        a: 'Both options are welcome! You can bring your own fabric, or choose from our in-shop collection of Raymond, Siyaram, and premium suitings and shirtings.'
      },
      {
        q: 'Is there a trial fitting before final delivery?',
        a: 'Yes, definitely! We conduct a trial fitting prior to final pressing to ensure 100% precision fit. Any required adjustment or alteration is done promptly at zero extra cost.'
      },
      {
        q: 'Do you stitch police uniforms and bulk wedding/group orders?',
        a: 'Yes! We specialize in official police uniforms, advocate coats, corporate/school uniforms, and bulk matching kurta-pajamas or blazers for weddings at special package rates.'
      }
    ]
  }
}

export default function HomePage({ language, onBook, onExplore }) {
  const [openFaq, setOpenFaq] = useState(0)
  const local = copy[language] || copy.hi

  return (
    <div className="public-page home-page">
      <section className="home-hero">
        <div className="hero-copy">
          <div className="hero-vip-ribbon">
            <Crown size={15} />
            <span>{local.vipRibbon}</span>
          </div>
          <div className="hero-eyebrow-row">
            <span className="eyebrow">{local.eyebrow}</span>
            <span className="hero-badge"><ShieldCheck size={13} />{local.handmade}</span>
          </div>
          <h1>{local.title}</h1>
          <p>{local.intro}</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={onBook}><CalendarCheck2 size={18} />{local.book}</button>
            <button className="outline-button" onClick={onExplore}>{local.explore}<ArrowRight size={16} /></button>
          </div>
        </div>
        <div className="hero-art">
          <img src={heroBanner} alt="फ़ैशन टेलर्स कवर्धा - Fashion Tailors Kawardha" className="hero-banner-img" />
        </div>
      </section>

      <section className="home-trust">
        <div><strong>25+</strong><span>{language === 'en' ? 'years of craft & trust' : language === 'cg' ? 'बछर के भरोसा अउ हुनर' : 'वर्षों का भरोसा व हुनर'}</span></div>
        <div><strong>100%</strong><span>{local.quality}</span></div>
        <div><strong>4.9/5</strong><span>{language === 'en' ? 'customer trust' : 'ग्राहकों का भरोसा'}</span></div>
      </section>

      <LeadOffer language={language} onBook={onBook} />

      <section className="home-services">
        <div className="home-section-heading">
          <div>
            <span className="eyebrow">{local.serviceEyebrow}</span>
            <h2>{local.serviceTitle}</h2>
          </div>
          <button className="text-button" onClick={onExplore}>{local.viewAll}<ArrowRight size={15} /></button>
        </div>
        <div className="home-service-grid">
          {popularServices.map((service) => (
            <button className="home-service-card" key={service.key} onClick={onExplore}>
              <img src={service.image} alt={`${local.serviceNames[service.key]} - Fashion Tailors Kawardha`} loading="lazy" />
              <strong>{local.serviceNames[service.key]}</strong>
              <span>{local.quality}</span>
            </button>
          ))}
        </div>
      </section>

      <SocialEngagement language={language} onBook={onBook} />

      <section className="regional-edit">
        <div><span className="eyebrow">{local.promise}</span><h2>{local.intro}</h2></div>
        <div className="regional-tags"><span>{local.quality}</span><span>{local.price}</span><span>{local.comfort}</span></div>
      </section>

      <section className="home-intro-grid">
        <div>
          <span className="eyebrow">{local.why}</span>
          <h2>{local.promise}</h2>
          <p className="service-areas">{local.areas}</p>
        </div>
        <div className="promise-items">
          <article><HeartHandshake size={20} /><div><strong>{local.quality}</strong><p>{local.fitText}</p></div></article>
          <article><CheckCircle2 size={20} /><div><strong>{local.price}</strong><p>{local.priceText}</p></div></article>
        </div>
      </section>

      <section className="home-gallery-preview">
        <div>
          <span className="eyebrow">{local.galleryEyebrow}</span>
          <h2>{local.galleryTitle}</h2>
          <p>{local.galleryText}</p>
        </div>
        <button className="outline-button" onClick={() => window.dispatchEvent(new CustomEvent('navigate-gallery'))}>
          {local.gallery}<ArrowRight size={16} />
        </button>
      </section>

      {/* Multi-Category Testimonials & Social Proof */}
      <section className="home-reviews-section">
        <div className="home-section-heading">
          <div>
            <span className="eyebrow">{local.reviewsEyebrow}</span>
            <h2>{local.reviewsTitle}</h2>
          </div>
          <a
            href="https://share.google/A3HNgr8hZom4N76sD"
            target="_blank"
            rel="noreferrer"
            className="google-rating-badge"
          >
            <span className="rating-stars">★★★★★</span>
            <strong>4.9 / 5.0 Google Rating</strong>
          </a>
        </div>
        <div className="home-reviews-grid">
          {local.reviews.map((r, i) => (
            <article className="review-card" key={i}>
              <div className="review-header">
                <span className="review-tag">{r.tag}</span>
                <div className="review-stars-row">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} size={14} fill="#e5a11c" color="#e5a11c" />
                  ))}
                </div>
              </div>
              <p className="review-text">"{r.text}"</p>
              <div className="review-author">
                <strong>{r.name}</strong>
                <span>{r.location}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="google-review-cta-wrap">
          <a
            href="https://share.google/A3HNgr8hZom4N76sD"
            target="_blank"
            rel="noreferrer"
            className="google-review-link"
          >
            <MapPin size={16} />
            <span>{local.googleReviewCta}</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="home-faq-section">
        <div className="faq-heading">
          <span className="eyebrow">{local.faqEyebrow}</span>
          <h2>{local.faqTitle}</h2>
          <p>{local.faqSubtitle}</p>
        </div>
        <div className="faq-accordion">
          {local.faqs.map((faq, index) => {
            const isOpen = openFaq === index
            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={index}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <section className="home-contact">
        <div>
          <MapPin size={21} />
          <div>
            <h2>{local.contactTitle}</h2>
            <p>{local.contactText}</p>
            <small>{local.address}</small>
          </div>
        </div>
        <button className="primary-button" onClick={onBook}>
          <MessageCircle size={17} />
          {local.call}
        </button>
      </section>
    </div>
  )
}

