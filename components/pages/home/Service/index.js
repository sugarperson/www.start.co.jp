import Link from "next/link";
import styles from "./index.module.scss";

export default function Page(props){

   return (
      <div className={styles.Service}>
         <div className={styles.Service__heading}>
            サービス
         </div>
         <div className={styles.Service__list}>
            <div className={styles.Service__container}>
               <div className={styles.Service__item}>
                  <figure className={styles.Service__item__icon}>
                     <span class={`material-symbols-outlined ${styles.icon}`}>
                        work
                     </span>
                  </figure>
                  <div className={styles.Service__item__title}>
                     人材紹介業
                  </div>
                  <div className={styles.Service__item__text}>
                     新規サイトの制作はもちろんサイトリニューアルやランディングページの制作も可能です。
                  </div>
               </div>
            </div>
            <div className={styles.Service__container}>
               <div className={styles.Service__item}>
                  <figure className={styles.Service__item__icon}>
                     <span class={`material-symbols-outlined ${styles.icon}`}>
                        location_city
                     </span>
                  </figure>
                  <div className={styles.Service__item__title}>
                     スクール事業
                  </div>
                  <div className={styles.Service__item__text}>
                     オンラインでWeb制作を学べるスクールを運営しています。
                  </div>
               </div>
            </div>
            <div className={styles.Service__container}>
               <div className={styles.Service__item}>
                  <figure className={styles.Service__item__icon}>
                     <span class={`material-symbols-outlined ${styles.icon_frame}`}>
                        desktop_windows
                     </span>
                  </figure>
                  <div className={styles.Service__item__title}>
                     Webメディア運営
                  </div>
                  <div className={styles.Service__item__text}>
                     人事系メディアやWebデザイン関連のメディアなどを複数運営しています。
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}