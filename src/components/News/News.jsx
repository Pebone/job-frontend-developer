import { useLocation } from "react-router-dom";
import Avatar from "../../assets/images/photo.png";
import { format } from "date-fns";
import Search_Header from "../Search_Header/Search_Header";
import styles from "./News.module.css";

export default function News() {
  const location = useLocation();
  const { title, content, author, hat, publishedAt, urlToImage, id } =
    location.state;

  localStorage.setItem("articles_read", id);

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.news_container}>
          <p className={styles.news_hat}>{hat}</p>
          <p className={styles.news_title}>{title}</p>
          <div className={styles.news_author_container}>
            <img className={styles.news_author_img} src={Avatar}></img>
            <p className={styles.news_author}>{author},</p>
            <p className={styles.news_publishedAt}>
              {format(new Date(`${publishedAt}`), "dd/MM/yyyy HH:mm")}
            </p>
          </div>
        </div>
        <div className={styles.news_content_container}>
          <img className={styles.news_content_img} src={urlToImage}></img>
          <p className={styles.news_content}>{content}</p>
        </div>
      </div>
    </section>
  );
}
