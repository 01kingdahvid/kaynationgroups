import { Button } from 'antd';
import homepageData from '@/data/homepage.json';
import styles from './FarmHero.module.css';

export default function FarmHero() {
  const data = homepageData.farmHero;

  return (
    <section className={styles['kayfarms_hero']}>
      <div className={styles['kayfarms_inner']}>

        <h2>{data.title}</h2>

        <p>{data.subtitle}</p>

        <div className={styles['kayfarms_actions']}>
          <Button type="primary">Partner With Us</Button>
          <Button>View Services</Button>
        </div>

      </div>
    </section>
  );
}
