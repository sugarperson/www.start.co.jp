import styles from "./index.module.scss";

export default function Layout(props){

   return (
      <div className={styles.MainVisual}>
         <div className={styles.MainVisual__titleContainer}>
            <div className={styles.MainVisual__title}>
               会社概要
            </div>
         </div>
      </div>
   )
}