import { Checkbox as Check } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useStyles } from "./styles";

interface CheckboxProps {
    handleInputChange?: (event: any) => void;
    name: string;
    label: string;
    values?: any;
    setField?: any;
    status?: any;
}

const Checkbox = (props: CheckboxProps) => {
    let {
        handleInputChange,
        label,
        name,
        values,
    } = props;

    return (<FormControlLabel
        style={{
            justifyContent: "center",
            alignItems: "center",
        }}
        control={
            <Check
                checked={values[name]}
                onChange={handleInputChange}
                name={name}
                color="primary"
            />
        }
        label={label}
    />
    );
};

export { Checkbox };
export type { CheckboxProps };
