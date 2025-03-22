import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EA454C", // Primary color from design
    },
    background: {
      default: "#F5F5F4", // Light rice background color
    },
    text: {
      primary: "#030303", // Title text color
      secondary: "#636364", // Subtitle text color
    },
  },
  typography: {
    fontFamily: ["Inter", "Roboto", "Helvetica", "Arial", "sans-serif"].join(
      ","
    ),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "#636364",
          },
          "& label.Mui-focused": {
            color: "#EA454C",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#636364",
            },
            "&:hover fieldset": {
              borderColor: "#EA454C",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#EA454C",
            },
          },
        },
      },
    },
  },
});

export default theme;
