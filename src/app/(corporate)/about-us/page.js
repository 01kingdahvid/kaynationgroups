import AboutUsPageSection from '@/components/about-us/AboutUsPageSection'
import Navbar from '@/components/layout/Navbar/Navbar'
import PageHero from '@/components/shared/PageHero/PageHero'

export default function AboutUsPage () {
  return (
    <>
      <Navbar />
      <PageHero
        title='About Us'
        subtitle='Learn more about Kaynation Edu Services'
        backgroundImage='/images/shared/services1.avif'
        showShareIcons={true}
      />
      <AboutUsPageSection/>
    </>
  )
}
