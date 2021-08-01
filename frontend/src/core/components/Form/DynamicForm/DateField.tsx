import React from "react";
import { useTranslation } from "react-i18next";
import { getIn } from "formik";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import moment from "moment";
import arLocale from "date-fns/locale/ar-SA";
import enLocale from "date-fns/locale/en-US";

import FormControl from "@material-ui/core/FormControl";

import { useStyles } from "./styles";

interface DateFieldProps {
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

const DateField = (props: DateFieldProps) => {
    let {
        setField,
        errors,
        label,
        name,
        touched,
        values,
        status,
    } = props;
    const classes = useStyles();
    const [formLocale] = useTranslation(["form"]);

    return (<FormControl
        required
        variant="outlined"
        className={classes.formInput}
        error={getIn(touched, name) && getIn(errors, name)}
    >
        <MuiPickersUtilsProvider
            utils={DateFnsUtils}
            locale={enLocale}
        >
            <DatePicker
                required
                label={label}
                name={name}
                format={"do MMMM yyyy"}
                value={getIn(values, name)}
                inputVariant="outlined"
                className={classes.formInput}
                okLabel={formLocale("fields.ok")}
                cancelLabel={formLocale("fields.discard")}
                disablePast={true}
                error={
                    getIn(touched, name) &&
                    (!!getIn(errors, name) || !!getIn(status, name))
                }
                helperText={
                    (touched[name] && !!errors[name] && formLocale(errors[name])) ||
                    getIn(status, name)
                }
                onChange={(e: any) => {
                    setField(name, moment(e).lang("en").format(""));
                }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </MuiPickersUtilsProvider>
    </FormControl>
    );

};
export { DateField };
export type { DateFieldProps };
