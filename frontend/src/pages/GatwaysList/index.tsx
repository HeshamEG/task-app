import React, { useCallback, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { actions } from "core/store"
import { RootState } from "core/store/reducers";
import DataTable from "core/components/Templates/TableTemplate"

export default function (props: any) {
    const { history } = props;
    const dispatch = useDispatch();
    const dispatchGetGateways = useCallback(() => dispatch(actions.gatewaysGetAction()), [dispatch]);
    const dispatchClearGetGateways = useCallback(() => dispatch(actions.gatewaysSetAction()), [dispatch]);

    const { gateways } = useSelector((state: RootState) => state.gateways);
    const navigateToCreateGateway = () => history.push("/gateway/create")

    useEffect(() => {
        dispatchGetGateways()
        return () => {
            dispatchClearGetGateways();
        }
    }, [])

    return (
        <Grid container justifyContent={'center'} alignItems={'center'} style={{ minWidth: "100%" }}>
            <DataTable
                data={gateways}
                history={history}
                title={'Gateways Table'}
                fabAction={navigateToCreateGateway}
                customCellRow={(row: any) => <Link to={`/gateway/${row.id}`} >{'check info'}</Link>}
                keys={['name', 'createdAt', 'IPv4address', 'customCell']} />

        </Grid>
    );
}
