import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import PT from 'prop-types'
import { Button } from '@mui/material'
import { TextField } from 'formik-mui'

import { useMutation } from 'react-query'
import { updateUser ,addAvatar } from '../../containers/UserProfile/api/crud'

import './style.css'
import FormikAutocomplete from '../FormAutocomplete/FormAutocomplete'
import Avatar from '../Avatar'
import { useState } from 'react'

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



	const options = [
		{ value: 'all', label: 'All people' },
		{ value: 'fans', label: ' My fans' },
		{ value: 'Me', label: 'For me' },
	]

	const handleOnSubmit = (data) => {
		mutation.mutate({
			alias: data.alias,
			birthday: data.birthday,
			name: data.name,
			phone: data.phone,
			visibility: data.visibility.label,
			avatar : resultImage
		})

		handleIsOpenForm()
	}

	const mutation = useMutation((data) => {
		const newData = Object.keys(data).reduce((object, key) => {
			if (key !== 'avatar') {
				object[key] = data[key]
			}
			return object
		}, {})
		updateUser(newData ,userProfile.id)
		if(resultImage){
			addAvatar(data.avatar ,userProfile.id)
			setResultImage(null)
		}
	})

	const initialValue = {
		phone: userProfile.phone || '',
		alias: userProfile.alias || '',
		name: userProfile.name || '',
		birthday: userProfile.birthday || '',
	}

	const [resultImage, setResultImage] = useState()

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
								<Avatar resultImage={resultImage} setResultImage={setResultImage} />
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
								<Field
									component={FormikAutocomplete}
									name="visibility"
									label="visible to"
									value={options.value}
									options={options}
								/>
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
