import Navbar from '@/components/layout/Navbar/Navbar'
import FindCoursesPage from '@/components/programs/FindCourses/FindCourses'
import PageHero from '@/components/shared/PageHero/PageHero'

export default function ProgramsPage () {
  return (
    <>
      <Navbar />
      <PageHero
        title='Our Programs'
        subtitle='Learn more about our programs'
        backgroundImage='/images/shared/services1.avif'
        showShareIcons={true}
      />

      <FindCoursesPage/>
    </>
  )
}
