import styles from "./Article_Item.module.css";
import Avatar from "../../assets/images/photo.png";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ArticleItem(props) {
  const navigate = useNavigate();

  const createSlug = (title) => {
    const slugQuery = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    return `/news/${slugQuery}`;
  };

  useEffect(() => {
    let readArticle = localStorage.getItem("read_article");
    let readArticleParse;
    let readArticleLength;

    if (readArticle) {
      readArticleParse = JSON.parse(readArticle);
      readArticleLength = Object.keys(readArticleParse).length;
    }

    if (readArticleLength >= 10) {
      navigate("/page-block");
    }

  }, []);

  const handleClick = () => {
    const newsSlug = createSlug(props.title);
    navigate(newsSlug, {
      state: {
        urlToImage: props.urlToImage,
        hat: props.source_name,
        title: props.title,
        content: props.content,
        author: props.author,
        publishedAt: props.publishedAt,
        id: props.id,
      },
    });
  };

  return (
    <div key={props.id} className={styles.teaser}>
      <img
        className={styles.thumbnail}
        src={props.urlToImage}
        onClick={handleClick}
      ></img>

      <div className={styles.teaser_container}>
        <div className={styles.teaser_content}>
          <p className={styles.teaser_hat}>{props.source_name}</p>
          <h1 className={styles.teaser_heading} onClick={handleClick}>
            {props.title}
          </h1>
          <div>
            <p className={styles.teaser_lead}>{props.content}</p>
          </div>
        </div>
        <div className={styles.teaser_author}>
          <img className={styles.teaser_author_avatar} src={Avatar}></img>
          <p className={styles.teaser_author_name}>{props.author}</p>
          <p className={styles.teaser_author_publishedAt}>
            {format(new Date(props.publishedAt), "dd/MM/yyyy HH:mm")}
          </p>
        </div>
      </div>
    </div>
  );
}
