import SectionOne from '@/app/ui/home/section-one';
import SectionTwo from '@/app/ui/home/section-two';
import SectionThree from '@/app/ui/home/section-three';
import styles from '@/app/modules/home.module.css';

export default function Page() {
  return (
  <>

  <main className={`${styles.homeBackground} overflow-x-hidden`}>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
  </main>

  </>
  );
}
