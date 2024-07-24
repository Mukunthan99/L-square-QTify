import React from "react";
//import './.css'; // Import your CSS for styling
import styles from "./Grid.module.css";
import AlbumCard from "../AlbumCard/AlbumCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

const AlbumGrid = ({ data }) => {
  //console.log(data);
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        gap={2}
        //justifyContent={"space-between"}
      >
        {data.map((album) => (
          <Grid key={album.id}>
            <AlbumCard data={album} type={'album'}></AlbumCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AlbumGrid;
