import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

export default function Page(props){

   return (
      <div className={styles.Message}>
         <img className={styles.Message__ceo}/>
         <p className={styles.Message__text}>
            はじめまして。代表取締役社長のショーン・デイビット・ジュニアです。
         </p>
         <p className={styles.Message__text}>
            私はそこそこ幸せです。それは仕事が楽しいからです。もちろん仕事イコール人生ではありません。でも仕事は人生の大事な基盤のように思っています。
         </p>
         <p className={styles.Message__text}>
            株式会社<span className={styles.thin}>START</span>は、みなさんが仕事をきっかけに理想の人生を実現する手助けをしています。
            幸せにつながるお仕事紹介サービス<a href="#" className={styles.Message__text__link}>『スタート』</a>や、
            共通の目標を目指す仲間が見つかる人材紹介<span className={styles.thin}>SNS</span><a href="#" className={styles.Message__text__link}>『ゴール』</a>を運営しています。
            また、<span className={styles.thin}>Web</span>デザインの基礎スキルを身につけられるスクール<a href="#" className={styles.Message__text__link}>『<span className={styles.thin}>Web</span>の学校』</a>も随時開講しています。
         </p>
      </div>
   )
}