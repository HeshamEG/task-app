

import { useEffect, useCallback, memo } from "react";
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from "react-redux";

import formValidations from "./helpers/validations";
import { GatwaysFormFields, initialValues } from "./helpers/fields";
import { Grid } from "@material-ui/core";
import { deviceCreateAction, deviceErrorAction, gatewaysGetAction } from "apps/web-react-task/src/configs/redux/store/actions";
import { RootState } from "apps/web-react-task/src/configs/redux/store/reducers";
import FormTemplate from "apps/web-react-task/src/shared/components/Templates/FormTemplate";
import { DEVICE } from "apps/web-react-task/src/shared/types/models";
import { useNavigate } from "react-router-dom";

function CreateDevice () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dispatchCreateDevice = (device: DEVICE) => dispatch(deviceCreateAction(device));
  const dispatchClearErrors = () => dispatch(deviceErrorAction());
  const getGateways = useCallback(() => dispatch(gatewaysGetAction()), [dispatch]);
  const { gateways } = useSelector((state: RootState) => state.gateways);
  const { errors } = useSelector((state: RootState) => state.devices);

  const cancel = () => navigate(-1);

  const submit = async (values: DEVICE, _actions: any) => {
    try {
      let payload: DEVICE = { UID: values.UID, vendor: values.vendor, gateway: values.gateway, status: values.status ? 0 : 1 }
      dispatchCreateDevice(payload)
    } catch (e) {
      console.log(e)
    }
  };
  useEffect(() => {
    getGateways()
    return () => { dispatchClearErrors() }
  }, []);

  return (
    <Grid container>
      {errors?.error && <MuiAlert severity="error">{errors?.error}</MuiAlert>}
      <FormTemplate
        title={'Add Device'}
        submit={submit}
        formValidations={formValidations}
        onCancel={() => cancel()}
        formFields={GatwaysFormFields(gateways)}
        initialValues={initialValues}
      />
    </Grid>
  );
}
export default memo(CreateDevice);
