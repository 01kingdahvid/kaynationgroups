import Container from '@/components/shared/Container/Container';
import Button from '@/components/shared/Button/Button';
import '@/styles/pages/edu.css';

export default function EduCTA() {
  return (
    <section className="edu-cta">
      <Container>
        <div className="edu-cta-box">
          <h2>Start Your Learning Journey</h2>
          <p>
            Join thousands of learners building successful careers through
            Kay Edu programs.
          </p>

          <Button>Enroll Now</Button>
        </div>
      </Container>
    </section>
  );
}
