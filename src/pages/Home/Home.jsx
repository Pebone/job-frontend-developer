import Logo from "../../assets/images/logo.png";
import styles from "./Home.module.css";
import SearchInput from "../../components/Search_Input/Search_Input";
import LatestNews from "../../components/Latest_News/Latest_News";

export default function Home() {
  return (
    <section>
      <section className={styles.container}>
        <div className={styles.home_container}>
          <div className={styles.home_logo}>
            <img className={styles.logo} src={Logo}></img>
          </div>

          <div className={styles.home_content}>
            <h1 className={styles.content_title}>
              Explore as últimas notícias sobre tecnologia da web!
            </h1>
            <p className={styles.content_subtitle}>
              Selecionamos todas as notícias sobre tecnologia produzidas na web
              para você. Aproveite, foi tudo feito com dedicação.
            </p>
            <SearchInput />
          </div>
        </div>
      </section>
      <LatestNews title="Últimas notícias" subtitle />
    </section>
  );
}
