import {
  Stack,
  Card,
  Typography,
  CardHeader,
  CardContent,
} from "@mui/material";

const Experience = () => {
  const engineerExperience = [
    {
      company: "Gateway Ticketing Systems",
      title: "Front End Developer II",
      projects: [],
      techStack: ["React", "Storybook", "Material UI"],
    },
    {
      company: "Third Culture Technology LLC",
      title: "Freelance Front End Developer",
      projects: ["React", "Material UI", "Tailwind CSS"],
    },
    {
      company: "Turing School of Software & Design",
      title: "Front End Engineering Student",
    },
  ];
  const strengthTrainingExperinece = [
    {
      company: "Summit Strong",
      title: "Strength & Conditioning Coach",
    },
    {
      company: "Core Progression",
      title: "Personal Trainer",
    },
    {
      company: "Michigan Elite Conditioning for Athletes",
      title: "Assistant Strength & Conditioning Coach",
    },
    {
      company: "STALTA",
      title: "Strength Coach",
    },
  ];
  return (
    <Stack
      width={"100%"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography>EXPERIENCE</Typography>
      {engineerExperience.map((item) => (
        <Card
          sx={{
            margin: 1,
            width: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CardHeader title={item.company} />
          <CardContent>
            <Typography>{item.title}</Typography>
          </CardContent>
        </Card>
      ))}
      {strengthTrainingExperinece.map((item) => (
        <Card
          sx={{
            margin: 1,
            width: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CardHeader title={item.company} />
          <CardContent>
            <Typography>{item.title}</Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default Experience;
