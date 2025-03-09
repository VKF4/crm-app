import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ tabButton }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box
        sx={{
          width: 250,
          flexGrow: 1,
          backgroundColor: "#658092",
        }}
      >
        {tabButton.map((button, index) => (
          <Button
            key={index}
            variant="text"
            startIcon={button.icon}
            onClick={() => navigate(button.path)}
            sx={{
              color: "white",
              fontSize: 20,
              width: "100%",
              height: 65,
              textTransform: "none",
              justifyContent: "flex-start",
              paddingLeft: 2,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            {button.text}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
