import { useEffect, useState } from "react";
import styles from "./Latest_News.module.css";
import ArticleItem from "../Article_Item/Article_Item";
import api from "../../api/api";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import { CircularProgress } from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function LatestNews(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 20;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.get("", {
          params: {
            q: "science",
          },
        });

        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };

    fetchNews();
  }, []);

  const indexLastArticle = currentPage * articlesPerPage;
  const indexFirstArticle = indexLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexFirstArticle, indexLastArticle);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {loading ? (
        <section className={styles.container}>
          <div className={styles.latest_news_container}>
            <CircularProgress />
          </div>
        </section>
      ) : (
        <section className={styles.container}>
          <div className={styles.latest_news_container}>
            <div className={styles.latest_news_header}>
              <p className={styles.latest_news_header_title}>{props.title}</p>
              <p className={styles.latest_news_header_subtitle}>
                {props.subtitle
                  ? `Atualizado ${formatDistanceToNow(
                      new Date(articles[0].publishedAt),
                      {
                        locale: ptBR,
                        addSuffix: true,
                      }
                    )}`
                  : ""}
              </p>
            </div>

            {currentArticles
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
              .map((article) => (
                <ArticleItem
                  id={article.source.id}
                  urlToImage={article.urlToImage}
                  source_name={article.source.name}
                  title={article.title}
                  content={article.content}
                  author={article.author}
                  publishedAt={article.publishedAt}
                />
              ))}

            {articles.length > 0 ? (
              <div className={styles.pagination_container}>
                <button
                  className={styles.pagination_prev_button}
                  onClick={prevPage}
                  disabled={currentPage === 1}
                >
                  <img className={styles.pagination_prev} src={ArrowLeft}></img>
                </button>
                <div className={styles.pagination_buttons}>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={
                        currentPage === index + 1
                          ? styles.currentPage
                          : styles.page
                      }
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <button
                  className={styles.pagination_next_button}
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                >
                  <img className={styles.pagination_next} src={ArrowLeft}></img>
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </section>
      )}
    </>
  );
}
