const services = [
  {
    icon: '🔧',
    title: 'Tune Up & Servis Rutin',
    desc: 'Perawatan berkala meliputi ganti oli, filter, busi, dan pemeriksaan menyeluruh agar performa mobil tetap optimal.',
    tags: ['Ganti Oli', 'Filter', 'Busi'],
    color: '#88C0D0',
  },
  {
    icon: '🔋',
    title: 'Servis Aki & Kelistrikan',
    desc: 'Pengecekan dan penggantian aki, troubleshooting sistem kelistrikan, serta perbaikan dinamo ampere.',
    tags: ['Aki', 'Kelistrikan', 'Dinamo'],
    color: '#EBCB8B',
  },
  {
    icon: '🛞',
    title: 'Servis Rem & Suspensi',
    desc: 'Perbaikan sistem pengereman, ganti kampas rem, serta perbaikan shockbreaker dan kaki-kaki kendaraan.',
    tags: ['Kampas Rem', 'Shockbreaker', 'Kaki-kaki'],
    color: '#A3BE8C',
  },
  {
    icon: '❄️',
    title: 'Servis AC Mobil',
    desc: 'Pengisian freon, pembersihan evaporator, perbaikan kompresor AC agar kabin tetap sejuk dan nyaman.',
    tags: ['Freon', 'Evaporator', 'Kompresor'],
    color: '#8FBCBB',
  },
  {
    icon: '🚗',
    title: 'Servis Mesin & Overhaul',
    desc: 'Perbaikan mesin ringan hingga berat, tune up besar, serta overhaul untuk mengembalikan performa mesin.',
    tags: ['Tune Up Besar', 'Overhaul', 'Mesin'],
    color: '#B48EAD',
  },
  {
    icon: '🔍',
    title: 'Diagnosa & Inspeksi',
    desc: 'Pengecekan komprehensif menggunakan alat scan OBD untuk mendeteksi masalah tersembunyi pada kendaraan Anda.',
    tags: ['OBD Scan', 'Inspeksi', 'Diagnosa'],
    color: '#D08770',
  },
]

export default function Services() {
  return (
    <section id="layanan" className="py-20 lg:py-28" style={{ background: '#2E3440' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ background: 'rgba(136,192,208,0.1)', color: '#88C0D0', border: '1px solid rgba(136,192,208,0.2)' }}
          >
            Layanan Kami
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', color: '#ECEFF4' }}
          >
            Semua Masalah Mobil,
            <br />
            <span style={{ color: '#88C0D0' }}>Kami Siap Selesaikan</span>
          </h2>
          <p className="text-base lg:text-lg max-w-2xl mx-auto" style={{ color: '#D8DEE9' }}>
            Mekanik bersertifikat dengan pengalaman bertahun-tahun siap menangani berbagai masalah kendaraan Anda langsung di lokasi.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <article
              key={svc.title}
              className="group rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-default"
              style={{
                background: '#3B4252',
                borderColor: 'rgba(136,192,208,0.1)',
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform group-hover:scale-110"
                style={{ background: `${svc.color}18`, border: `1px solid ${svc.color}30` }}
              >
                {svc.icon}
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ fontFamily: 'Outfit, sans-serif', color: '#ECEFF4' }}
              >
                {svc.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#D8DEE9' }}>
                {svc.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                    style={{ background: `${svc.color}15`, color: svc.color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-sm" style={{ color: '#D8DEE9' }}>
            Tidak menemukan layanan yang Anda butuhkan? Hubungi kami langsung.
          </p>
          <a
            href="https://wa.me/6285199558339?text=Halo,%20saya%20ingin%20menanyakan%20tentang%20layanan%20bengkel%20mobil%20panggilan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border-2 transition-all hover:bg-[#3B4252]"
            style={{ borderColor: 'rgba(136,192,208,0.4)', color: '#88C0D0' }}
          >
            Konsultasi Gratis via WhatsApp →
          </a>
        </div>
      </div>
    </section>
  )
}
