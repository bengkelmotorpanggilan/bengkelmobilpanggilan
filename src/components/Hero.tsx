export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #2E3440 0%, #3B4252 50%, #434C5E 100%)' }}
    >
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #88C0D0, transparent)' }}
        />
        <div
          className="absolute bottom-0 -left-24 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #5E81AC, transparent)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #81A1C1, transparent)' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(136,192,208,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(136,192,208,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 border"
              style={{ borderColor: 'rgba(136,192,208,0.3)', color: '#88C0D0', background: 'rgba(136,192,208,0.08)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3BE8C] animate-pulse" />
              Tersedia 7 Hari Seminggu · 07.00–21.00
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4"
              style={{ fontFamily: 'Outfit, sans-serif', color: '#ECEFF4' }}
            >
              Bengkel Mobil
              <br />
              <span style={{ color: '#88C0D0' }}>Panggilan</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: '#A3BE8C' }}>
                Profesional
              </span>
            </h1>

            {/* Tagline */}
            <p
              className="text-xl sm:text-2xl font-semibold mb-4 italic"
              style={{ color: '#EBCB8B', fontFamily: 'Outfit, sans-serif' }}
            >
              "Kami Datang, Masalah Hilang!"
            </p>

            <p className="text-base sm:text-lg mb-8 leading-relaxed" style={{ color: '#D8DEE9' }}>
              Mekanik profesional dan berpengalaman siap datang ke lokasi Anda di{' '}
              <strong style={{ color: '#88C0D0' }}>Jakarta, Depok, Bekasi, Tangerang, dan Bogor</strong>.
              Tidak perlu repot ke bengkel — bengkelnya yang datang ke Anda!
            </p>

            {/* Coverage areas */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Jakarta', 'Depok', 'Bekasi', 'Tangerang', 'Bogor'].map((city) => (
                <span
                  key={city}
                  className="px-3 py-1 rounded-full text-sm font-medium border"
                  style={{
                    borderColor: 'rgba(163,190,140,0.4)',
                    color: '#A3BE8C',
                    background: 'rgba(163,190,140,0.08)',
                  }}
                >
                  📍 {city}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6285199558339?text=Halo%20BengkelMobilPanggilan,%20saya%20membutuhkan%20bantuan%20servis%20mobil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #A3BE8C, #88C0D0)',
                  color: '#2E3440',
                  boxShadow: '0 8px 32px rgba(136,192,208,0.25)',
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Panggil Mekanik Sekarang
              </a>
              <a
                href="#layanan"
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-base border-2 transition-all hover:bg-[#3B4252]"
                style={{ borderColor: 'rgba(136,192,208,0.4)', color: '#88C0D0' }}
              >
                Lihat Layanan
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-6 border-t" style={{ borderColor: 'rgba(136,192,208,0.12)' }}>
              {[
                { icon: '✅', label: '500+ Pelanggan Puas' },
                { icon: '⚡', label: 'Respon < 60 Menit' },
                { icon: '🛡️', label: 'Bergaransi' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="text-base">{item.icon}</span>
                  <span className="text-sm font-medium" style={{ color: '#D8DEE9' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Hero image */}
          <div className="relative hidden lg:block">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 32px 64px rgba(0,0,0,0.4), 0 0 0 1px rgba(136,192,208,0.15)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=700&h=520&fit=crop&auto=format"
                alt="Mekanik profesional BengkelMobilPanggilan sedang memperbaiki mobil di lokasi pelanggan"
                className="w-full h-[480px] object-cover"
                style={{ filter: 'brightness(0.85) saturate(0.9)' }}
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(46,52,64,0.6) 0%, transparent 60%)' }}
              />
              {/* Floating card */}
              <div
                className="absolute bottom-6 left-6 right-6 rounded-xl p-4 flex items-center gap-4"
                style={{
                  background: 'rgba(46,52,64,0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(136,192,208,0.2)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #88C0D0, #5E81AC)' }}
                >
                  <svg className="w-6 h-6" style={{ color: '#2E3440' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: '#ECEFF4' }}>Layanan Area Jabodetabek</p>
                  <p className="text-xs" style={{ color: '#A3BE8C' }}>Mekanik siap datang ke lokasi Anda</p>
                </div>
              </div>
            </div>

            {/* Rating card floating */}
            <div
              className="absolute -top-6 -right-6 rounded-xl p-4"
              style={{
                background: 'rgba(59,66,82,0.95)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(163,190,140,0.25)',
                boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
              }}
            >
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4" style={{ color: '#EBCB8B' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl font-black" style={{ color: '#ECEFF4', fontFamily: 'Outfit, sans-serif' }}>4.9/5</p>
              <p className="text-xs" style={{ color: '#D8DEE9' }}>Rating Pelanggan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs tracking-widest uppercase" style={{ color: '#4C566A' }}>Scroll</span>
        <svg className="w-5 h-5" style={{ color: '#4C566A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
