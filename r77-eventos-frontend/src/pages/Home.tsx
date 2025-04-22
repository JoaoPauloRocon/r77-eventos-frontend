import styles from "../styles/pages/Home.module.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.home}>
        <section className={styles.banner}>
          <h2>Bem-vindo ao R77 Eventos</h2>
          <p>Organize e participe dos melhores eventos!</p>
          <button className={styles.btn}>Ver Eventos</button>
        </section>
      </main>
      <Footer />
    </>
  );
}
