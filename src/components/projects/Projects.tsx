import { Grid, Typography, Card, CardHeader, CardContent } from "@mui/material";
import useProjects from "./useProjects";

const cardStyle = {
  width: "100%",
  height: "200px",
  minWidth: "350px",
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
const { view, setView, projectsArray } = useProjects()
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
      {projectsArray?.map((item, index) => (
      <Grid item container direction="column" width="50%" margin={1}>
        <Card sx={cardStyle}>
          <CardContent>
            <CardHeader title={item.title} subheader={item.date} />
            <Typography variant="body1">{item.description}</Typography>
            <div>
              {item.technologies && (
                <Typography variant="body2">Technologies: {item.technologies}</Typography>
              )}
            </div>
            <div>
              {item.githubLink && (
                <a href={item.githubLink} target="_blank" rel="noreferrer">
                  Github
                </a>
              )}
              {item.liveLink && (
                <a href={item.liveLink} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
            </div>
          </CardContent>
          </Card>
      </Grid>

      ))}
    </Grid>
  );
};

export default Projects;
