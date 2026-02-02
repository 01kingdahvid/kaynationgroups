import Container from '@/components/shared/Container/Container';
import SectionTitle from '@/components/shared/SectionTitle/SectionTitle';
import '@/styles/pages/edu.css';

const programs = [
  {
    title: "Professional Certification Training",
    description:
      "Industry recognized certification preparation and training."
  },
  {
    title: "Academic Coaching",
    description:
      "Student academic performance improvement and mentoring."
  },
  {
    title: "Career Development",
    description:
      "Helping professionals transition and grow in their careers."
  }
];

export default function ProgramsList() {
  return (
    <section className="edu-programs">
      <Container>
        <SectionTitle
          title="Our Programs"
          subtitle="Education Designed For Real World Success"
        />

        <div className="edu-program-grid">
          {programs.map((program, index) => (
            <div key={index} className="edu-program-card">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
