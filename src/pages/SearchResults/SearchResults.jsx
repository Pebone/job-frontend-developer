import Logo from "../../assets/images/logo.png";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import styles from "./SearchResults.module.css";
import SearchInput from "../../components/Search_Input/Search_Input";
import { Link, useParams } from "react-router-dom";
import Search_Header from "../../components/Search_Header/Search_Header";
import { useEffect, useState } from "react";
import api from "../../api/api";

export default function SearchResults() {
  const { query } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await api.get("", {
          params: {
            country: "us",
            category: { query },
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };

    fetchArticles();
  }, [query]);

  return (
    <section>
      <Search_Header />
    </section>
  );
}
