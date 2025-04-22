import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import styles from "../styles/pages/About.module.css";

export default function About() {
  return (
    <>
      <Navbar />
      <main className={styles.about}>
        <section className={styles.hero}>
          <h2>Sobre o R77 Eventos</h2>
          <p>
            O R77 Eventos é uma plataforma pensada para facilitar o
            gerenciamento e a divulgação de eventos de todos os tipos. Aqui
            você pode criar, editar e participar de shows, feiras, palestras
            e muito mais, tudo de forma simples e intuitiva.
          </p>
        </section>

        <section className={styles.team}>
          <h3>Nosso Time</h3>
          <div className={styles.members}>
            <div className={styles.member}>
              <img src="/avatars/alice.jpg" alt="Alice" />
              <p><strong>Alice Souza</strong><br/>Product Owner</p>
            </div>
            <div className={styles.member}>
              <img src="/avatars/bruno.jpg" alt="Bruno" />
              <p><strong>Bruno Lima</strong><br/>Lead Developer</p>
            </div>
            <div className={styles.member}>
              <img src="/avatars/carla.jpg" alt="Carla" />
              <p><strong>Carla Mendes</strong><br/>UX Designer</p>
            </div>
          </div>
        </section>

        <section className={styles.values}>
          <h3>Valores</h3>
          <ul>
            <li><strong>Colaboração</strong> – Trabalhamos juntos para o sucesso de cada evento.</li>
            <li><strong>Inovação</strong> – Buscamos sempre as melhores tecnologias e práticas.</li>
            <li><strong>Transparência</strong> – Gestão clara e aberta para todos os usuários.</li>
            <li><strong>Paixão</strong> – Amamos o que fazemos e isso reflete na nossa plataforma.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
