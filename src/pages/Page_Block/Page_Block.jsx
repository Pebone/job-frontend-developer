import { Link } from "react-router-dom";
import styles from "./Page_Block.module.css";

export default function PageBlock() {
  const handleResetNewsReadCount = () => {
    localStorage.setItem("read_article", "")
  };

  return (
    <section className={styles.container}>
      <h1>Você leu pelo menos 10 notícias.</h1>
      <Link onClick={handleResetNewsReadCount} to={"/"}>
        Clique aqui para navegar para a página principal!
      </Link>
    </section>
  );
}
