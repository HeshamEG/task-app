import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      hieght: "100vh",
      width: "100%",
      overflow: "hidden",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        margin:0,
        padding:0
      },
    },
    table: {
        minWidth: 500,
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            margin:0,
            padding:0
          },
  },
  title: {
      margin: "3rem 0",
      fontWeight: "bold",
      fontSize: 24
  },
  addbtn:{
      position:"fixed",
      bottom:theme.spacing(4),
      right:theme.spacing(4)
  }
}))
