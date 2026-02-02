import Container from '@/components/shared/Container/Container';
import SectionTitle from '@/components/shared/SectionTitle/SectionTitle';
import '@/styles/pages/farms.css';

const images = [
  "/images/farms/farm1.jpg",
  "/images/farms/farm2.jpg",
  "/images/farms/farm3.jpg"
];

export default function FarmGallery() {
  return (
    <section className="farm-gallery">
      <Container>
        <SectionTitle
          title="Farm Gallery"
          subtitle="A Look Into Our Agricultural Operations"
        />

        <div className="farm-gallery-grid">
          {images.map((img, i) => (
            <img key={i} src={img} alt="Kay Farms" />
          ))}
        </div>
      </Container>
    </section>
  );
}
