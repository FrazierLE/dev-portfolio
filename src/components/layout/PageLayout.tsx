import { Route, Routes } from "react-router-dom";
import FooterLayout from "../footer/FooterLayout";
import HeaderLayout from "../header/HeaderLayout";
import { Stack } from "@mui/material";
import React from "react";
import Projects from "../projects/Projects";
import Timeline from "../projects/Timeline";

const PageLayout = () => {
  const [hamburgerOpen, setHamburgerOpen] = React.useState(false);
  const mainStyle = {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#152a38",
    transform: hamburgerOpen
      ? "translate(5%, 20%) rotate(20deg)"
      : "translate(0%) rotate(0deg)",
  };

  const rotate = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100vw"}
      height={"100vh"}
      sx={{ backgroundColor: "#152a38" }}
    >
      <HeaderLayout open={hamburgerOpen} rotate={rotate} />
      <Stack sx={mainStyle}>
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Timeline />} />
        </Routes>
        <FooterLayout />
      </Stack>
    </Stack>
  );
};

export default PageLayout;
