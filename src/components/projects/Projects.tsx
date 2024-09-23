import { Grid, Typography, Card } from "@mui/material";
import { useState } from "react";

const cardStyle = {
  width: "100%",
  height: "200px",
  backgroundColor: "#f4f5f5",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transitionProperty: "background-color",
  transitionDuration: ".5s",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#556e53",
  },
  "&:active": {
    backgroundColor: "#d1d4c9",
  },
};

const Projects = () => {
  const [view, setView] = useState("");
  return (
    <Grid
      container
      width={{ xs: "90%", sm: "80%", md: "70%" }} // Responsive width
      justifyContent={"center"}
      alignItems={"center"}
      marginBottom={3}
      direction="column"
      height={"auto"}
    >
      <Typography variant="h6">PROJECTS</Typography>
      <Grid item container direction="column" width="50%" margin={1}>
        <Card sx={cardStyle}>Project 1</Card>
      </Grid>
      <Grid item container direction="column" width="50%" margin={1}>
        <Card sx={cardStyle}>Project 2</Card>
      </Grid>
      <Grid item container direction="column" width="50%" margin={1}>
        <Card sx={cardStyle}>Project 3</Card>
      </Grid>
    </Grid>
  );
};

export default Projects;
