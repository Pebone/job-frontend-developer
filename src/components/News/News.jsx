import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "../../assets/images/photo.png";
import { format } from "date-fns";
import styles from "./News.module.css";
import { useEffect } from "react";
import { toast } from "sonner";

export default function News() {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, content, author, hat, publishedAt, urlToImage, id } =
    location.state;

  const articleKey = `${title}-${publishedAt}`;

  if (!location.state) {
    useEffect(() => {
      navigate("/page-block");
    }, [navigate]);
    return null;
  }

  useEffect(() => {
    let articlesRead = localStorage.getItem("articles_read");

    if (!articlesRead) {
      articlesRead = {};
    } else {
      try {
        articlesRead = JSON.parse(articlesRead);
      } catch (e) {
        articlesRead = {};
      }
    }

    const count = articlesRead[articleKey] || 0;

    if (count > 2) {
      toast.error("Você já leu esta notícia pelo menos duas vezes!");
      navigate("/");
    } else {
      articlesRead[articleKey] = count + 1;
      localStorage.setItem("articles_read", JSON.stringify(articlesRead));
    }
  }, [articleKey, navigate]);

  return (
    <section>
      <noscript>
        <meta http-equiv="refresh" content="0; url=/page-block"></meta>
        <div>
          <p>Habilite o Javascript do seu Browser para acessar a notícia.</p>
        </div>
      </noscript>
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
