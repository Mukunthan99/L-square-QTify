//import styles from "qtify/src/components/Section/Section.module.css"
import { Collapse } from "@mui/material";
import Button from "../Button/Button";
import styles from "./Section.module.css";
import { useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import Grid from "../Grid/Grid";
import axios from "axios";

const Section = ({ title, endpoint }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [albums, setAlbums] = useState([]);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const getAlbums = async () => {
    try {
      let res = await axios.get(endpoint);
      //console.log(res.data);
      setAlbums(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <div>{title}</div>
        {/* <button className={styles.sectionButton} onClick={toggleCollapse}>
          {collapsed ? "Show All" : "Collapse"}
        </button> */}

        {collapsed ? (
          <button className={title === "song" ? styles.songButton:styles.sectionButton} onClick={toggleCollapse}>
            Show All
          </button>
        ) : (
          <button className={title === "song" ? styles.songButton:styles.sectionButton} onClick={toggleCollapse}>
            Collapse
          </button>
        )}
      </div>
      {title === "song" ? (
        <Carousel data={albums} />
      ) : collapsed ? (
        <Carousel data={albums} />
      ) : (
        <Grid data={albums} />
      )}
    </div>
  );
};

export default Section;
