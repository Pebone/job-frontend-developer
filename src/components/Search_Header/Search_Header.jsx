import Logo from "../../assets/images/logo.png";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import styles from "./Search_Header.module.css";
import SearchInput from "../../components/Search_Input/Search_Input";
import { Link } from "react-router-dom";

export default function Search_Header() {
  return (
    <section className={styles.container}>
      <Link to={"/"} className={styles.go_back_container}>
        <img className={styles.go_back_icon} src={arrowLeft}></img>
        <p>Início</p>
      </Link>
      <div className={styles.search_input_container}>
        <div className={styles.search_input_logo}>
          <img className={styles.logo} src={Logo}></img>
        </div>

        <div className={styles.content}>
          <SearchInput />
        </div>
      </div>
    </section>
  );
}
