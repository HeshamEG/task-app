/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { memo } from "react";
import TextField from "./TextField"
import { DateField } from "./DateField"
import { FORM_FIELDS_TYPES } from "Constants";

import { TextAreaField } from "./TextAreaField"
import { Select } from "./Select"
import { Checkbox } from "./Checkbox"




interface DynamicFormProps {
  handleInputChange?: (event: any) => void;
  name: string;
  label: string;
  type: string;
  touched?: any;
  errors?: any;
  values?: any;
  setField?: any;
  setFieldValue?: any;
  selectItems?: Array<any>;
  status?: any;
  editing?: boolean;

}

const DynamicForm = (props: DynamicFormProps) => {
  let {
    handleInputChange,
    errors,
    type,
    label,
    name,
    touched,
    values,
    setField,
    selectItems,
    status,
  } = props;

  switch (type) {
    case FORM_FIELDS_TYPES.textfield:
      return (
        <TextField
          label={label}
          name={name}
          type={type}
          values={values}
          errors={errors}
          handleInputChange={handleInputChange}
          setField={setField}
          status={status}
          touched={touched}
        />
      );

    case FORM_FIELDS_TYPES.textarea:
      return (
        <TextAreaField
          label={label}
          name={name}
          type={type}
          values={values}
          errors={errors}
          handleInputChange={handleInputChange}
          setField={setField}
          status={status}
          touched={touched}
        />)

    case FORM_FIELDS_TYPES.date:
      return (
        <DateField
          label={label}
          name={name}
          type={type}
          errors={errors}
          handleInputChange={handleInputChange}
          setField={setField}
          status={status}
          touched={touched}
          values={values}
        />
      );

    case FORM_FIELDS_TYPES.checkbox:
      return (
        <Checkbox
          label={label}
          name={name}
          handleInputChange={handleInputChange}
          setField={setField}
          values={values}
          status={status}
        />
      );
    case FORM_FIELDS_TYPES.select:
      return (
        <Select
          label={label}
          name={name}
          errors={errors}
          setField={setField}
          status={status}
          touched={touched}
          values={values}
          selectItems={selectItems}

        />
      );
    default:
      return <></>;
  }
};
export default memo(DynamicForm);
export type { DynamicFormProps };
