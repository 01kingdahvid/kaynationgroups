import Container from '@/components/shared/Container/Container';
import Button from '@/components/shared/Button/Button';
import '@/styles/pages/farms.css';

export default function FarmCTA() {
  return (
    <section className="farm-cta">
      <Container>
        <div className="farm-cta-box">
          <h2>Work With Kay Farms</h2>
          <p>
            Partner with us for agricultural production, supply chain solutions,
            and consulting services.
          </p>

          <Button>Contact Kay Farms</Button>
        </div>
      </Container>
    </section>
  );
}
