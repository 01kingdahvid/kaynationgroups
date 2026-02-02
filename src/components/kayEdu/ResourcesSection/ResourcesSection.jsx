import Container from '@/components/shared/Container/Container';
import SectionTitle from '@/components/shared/SectionTitle/SectionTitle';
import '@/styles/pages/edu.css';

export default function ResourcesSection() {
  return (
    <section className="edu-resources">
      <Container>
        <SectionTitle
          title="Learning Resources"
          subtitle="Tools To Support Continuous Learning"
        />

        <ul className="edu-resources-list">
          <li>Study Materials</li>
          <li>Practice Tests</li>
          <li>Video Lessons</li>
          <li>Mentorship Sessions</li>
        </ul>
      </Container>
    </section>
  );
}
