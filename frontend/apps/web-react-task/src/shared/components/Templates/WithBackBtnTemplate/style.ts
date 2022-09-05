import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root:{padding:theme.spacing(2)},
    backBtn: {
        float: "right",
        cursor: "pointer",
        margin: "2rem 0rem",
        display: "inline-block"
    },
}))
