import Link from "next/link";
import styles from "./index.module.scss";

export default function Page(props){

   return (
      <div className={styles.NewsBox}>
         <div className={styles.NewsBox__heading}>
            ニュース
         </div>
         <ul className={styles.NewsBox__list}>
            <li className={styles.News}>
               <a href="#" className={styles.News__link}>
                  <time datetime="2030-02-10" className={styles.News__date}>
                     2030.02.10
                  </time>
                  <div className={styles.News__title}>
                     コーポレートサイトをリニューアルしました。
                  </div>
               </a>
            </li>
            <li className={styles.News}>
               <a href="#" className={styles.News__link}>
                  <time datetime="2030-02-08" className={styles.News__date}>
                     2030.02.08
                  </time>
                  <div className={styles.News__title}>
                     採用を強化中です！一緒に働きませんか？
                  </div>
               </a>
            </li>
            <li className={styles.News}>
               <a href="#" className={styles.News__link}>
                  <time datetime="2030-02-02" className={styles.News__date}>
                     2030.02.02
                  </time>
                  <div className={styles.News__title}>
                     人材紹介SNS『スタート』をリリースしました。3/31まで新規登録キャンペーンを開催中です！サービス内で使えるポイント500ポイントをプレゼント！
                  </div>
               </a>
            </li>
         </ul>
      </div>
   )
}