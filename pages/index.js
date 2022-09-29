import CommonLayout from "../components/layouts/CommonLayout";
import NavigationBar from "../components/widgets/NavigationBar";
import MainVisual from "../components/pages/home/MainVisual";
import NewsBox from "../components/pages/home/NewsBox";
import Service from "../components/pages/home/Service";
import Footer from "../components/widgets/Footer";

import styles from "../styles/index.module.scss";

export default function Page() {
	return (
		<div className={styles.container}>
         <nav className={styles.NavigationBar__container}>
            <NavigationBar/>
         </nav>
         <section className={styles.MainVisual__container}>
            <MainVisual/>
         </section>
			<main className={styles.NewsBox_and_Service__container}>
				<div className={styles.watermark}>
					SERVECE
				</div>
				<NewsBox/>
				<Service/>
			</main>
			<footer className={styles.Footer_container}>
				<Footer/>
			</footer>
		</div>
	)
}

Page.getLayout = function getLayout(page) {
	return (
		<CommonLayout>
			{page}
		</CommonLayout>
	)
}