import CommonLayout from "../components/layouts/CommonLayout";
import NavigationBar from "../components/widgets/NavigationBar";
import Heading from "../components/pages/messages/Heading";
import Leading from "../components/pages/messages/Leading";
import Message from "../components/pages/messages/Message";
import OfficeImage from "../components/pages/messages/OfficeImage";
import Footer from "../components/widgets/Footer";

import styles from "../styles/messages.module.scss";

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
				<section className={styles.Leading}>
					<Leading/>
				</section>
				<section className={styles.Message}>
					<Message/>
				</section>
				<section className={styles.OfficeImage}>
					<OfficeImage/>
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