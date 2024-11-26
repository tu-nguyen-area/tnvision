import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import BarNav from '@/app/ui/bar-nav';
import SectionOne from '@/app/ui/home/section-one';
import SectionTwo from '@/app/ui/home/section-two';
import SectionThree from '@/app/ui/home/section-three';
import styles from '@/app/utils/home.module.css';

export default function Page() {
  return (
    <>

    <div className={`${styles.homeBackground}`}>
      <Header />
      <BarNav />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>

    </>
  );
}
