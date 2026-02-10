import ContactSection from '@/components/corporate/ContactSection/ContactSection'
import Navbar from '@/components/layout/Navbar/Navbar'
import Opportunities from '@/components/our-services/Opportunities/Opportunities'
import PageHero from '@/components/shared/PageHero/PageHero'

export default function PartnershipPage () {
  return (
    <>
      <Navbar />
      <PageHero
        title='Partner Institutions'
        subtitle='Our close partnerships with university partners give us unique insider insights into their programmes, culture, student life, admissions processes and opportunities.'
        backgroundImage='/images/shared/services1.avif'
        showShareIcons={true}
      />
      <Opportunities/>
      <ContactSection/>
    </>
  )
}
