import ContactSection from '@/components/corporate/ContactSection/ContactSection'
import Navbar from '@/components/layout/Navbar/Navbar'
import Opportunities from '@/components/our-services/Opportunities/Opportunities'
import PageHero from '@/components/shared/PageHero/PageHero'

export default function VisaApplicationPage () {
  return (
    <>
      <Navbar />
      <PageHero
        title='Visa Application Assistance'
        subtitle='We consider important factors like your budget, academic strengths, personal interests, and more; while aligning with the standards set by universities and governing bodies.'
        backgroundImage='/images/shared/services1.avif'
        showShareIcons={true}
      />
      <Opportunities/>
      <ContactSection/>
    </>
  )
}
