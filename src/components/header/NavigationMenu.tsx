import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { Box, List, ListItem, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavigationMenu = ({
  open,
  rotate,
}: {
  open: boolean;
  rotate: () => void;
}) => {
  const navigate = useNavigate();
  const navigateToPage = (arg: string) => {
    rotate();
    navigate(`/${arg}`);
  };

  return (
    <Stack alignItems={"flex-start"} width={"100%"}>
      <Stack
        sx={{ backgroundColor: open ? "#556e53" : "#152a38" }}
        width={"20vw"}
      >
        <Box
          sx={{ paddingLeft: "10px", paddingTop: "11px", cursor: "pointer" }}
          onClick={rotate}
        >
          {open ? (
            <CgClose size={30} color="white" />
          ) : (
            <RxHamburgerMenu size={30} color="white" />
          )}
        </Box>
      </Stack>
      {open && (
        <List
          sx={{
            backgroundColor: "#556e53",
            height: "60vh",
            position: "absolute",
            marginTop: 5.9,
            width: "20vw",
            cursor: "pointer",
          }}
        >
          <ListItem onClick={() => navigateToPage("portfolio")}>Home</ListItem>
          <ListItem onClick={() => navigateToPage("portfolio/projects")}>
            Projects
          </ListItem>
          <ListItem onClick={() => navigateToPage("portfolio/experience")}>
            Timeline
          </ListItem>
        </List>
      )}
    </Stack>
  );
};

export default NavigationMenu;
