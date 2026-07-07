const brands = [
  { name: 'Toyota', logo: '🚗' },
  { name: 'Honda', logo: '🚙' },
  { name: 'Mitsubishi', logo: '🚕' },
  { name: 'Suzuki', logo: '🚐' },
  { name: 'Daihatsu', logo: '🚌' },
  { name: 'Nissan', logo: '🚑' },
  { name: 'Isuzu', logo: '🚒' },
  { name: 'Wuling', logo: '🚓' },
  { name: 'Hyundai', logo: '🚔' },
  { name: 'Kia', logo: '🚖' },
]

const clientLogos = [
  { name: 'PT Maju Bersama', sector: 'Logistik' },
  { name: 'CV Abadi Jaya', sector: 'Konstruksi' },
  { name: 'Koperasi Sejahtera', sector: 'Transportasi' },
  { name: 'Yayasan Harapan', sector: 'Pendidikan' },
  { name: 'UD Sumber Rezeki', sector: 'Perdagangan' },
  { name: 'PT Berkah Mandiri', sector: 'Jasa' },
]

export default function Clients() {
  return (
    <section id="klien" className="py-20 lg:py-24" style={{ background: '#2E3440' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ background: 'rgba(235,203,139,0.1)', color: '#EBCB8B', border: '1px solid rgba(235,203,139,0.2)' }}
          >
            Klien Kami
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', color: '#ECEFF4' }}
          >
            Merek Kendaraan yang
            <span style={{ color: '#88C0D0' }}> Kami Tangani</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#D8DEE9' }}>
            Mekanik kami berpengalaman menangani berbagai merek kendaraan populer di Indonesia.
          </p>
        </div>

        {/* Car brands */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-16">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="rounded-xl p-4 flex flex-col items-center gap-2 border transition-all hover:border-[#88C0D0]/40 hover:-translate-y-0.5"
              style={{ background: '#3B4252', borderColor: 'rgba(136,192,208,0.1)' }}
            >
              <span className="text-3xl">{brand.logo}</span>
              <span className="text-sm font-semibold" style={{ color: '#D8DEE9' }}>{brand.name}</span>
            </div>
          ))}
        </div>

        {/* Corporate clients */}
        <div
          className="rounded-2xl p-8 lg:p-10"
          style={{ background: '#3B4252', border: '1px solid rgba(136,192,208,0.1)' }}
        >
          <h3
            className="text-xl font-bold text-center mb-8"
            style={{ fontFamily: 'Outfit, sans-serif', color: '#ECEFF4' }}
          >
            Dipercaya oleh Pelanggan Korporat
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="rounded-xl p-4 text-center border transition-all hover:border-[#A3BE8C]/40"
                style={{ background: '#2E3440', borderColor: 'rgba(136,192,208,0.08)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center text-lg font-black"
                  style={{ background: 'linear-gradient(135deg, #88C0D0, #5E81AC)', color: '#2E3440' }}
                >
                  {client.name[0]}
                </div>
                <p className="text-xs font-semibold leading-tight mb-1" style={{ color: '#ECEFF4' }}>
                  {client.name}
                </p>
                <p className="text-xs" style={{ color: '#A3BE8C' }}>{client.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
