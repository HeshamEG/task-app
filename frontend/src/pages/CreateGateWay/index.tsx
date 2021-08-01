/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, memo, useCallback } from "react";
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";


import { actions } from "core/store"
import { GATEWAY } from "core/models"
import { RootState } from "core/store/reducers";
import FormTemplate from "core/components/Templates/FormTemplate"
import formValidations from "./validations";
import { GatwaysFormFields, initialValues } from "./fields";
import { Grid } from "@material-ui/core";

function CreateGateWay({ history }: any) {
  const dispatch = useDispatch();
  const [t, i18n] = useTranslation(["form"]);
  const dispatchCreateGateway = (gateway: GATEWAY) => dispatch(actions.gatewayCreateAction(gateway, history));
  const dispatchClearErrors = () => dispatch(actions.gatewayErrorAction());
  const { errors } = useSelector((state: RootState) => state.gateways);
  const cancel = () => history.goBack()

  const submit = async (values: GATEWAY, actions: any) => {
    try {
      let payload: GATEWAY = { IPv4address: values.IPv4address, name: values.name }
      dispatchCreateGateway(payload)
    } catch (e) {
      console.log(e)
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
        formFields={GatwaysFormFields(t)}
        initialValues={initialValues}
      />
    </Grid>
  );
}
export default memo(CreateGateWay);
