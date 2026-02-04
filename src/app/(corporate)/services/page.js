import Navbar from '@/components/layout/Navbar/Navbar'
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
    </>
  )
}
