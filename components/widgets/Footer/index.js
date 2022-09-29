import Link from "next/link";
import styles from "./index.module.scss";

export default function Layout(props){
   return (
      <div className={styles.Footer}>
         <div className={styles.Footer__contents}>
            <nav className={styles.Footer__navs}>
               <ul className={styles.Footer__navs__itemList}>
                  <li className={styles.Footer__navs__item}>
                     <Link href="/">
                        <a>ホーム</a>
                     </Link>
                  </li>
                  <li className={styles.Footer__navs__item}>
                     <Link href="/messages">
                        <a>メッセージ</a>
                     </Link>
                  </li>
                  <li className={styles.Footer__navs__item}>
                     <Link href="/company_profile">
                        <a>会社概要</a>
                     </Link>
                  </li>
               </ul>
            </nav>
            <div className={styles.copyright}>
               &copy;START
            </div>
         </div>
      </div>
   )
}