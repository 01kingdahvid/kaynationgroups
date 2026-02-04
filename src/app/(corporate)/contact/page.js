import Navbar from '@/components/layout/Navbar/Navbar'
import PageHero from '@/components/shared/PageHero/PageHero'

export default function ContactUsPage () {
  return (
    <>
      <Navbar />
      <PageHero
        title='Contact Us'
        subtitle='Get in touch to start your journey'
        backgroundImage='/images/shared/services1.avif'
        showShareIcons={true}
      />
    </>
  )
}
