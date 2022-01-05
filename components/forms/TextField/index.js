import { TextField } from "@mui/material";
import { useField } from "formik";
import  styles from "../../../styles/GR/Gr.module.css"


const TextfieldWrapper = ({ name, ...otherProps }) => {
	const [field, meta] = useField(name);
	const config = {
		...otherProps,
		...field,
		fulWidth: true,
		variant: "outlined",
	};

	if (meta.touched && meta.error) {
		config.error = true;
		config.helperText = meta.error;
	}

	return <TextField {...config} className={styles.textwrapper} style={{margin:"10px"}} />;
};
export default TextfieldWrapper;
