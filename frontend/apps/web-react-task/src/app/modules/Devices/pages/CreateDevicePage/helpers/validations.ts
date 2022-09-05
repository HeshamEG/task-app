import * as yup from "yup";


export default () =>
  yup.object().shape({
    vendor:yup.string().required("required"),
    gateway:yup.string().required("required"),
    UID:yup.string().required().matches(/^[0-9]+$/, "Must be a number")
  });
  