import Link from 'next/link'
import styles from './ApplyCourse.module.css'
import ApplyForm from './ApplyForm/ApplyForm'

export default function ApplyCourse() {
    return (
        <>
            <section className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.intro}>
                        <p className={styles.introText}>Complete the application form below to begin your study abroad process.
                            <br />
                            Our education advisors will review your details and guide you through course selection, university applications, and visa readiness.
                            <br /> <br />
                            A member of the Study Now team will contact you within 48 hours with your next steps.
                        </p>
                    </div>

                    <div className={styles.applyForm}>
                        <ApplyForm />
                    </div>

                    <div className={styles.applySteps}>
                        <div className={styles.step}>
                            <h6>What happens after you submit?</h6>
                            <p>Once your form is received, our team reviews your details and shares clear next steps. You will be contacted within 48 hours.</p>

                            <ul>
                                <li>
                                    <span className={styles.moduleBullet}></span>
                                    <div className={styles.stepContent}>
                                        <h5>Step 1: Review</h5>
                                        <p>We check your details and confirm what stage you are in (course choice, university selection, or application readiness).</p>
                                    </div>
                                </li>
                                <li>
                                    <span className={styles.moduleBullet}></span>
                                    <div className={styles.stepContent}>
                                        <h5>Step 2: Recommendations</h5>
                                        <p>We suggest suitable course and university options based on your profile and goals..</p>
                                    </div>
                                </li>
                                <li>
                                    <span className={styles.moduleBullet}></span>
                                    <div className={styles.stepContent}>
                                        <h5>Step 3: Guidance</h5>
                                        <p>We guide you through admissions requirements, documentation, timelines, and visa readiness steps.</p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className={styles.step}>
                            <h6>Why apply with Kaynation Educational Services?</h6>
                            <p>Kaynation Educational Services supports students across multiple study destinations with structured, transparent guidance. We focus on course suitability, application quality, and visa readiness—so you can make informed decisions at every stage.</p>

                            <ul>
                                <li>
                                    <span className={styles.moduleBullet}></span>
                                    <div className={styles.stepContent}>
                                        <h5>✔ Personalised admissions guidance</h5>

                                    </div>
                                </li>
                                <li>
                                    <span className={styles.moduleBullet}></span>
                                    <div className={styles.stepContent}>
                                        <h5>✔ University-aligned application support</h5>
                                    </div>
                                </li>
                                <li>
                                    <span className={styles.moduleBullet}></span>
                                    <div className={styles.stepContent}>
                                        <h5>✔ Clear timelines and next steps</h5>
                                    </div>
                                </li>
                                <li>
                                    <span className={styles.moduleBullet}></span>
                                    <div className={styles.stepContent}>
                                        <h5>✔ No false promises or visa guarantees</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>


                    <div className={styles.note}>
                        <p className={styles.noteContent}> <span className={styles.note_bold}>Note:</span> You do not need to have a final course or university selected to apply. Your information is kept confidential and used only to support your application.</p>

                        <div className={styles.noteQuickLinks}>
                            <Link href="/our-services"><span>View Our Services</span></Link>
                            <Link href="/about-us"><span>About Us</span></Link>
                            <Link href="/"><span>Read Testimonials</span></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}