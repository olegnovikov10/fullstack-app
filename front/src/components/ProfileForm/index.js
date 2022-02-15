import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import PT from 'prop-types'
import { Button } from '@mui/material'
import { TextField } from 'formik-mui'

import { useMutation } from 'react-query'
import { updateUser } from '../../containers/UserProfile/api/crud'

import './style.css'

const ProfileForm = ({ userProfile, handleIsOpenForm }) => {
	const Schema = Yup.object().shape({
		alias: Yup.string()
			.required()
			.min(2, 'More than two count words!')
			.max(24, 'Less Than 24 symbols'),
		name: Yup.string()
			.required()
			.min(2, 'More than two count words!')
			.max(50, 'Less Than 24 symbols'),
		phone: Yup.string().max(14, 'max 14 numbers'),
		birthday: Yup.string(),
	})

	const handleOnSubmit = (data) => {
		mutation.mutate({
			alias: data.alias,
			birthday: data.birthday,
			name: data.name,
			phone: data.phone,
		})
		handleIsOpenForm()
	}

	const mutation = useMutation((data) => {
		updateUser(data, userProfile.id)
	})

	const initialValue = {
		phone: userProfile.phone || '',
		alias: userProfile.alias || '',
		name: userProfile.name || '',
		birthday: userProfile.birthday || '',
	}

	return (
		<div className="form-wrap">
			<div className="form">
				<Formik
					initialValues={initialValue}
					validationSchema={Schema}
					onSubmit={(values, action) => {
						handleOnSubmit(values)
					}}
				>
					{(errors) => {
						return (
							<Form>
								<Field component={TextField} name="alias" />
								{errors.alias ? <div>{error.alias}</div> : null}
								<br />
								<br />
								<Field component={TextField} name="name" />
								{errors.name ? <div>{error.name}</div> : null}
								<br />
								<br />
								<Field name="phone" component={TextField} />
								{errors.name ? <div>{error.name}</div> : null}
								<br />
								<br />
								<Field component={TextField} name="birthday" />
								{errors.name ? <div>{error.name}</div> : null}
								<br />
								<br />
								<Button variant="outlined" onClick={handleIsOpenForm}>
									Cancel
								</Button>
								<Button type="submit" variant="contained">
									Save
								</Button>
							</Form>
						)
					}}
				</Formik>
			</div>
		</div>
	)
}

ProfileForm.propTypes  =  {
	userProfile : PT.shape({
		phone : PT.string,
		alias : PT.string.isRequired,
		name : PT.string.isRequired,
		birthday: PT.string
	}),
	handleIsOpenForm: PT.func
}

export default ProfileForm
