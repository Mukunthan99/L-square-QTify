import React from "react";
import styles from "./AlbumCard.module.css";
import { Chip, Tooltip } from "@mui/material";

function AlbumCard({ data, type }) {
    //console.log(data)
  const getCard = (type) => {
    switch (type) {
      case "album": {
        
        const { image, follows, title, slug, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img className={styles.image} src={image} alt="album" />
                <div className={styles.banner}>
                  <Chip
                    label={`${follows} Follows`}
                    size="small"
                    className={styles.chip}
                  />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }
      case "song": {
        //console.log(data)
        const { image, likes, title } = data;

        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img className={styles.image}  src={image} alt="song" />
              <div className={styles.banner}>
                <div className={styles.pill}>
                  <p>{likes} Likes</p>
                </div>
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
}

export default AlbumCard;
