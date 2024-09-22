import {
  Stack,
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from "@mui/material";
// import { GrNext, GrPrevious } from "react-icons/gr";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import { useState } from "react";

const Timeline = () => {
  const [open, setOpen] = useState<undefined | number>(undefined);
  const strengthTrainingExperinece = [
    {
      company: "Gateway Ticketing Systems",
      title: "Front End Developer II",
      date: 'July 2023 - Present",'
    },
    {
      company: "Third Culture Technology LLC",
      title: "Freelance Front End Developer",
      date: 'March 2023 - Present'
    },
    {
      company: "Turing School of Software & Design",
      title: "Front End Engineering Student",
      date: 'August 2022 - March 2023'
    },
    {
      company: "Summit Strong",
      title: "Strength & Conditioning Coach",
      date: "July 2021 - Present",
    },
    {
      company: "Core Progression",
      title: "Personal Trainer",
      date: "July 2021 - March 2022"
    },
    {
      company: "Michigan Elite Conditioning for Athletes",
      title: "Assistant Strength & Conditioning Coach",
      date: "Sept 2020-June 2021"
    },
    {
      company: "STALTA",
      title: "Strength Coach",
      date: "May 2017 - Sept 2020",
    },
  ];
  return (
    <Stack width={"80%"} justifyContent={"center"} alignItems={"center"}>
      TIMELINE
      <Stack
        direction={"row"}
        width={"100%"}
        alignItems={"center"}
        overflow={"hidden"}
        marginTop={50}
        position={'absolute'}
      >
        <div
          style={{ backgroundColor: "#d1d4c9", width: "15%", height: "1px" }}
        ></div>
        {strengthTrainingExperinece.map((experience, index) => {
          return (
            <>
              <Stack direction={"row"} width={"10%"} alignItems={"center"}>
                <div
                  style={{
                    backgroundColor: "#d1d4c9",
                    width: "100%",
                    height: "1px",
                  }}
                ></div>
                <Box
                  onClick={() =>
                    setOpen((prev) => {
                      if (prev === undefined) return index;
                      return prev === index ? undefined : index;
                    })
                  }
                  sx={{ cursor: "pointer" }}
                >
                  {open === undefined ? (
                    <CiCircleChevDown color="#d1d4c9" size={30} />
                  ) : (
                    <CiCircleChevUp color="#d1d4c9" size={30} />
                  )}
                </Box>
              </Stack>
              {open === index && (
                <Card
                  sx={{
                    margin: 1,
                    width: "max-content",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <CardHeader title={experience.company} />
                  <CardContent>
                    <Typography>{experience.title}</Typography>
                    <Typography>{experience.date}</Typography>
                  </CardContent>
                </Card>
              )}
            </>
          );
        })}
        <div
          style={{ backgroundColor: "#d1d4c9", width: "15%", height: "1px" }}
        ></div>
      </Stack>
    </Stack>
  );
};

export default Timeline;
