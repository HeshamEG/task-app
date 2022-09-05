
import { memo, useCallback } from "react";
import { getIn } from "formik";
import { TextField as InputField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { useStyles } from "./styles";

interface TextFieldProps {
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

const TextField = (props: TextFieldProps) => {
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

    const onChange = useCallback((e: any) => {
        handleInputChange && handleInputChange(e)
    }, [name, values[name]])

    return (<FormControl
        required
        variant="outlined"
        className={classes.formInput}
    >
        <InputField
            required
            autoFocus
            variant="outlined"
            size="medium"
            label={label}
            type="text"
            name={name}
            id={name}
            error={
                getIn(touched, name) &&
                (!!getIn(errors, name) || !!getIn(status, name))
            }
            helperText={
                (touched[name] &&
                    !!errors[name] &&
                    errors[name]) ||
                getIn(status, name)
            }
            onChange={onChange}
            fullWidth
        />
    </FormControl>
    );

};

export default memo(TextField);

export type { TextFieldProps };
