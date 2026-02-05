import ContactSection from '@/components/corporate/ContactSection/ContactSection'
import ServiceCards from '@/components/corporate/ServiceCard/ServiceCard'
import Navbar from '@/components/layout/Navbar/Navbar'
import ServicesMainSection from '@/components/our-services/ServicesMainSection/ServicesMainSection'
import PageHero from '@/components/shared/PageHero/PageHero'

export default function ServicesPage () {
  return (
    <>
      <Navbar />
      <PageHero
        title='Our Services'
        subtitle='How we can help you'
        backgroundImage='/images/shared/services1.avif'
        showShareIcons={true}
      />

      <ServicesMainSection />
      <div style={{ marginTop: '7rem' }}>
        <ServiceCards />
      </div>
      <ContactSection />
    </>
  )
}
