import { FORM_FIELDS_TYPES } from "Constants";

export const GatwaysFormFields = (t: (key: string) => void) => [
  {
    name: "name",
    label: t("name"),
    type: FORM_FIELDS_TYPES.textfield,
  },
    {
    name: "IPv4address",
    label: t("IPv4 address"),
    type: FORM_FIELDS_TYPES.textfield,
  }, 
];

export const initialValues = {
  name: "",
  IPv4address:""
};
