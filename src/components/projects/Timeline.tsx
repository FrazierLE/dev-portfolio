import { Stack, Box } from "@mui/material";
import { GrNext, GrPrevious } from "react-icons/gr";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import { useState } from "react";

const Timeline = () => {
  const [open, setOpen] = useState(false);
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
    <Stack width={"100%"} justifyContent={"center"} alignItems={"center"}>
      TIMELINE
      <Stack direction={'row'} width={'100%'} alignItems={'center'}>
        <div style={{ backgroundColor: "#d1d4c9", width: '100%', height: '1px' }}></div>
        {strengthTrainingExperinece.map((experience, index) => {
          return (
            <>
            <Box onClick={() => setOpen(!open)} sx={{ cursor: 'pointer'}}>
              {open ? <CiCircleChevDown color="#d1d4c9" size={30}/> : <CiCircleChevUp color="#d1d4c9" size={30}/>}
            </Box>
            <div style={{ backgroundColor: "#d1d4c9", width: '100%', height: '1px' }}></div>
            {open && (
              <Stack direction={"column"}>
                <Box>{experience.company}</Box>
                <Box>{experience.title}</Box>
              </Stack>
            )}
            </>
          )
        })}
      </Stack>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          marginBottom: 2,
          border: "2px solid #556e53",
          flexDirection: "column",
          borderRadius: 15,
          width: 'max-content',
          padding: 2,
          cursor: "pointer",
        }}
        onClick={() => console.log("Company Clicked")}
      >
        <span>AUGUST</span>
        <span>2022</span>
      </Box> */}
    </Stack>
  );
};

export default Timeline;
