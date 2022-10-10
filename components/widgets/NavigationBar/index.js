import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

export default function Layout(props){
   return (
      <div className={styles.NavigationBar}>
         <Link href="/">
            <a className={styles.Bland}>
               {/* 背景画像としてCSSで画像を表示 */}
            </a>
         </Link>
         <nav className={styles.Menu}>
            <ul className={styles.Menu__list}>
               <li className={styles.Menu__item}>
                  <Link href="/">
                     <a className={styles.Menu__item__link}>ホーム</a>
                  </Link>
               </li>
               <li className={styles.Menu__item}>
                  <Link href="/messages">
                     <a className={styles.Menu__item__link}>メッセージ</a>
                  </Link>
               </li>
               <li className={styles.Menu__item}>
                  <Link href="/company_profile">
                     <a className={styles.Menu__item__link}>会社概要</a>
                  </Link>
               </li>
            </ul>
         </nav>
         
         <button id="NavigationBar_MenuBtn" className={styles.MenuBtn} onClick={() => {
            let menuBtn = document.getElementById("NavigationBar_MenuBtn");
            let modalWindow = document.getElementById("NavigationBar_ModalWindow");
            if(menuBtn.classList.contains(`${styles.MenuBtn}`)){
               {/*メニューボタンが表示されている場合*/}
               menuBtn.classList.remove(`${styles.MenuBtn}`);
               menuBtn.classList.add(`${styles.MenuBtn__hidden}`);
               modalWindow.classList.remove(`${styles.ModalWindow}`);
               modalWindow.classList.add(`${styles.ModalWindow__show}`);
            }else{
               {/*メニューボタンが表示されていない場合*/}
               menuBtn.classList.remove(`${styles.MenuBtn__hidden}`);
               menuBtn.classList.add(`${styles.MenuBtn}`);
               modalWindow.classList.remove(`${styles.ModalWindow__show}`);
               modalWindow.classList.add(`${styles.ModalWindow}`);
            }
         }}>
            <span className={`material-symbols-rounded ${styles.MenuBtn__img}`}>
               menu
            </span>
         </button>
         <nav id="NavigationBar_ModalWindow" className={styles.ModalWindow}>
            <button id="NavigationBar_CloseBtn" className={styles.ModalWindow__closeBtn} onClick={() => {
               let menuBtn = document.getElementById("NavigationBar_MenuBtn");
               let modalWindow = document.getElementById("NavigationBar_ModalWindow");
               if(menuBtn.classList.contains(`${styles.MenuBtn}`)){
                  {/*メニューボタンが表示されている場合*/}
                  menuBtn.classList.remove(`${styles.MenuBtn}`);
                  menuBtn.classList.add(`${styles.MenuBtn__hidden}`);
                  modalWindow.classList.remove(`${styles.ModalWindow}`);
                  modalWindow.classList.add(`${styles.ModalWindow__show}`);
                  modalWindow.classList.add(`active`);
               }else{
                  {/*メニューボタンが表示されていない場合*/}
                  menuBtn.classList.remove(`${styles.MenuBtn__hidden}`);
                  menuBtn.classList.add(`${styles.MenuBtn}`);
                  modalWindow.classList.remove(`${styles.ModalWindow__show}`);
                  modalWindow.classList.remove(`active`);
                  modalWindow.classList.add(`${styles.ModalWindow}`);
               }
            }}>
               <span className={`material-symbols-outlined ${styles.ModalWindow__closeBtn__img}`}>
                  close
               </span>
            </button>
            <ul className={styles.ModalWindow__menuList}>
               <li className={styles.ModalWindow__menuList__item}>
                  <Link href="/">
                     <a className={styles.ModalWindow__menuList__link}>ホーム</a>
                  </Link>
               </li>
               <li className={styles.ModalWindow__menuList__item}>
                  <Link href="/messages">
                     <a className={styles.ModalWindow__menuList__link}>メッセージ</a>
                  </Link>
               </li>
               <li className={styles.ModalWindow__menuList__item}>
                  <Link href="/company_profile">
                     <a className={styles.ModalWindow__menuList__link}>会社概要</a>
                  </Link>
               </li>
            </ul>
         </nav>
      </div>
   )
}