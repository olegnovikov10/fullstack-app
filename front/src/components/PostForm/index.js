import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import PT from 'prop-types'

import FormikAutocomplete from '../FormAutocomplete/FormAutocomplete'

import { Button } from '@mui/material'
import { TextField } from 'formik-mui'
import { AddPost, updatePost } from '../../containers/Posts/api/crud'
import { useMutation } from 'react-query'

import './style.css'

const PostForm = ({ post, handleIsOpenPost, action }) => {
	const ADD = 'ADD'
	const EDIT = 'EDIT'
	const Schema = Yup.object().shape({
		content: Yup.string()
			.min(3, 'Too short')
			.max(400, 'Very long')
			.required('Required Fild'),
	})


	const options = [
		{ value: 'all', label: 'All people' },
		{ value: 'fans', label: ' My fans' },
		{ value: 'Me', label: 'For me' },
	]



	const handleOnSubmit = (data) => {
		mutation.mutate({
			content: data.content,
			visibility : data.visibility
		})
		handleIsOpenPost()
	}
	const handleResetForm = (resetForm) => () => {
		resetForm()
		handleIsOpenPost()
	}

	const mutation = useMutation((data) => {
		if (action === ADD) {
			AddPost(data)
		}
		if (action === EDIT) {
			updatePost(post?.id, data)
		}
	})

	const initialValue = {}

	if (action === EDIT) {
		initialValue.content = post?.content || ''
	 initialValue.visibility = post?.visibility ? post?.visibility : options[0].label
	}

	if (action === ADD) {
		initialValue.content = ''
	 initialValue.visibility = ''
	}


	return (
		<div className="form-wrap">
			<div className="form">
				<Formik
					initialValues={initialValue}
					validationSchema={Schema}
					onSubmit={(values, action) => {
						handleOnSubmit(values)
						action.resetForm()
					}}
				>
					{(props) => {
						const { handleReset, errors } = props
						return (
							<Form>
								<Field
									component={FormikAutocomplete}
									name="visibility"
									label="visible to"
									options={options}
								/>

								<Field component={TextField} name="content" />
								{errors.content ? <div>{errors.content}</div> : null}
								<br />
								<Button variant="contained" type="submit">
									{action === EDIT ? 'UPDATE' : 'Create'}
								</Button>
								<Button
									variant="contained"
									onClick={handleResetForm(handleReset)}
								>
									Cancel
								</Button>
							</Form>
						)
					}}
				</Formik>
			</div>
		</div>
	)
}

PostForm.propTypes = {
	handleIsOpenPost: PT.func,
	action: PT.string,
	post: PT.shape({
		content: PT.string,
	}),
}

export default PostForm
