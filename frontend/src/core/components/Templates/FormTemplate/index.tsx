/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { memo } from "react";
import { CardHeader, Box } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import unset from "lodash/unset";
import { Grid } from "@material-ui/core";
import { Formik, getIn } from "formik";
import { useTranslation } from "react-i18next";
import { DynamicForm, BasicButton } from "core/components";
import { useStyles } from "./style";



function FormTemplate({ formFields, initialValues, submit, formValidations, onCancel, title }: any) {
  const classes = useStyles();
  const [t, i18n] = useTranslation(["form"]);
  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={formValidations()}
        onSubmit={submit}
      >
        {(formik) => {
          const {
            errors,
            values,
            touched,
            status,
            handleChange,
            setFieldValue,
            handleSubmit,
          } = formik;

          const handleInputChange = (e: any) => {
            unset(status, "nonFieldErrors");
            const serverError = getIn(status, e.target.name);
            if (touched && serverError) {
              unset(status, e.target.name);
            }
            handleChange(e);
          };

          const setField = (name: string, value: string) => {
            if (getIn(touched, name) && getIn(status, name)) {
              unset(status, name);
            }
            setFieldValue(name, value);
          };

          return (
            <div className={classes.root}>

              <CardHeader title={t(title)} />
              <CardContent
                className={classes.cardContent}
              >
                <Grid
                  container
                  justifyContent={"center"}
                  direction="column"
                  spacing={0}
                >
                  {formFields.map(
                    (item: any, index: number) => (
                      <Grid key={index} item xl={6}>
                        <Box width={"100%"} ml={0} mb={5}>
                          <DynamicForm
                            type={item.type}
                            errors={errors}
                            status={status}
                            handleInputChange={handleInputChange}
                            label={item.label}
                            name={item.name}
                            values={values}
                            touched={touched}
                            setField={setField}
                            setFieldValue={setFieldValue}
                            selectItems={item?.options}
                          ></DynamicForm>
                        </Box>
                      </Grid>
                    )
                  )}
                </Grid>
                <Grid >
                  <BasicButton
                    style={{ width: "1rem", marginRight: "1rem" }}
                    title={t("Add")}
                    color="primary"
                    onClick={(e: any): void => {
                      handleSubmit(e);
                    }}
                  />
                  <BasicButton
                    style={{ width: "1rem" }}
                    title={t("Back")}
                    color="secondary"
                    onClick={(e: any): void => {
                      onCancel();
                    }}
                  />
                </Grid>
              </CardContent>
            </div>
          );
        }}
      </Formik>

    </>
  );
}
export default memo(FormTemplate);
