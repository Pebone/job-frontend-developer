import styles from "./SearchResults.module.css";
import { useParams } from "react-router-dom";
import Search_Header from "../../components/Search_Header/Search_Header";
import { useEffect, useState } from "react";
import api from "../../api/api";
import ArticleItem from "../../components/Article_Item/Article_Item";
import LatestNews from "../../components/Latest_News/Latest_News";

export default function SearchResults() {
  const { query } = useParams();
  const [articles, setArticles] = useState([]);

  const searchByQ = query;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await api.get("", {
          params: {
            q: searchByQ,
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };

    fetchArticles();
  }, [searchByQ]);

  return (
    <section>
      <Search_Header />
      <div className={styles.container}>
        <div className={styles.search_results_container}>
          {articles.length > 0 ? (
            <>
              <div className={styles.search_results_header}>
                <h1 className={styles.search_results_title}>
                  O resultado da sua busca
                </h1>
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
            </>
          ) : (
            <section>
              <div className={styles.search_results_none_container}>
                <p className={styles.search_results_none}>
                  Nenhum resultado foi encontrado com o termo pesquisado. Talvez
                  você possa gostar da nossa sugestão de notícias!
                </p>
              </div>

              <LatestNews title="Sugestão de notícias" />
            </section>
          )}
        </div>
      </div>
    </section>
  );
}
