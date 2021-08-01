import React from "react";
import { useTranslation } from "react-i18next";
import { getIn } from "formik";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import { useStyles } from "./styles";

interface SelectProps {
    name: string;
    label: string;
    touched?: any;
    errors?: any;
    values?: any;
    setField?: any;
    status?: any;
    selectItems?: Array<any>;
}

const Select = (props: SelectProps) => {
    let {
        errors,
        label,
        name,
        touched,
        values,
        status,
        setField,
        selectItems
    } = props;
    const classes = useStyles();
    const [formLocale] = useTranslation(["form"]);

    return (<FormControl
        required
        variant="outlined"
        className={classes.formInput}
    >
        <TextField
            required
            select
            id={name}

            onChange={(e: any) => {
                setField(name, e.target.value);
            }}
            label={label}
            variant="outlined"
            error={
                getIn(touched, name) &&
                (!!getIn(errors, name) || !!getIn(status, name))
            }
            helperText={
                touched[name] &&
                !!errors[name] &&
                formLocale("errors.required")
            }
        >
            {!!selectItems &&
                selectItems.map((item: any, index: number) => (
                    <MenuItem key={index}
                        value={item.id}>
                        {item.name ? (item.name) : ""}
                    </MenuItem>
                ))}
        </TextField>
    </FormControl>

    );

};
export { Select };
export type { SelectProps };
