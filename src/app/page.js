import Navbar from '@/components/layout/Navbar/Navbar';
import KayGroupsHero from '@/components/corporate/KayGroupsHero/KayGroupsHero';
import ServiceCards from '@/components/corporate/ServiceCard/ServiceCard';
import AboutUs from '@/components/corporate/AboutUs/AboutUs';
import TestimonialSection from '@/components/corporate/TestimonialSection/TestimonialSection';
import ContactSection from '@/components/corporate/ContactSection/ContactSection';
// import EduHero from '@/components/kayEdu/EduHero/EduHero';
// import FarmHero from '@/components/kayFarms/FarmHero/FarmHero';

export default function Home() {
  return (
    <>
      <Navbar />
      <KayGroupsHero />
      <ServiceCards/>
      <AboutUs/>
      <TestimonialSection/>
      {/* <ContactSection/> */}
      {/* <EduHero /> */}
      {/* <FarmHero /> */}
    </>
  );
}
