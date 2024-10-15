import styles from "./Article_Item.module.css";
import Avatar from "../../assets/images/photo.png";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function ArticleItem(props) {
  return (
    <div key={props.index} className={styles.teaser}>
      <img className={styles.thumbnail} src={props.urlToImage}></img>
      <div className={styles.teaser_container}>
        <div className={styles.teaser_content}>
          <p className={styles.teaser_hat}>{props.source_name}</p>
          <h1 className={styles.teaser_heading}>{props.title}</h1>
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
