import { Check, Copy, Globe2, Heart, MessageCircle, Share2, Star } from 'lucide-react'
import { useState } from 'react'
import './SocialEngagement.css'

export default function SocialEngagement({ language, onBook }) {
  const [copied, setCopied] = useState(false)
  const [votedStyle, setVotedStyle] = useState(null)

  const local = language === 'cg' ? {
    eyebrow: 'हमन संग जुड़व',
    title: 'आपके लुक के बारे मं बतावव',
    prompt: 'कोट ब्लेजर कि शेरवानी? अपन पसंद चुनव अउ दोस्त मन ला शेयर करव।',
    coat: 'कोट ब्लेजर',
    sherwani: 'शेरवानी',
    copied: 'हैशटैग कॉपी होगे',
    copy: 'हैशटैग कॉपी करव',
    tags: '#FashionTailorsKawardha #KawardhaFashion #ChhattisgarhStyle',
    review: 'अपन अनुभव WhatsApp मं भेजव',
    book: 'अपन लुक बुक करव',
    reviewMsg: 'नमस्ते Fashion Tailors! मैं अपन सिलाई के अनुभव शेयर करे बर चाहत हंव।'
  } : language === 'hi' ? {
    eyebrow: 'हमसे जुड़ें',
    title: 'अपने लुक के बारे में बताएं',
    prompt: 'कोट ब्लेजर या शेरवानी? अपनी पसंद चुनें और दोस्तों के साथ शेयर करें।',
    coat: 'कोट ब्लेजर',
    sherwani: 'शेरवानी',
    copied: 'हैशटैग कॉपी हो गए',
    copy: 'हैशटैग कॉपी करें',
    tags: '#FashionTailorsKawardha #KawardhaFashion #ChhattisgarhStyle',
    review: 'अपना अनुभव WhatsApp पर भेजें',
    book: 'अपना लुक बुक करें',
    reviewMsg: 'नमस्ते Fashion Tailors! मैं अपनी सिलाई और फिटिंग का अनुभव शेयर करना चाहता हूँ।'
  } : {
    eyebrow: 'Stay connected',
    title: 'Tell us about your look',
    prompt: 'Coat Blazer or Sherwani? Pick your style and share it with friends.',
    coat: 'Coat Blazer',
    sherwani: 'Sherwani',
    copied: 'Hashtags copied',
    copy: 'Copy hashtags',
    tags: '#FashionTailorsKawardha #KawardhaFashion #ChhattisgarhStyle',
    review: 'Share feedback on WhatsApp',
    book: 'Book your look',
    reviewMsg: 'Hello Fashion Tailors! I would like to share my tailoring experience and feedback.'
  }

  function copyTags() {
    navigator.clipboard?.writeText(local.tags)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  function openWhatsAppReview() {
    const waUrl = `https://wa.me/917879474181?text=${encodeURIComponent(local.reviewMsg)}`
    window.open(waUrl, '_blank', 'noopener,noreferrer')
  }

  const profiles = [
    {
      label: 'Instagram',
      icon: Globe2,
      url: import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/explore/tags/fashiontailorskawardha/'
    },
    {
      label: 'Facebook',
      icon: Globe2,
      url: import.meta.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/search/top?q=Fashion%20Tailors%20Kawardha'
    },
    {
      label: 'YouTube',
      icon: Globe2,
      url: import.meta.env.VITE_YOUTUBE_URL || 'https://www.youtube.com/@youtubevideoabc'
    }
  ]

  return (
    <section className="social-engagement">
      <div className="social-copy">
        <span className="eyebrow">{local.eyebrow}</span>
        <h2>{local.title}</h2>
        <p>{local.prompt}</p>
        <div className="style-poll">
          <button
            type="button"
            className={`poll-option ${votedStyle === 'coat' ? 'voted' : ''}`}
            onClick={() => {
              setVotedStyle('coat')
              onBook?.('coat')
            }}
          >
            <span>✦</span>
            {local.coat}
            {votedStyle === 'coat' ? <Check size={14} color="#258b67" /> : <Heart size={14} />}
          </button>
          <button
            type="button"
            className={`poll-option ${votedStyle === 'sherwani' ? 'voted' : ''}`}
            onClick={() => {
              setVotedStyle('sherwani')
              onBook?.('sherwani')
            }}
          >
            <span>✦</span>
            {local.sherwani}
            {votedStyle === 'sherwani' ? <Check size={14} color="#258b67" /> : <Star size={14} />}
          </button>
        </div>
        <div className="social-profiles">
          {profiles.map(({ label, icon: Icon, url }) => (
            <a
              key={label}
              className="social-profile"
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
            >
              <Icon size={16} />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="social-actions">
        <button type="button" className="social-action" onClick={copyTags}>
          <Copy size={16} />
          {copied ? local.copied : local.copy}
        </button>
        <button type="button" className="social-action" onClick={openWhatsAppReview}>
          <MessageCircle size={16} />
          {local.review}
        </button>
        <button type="button" className="social-action primary-social" onClick={() => onBook?.()}>
          <Share2 size={16} />
          {local.book}
        </button>
      </div>
    </section>
  )
}
