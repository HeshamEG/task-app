import { memo } from 'react';
import { Grid } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useStyles } from './style'
import { useNavigate } from 'react-router-dom';

function WithBackBtnTemplate({ children }: any) {
    const classes = useStyles();
    const navigate = useNavigate();

    const back = () => navigate(-1);

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
