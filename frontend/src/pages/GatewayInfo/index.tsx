import React, { useCallback, useEffect, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from "react-redux";
import { Typography } from '@material-ui/core';

import { actions } from "core/store"
import { RootState } from "core/store/reducers";
import DataTable from "core/components/Templates/TableTemplate"

const rowsKeys = ['UID', 'status', 'vendor', 'createdAt', 'customCell']
const GatewayInfo = (props: any) => {
    const { history, match: { params: { id } } } = props
    const dispatch = useDispatch();
    const { selectedGatewayInfo } = useSelector((state: RootState) => state.gateways);
    const dispatchGetGateway = useCallback(() => dispatch(actions.gatewayInfoGetAction(id)), [dispatch]);
    const navigateToCreateGateway = () => history.push("/device/create/")

    const dispatchClearGatewayInfo = useCallback(() => dispatch(actions.gatewayInfoSetAction()), [dispatch]);
    const dispatchRemoveDevice = useCallback((deviceId: number) => dispatch(actions.deviceRemoveAction(deviceId, id)), [dispatch]);

    useEffect(() => {
        dispatchGetGateway()
        return () => { dispatchClearGatewayInfo() }
    }, [id])

    return (<>
        <Grid container direction={"column"}>
            <Typography >Id : {selectedGatewayInfo && selectedGatewayInfo[0]?.id}</Typography>
            <Typography >Name : {selectedGatewayInfo && selectedGatewayInfo[0]?.name}</Typography>
            <Typography >IP : {selectedGatewayInfo && selectedGatewayInfo[0]?.IPv4address}</Typography>
        </Grid>
        <Grid container justifyContent={'center'} alignItems={'center'} style={{ minWidth: "100%" }}>
            <DataTable
                data={selectedGatewayInfo && selectedGatewayInfo[0]?.peripheralDevices}
                history={history}
                title={'Gateway Devices Info'}
                fabAction={navigateToCreateGateway}
                customCellRow={(row: any) => <div style={{
                    cursor: "pointer"
                }} onClick={() => { dispatchRemoveDevice(row?.id) }} >{'remove'}</div>}
                keys={rowsKeys} />

        </Grid>
    </>
    );
}
export default memo(GatewayInfo);
