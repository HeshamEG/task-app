import { FORM_FIELDS_TYPES } from "Constants";

export const GatwaysFormFields = (t: (key: string) => void,gatewaysOptions:Array<any>) => [
  {
    name: "name",
    label: t("Name"),
    type: FORM_FIELDS_TYPES.textfield,
  },
  {
    name: "UID",
    label: t("UID"),
    type: FORM_FIELDS_TYPES.textfield,

  }, 
    {
    name: "gateway",
    label: t("Gateway"),
    type: FORM_FIELDS_TYPES.select,
    options:gatewaysOptions
  }, 
  {
    name: "vendor",
    label: t("Vendor"),
    type: FORM_FIELDS_TYPES.textfield,
  }, 
  {
    name: "status",
    label: t("Status"),
    type: FORM_FIELDS_TYPES.checkbox,
  }, 
];

export const initialValues = {
  name:"",
  UID:null,
  vendor:"",
  status:false,
  gateway:[]
};
