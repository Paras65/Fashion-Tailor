import { useEffect, useState } from 'react'
import { Download, Share, Smartphone, X } from 'lucide-react'
import logoImg from '../assets/logo.jpg'
import './InstallPrompt.css'

const copy = {
  hi: {
    title: 'फ़ैशन टेलर्स ऐप इंस्टॉल करें',
    subtitle: '1-टैप में आसान बुकिंग, नया कैटलॉग व ऑफ़लाइन उपयोग के लिए होम स्क्रीन पर जोड़ें।',
    installBtn: 'ऐप इंस्टॉल करें',
    dismissBtn: 'बाद में',
    iosHint: 'Safari में Share बटन (⎙) दबाएं, फिर "Add to Home Screen" चुनें।'
  },
  cg: {
    title: 'फ़ैशन टेलर्स ऐप इंस्टॉल करव',
    subtitle: '1-टैप मं आसान बुकिंग अउ नवा कैटलॉग देखे बर अपन मोबाइल मं जोड़व।',
    installBtn: 'ऐप इंस्टॉल करव',
    dismissBtn: 'फेर कभी',
    iosHint: 'Safari मं Share बटन (⎙) दबावहू, फेर "Add to Home Screen" चुनहू।'
  },
  en: {
    title: 'Install Fashion Tailors App',
    subtitle: 'Add to your home screen for 1-tap bookings, full catalog, and offline access.',
    installBtn: 'Install App',
    dismissBtn: 'Not Now',
    iosHint: 'Tap Share button (⎙) in Safari, then select "Add to Home Screen".'
  }
}

export default function InstallPrompt({ language = 'hi' }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isIOS] = useState(() => {
    if (typeof window === 'undefined') return false
    const ua = window.navigator.userAgent.toLowerCase()
    return /iphone|ipad|ipod/.test(ua) && !window.MSStream
  })
  const [showIosGuide, setShowIosGuide] = useState(false)

  const local = copy[language] || copy.hi

  useEffect(() => {
    // Check if app is already running in standalone (installed) mode
    const isStandalone =
      window.matchMedia?.('(display-mode: standalone)')?.matches ||
      window.navigator.standalone === true ||
      document.referrer.includes('android-app://')

    if (isStandalone) {
      return
    }

    // Check if dismissed recently (within 24 hours)
    const dismissedAt = localStorage.getItem('pwa_install_dismissed_at')
    if (dismissedAt && Date.now() - Number(dismissedAt) < 24 * 60 * 60 * 1000) {
      return
    }

    // Listen for beforeinstallprompt on Chromium/Android/Desktop
    const handleBeforeInstall = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowPrompt(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstall)

    // On iOS or devices where beforeinstallprompt isn't emitted immediately,
    // show a polite prompt after a short delay if not installed
    const timer = setTimeout(() => {
      if (!isStandalone) {
        setShowPrompt(true)
      }
    }, 2500)

    // Hide if successfully installed
    const handleAppInstalled = () => {
      setShowPrompt(false)
      setDeferredPrompt(null)
    }
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall)
      window.removeEventListener('appinstalled', handleAppInstalled)
      clearTimeout(timer)
    }
  }, [])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        setShowPrompt(false)
      }
      setDeferredPrompt(null)
    } else if (isIOS) {
      setShowIosGuide(!showIosGuide)
    } else {
      // Fallback: prompt user
      setShowIosGuide(!showIosGuide)
    }
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    localStorage.setItem('pwa_install_dismissed_at', String(Date.now()))
  }

  if (!showPrompt) {
    return null
  }

  return (
    <aside className="pwa-install-banner" aria-label="Install Fashion Tailors App">
      <div className="pwa-install-content">
        <div className="pwa-install-logo-wrap">
          <img src={logoImg} alt="Fashion Tailors" className="pwa-install-logo" />
          <div className="pwa-install-badge">
            <Smartphone size={12} />
          </div>
        </div>

        <div className="pwa-install-text">
          <div className="pwa-install-header">
            <strong>{local.title}</strong>
            <button
              type="button"
              className="pwa-close-btn"
              onClick={handleDismiss}
              aria-label={local.dismissBtn}
            >
              <X size={16} />
            </button>
          </div>
          <p>{local.subtitle}</p>

          {showIosGuide && (
            <div className="pwa-ios-guide">
              <Share size={14} />
              <span>{local.iosHint}</span>
            </div>
          )}

          <div className="pwa-install-actions">
            <button
              type="button"
              className="pwa-install-btn"
              onClick={handleInstallClick}
            >
              <Download size={15} />
              <span>{local.installBtn}</span>
            </button>
            <button
              type="button"
              className="pwa-dismiss-btn"
              onClick={handleDismiss}
            >
              {local.dismissBtn}
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
