import styles from "./index.module.scss";

export default function Layout(props){

   return (
      <div className={styles.MainVisual}>
         <div className={styles.MainVisual__titleContainer}>
            <div className={styles.MainVisual__title}>
               START
            </div>
            <div className={styles.MainVisual__subtitle}>
               仕事に最高のスタートを
            </div>
         </div>
      </div>
   )
}