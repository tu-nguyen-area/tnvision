import { slImage, slImage2 } from '@/app/lib/placeholder-data';
import Image from 'next/image';
import styles from '@/app/modules/slide.module.css';

const brands = [ ...slImage, ...slImage, ...slImage, ...slImage, ...slImage, ...slImage, ...slImage, ...slImage, ...slImage];
const brands2 = [ ...slImage2, ...slImage2, ...slImage2, ...slImage2, ...slImage2, ...slImage2, ...slImage2, ...slImage2, ...slImage2];

export default function Slide() {
  return (
    <>

    <section className={`${styles.slideFlex} ${styles.slideSlip}`}>
      {brands.map((brand) => {
        return (
        <Image className="m-8"
            key={`${brand.name} ${Math.random()}`}
            src={brand.url}
            width={100}
            height={2}
            alt={`${brand.name} image`}
        />
        );
      })}
    </section>

      <div className={`${styles.slideFlex} ${styles.slideSlipSlow}`}>
        {brands2.map((brand) => {
          return (
            <Image className="m-8"
              key={`${brand.name} ${Math.random()}`}
              src={brand.url}
              width={100}
              height={2}
              alt={`${brand.name} image`}
            />
          );
        })}
      </div>

    </>
  );
}
