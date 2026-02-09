import TestimonialSection from '@/components/corporate/TestimonialSection/TestimonialSection'
import Navbar from '@/components/layout/Navbar/Navbar'
import ApplyCourse from '@/components/programs/ApplyCourse/ApplyCourse'
import PageHero from '@/components/shared/PageHero/PageHero'
import React from 'react'

const ProgramApplyPage = () => {
  return (
    <>
      <Navbar />
      <PageHero
        title='Start Your Study Abroad Application'
        subtitle='Get personalised guidance for university admissions and student visas.'
        backgroundImage='/images/shared/services1.avif'
        showShareIcons={true}
      />
      <ApplyCourse />

      <TestimonialSection/>
    </>
  )
}

export default ProgramApplyPage
