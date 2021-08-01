/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useCallback, memo } from "react";
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import formValidations from "./validations";
import { GatwaysFormFields, initialValues } from "./fields";
import { actions } from "core/store"
import { DEVICE } from "core/models"
import { RootState } from "core/store/reducers";
import FormTemplate from "core/components/Templates/FormTemplate"
import { Grid } from "@material-ui/core";

function CreateDevice({ history, match: { params: { id } } }: any) {
  const dispatch = useDispatch();
  const [t, i18n] = useTranslation(["form"]);
  const dispatchCreateDevice = (device: DEVICE) => dispatch(actions.deviceCreateAction(device));
  const dispatchClearErrors = () => dispatch(actions.deviceErrorAction());
  const getGateways = useCallback(() => dispatch(actions.gatewaysGetAction()), [dispatch]);
  const { gateways } = useSelector((state: RootState) => state.gateways);
  const { errors } = useSelector((state: RootState) => state.devices);

  const cancel = () => history.goBack()


  const submit = async (values: DEVICE, actions: any) => {
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
  }, [])

  return (
    <Grid container>
      {errors?.error && <MuiAlert severity="error">{errors?.error}</MuiAlert>}
      <FormTemplate
        title={'Add Device'}
        submit={submit}
        formValidations={formValidations}
        onCancel={() => cancel()}
        formFields={GatwaysFormFields(t, gateways)}
        initialValues={initialValues}
      />
    </Grid>
  );
}
export default memo(CreateDevice);
