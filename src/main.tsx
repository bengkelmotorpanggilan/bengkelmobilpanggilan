import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// SEO meta tags
const setMeta = (name: string, content: string, prop = false) => {
  const attr = prop ? 'property' : 'name'
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.content = content
}

document.title =
  'BengkelMobilPanggilan – Bengkel Mobil Panggilan Jakarta, Depok, Bekasi, Tangerang, Bogor | Mekanik Datang ke Lokasi Anda'

setMeta(
  'description',
  'BengkelMobilPanggilan – Layanan bengkel mobil panggilan profesional di Jakarta, Depok, Bekasi, Tangerang, dan Bogor. Mekanik berpengalaman datang ke lokasi Anda. Hubungi 0851-9955-8339. Kami Datang, Masalah Hilang!'
)
setMeta('keywords', 'bengkel mobil panggilan, bengkel panggilan jakarta, servis mobil panggilan, mekanik panggilan jakarta, bengkel mobil depok, bengkel mobil bekasi, bengkel mobil tangerang, bengkel mobil bogor, servis mobil di tempat, tune up panggilan')
setMeta('author', 'BengkelMobilPanggilan')
setMeta('robots', 'index, follow')
setMeta('geo.region', 'ID-JK')
setMeta('geo.placename', 'Kramat Jati, Jakarta Timur, DKI Jakarta')
setMeta('geo.position', '-6.265400;106.875100')
setMeta('ICBM', '-6.265400, 106.875100')

// Open Graph
setMeta('og:type', 'website', true)
setMeta('og:url', 'https://bengkelmobilpanggilan.web.id', true)
setMeta('og:title', 'BengkelMobilPanggilan – Kami Datang, Masalah Hilang!', true)
setMeta('og:description', 'Bengkel mobil panggilan profesional di Jakarta, Depok, Bekasi, Tangerang, Bogor. Mekanik datang ke lokasi Anda. Hubungi 0851-9955-8339.', true)
setMeta('og:locale', 'id_ID', true)
setMeta('og:site_name', 'BengkelMobilPanggilan', true)

// Twitter Card
setMeta('twitter:card', 'summary_large_image')
setMeta('twitter:site', '@montirmotor')
setMeta('twitter:title', 'BengkelMobilPanggilan – Kami Datang, Masalah Hilang!')
setMeta('twitter:description', 'Bengkel mobil panggilan profesional di Jabodetabek. Mekanik datang ke lokasi Anda.')

// Canonical
let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
if (!canonical) {
  canonical = document.createElement('link')
  canonical.rel = 'canonical'
  document.head.appendChild(canonical)
}
canonical.href = 'https://bengkelmobilpanggilan.web.id'

// Language
document.documentElement.lang = 'id'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
