import Logo from "../../assets/images/logo.png";
import styles from "./Home.module.css";
import SearchInput from "../../components/Search_Input/Search_Input";

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.header_container}>
        <div className={styles.header_logo}>
          <img className={styles.logo} src={Logo}></img>
        </div>

        <div className={styles.content}>
          <h1 className={styles.content_title}>
            Explore as últimas notícias sobre tecnologia da web
          </h1>
          <p className={styles.content_subtitle}>
            Selecionamos todas as notícias sobre tecnologia produzidas na web
            para você. Aproveite, foi tudo feito com dedicação.
          </p>
          <SearchInput />
        </div>
      </div>
    </section>
  );
}
