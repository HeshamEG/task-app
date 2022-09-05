import { useCallback, useEffect, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import DataTable from '../../../../../shared/components/Templates/TableTemplate'
import { gatewayInfoGetAction, gatewayInfoSetAction, deviceRemoveAction } from 'apps/web-react-task/src/configs/redux/store/actions';
import { RootState } from 'apps/web-react-task/src/configs/redux/store/reducers';
import { useNavigate } from 'react-router-dom';

const rowsKeys = ['UID', 'status', 'vendor', 'createdAt', 'customCell'];

const GatewayInfo = (props: any) => {

    const navigate =useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const { selectedGatewayInfo } = useSelector((state: RootState) => state.gateways);

    const dispatchGetGateway = () => dispatch(gatewayInfoGetAction(id));
    const navigateToCreateGateway = () => navigate('/device/create/');

    const dispatchClearGatewayInfo = () => dispatch(gatewayInfoSetAction());
    const dispatchRemoveDevice = (deviceId: number) => dispatch(deviceRemoveAction(deviceId, `${id}`));

    useEffect(() => {
        dispatchGetGateway();
    }, [dispatch])

    useEffect(() => {
        return () => { dispatchClearGatewayInfo() }
    }, [])

    return (<>
        <Grid container direction={'column'}>
            <Typography >Id : {selectedGatewayInfo && selectedGatewayInfo[0]?.id}</Typography>
            <Typography >Name : {selectedGatewayInfo && selectedGatewayInfo[0]?.name}</Typography>
            <Typography >IP : {selectedGatewayInfo && selectedGatewayInfo[0]?.IPv4address}</Typography>
        </Grid>
        <Grid container justifyContent={'center'} alignItems={'center'} style={{ minWidth: '100%' }}>
            <DataTable
                data={selectedGatewayInfo && selectedGatewayInfo[0]?.peripheralDevices}
                title={'Gateway Devices Info'}
                fabAction={navigateToCreateGateway}
                customCellRow={(row: any) => <div style={{
                    cursor: 'pointer'
                }}
                onClick={() => {
                   dispatchRemoveDevice(row?.id)
                   }} >{'remove'}</div>}
                keys={rowsKeys} />

        </Grid>
    </>
    );
}
export default memo(GatewayInfo);
