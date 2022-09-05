import { FORM_FIELDS_TYPES } from "apps/web-react-task/src/shared/types/form/form";

export const GatwaysFormFields =  [
  {
    name: "name",
    label: "name",
    type: FORM_FIELDS_TYPES.textfield,
  },
    {
    name: "IPv4address",
    label: "IPv4 address",
    type: FORM_FIELDS_TYPES.textfield,
  },
];

export const initialValues = {
  name: "",
  IPv4address:""
};
