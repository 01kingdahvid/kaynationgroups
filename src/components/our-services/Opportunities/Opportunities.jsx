import React from 'react'
import styles from './Opportunities.module.css'
import Link from 'next/link'

const Opportunities = () => {
    return (
        <>
            <section className={`${styles.section}`}>
                <div className={`${styles.content}`}>
                    <p>
                        At Kaynation Educational Services, we help make your study dreams come true with amazing
                        opportunities available in a wide range of universities!
                        <br /> <br />
                        To help us match you with the best options, all you need to do is fill out a
                        simple questionnaire. This helps us understand your preferences and
                        match you with the best options available.
                        <br /> <br />
                        With our support, you’ll have access to the latest study opportunities and discounts, which
                        makes it easier for you to take the next step in your education.
                        <br /> <br />
                        No matter where you are in your decision-making process, we’ll help you
                        streamline your options and find the perfect opportunity to begin your
                        studies!
                        <br /><br />
                        Access a range of Study Now opportunities by filling out the
                        questionnaire and secure your opportunities with us!
                    </p>


                    <div className={`${styles.backToButton}`}>
                        <Link href="/our-services" passHref>

                            <button>« BACK TO SERVICES</button>

                        </Link>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Opportunities