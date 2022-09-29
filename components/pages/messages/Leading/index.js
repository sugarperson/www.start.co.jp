import Link from "next/link";
import styles from "./index.module.scss";

export default function Page(props){

   return (
      <div className={styles.Leading__container}>
         <div className={styles.Leading__title}>
            「仕事」をきっかけに<br/>
            人生の新しいスタートを！
         </div>
         <div className={styles.Leading__subtitle}>
            大事なお仕事探しを応援させてください
         </div>
      </div>
   )
}