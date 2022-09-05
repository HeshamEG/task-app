import * as yup from "yup";


export default () =>
  yup.object().shape({
    name: yup.string().required("required"),
    IPv4address:yup.string().required("required")
  });
