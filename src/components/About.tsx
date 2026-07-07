const stats = [
  { value: '500+', label: 'Pelanggan Puas', icon: '👥' },
  { value: '5+', label: 'Tahun Pengalaman', icon: '🏆' },
  { value: '30 Menit', label: 'Respon Tercepat', icon: '⚡' },
  { value: '100%', label: 'Bergaransi', icon: '🛡️' },
]

export default function About() {
  return (
    <section id="tentang" className="py-20 lg:py-28" style={{ background: '#3B4252' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 32px 64px rgba(0,0,0,0.35)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=620&h=500&fit=crop&auto=format"
                alt="Tim mekanik profesional BengkelMobilPanggilan Jakarta Timur"
                className="w-full h-[440px] object-cover"
                style={{ filter: 'brightness(0.82) saturate(0.85)' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(46,52,64,0.5) 0%, transparent 60%)' }}
              />
            </div>

            {/* Floating experience card */}
            <div
              className="absolute -bottom-6 -right-6 rounded-2xl p-5"
              style={{
                background: '#2E3440',
                border: '1px solid rgba(136,192,208,0.2)',
                boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
              }}
            >
              <p className="text-4xl font-black" style={{ color: '#88C0D0', fontFamily: 'Outfit, sans-serif' }}>5+</p>
              <p className="text-sm font-medium" style={{ color: '#D8DEE9' }}>Tahun Pengalaman</p>
              <p className="text-xs" style={{ color: '#A3BE8C' }}>Melayani Jabodetabek</p>
            </div>

            {/* Location badge */}
            <div
              className="absolute -top-4 -left-4 rounded-xl px-4 py-2.5 flex items-center gap-2"
              style={{
                background: 'rgba(59,66,82,0.95)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(163,190,140,0.25)',
              }}
            >
              <span className="text-lg">📍</span>
              <div>
                <p className="text-xs font-bold" style={{ color: '#ECEFF4' }}>Kramat Jati, Jakarta Timur</p>
                <p className="text-xs" style={{ color: '#A3BE8C' }}>Jl. Al-Bariyah, Kampung Tengah</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(163,190,140,0.1)', color: '#A3BE8C', border: '1px solid rgba(163,190,140,0.2)' }}
            >
              Tentang Kami
            </span>

            <h2
              className="text-3xl sm:text-4xl font-black mb-6 leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif', color: '#ECEFF4' }}
            >
              Solusi Servis Mobil
              <br />
              <span style={{ color: '#88C0D0' }}>Tanpa Repot ke Bengkel</span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-base leading-relaxed" style={{ color: '#D8DEE9' }}>
                <strong style={{ color: '#88C0D0' }}>BengkelMobilPanggilan</strong> adalah layanan bengkel mobil keliling yang hadir untuk memudahkan
                Anda dalam merawat dan memperbaiki kendaraan tanpa harus meninggalkan rumah atau kantor.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#D8DEE9' }}>
                Berlokasi di <strong style={{ color: '#ECEFF4' }}>Jl. Al-Bariyah, Kampung Tengah, Kramat Jati, Jakarta Timur</strong>,
                kami melayani seluruh area Jabodetabek dengan mekanik bersertifikat dan peralatan lengkap.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#D8DEE9' }}>
                Dengan pengalaman lebih dari 5 tahun, kami telah melayani ratusan pelanggan dari berbagai
                wilayah Jakarta, Depok, Bekasi, Tangerang, dan Bogor dengan tingkat kepuasan pelanggan yang tinggi.
              </p>
            </div>

            {/* Key points */}
            <ul className="space-y-3 mb-8">
              {[
                'Mekanik bersertifikat dan berpengalaman',
                'Peralatan diagnostik modern (OBD Scanner)',
                'Harga transparan tanpa biaya tersembunyi',
                'Garansi pekerjaan dan suku cadang',
                'Respon cepat, datang ke lokasi Anda',
              ].map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs"
                    style={{ background: 'rgba(163,190,140,0.15)', color: '#A3BE8C' }}
                  >
                    ✓
                  </span>
                  <span className="text-sm" style={{ color: '#D8DEE9' }}>{point}</span>
                </li>
              ))}
            </ul>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-4 text-center"
                  style={{ background: '#2E3440', border: '1px solid rgba(136,192,208,0.1)' }}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <p className="text-lg font-black" style={{ color: '#88C0D0', fontFamily: 'Outfit, sans-serif' }}>
                    {stat.value}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: '#D8DEE9' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
