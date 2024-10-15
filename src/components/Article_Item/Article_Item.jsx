import styles from "./Article_Item.module.css";
import Avatar from "../../assets/images/photo.png";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";

export default function ArticleItem(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/news", {
      state: {
        urlToImage: props.urlToImage,
        hat: props.source_name,
        title: props.title,
        content: props.content,
        author: props.author,
        publishedAt: props.publishedAt,
      },
    });
  };

  return (
    <div key={props.index} className={styles.teaser}>
      <img
        className={styles.thumbnail}
        src={props.urlToImage}
        onClick={handleClick}
      ></img>
      <div className={styles.teaser_container}>
        <div className={styles.teaser_content}>
          <p className={styles.teaser_hat}>{props.source_name}</p>
          <h1 className={styles.teaser_heading} onClick={handleClick}>{props.title}</h1>
          <p className={styles.teaser_lead}>{props.content}</p>
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
