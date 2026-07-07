import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#layanan', label: 'Layanan' },
  { href: '#tentang', label: 'Tentang Kami' },
  { href: '#testimoni', label: 'Testimoni' },
  { href: '#tim', label: 'Tim Kami' },
  { href: '#faq', label: 'FAQ' },
  { href: '#kontak', label: 'Kontak' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(46,52,64,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(136,192,208,0.15)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="https://montirmotor.com" className="flex items-center gap-2 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm"
              style={{ background: 'linear-gradient(135deg, #88C0D0, #5E81AC)' }}
            >
              <span style={{ color: '#2E3440' }}>BM</span>
            </div>
            <div className="leading-tight">
              <span className="font-bold text-base" style={{ fontFamily: 'Outfit, sans-serif', color: '#ECEFF4' }}>
                Bengkel<span style={{ color: '#88C0D0' }}>Mobil</span>
              </span>
              <br />
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#A3BE8C', fontFamily: 'Outfit, sans-serif' }}>
                Panggilan
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-[#88C0D0]"
                style={{ color: '#D8DEE9' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="https://wa.me/6285199558339?text=Halo,%20saya%20ingin%20menggunakan%20jasa%20bengkel%20mobil%20panggilan"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #A3BE8C, #88C0D0)',
              color: '#2E3440',
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hubungi Kami
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg"
            style={{ color: '#D8DEE9' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="lg:hidden pb-4 border-t"
            style={{ borderColor: 'rgba(136,192,208,0.15)' }}
          >
            <nav className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-[#3B4252]"
                  style={{ color: '#D8DEE9' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/6285199558339?text=Halo,%20saya%20ingin%20menggunakan%20jasa%20bengkel%20mobil%20panggilan"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 mx-3 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
                style={{ background: 'linear-gradient(135deg, #A3BE8C, #88C0D0)', color: '#2E3440' }}
              >
                Hubungi via WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
