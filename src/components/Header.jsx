import { Box, Typography } from "@mui/material";

const Header = ({ title }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 80,
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
    </>
  );
};

export default Header;
