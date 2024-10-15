import Logo from "../../assets/images/logo.png";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import styles from "./SearchResults.module.css";
import SearchInput from "../../components/Search_Input/Search_Input";
import { Link, useParams } from "react-router-dom";
import Search_Header from "../../components/Search_Header/Search_Header";
import { useEffect, useState } from "react";
import api from "../../api/api";
import ArticleItem from "../../components/Article_Item/Article_Item";
import LatestNews from "../../components/Latest_News/Latest_News";

export default function SearchResults() {
  const { query } = useParams();
  const [articles, setArticles] = useState([]);

  const category = query;

  console.log(query.toString());

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await api.get("", {
          params: {
            category: category,
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <section>
      <Search_Header />
      <h1 className={styles.search_results_title}>O resultado da sua busca</h1>
      {articles.length > 0 ? (
        articles
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
            <div className={styles.container}>
              <div className={styles.search_results_container}>
                <div className={styles.search_results_header}>
                  <ArticleItem
                    index={index}
                    urlToImage={article.urlToImage}
                    source_name={article.source.name}
                    title={article.title}
                    content={article.content}
                    author={article.author}
                    publishedAt={article.publishedAt}
                  />
                </div>
              </div>
            </div>
          ))
      ) : (
        <section>
          <div>
            <div className={styles.search_results_none_container}>
              <p className={styles.search_results_none}>
                Nenhum resultado foi encontrado com o termo pesquisado. Talvez
                pode você gostar da nossa sugestão de notícias
              </p>
            </div>

            <section>
              <div>
                <LatestNews title="Sugestão de notícias" />
              </div>
            </section>
          </div>
        </section>
      )}
    </section>
  );
}
