// app/components/ContactForm.js
"use client";

import { useState } from 'react';
import styles from './ContactSection.module.css';

const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Netherlands",
    "Sweden",
    "Switzerland",
    "Singapore",
    "Japan",
    "South Korea",
    "New Zealand",
    "Ireland",
    "Spain",
    "Italy",
    "Other"
];

export default function ContactSection() {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        currentLocation: '',
        studyCountry: '',
        universityInterest: '',
        fundingPlan: '',
        questions: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required';
        } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Please enter a valid phone number';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.currentLocation.trim()) {
            newErrors.currentLocation = 'Current location is required';
        }

        if (!formData.fundingPlan.trim()) {
            newErrors.fundingPlan = 'Funding plan is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));

            console.log('Form submitted:', formData);

            setSubmitSuccess(true);
            setFormData({
                fullName: '',
                phoneNumber: '',
                email: '',
                currentLocation: '',
                studyCountry: '',
                universityInterest: '',
                fundingPlan: '',
                questions: ''
            });

            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>

            <section className={styles.contactSection}>
                <div className={styles.container}>
                    {/* REAL SVG WAVEFORM */}
                    <div className={styles.waveSection}>
                        <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
                            <path className={styles.wave1}
                                d="M0,100 C150,200 350,0 600,100 C850,200 1050,0 1440,100 L1440,200 L0,200 Z" />
                            <path className={styles.wave2}
                                d="M0,120 C200,20 400,200 700,120 C1000,40 1200,200 1440,120 L1440,200 L0,200 Z" />
                            <path className={styles.wave3}
                                d="M0,140 C180,60 380,220 680,140 C980,60 1200,220 1440,140 L1440,200 L0,200 Z" />
                        </svg>
                    </div>


                    {/* TWO COLUMN CONTENT WRAPPER */}
                    <div className={styles.contentRow}>
                        <div className={styles.header}>
                            <h1 className={styles.heading}>Let&apos;s Shape Your Academic Future</h1>
                            <p className={styles.subheading}>
                                With KNES, your global education dreams are within reach. We&apos;re here to offer
                                tailored advice and steadfast support tailored to your unique aspirations.
                            </p>
                            <p className={styles.callToAction}>
                                Ready to embark on your journey? Fill out the form, and let&apos;s chart your path together.
                            </p>
                            <p className={styles.motivationalText}>
                                <strong>Don&apos;t just dream, take action!</strong>
                            </p>
                        </div>

                        {/* <div className={styles.separator} /> */}

                        <form onSubmit={handleSubmit} className={styles.form} noValidate>
                            {submitSuccess && (
                                <div className={styles.successMessage}>
                                    Thank you for your submission! We&apos;ll contact you shortly.
                                </div>
                            )}

                            <div className={styles.formGrid}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="fullName" className={styles.label}>
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="phoneNumber" className={`${styles.label} ${styles.required}`}>
                                        Phone Number
                                    </label>
                                    <div className={styles.phoneInput}>
                                        <select
                                            className={styles.countryCode}
                                            defaultValue="+234"
                                        >
                                            <option value="+234">+234 (NG)</option>
                                            <option value="+1">+1 (US)</option>
                                            <option value="+44">+44 (UK)</option>
                                            <option value="+61">+61 (AU)</option>
                                            <option value="+1">+1 (CA)</option>
                                        </select>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            className={`${styles.input} ${styles.phoneInputField}`}
                                            placeholder="Enter your phone number"
                                            required
                                        />
                                    </div>
                                    {errors.phoneNumber && <span className={styles.error}>{errors.phoneNumber}</span>}
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={`${styles.label} ${styles.required}`}>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="Enter your email address"
                                        required
                                    />
                                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="currentLocation" className={`${styles.label} ${styles.required}`}>
                                        Your Current Location
                                    </label>
                                    <input
                                        type="text"
                                        id="currentLocation"
                                        name="currentLocation"
                                        value={formData.currentLocation}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="Enter your current city/country"
                                        required
                                    />
                                    {errors.currentLocation && <span className={styles.error}>{errors.currentLocation}</span>}
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="studyCountry" className={styles.label}>
                                        Country You Wish To Study In?
                                    </label>
                                    <select
                                        id="studyCountry"
                                        name="studyCountry"
                                        value={formData.studyCountry}
                                        onChange={handleChange}
                                        className={styles.select}
                                    >
                                        <option value="">Select a country</option>
                                        {countries.map(country => (
                                            <option key={country} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="universityInterest" className={styles.label}>
                                        University of Interest
                                    </label>
                                    <input
                                        type="text"
                                        id="universityInterest"
                                        name="universityInterest"
                                        value={formData.universityInterest}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="Enter preferred university (optional)"
                                    />
                                </div>

                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <label htmlFor="fundingPlan" className={`${styles.label} ${styles.required}`}>
                                        How Do You Plan To Fund Your Studies?
                                    </label>
                                    <input
                                        type="text"
                                        id="fundingPlan"
                                        name="fundingPlan"
                                        value={formData.fundingPlan}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="e.g., Self-funded, Scholarships, Loans, Sponsorship"
                                        required
                                    />
                                    {errors.fundingPlan && <span className={styles.error}>{errors.fundingPlan}</span>}
                                </div>

                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <label htmlFor="questions" className={styles.label}>
                                        Do You Have Any Questions Before We Contact You?
                                    </label>
                                    <textarea
                                        id="questions"
                                        name="questions"
                                        value={formData.questions}
                                        onChange={handleChange}
                                        className={styles.textarea}
                                        placeholder="Enter any questions or concerns you may have (optional)"
                                        rows={4}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className={styles.submittingText}>SENDING...</span>
                                ) : (
                                    'SEND'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}