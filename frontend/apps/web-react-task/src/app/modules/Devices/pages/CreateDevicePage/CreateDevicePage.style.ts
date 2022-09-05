import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px 0px",
    width:"80%",
    [theme.breakpoints.down("xs")]: {
      textAlign:"center",
      width: "100%",
    },
  },
  cardContent:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }
}));
