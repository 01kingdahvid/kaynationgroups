import ContactPage from '@/components/contact-us/ContactUsPage/ContactUsPage'
import TestimonialSection from '@/components/corporate/TestimonialSection/TestimonialSection'
import Navbar from '@/components/layout/Navbar/Navbar'
import PageHero from '@/components/shared/PageHero/PageHero'

export default function ContactUs () {
  return (
    <>
      <Navbar />
      <PageHero
        title='Contact Us'
        subtitle='Get in touch to start your journey'
        backgroundImage='/images/shared/services1.avif'
        showShareIcons={true}
      />

      <ContactPage />
      <div style={{ marginTop: '-4rem' }}>
        <TestimonialSection />
      </div>
    </>
  )
}
