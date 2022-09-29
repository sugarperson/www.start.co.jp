import Link from "next/link";
import styles from "./index.module.scss";

export default function Page(props){

   return (
      <div className={styles.InfoBox}>
         <ul className={styles.InfoBox__list}>
            <li className={styles.Info}>
               <div className={styles.Info__title}>
                  社名
               </div>
               <div className={styles.Info__div}>
                  株式会社START
               </div>
            </li>
            <li className={styles.Info}>
               <div className={styles.Info__title}>
                  設立
               </div>
               <div className={styles.Info__div}>
                  2025.02.10
               </div>
            </li>
            <li className={styles.Info}>
               <div className={styles.Info__title}>
                  代表取締役
               </div>
               <div className={styles.Info__div}>
                  ショーン・デイビット・ジュニア
               </div>
            </li>
            <li className={styles.Info}>
               <div className={styles.Info__title}>
                  資本金
               </div>
               <div className={styles.Info__div}>
                  10,000,000円
               </div>
            </li>
            <li className={styles.Info}>
               <div className={styles.Info__title}>
                  所在地
               </div>
               <div className={styles.Info__div}>
                  〒555-5555 東京都千代田区 スタートビルディング 606
               </div>
            </li>
         </ul>
      </div>
   )
}