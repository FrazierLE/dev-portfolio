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
  const [open, setOpen] = useState<undefined | number>(0);
  const strengthTrainingExperience = [
    {
      company: "Gateway Ticketing Systems",
      title: "Front End Developer II",
      date: 'July 2023 - Present'
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
    <Stack width={"80%"} justifyContent={"center"} alignItems={"center"} direction={'column'} marginBottom={3} marginTop={10}>
    {/* TIMELINE */}
    <Stack
      direction={"column"}
      width={"100%"}
      alignItems={"center"}
    >
      {strengthTrainingExperience.map((experience, index) => {
        return (
          <Stack key={index} direction={"column"} width={"50%"} alignItems={"center"} position={'relative'}>
            {(index !== 0) && (
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
                <CiCircleChevDown color="#d1d4c9" size={30} style={{ cursor: 'pointer' }} />
              ) : (
                <CiCircleChevUp color="#556e53" size={30} style={{ cursor: 'pointer' }} />
              )}
            </Box>
            {open === index && (
              <Stack
                direction={'column'}
                width={'300px'}
                height={'300px'}
                alignItems={index % 2 ? 'flex-end' : 'flex-start'}
                position={'absolute'}
                top={0}
                left={index % 2 === 0 ? '0' : '60%'}
                zIndex={2}
                sx={{ transform: index % 2 === 0 ? 'translateX(-25%)' : 'translateX(0)' }}
              >
                <div
                  style={{
                    position: 'absolute',
                    width: '40px',
                    height: '1px', 
                    backgroundColor: '#d1d4c9',
                    top: index === 0 ? '5%' : '20%',
                    left: index % 2 === 0 ? '100%' : '-13%', 
                    transform: index % 2 === 0 ? 'translateY(-50%)' : 'translateY(-55%)',
                  }}
                />
                <Card
                  sx={{
                    margin: '10px 0 0', 
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <CardHeader sx={{ textAlign: 'center' }} title={experience.company} />
                  <CardContent>
                    <Typography textAlign={'center'}>{experience.title}</Typography>
                    <Typography textAlign={'center'}>{experience.date}</Typography>
                  </CardContent>
                </Card>
              </Stack>
            )}
          </Stack>
        );
      })}
    </Stack>
  </Stack>
  );
};

export default Timeline;
