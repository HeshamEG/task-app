import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  form: {
    width: "90%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  formInput: {
    width: "100% !important",
  },
  fileInput: {
    padding: "1rem",
    border: "2px solid #044482",
    borderRadius: "9px",
    background: "#fff",
    width: "100%",

    "&:hover": {
      border: "2px dashed #044482",
      borderRadius: "9px",
    },
  },
}));
