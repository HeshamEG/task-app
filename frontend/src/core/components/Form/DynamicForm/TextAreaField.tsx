import React from "react";
import { useTranslation } from "react-i18next";
import { getIn } from "formik";

import { TextField as InputField } from "@material-ui/core";

import FormControl from "@material-ui/core/FormControl";

import { useStyles } from "./styles";

interface TextAreaFieldProps {
    handleInputChange?: (event: any) => void;
    name: string;
    label: string;
    type: string;
    touched?: any;
    errors?: any;
    values?: any;
    setField?: any;
    status?: any;
}

const TextAreaField = (props: TextAreaFieldProps) => {
    let {
        handleInputChange,
        errors,
        label,
        name,
        touched,
        values,
        status,
    } = props;
    const classes = useStyles();
    const [formLocale] = useTranslation(["form"]);

    return (<FormControl variant="outlined" className={classes.formInput}>
        <InputField
            required
            autoFocus
            variant="outlined"
            size="medium"
            label={label}
            type="textarea"
            multiline
            rows={4}
            name={name}
            error={
                getIn(touched, name) &&
                (!!getIn(errors, name) || !!getIn(status, name))
            }
            helperText={
                (touched[name] && !!errors[name] && formLocale(errors[name])) ||
                getIn(status, name)
            }
            onChange={handleInputChange}
            value={values[name]}
            className={classes.formInput}
        />
    </FormControl>
    );

};
export { TextAreaField };
export type { TextAreaFieldProps };
