import styles from "./Article_Item.module.css";
import Avatar from "../../assets/images/photo.png";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";

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
        id: props.id,
      },
    });
  };

  console.log("teste", props.urlToImage)

  return (
    <div key={props.id} className={styles.teaser}>
      {props.urlToImage ? (
        <img
          className={styles.thumbnail}
          src={props.urlToImage}
          onClick={handleClick}
        ></img>
      ) : (
        <Skeleton variant="rectangular" width={210} height={118} />
      )}
      <div className={styles.teaser_container}>
        <div className={styles.teaser_content}>
          <p className={styles.teaser_hat}>
            {props.source_name || <Skeleton width={80}></Skeleton>}
          </p>
          <h1 className={styles.teaser_heading} onClick={handleClick}>
            {props.title ? props.title : <Skeleton width="100%"></Skeleton>}
          </h1>
          <div>
            <p className={styles.teaser_lead}>
              {props.content ? (
                props.content
              ) : (
                <Skeleton width="100%"></Skeleton>
              )}
            </p>
          </div>
        </div>
        <div className={styles.teaser_author}>
          {props.author ? (
            <>
              <img className={styles.teaser_author_avatar} src={Avatar}></img>
              <p className={styles.teaser_author_name}>{props.author}</p>
              <p className={styles.teaser_author_publishedAt}>
                {format(new Date(props.publishedAt), "dd/MM/yyyy HH:mm")}
              </p>
            </>
          ) : (
            <>
              <Skeleton variant="circular" width={40} height={40}></Skeleton>
              <Skeleton width={100}></Skeleton>
              <Skeleton width={80}></Skeleton>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
