import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import WhatsAppCTA from './components/WhatsAppCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* SEO Structured Data - LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AutoRepair',
            name: 'BengkelMobilPanggilan',
            url: 'https://bengkelmobilpanggilan.web.id',
            telephone: '+6285199558339',
            description:
              'Bengkel mobil panggilan profesional di Jakarta, Depok, Bekasi, Tangerang, dan Bogor. Mekanik berpengalaman datang ke lokasi Anda.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Jl. Al-Bariyah, Kampung Tengah, Kramat Jati',
              addressLocality: 'Jakarta Timur',
              addressRegion: 'DKI Jakarta',
              postalCode: '13510',
              addressCountry: 'ID',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: -6.2654,
              longitude: 106.8751,
            },
            areaServed: [
              { '@type': 'City', name: 'Jakarta' },
              { '@type': 'City', name: 'Depok' },
              { '@type': 'City', name: 'Bekasi' },
              { '@type': 'City', name: 'Tangerang' },
              { '@type': 'City', name: 'Bogor' },
            ],
            openingHours: 'Mo-Su 07:00-21:00',
            priceRange: '$$',
            sameAs: [
              'https://www.instagram.com/montirmotorcom',
              'https://twitter.com/montirmotor',
              'https://www.facebook.com/profile.php?id=61577896539396',
              'https://linkedin.com/in/montirmotor',
              'https://www.youtube.com/@montirmotor-com',
              'https://www.tiktok.com/@montirmotor.com',
              'https://www.pinterest.com/bengkelmotorpanggilan',
            ],
          }),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Clients />
        <Testimonials />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  )
}
