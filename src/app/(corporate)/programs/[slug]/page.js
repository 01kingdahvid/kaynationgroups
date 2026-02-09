// app/programs/[slug]/page.js
import Navbar from '@/components/layout/Navbar/Navbar'
import ProgramHero from '@/components/shared/ProgramHero/ProgramHero'
import programs from '@/data/programs.json'
import styles from '@/styles/pages/CourseDetail.module.css'
import Script from 'next/script'
// import PageHero from '@/components/shared/PageHero/PageHero'

// Generate static params for SSG
export async function generateStaticParams () {
  return programs
    .filter(program => program.slug)
    .map(program => ({
      slug: program.slug
    }))
}

// Generate metadata - params must be awaited
export async function generateMetadata ({ params }) {
  const { slug } = await params // ✅ Await params
  const program = programs.find(p => p.slug === slug)

  if (!program)
    return {
      title: 'Program Not Found',
      description: 'The requested program could not be found.'
    }

  return {
    title: `${program.title} | ${program.university}`,
    description: `Study ${program.title} at ${program.university} in ${program.location}. Fees ${program.fees}. Apply now.`
  }
}

// Main component - params must be awaited
export default async function CourseDetailPage ({ params }) {
  const { slug } = await params // ✅ Await params
  const program = programs.find(p => p.slug === slug)

  if (!program)
    return (
      <>
        <Navbar />
        <div className={styles.notFound}>Program not found</div>
      </>
    )

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: program.title,
    provider: {
      '@type': 'CollegeOrUniversity',
      name: program.university,
      address: program.location
    },
    educationalCredentialAwarded: program.studyLevel,
    timeRequired: program.duration,
    offers: {
      '@type': 'Offer',
      price: program.tuition,
      priceCurrency: 'GBP'
    }
  }

  return (
    <>
      <Navbar />

      <Script
        id='course-jsonld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ProgramHero
        title={program.title}
        university={program.university}
        heroImage={program.heroImage || '/images/shared/services1.avif'}
        logoImage={program.logoImage || '/images/shared/services1.avif'}
      />

      <main className={styles.programDetail_container}>
        <section className={styles.programDetail_header}>
          <h1>{program.title}</h1>
          <h2>{program.university}</h2>
        </section>

        <section className={styles.programDetail_infoGrid}>
          <div>
            <label>Location</label>
            <span className={styles.pill}>{program.location}</span>
          </div>

          <div>
            <label>Qualification</label>
            <span className={styles.pill}>{program.studyLevel}</span>
          </div>

          <div>
            <label>Fees</label>
            <span className={styles.pill}>{program.fees}</span>
          </div>

          <div>
            <label>Duration</label>
            <span className={styles.pill}>{program.duration || 'N/A'}</span>
          </div>

          <div>
            <label>Next intake</label>
            <span className={styles.pill}>{program.nextIntake}</span>
          </div>

          <div>
            <label>Entry Score</label>
            <span className={styles.pill}>{program.entryRequirement}</span>
          </div>
        </section>

        {program.courseModules &&
          Object.keys(program.courseModules).length > 0 && (
            <section className={styles.programDetail_modules}>
              <h3>Course Modules</h3>

              {Object.entries(program.courseModules).map(([year, modules]) => (
                <div key={year} className={styles.moduleYear}>
                  <h4>{year.replace('year', 'Year ')}</h4>

                  <ul>
                    {modules.map((mod, i) => (
                      <li key={i}>
                        <span className={styles.moduleBullet}></span>
                        {mod}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}

        <section className={styles.programDetail_apply}>
          <button className={styles.applyBtn}>APPLY NOW</button>
        </section>
      </main>
    </>
  )
}
