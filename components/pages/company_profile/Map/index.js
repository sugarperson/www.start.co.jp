import Link from "next/link";
import styles from "./index.module.scss";

export default function Page(props){

   return (
      <div className={styles.Map}>
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828029576439!2d139.7671248!3d35.68123620000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1664111006874!5m2!1sja!2sjp" 
            width="100%" 
            height="auto" 
            style={{border:0}}
            allowfullscreen=""
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.Map__iframe}
         />
         <a href="https://goo.gl/maps/b5AqA853AfsPSw1Y7" target="_blank" rel="noopener noreferrer" className={styles.Map__link}>
            Google Maps で開く
         </a>
      </div>
   )
}