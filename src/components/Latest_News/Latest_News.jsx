import { useEffect, useState } from "react";
import styles from "./Latest_News.module.css";
import ArticleItem from "../Article_Item/Article_Item";
import api from "../../api/api";

export default function LatestNews(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.get("", {
          params: {
            country: "us",
            category: "science",
          },
        });

        console.log(response.data.articles);
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.home_container}>
        <div className={styles.home_header}>
          <p className={styles.home_header_title}>{props.title}</p>
          <p className={styles.home_header_subtitle}>
            {props.subtitle ? "Atualizado há 30 minutos" : ""}
          </p>
        </div>

        {articles
          .filter((article) => {
            return !(
              article.title === "[Removed]" ||
              article.title === null ||
              article.content === "[Removed]" ||
              article.content === null ||
              article.description === "[Removed]" ||
              article.description === null ||
              article.source.name === "[Removed]" ||
              article.source.name === null ||
              article.author === "[Removed]" ||
              article.author === null ||
              article.url === "[Removed]" ||
              article.url === null ||
              article.urlToImage === "[Removed]" ||
              article.urlToImage === null
            );
          })
          .map((article, index) => (
            <ArticleItem
              index={index}
              urlToImage={article.urlToImage}
              source_name={article.source.name}
              title={article.title}
              content={article.content}
              author={article.author}
              publishedAt={article.publishedAt}
            />
          ))}
      </div>
    </section>
  );
}
