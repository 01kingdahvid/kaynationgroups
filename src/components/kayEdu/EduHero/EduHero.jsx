import { Button } from 'antd';
import homepageData from '@/data/homepage.json';
import styles from './EduHero.module.css';

export default function EduHero() {
  const data = homepageData.eduHero;

  return (
    <section className={styles['kayedu-hero']}>
      <div className={styles['kayedu-inner']}>

        <h2>{data.title}</h2>

        <p>{data.subtitle}</p>

        <Button type="primary">
          View Programs
        </Button>

      </div>
    </section>
  );
}
