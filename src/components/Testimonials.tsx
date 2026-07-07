const testimonials = [
  {
    name: 'Budi Santoso',
    location: 'Cibubur, Jakarta Timur',
    rating: 5,
    text: 'Luar biasa! Mobil Avanza saya mogok tiba-tiba di pagi hari saat mau berangkat kerja. Saya hubungi BengkelMobilPanggilan dan dalam 25 menit mekanik sudah datang. Masalah pada sistem starter langsung diatasi. Sangat profesional!',
    vehicle: 'Toyota Avanza 2019',
    service: 'Servis Kelistrikan',
    avatar: 'BS',
    color: '#88C0D0',
  },
  {
    name: 'Dewi Rahayu',
    location: 'Depok, Jawa Barat',
    rating: 5,
    text: 'Pelayanannya sangat memuaskan. AC mobil saya sudah lama tidak dingin, sudah coba ke bengkel lain tapi tetap saja. Alhamdulillah setelah diservis BengkelMobilPanggilan, AC kembali sejuk. Harga juga sangat terjangkau dan transparan.',
    vehicle: 'Honda HRV 2021',
    service: 'Servis AC Mobil',
    avatar: 'DR',
    color: '#A3BE8C',
  },
  {
    name: 'Hendri Kurniawan',
    location: 'Bekasi Selatan',
    rating: 5,
    text: 'Mekaniknya ramah dan berpengalaman. Saya minta tune up untuk Xpenia saya sebelum mudik. Semua diperiksa dengan teliti dan dikerjakan dengan cepat. Mudik lancar tanpa gangguan. Terima kasih BengkelMobilPanggilan!',
    vehicle: 'Daihatsu Xenia 2020',
    service: 'Tune Up & Servis Rutin',
    avatar: 'HK',
    color: '#EBCB8B',
  },
  {
    name: 'Siti Aisyah',
    location: 'Tangerang Selatan',
    rating: 5,
    text: 'Sangat membantu! Rem mobil saya bunyi aneh dan saya takut berkendara. Mekanik datang cepat, langsung diagnosa dan ganti kampas rem di tempat. Sekarang rem sudah normal dan aman. Recommended banget untuk ibu-ibu!',
    vehicle: 'Suzuki Ertiga 2018',
    service: 'Servis Rem',
    avatar: 'SA',
    color: '#B48EAD',
  },
  {
    name: 'Rizky Firmansyah',
    location: 'Bogor Kota',
    rating: 5,
    text: 'Keren banget layanannya! Di Bogor susah cari bengkel yang mau ke rumah. BengkelMobilPanggilan ini solusi banget. Ganti oli dan filter tepat waktu, mekanik juga kasih saran perawatan yang berguna. Pasti balik lagi!',
    vehicle: 'Mitsubishi Pajero 2022',
    service: 'Ganti Oli & Filter',
    avatar: 'RF',
    color: '#D08770',
  },
  {
    name: 'Agus Prasetyo',
    location: 'Jakarta Selatan',
    rating: 5,
    text: 'Harga kompetitif, kerja rapi, datang tepat waktu. Saya sudah 3x pakai jasa BengkelMobilPanggilan untuk berbagai kebutuhan. Setiap kali selalu puas dengan hasilnya. Ini bengkel panggilan terbaik di Jakarta!',
    vehicle: 'Toyota Innova 2020',
    service: 'Servis Mesin',
    avatar: 'AP',
    color: '#8FBCBB',
  },
]

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-20 lg:py-28" style={{ background: '#3B4252' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ background: 'rgba(163,190,140,0.1)', color: '#A3BE8C', border: '1px solid rgba(163,190,140,0.2)' }}
          >
            Testimoni
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', color: '#ECEFF4' }}
          >
            Apa Kata
            <span style={{ color: '#88C0D0' }}> Pelanggan Kami?</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#D8DEE9' }}>
            Kepuasan pelanggan adalah prioritas utama kami. Berikut pengalaman nyata dari pelanggan setia kami.
          </p>

          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 mt-6 px-5 py-3 rounded-xl"
            style={{ background: '#2E3440', border: '1px solid rgba(235,203,139,0.2)' }}>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(s => (
                <svg key={s} className="w-5 h-5" style={{ color: '#EBCB8B' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-xl font-black" style={{ color: '#ECEFF4', fontFamily: 'Outfit, sans-serif' }}>4.9</span>
            <span className="text-sm" style={{ color: '#D8DEE9' }}>dari 500+ ulasan</span>
          </div>
        </div>

        {/* Testimonial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl p-6 flex flex-col gap-4 border hover:border-[#88C0D0]/30 transition-all hover:-translate-y-0.5"
              style={{ background: '#2E3440', borderColor: 'rgba(136,192,208,0.1)' }}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4" style={{ color: '#EBCB8B' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#D8DEE9' }}>
                "{t.text}"
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: `${t.color}15`, color: t.color }}>
                  {t.service}
                </span>
                <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: 'rgba(136,192,208,0.08)', color: '#88C0D0' }}>
                  {t.vehicle}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: 'rgba(136,192,208,0.1)' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: `${t.color}25`, color: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#ECEFF4' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: '#A3BE8C' }}>📍 {t.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
