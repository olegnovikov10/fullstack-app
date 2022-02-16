import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { fieldToTextField } from 'formik-mui';

const  FormikAutocomplete = (props) => {
	const { form: { setTouched, setFieldValue  } } = props;
	const { error, helperText, ...field } = fieldToTextField(props);
	const { name } = field;

	return (
		<Autocomplete
			{...props}
			{...field}
			isOptionEqualToValue={(option, value) => option.id === value.id}
			onBlur={() => setTouched({ [name]: true })}
			getOptionLabel={(option) => (option.label ? option.label : 'All people')}
			onChange={(_, value) => setFieldValue(name, value)}
			renderInput={(props) => (
				<TextField {...props} helperText={helperText} error={error} />
			)}
		/>
	)
}
export default  FormikAutocomplete