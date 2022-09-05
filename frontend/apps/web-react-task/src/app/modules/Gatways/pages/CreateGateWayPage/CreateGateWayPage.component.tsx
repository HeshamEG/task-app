

import React, { useEffect, memo } from "react";
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from "react-redux";

import formValidations from "./helpers/validations";
import { GatwaysFormFields, initialValues } from "./helpers/fields";
import { Grid } from "@material-ui/core";
import { gatewayCreateAction, gatewayErrorAction } from "apps/web-react-task/src/configs/redux/store/actions";
import { RootState } from "apps/web-react-task/src/configs/redux/store/reducers";
import FormTemplate from "apps/web-react-task/src/shared/components/Templates/FormTemplate";
import { GATEWAY } from "apps/web-react-task/src/shared/types/models";
import { useNavigate } from "react-router-dom";

function CreateGateWay({ }: any) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dispatchCreateGateway = (gateway: GATEWAY) => dispatch(gatewayCreateAction(gateway, navigate));
  const dispatchClearErrors = () => dispatch(gatewayErrorAction());
  const { errors } = useSelector((state: RootState) => state.gateways);
  const cancel = () => navigate(-1);

  const submit = async (values: GATEWAY, actions: any) => {
    try {
      let payload: GATEWAY = { IPv4address: values.IPv4address, name: values.name }
      dispatchCreateGateway(payload)
    } catch (e) {
      console.error(e)
    }
  };

  useEffect(() => {
    return () => { dispatchClearErrors() }
  }, [])

  return (
    <Grid container>
      {errors?.error?.message && <MuiAlert severity="error">{errors?.error?.message}</MuiAlert>}
      <FormTemplate
        title={'Add Gateway'}
        submit={submit}
        formValidations={formValidations}
        onCancel={() => cancel()}
        formFields={GatwaysFormFields}
        initialValues={initialValues}
      />
    </Grid>
  );
}
export default memo(CreateGateWay);
