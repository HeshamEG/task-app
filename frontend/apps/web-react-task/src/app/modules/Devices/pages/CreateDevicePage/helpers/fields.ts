import { FORM_FIELDS_TYPES } from "apps/web-react-task/src/shared/types/form/form";

export const GatwaysFormFields = (gatewaysOptions:Array<any>) => [
  {
    name: "name",
    label: "Name",
    type: FORM_FIELDS_TYPES.textfield,
  },
  {
    name: "UID",
    label: "UID",
    type: FORM_FIELDS_TYPES.textfield,

  },
    {
    name: "gateway",
    label: "Gateway",
    type: FORM_FIELDS_TYPES.select,
    options:gatewaysOptions
  },
  {
    name: "vendor",
    label: "Vendor",
    type: FORM_FIELDS_TYPES.textfield,
  },
  {
    name: "status",
    label: "Status",
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
