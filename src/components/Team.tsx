const team = [
  {
    name: 'Hendra Wijaya',
    role: 'Kepala Mekanik & Pendiri',
    exp: '10+ tahun',
    specialties: ['Mesin', 'Diagnosa', 'Overhaul'],
    bio: 'Berpengalaman lebih dari 10 tahun di industri otomotif. Tersertifikasi AHM dan berpengalaman menangani berbagai merek kendaraan.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format',
    initial: 'HW',
    color: '#88C0D0',
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Mekanik Senior — AC & Kelistrikan',
    exp: '8 tahun',
    specialties: ['AC Mobil', 'Kelistrikan', 'OBD Scan'],
    bio: 'Spesialis sistem AC dan kelistrikan kendaraan. Berpengalaman menangani berbagai masalah kelistrikan modern dengan alat diagnostik terkini.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&auto=format',
    initial: 'AF',
    color: '#A3BE8C',
  },
  {
    name: 'Dedi Kurniawan',
    role: 'Mekanik — Kaki-kaki & Rem',
    exp: '6 tahun',
    specialties: ['Suspensi', 'Rem', 'Balancing'],
    bio: 'Ahli dalam sistem suspensi, pengereman, dan kaki-kaki kendaraan. Memastikan keselamatan berkendara dengan standar tertinggi.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&auto=format',
    initial: 'DK',
    color: '#EBCB8B',
  },
  {
    name: 'Rina Saptari',
    role: 'Customer Service & Koordinator',
    exp: '5 tahun',
    specialties: ['Koordinasi', 'Customer Care', 'Scheduling'],
    bio: 'Memastikan setiap pelanggan mendapatkan pelayanan terbaik. Koordinator utama yang menjadwalkan dan memantau setiap pekerjaan mekanik.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&auto=format',
    initial: 'RS',
    color: '#B48EAD',
  },
]

export default function Team() {
  return (
    <section id="tim" className="py-20 lg:py-28" style={{ background: '#2E3440' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ background: 'rgba(180,142,173,0.1)', color: '#B48EAD', border: '1px solid rgba(180,142,173,0.2)' }}
          >
            Tim Kami
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', color: '#ECEFF4' }}
          >
            Mekanik Profesional
            <span style={{ color: '#88C0D0' }}> Siap Melayani</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#D8DEE9' }}>
            Tim kami terdiri dari mekanik bersertifikat dengan pengalaman bertahun-tahun yang siap memberikan pelayanan terbaik.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <article
              key={member.name}
              className="group rounded-2xl overflow-hidden border transition-all hover:-translate-y-1"
              style={{ background: '#3B4252', borderColor: 'rgba(136,192,208,0.1)' }}
            >
              {/* Photo */}
              <div className="relative h-52 overflow-hidden" style={{ background: '#434C5E' }}>
                <img
                  src={member.photo}
                  alt={`${member.name} - ${member.role} BengkelMobilPanggilan`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'brightness(0.85) saturate(0.8)' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(46,52,64,0.7) 0%, transparent 60%)' }}
                />
                <div
                  className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-semibold"
                  style={{ background: `${member.color}25`, color: member.color, border: `1px solid ${member.color}40` }}
                >
                  {member.exp}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3
                  className="text-base font-bold mb-0.5"
                  style={{ fontFamily: 'Outfit, sans-serif', color: '#ECEFF4' }}
                >
                  {member.name}
                </h3>
                <p className="text-xs font-medium mb-3" style={{ color: member.color }}>
                  {member.role}
                </p>
                <p className="text-xs leading-relaxed mb-4" style={{ color: '#D8DEE9' }}>
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {member.specialties.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded-full text-xs"
                      style={{ background: `${member.color}12`, color: member.color }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
