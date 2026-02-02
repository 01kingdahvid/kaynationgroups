import Container from '@/components/shared/Container/Container';
import SectionTitle from '@/components/shared/SectionTitle/SectionTitle';
import '@/styles/pages/farms.css';

const services = [
  {
    title: "Crop Production",
    description:
      "Large scale and contract crop farming using modern agricultural practices."
  },
  {
    title: "Farm Consulting",
    description:
      "Helping individuals and organizations build profitable agricultural ventures."
  },
  {
    title: "Agro Supply",
    description:
      "Distribution of high-quality seeds, fertilizers, and agro materials."
  }
];

export default function FarmServices() {
  return (
    <section className="farm-services">
      <Container>
        <SectionTitle
          title="Our Farm Services"
          subtitle="Modern Agriculture Backed By Technology"
        />

        <div className="farm-services-grid">
          {services.map((service, index) => (
            <div key={index} className="farm-service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
