export default function Contact() {
  return (
    <section id="kontak" className="py-20 lg:py-28" style={{ background: '#2E3440' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ background: 'rgba(136,192,208,0.1)', color: '#88C0D0', border: '1px solid rgba(136,192,208,0.2)' }}
          >
            Kontak Kami
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', color: '#ECEFF4' }}
          >
            Hubungi Kami
            <span style={{ color: '#88C0D0' }}> Sekarang</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#D8DEE9' }}>
            Siap membantu Anda 7 hari seminggu. Kami akan merespons secepat mungkin.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cards */}
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ),
                label: 'WhatsApp / Telepon',
                value: '0851-9955-8339',
                href: 'https://wa.me/6285199558339',
                color: '#A3BE8C',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                label: 'Alamat Bengkel',
                value: 'Jl. Al-Bariyah, Kampung Tengah, Kramat Jati, Jakarta Timur, DKI Jakarta',
                href: 'https://maps.google.com/?q=Kramat+Jati+Jakarta+Timur',
                color: '#88C0D0',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                label: 'Jam Operasional',
                value: 'Setiap Hari 07.00 – 21.00 WIB',
                href: null,
                color: '#EBCB8B',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
                label: 'Website',
                value: 'bengkelmobilpanggilan.web.id',
                href: 'https://bengkelmobilpanggilan.web.id',
                color: '#B48EAD',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-5 flex items-start gap-4 border"
                style={{ background: '#3B4252', borderColor: 'rgba(136,192,208,0.1)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}15`, color: item.color }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-medium mb-0.5" style={{ color: '#A3BE8C' }}>{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold hover:underline"
                      style={{ color: '#ECEFF4' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold" style={{ color: '#ECEFF4' }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Coverage areas */}
            <div
              className="rounded-xl p-5 border"
              style={{ background: '#3B4252', borderColor: 'rgba(136,192,208,0.1)' }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#88C0D0' }}>
                Area Layanan
              </p>
              <div className="flex flex-wrap gap-2">
                {['Jakarta Pusat', 'Jakarta Utara', 'Jakarta Selatan', 'Jakarta Timur', 'Jakarta Barat', 'Depok', 'Bekasi', 'Tangerang', 'Tangerang Selatan', 'Bogor'].map((area) => (
                  <span
                    key={area}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium"
                    style={{ background: 'rgba(136,192,208,0.08)', color: '#D8DEE9', border: '1px solid rgba(136,192,208,0.15)' }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Map + CTA */}
          <div className="lg:col-span-3 space-y-6">
            {/* Google Maps embed */}
            <div
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: 'rgba(136,192,208,0.15)', height: '300px' }}
            >
              <iframe
                title="Lokasi BengkelMobilPanggilan - Kramat Jati, Jakarta Timur"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d106.875!3d-6.265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c70e8a7a5ef%3A0x1!2sKramat+Jati%2C+Jakarta+Timur!5e0!3m2!1sid!2sid!4v1234567890!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.85) hue-rotate(180deg) brightness(0.9)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* WhatsApp CTA box */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{
                background: 'linear-gradient(135deg, #3B4252, #434C5E)',
                border: '1px solid rgba(136,192,208,0.15)',
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: 'linear-gradient(135deg, #A3BE8C, #88C0D0)' }}
              >
                <svg className="w-8 h-8" style={{ color: '#2E3440' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3
                className="text-2xl font-black mb-2"
                style={{ fontFamily: 'Outfit, sans-serif', color: '#ECEFF4' }}
              >
                Butuh Bantuan Sekarang?
              </h3>
              <p className="text-sm mb-6" style={{ color: '#D8DEE9' }}>
                Hubungi kami via WhatsApp dan mekanik kami siap datang ke lokasi Anda dalam waktu singkat.
              </p>
              <a
                href="https://wa.me/6285199558339?text=Halo%20BengkelMobilPanggilan,%20saya%20membutuhkan%20bantuan%20darurat%20untuk%20kendaraan%20saya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #A3BE8C, #88C0D0)',
                  color: '#2E3440',
                  boxShadow: '0 8px 32px rgba(136,192,208,0.2)',
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat WhatsApp 0851-9955-8339
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
