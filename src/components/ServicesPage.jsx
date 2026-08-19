import { ArrowRight, Check, Crown, Scissors, ShieldCheck, Shirt, Sparkles, UserRound } from 'lucide-react'

const services = [
  { key: 'coat', icon: Crown, tone: 'rose', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=82' },
  { key: 'sherwani', icon: Sparkles, tone: 'gold', image: 'https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=700&q=82' },
  { key: 'jodhpuri', icon: UserRound, tone: 'teal', image: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=700&q=82' },
  { key: 'indoWestern', icon: Shirt, tone: 'blue', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=82' },
  { key: 'kurtaPajama', icon: Shirt, tone: 'gold', image: 'https://images.unsplash.com/photo-1626497769138-5e8f8d7e8c1b?auto=format&fit=crop&w=700&q=82' },
  { key: 'formalPants', icon: Scissors, tone: 'teal', image: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=700&q=82' },
  { key: 'policeUniform', icon: ShieldCheck, tone: 'blue', image: 'https://images.unsplash.com/photo-1588731234159-8b9963143fca?auto=format&fit=crop&w=700&q=82' },
]

const content = {
  hi: {
    eyebrow: 'फैशन टेलर कवर्धा', title: 'पुरुषों के कपड़ों की भरोसेमंद सिलाई', intro: 'किफायती दाम, बेहतरीन फिटिंग और शानदार फिनिशिंग के साथ आपकी हर खास जरूरत के लिए गारंटीड क्वालिटी।', group: 'पार्टी, वेडिंग और फॉर्मल वेअर', uniform: 'वर्दी और प्रोफेशनल ड्रेस', quality: 'परफेक्ट फिटिंग और शानदार फिनिशिंग', rate: 'सबसे कम रेट में बेहतरीन सिलाई', finish: 'स्टाइल और कम्फर्ट का पूरा ध्यान', items: { coat: ['कोट ब्लेजर', 'शादी, पार्टी और ऑफिस के लिए कस्टम फिट'], sherwani: ['शेरवानी', 'वेडिंग लुक के लिए रॉयल फिनिशिंग'], jodhpuri: ['जोधपुरी', 'क्लासिक कॉलर और प्रीमियम फिट'], indoWestern: ['इंडो वेस्टर्न जैकेट', 'मॉडर्न और पारंपरिक स्टाइल का मेल'], kurtaPajama: ['कुर्ता पाजामा', 'त्योहार और रोजमर्रा के लिए आरामदायक'], formalPants: ['फॉर्मल पैंट', 'ऑफिस और यूनिफॉर्म के लिए साफ फिट'], policeUniform: ['पुलिस वर्दी', 'सटीक माप और टिकाऊ फिनिश'] }, book: 'इस सेवा की बुकिंग करें' },
  cg: {
    eyebrow: 'फैशन टेलर कवर्धा', title: 'लइका मन के कपड़ा के भरोसेमंद सियाई', intro: 'कम दाम मं बढ़िया फिटिंग, शानदार फिनिशिंग अउ गारंटीड क्वालिटी के संग हर जरूरत के सिलाई।', group: 'पार्टी, बिहाव अउ फॉर्मल पहिरन', uniform: 'वर्दी अउ काम के ड्रेस', quality: 'एकदम सही फिटिंग अउ बढ़िया फिनिशिंग', rate: 'कम रेट मं बढ़िया सियाई', finish: 'स्टाइल अउ कम्फर्ट के पूरा ध्यान', items: { coat: ['कोट ब्लेजर', 'बिहाव, पार्टी अउ ऑफिस बर कस्टम फिट'], sherwani: ['शेरवानी', 'बिहाव के शाही लुक बर बढ़िया फिनिशिंग'], jodhpuri: ['जोधपुरी', 'क्लासिक कॉलर अउ प्रीमियम फिट'], indoWestern: ['इंडो वेस्टर्न जैकेट', 'नवा अउ परंपरागत स्टाइल के संगम'], kurtaPajama: ['कुर्ता पाजामा', 'तिहार अउ रोज के पहिरन बर आरामदायक'], formalPants: ['फॉर्मल पैंट', 'ऑफिस अउ यूनिफॉर्म बर साफ फिट'], policeUniform: ['पुलिस वर्दी', 'सही नाप अउ मजबूत फिनिश'] }, book: 'ये सेवा बुक करव' },
  en: {
    eyebrow: 'Fashion Tailor Kawardha', title: 'Reliable men’s tailoring for every occasion', intro: 'Guaranteed quality, affordable rates, excellent fitting, and a polished finish for every custom outfit.', group: 'Party, wedding, and formal wear', uniform: 'Uniforms and professional dress', quality: 'Perfect fitting and polished finishing', rate: 'Excellent tailoring at fair rates', finish: 'Style and comfort, both considered', items: { coat: ['Coat Blazer', 'Custom fit for weddings, parties, and office'], sherwani: ['Sherwani', 'Royal finishing for your wedding day'], jodhpuri: ['Jodhpuri', 'Classic collar and premium fit'], indoWestern: ['Indo Western Jacket', 'A modern meeting of tradition and style'], kurtaPajama: ['Kurta Pajama', 'Comfortable for festivals and everyday wear'], formalPants: ['Formal Pants', 'Clean fitting for office and uniform wear'], policeUniform: ['Police Uniform', 'Accurate measurements and durable finishing'] }, book: 'Book this service' },
}

export default function ServicesPage({ language, onBook }) {
  const local = content[language]
  const renderCard = ({ key, icon: Icon, tone, image }) => <article className="service-card" key={key}><div className="service-image-wrap"><img src={image} alt={`${local.items[key][0]} - Fashion Tailor Kawardha`} loading="lazy" /><div className={`service-icon ${tone}`}><Icon size={21} /></div></div><h2>{local.items[key][0]}</h2><p>{local.items[key][1]}</p><ul><li><Check size={14} />{local.quality}</li><li><Check size={14} />{local.rate}</li><li><Check size={14} />{local.finish}</li></ul><button className="text-button" onClick={onBook}>{local.book}<ArrowRight size={15} /></button></article>
  return <div className="public-page"><div className="public-heading"><span className="eyebrow">{local.eyebrow}</span><h1>{local.title}</h1><p>{local.intro}</p></div><div className="service-group-title"><span>{local.group}</span></div><div className="service-grid menwear-grid">{services.slice(0, 6).map(renderCard)}</div><div className="service-group-title uniform-title"><span>{local.uniform}</span></div><div className="service-grid uniform-grid">{services.slice(6).map(renderCard)}</div></div>
}
