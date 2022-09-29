import CommonLayout from "../components/layouts/CommonLayout";
import NavigationBar from "../components/widgets/NavigationBar";
import Heading from "../components/pages/company_profile/Heading";
import BasicInfo from "../components/pages/company_profile/BasicInfo";
import Map from "../components/pages/company_profile/Map";
import News from "../components/pages/company_profile/News";
import Footer from "../components/widgets/Footer";

import styles from "../styles/company_profile.module.scss";

export default function Page() {
	return (
		<div className={styles.container}>
         <nav className={styles.NavigationBar__container}>
            <NavigationBar/>
         </nav>
         <section className={styles.Heading__container}>
				<Heading/>
			</section>
			<main className={styles.Main__container}>
				<section className={styles.BasicInfo__container}>
					<BasicInfo/>
				</section>
				<section className={styles.BasicInfo__container}>
					<Map/>
				</section>
				<section className={styles.News__container}>
					<News/>
				</section>
			</main>
			<footer className={styles.Footer__container}>
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