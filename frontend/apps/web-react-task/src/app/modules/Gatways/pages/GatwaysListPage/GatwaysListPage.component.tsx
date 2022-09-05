import { useEffect ,memo } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { gatewaysGetAction, gatewaysSetAction } from 'apps/web-react-task/src/configs/redux/store/actions';
import { RootState } from 'apps/web-react-task/src/configs/redux/store/reducers';
import DataTable from '../../../../../shared/components/Templates/TableTemplate'

const GatewayListPage = () =>{

    const navigate =useNavigate();
    const dispatch = useDispatch();

    const dispatchGetGateways = () => dispatch(gatewaysGetAction());
    const dispatchClearGetGateways = () => dispatch(gatewaysSetAction([]));

    const navigateToCreateGateway = () => navigate('/gateway/create');

    const { gateways,loading } = useSelector((state: RootState) => state.gateways);

    useEffect(() => {
        dispatchGetGateways();
    }, [dispatch]);

    useEffect(() => {
        return () => {
            dispatchClearGetGateways();
        }
    }, []);

    return (
        <Grid container justifyContent={'center'} alignItems={'center'} style={{ minWidth: '100%' }}>
          {loading?
                  <span>loading...</span> :
                  <DataTable
                    data={gateways}
                    title={'Gateways Table'}
                    fabAction={navigateToCreateGateway}
                    customCellRow={(row: any) => <Link to={`/gateway/${row.id}`} >{'check info'}</Link>}
                    keys={['name', 'createdAt', 'IPv4address', 'customCell']} />}
        </Grid>
    );
}

export default memo(GatewayListPage);
