import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import { useState } from "react";

const Timeline = () => {
  const [open, setOpen] = useState<undefined | number>(0);
  const strengthTrainingExperience = [
    {
      company: "Gateway Ticketing Systems",
      title: "Front End Developer II",
      date: "July 2023 - Present",
    },
    {
      company: "Third Culture Technology LLC",
      title: "Freelance Front End Developer",
      date: "March 2023 - Present",
    },
    {
      company: "Turing School of Software & Design",
      title: "Front End Engineering Student",
      date: "August 2022 - March 2023",
    },
    {
      company: "Summit Strong",
      title: "Strength & Conditioning Coach",
      date: "July 2021 - Present",
    },
    {
      company: "Core Progression",
      title: "Personal Trainer",
      date: "July 2021 - March 2022",
    },
    {
      company: "Michigan Elite Conditioning for Athletes",
      title: "Assistant Strength & Conditioning Coach",
      date: "Sept 2020-June 2021",
    },
    {
      company: "STALTA",
      title: "Strength Coach",
      date: "May 2017 - Sept 2020",
    },
    {
      company: "Hope College",
      title: "Exercise Science Student",
      date: "May 2011-2015",
    },
  ];

  return (
    <Grid
      container
      width={{ xs: "90%", sm: "80%", md: "70%" }} // Responsive width
      justifyContent={"center"}
      alignItems={"center"}
      marginBottom={3}
      direction="column"
    >
      <Typography variant="h6">TIMELINE</Typography>
      <Grid container direction="column" width="100%" alignItems="center">
        {strengthTrainingExperience.map((experience, index) => (
          <Grid
            item
            key={index}
            container
            direction="column"
            width={{ xs: "90%", sm: "70%", md: "50%" }}
            alignItems="center"
            position="relative"
          >
            {index !== 0 && (
              <div
                style={{
                  backgroundColor: "#d1d4c9",
                  width: "1px",
                  height: "50px",
                }}
              ></div>
            )}
            <Box
              onClick={() =>
                setOpen((prev) => {
                  if (prev === undefined) return index;
                  return prev === index ? undefined : index;
                })
              }
              sx={{ position: "relative", zIndex: 1 }}
            >
              {open !== index ? (
                <CiCircleChevDown
                  color="#d1d4c9"
                  size={30}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <CiCircleChevUp
                  color="#556e53"
                  size={30}
                  style={{ cursor: "pointer" }}
                />
              )}
            </Box>
            {open === index && (
              <Grid
                container
                direction="column"
                width={{ xs: "100%", sm: "300px" }} // Full width on small screens
                height={"300px"}
                alignItems={index % 2 ? "flex-end" : "flex-start"}
                position={"absolute"}
                top={0}
                left={index % 2 === 0 ? "0" : "61%"}
                zIndex={2}
                sx={{
                  transform:
                    index % 2 === 0 ? "translateX(-35%)" : "translateX(0)",
                  "@media (max-width: 600px)": {
                    left: "0", // Stack on top of each other on small screens
                    transform: "none",
                  },
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "40px",
                    height: "1px",
                    backgroundColor: "#d1d4c9",
                    top: index === 0 ? "5%" : "20%",
                    left: index % 2 === 0 ? "100%" : "-13%",
                    transform:
                      index % 2 === 0 ? "translateY(-50%)" : "translateY(-55%)",
                  }}
                />
                <Card
                  sx={{
                    margin: "10px 0 0",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <CardHeader
                    sx={{ textAlign: "center" }}
                    title={experience.company}
                  />
                  <CardContent>
                    <Typography textAlign={"center"}>
                      {experience.title}
                    </Typography>
                    <Typography textAlign={"center"}>
                      {experience.date}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Timeline;
