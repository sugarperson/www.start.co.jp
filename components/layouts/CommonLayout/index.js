import Head from "next/head";
import NavigationBar from "../../widgets/NavigationBar";
import styles from "./index.module.scss";

export default function Layout(props){
   return (
      <div className={styles.container}>
         <Head>
            <link rel="icon" href="favicon.svg" type="image/svg+xml"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto&display=swap" rel="stylesheet"/>
         </Head>
         {props.children}
      </div>
   )
}