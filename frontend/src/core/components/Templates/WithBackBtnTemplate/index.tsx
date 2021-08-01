import React, { useEffect, useCallback, memo } from "react";
import { Grid } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useStyles } from "./style"

function WithBackBtnTemplate({ history, children }: any) {
    const classes = useStyles();
    const back = () => history.goBack()
    return (
        <Grid container className={classes.root}>
            <ArrowBackIcon
                className={classes.backBtn}
                onClick={() => back()} />
            {children}
        </Grid>
    );
}
export default memo(WithBackBtnTemplate);
