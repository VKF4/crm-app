import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ title, tabButton }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box
        sx={{
          width: 250,
          height: 100,
          backgroundColor: "#323232",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          display: "flex",
          alignItems: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          background: "linear-gradient(to right, #323232, #424242)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            padding: 2,
            fontWeight: 600,
            letterSpacing: "0.5px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          {title}
        </Typography>
      </Box>
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
              fontSize: 16,
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
