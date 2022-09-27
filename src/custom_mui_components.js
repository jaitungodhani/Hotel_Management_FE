import { Select, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomSelect = styled(Select)(({ theme }) => ({
    [`& .MuiInput-input`]: {
        fontWeight: 600,
        color: "#000000",
    },
    [`& .MuiInput-root:after`]: {
        borderBottom: 0,
    },
    [`& label`]: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "30px",

        color: "#544E5D",

        opacity: 0.5,
    },

    [`& .MuiInputLabel-root.Mui-focused`]: {
        color: "red !important",
    },

}));

export const CustomTextField = styled(TextField)(({ theme }) => ({
    [`& .MuiInput-input`]: {
      fontWeight: 600,
      color: "#000000",
    },
    [`& .MuiInput-root:after`]: {
      borderBottom: 0,
    },
    [`& label`]: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "30px",
  
      color: "#544E5D",
  
      opacity: 0.5,
    },
    [`& .MuiInputLabel-root.Mui-focused`]: {
      color: "#544E5D",
    },
  }));