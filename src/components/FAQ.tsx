import { useState } from 'react'

const faqs = [
  {
    q: 'Apa itu BengkelMobilPanggilan dan bagaimana cara kerjanya?',
    a: 'BengkelMobilPanggilan adalah layanan bengkel mobil keliling yang siap datang ke lokasi Anda. Cukup hubungi kami via WhatsApp atau telepon, informasikan kendala kendaraan dan lokasi Anda, dan mekanik kami akan segera datang dalam waktu singkat.',
  },
  {
    q: 'Wilayah mana saja yang dilayani BengkelMobilPanggilan?',
    a: 'Kami melayani seluruh wilayah Jabodetabek, meliputi Jakarta (Pusat, Utara, Selatan, Timur, Barat), Depok, Bekasi (kota dan kabupaten), Tangerang (kota dan Tangerang Selatan), serta Bogor (kota dan kabupaten).',
  },
  {
    q: 'Berapa lama waktu tunggu setelah saya menghubungi?',
    a: 'Dalam kondisi normal, mekanik kami dapat tiba di lokasi Anda dalam waktu 30–60 menit setelah konfirmasi order, tergantung lokasi dan kondisi lalu lintas. Kami selalu berusaha merespons dan datang secepat mungkin.',
  },
  {
    q: 'Apakah biaya servis lebih mahal dibanding bengkel konvensional?',
    a: 'Biaya kami kompetitif dan transparan. Memang ada biaya kunjungan, namun Anda tidak perlu mengeluarkan biaya untuk transportasi ke bengkel, tidak perlu menunggu lama, dan tidak perlu meninggalkan aktivitas Anda. Estimasi biaya diberikan sebelum pekerjaan dimulai.',
  },
  {
    q: 'Apakah ada garansi untuk setiap pekerjaan servis?',
    a: 'Ya! Setiap pekerjaan servis dari BengkelMobilPanggilan diberikan garansi. Garansi mencakup garansi tenaga kerja dan suku cadang yang kami pasang. Detail garansi akan diinformasikan mekanik sebelum pekerjaan dimulai.',
  },
  {
    q: 'Suku cadang apa yang digunakan? Apakah ori atau KW?',
    a: 'Kami menggunakan suku cadang berkualitas, mulai dari ori/genuine parts hingga aftermarket terpercaya sesuai kebutuhan dan budget pelanggan. Kami selalu transparan mengenai pilihan suku cadang dan harganya sebelum dipasang.',
  },
  {
    q: 'Bagaimana cara pembayaran layanan BengkelMobilPanggilan?',
    a: 'Kami menerima berbagai metode pembayaran: tunai, transfer bank, dan e-wallet (GoPay, OVO, DANA, ShopeePay). Pembayaran dilakukan setelah pekerjaan selesai dan Anda puas dengan hasilnya.',
  },
  {
    q: 'Apakah bisa servis di hari Sabtu, Minggu, atau hari libur?',
    a: 'Tentu bisa! BengkelMobilPanggilan beroperasi 7 hari seminggu termasuk hari libur nasional, dari pukul 07.00 hingga 21.00 WIB. Kami siap membantu kapanpun Anda membutuhkan.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 lg:py-28" style={{ background: '#3B4252' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ background: 'rgba(136,192,208,0.1)', color: '#88C0D0', border: '1px solid rgba(136,192,208,0.2)' }}
          >
            FAQ
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', color: '#ECEFF4' }}
          >
            Pertanyaan yang Sering
            <span style={{ color: '#88C0D0' }}> Ditanyakan</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#D8DEE9' }}>
            Punya pertanyaan lain? Jangan ragu hubungi kami langsung.
          </p>
        </div>

        {/* Structured FAQ for AEO/SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border overflow-hidden transition-all"
              style={{
                background: '#2E3440',
                borderColor: open === i ? 'rgba(136,192,208,0.3)' : 'rgba(136,192,208,0.1)',
              }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span
                  className="font-semibold text-sm sm:text-base"
                  style={{ color: '#ECEFF4', fontFamily: 'Outfit, sans-serif' }}
                >
                  {faq.q}
                </span>
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: open === i ? 'rgba(136,192,208,0.2)' : 'rgba(136,192,208,0.08)',
                    color: '#88C0D0',
                    transform: open === i ? 'rotate(45deg)' : 'none',
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: '#D8DEE9' }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm mb-4" style={{ color: '#D8DEE9' }}>
            Masih punya pertanyaan lain?
          </p>
          <a
            href="https://wa.me/6285199558339?text=Halo,%20saya%20punya%20pertanyaan%20tentang%20BengkelMobilPanggilan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #A3BE8C, #88C0D0)', color: '#2E3440' }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
