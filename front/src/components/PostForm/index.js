import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import PT from 'prop-types'

import FormikAutocomplete from '../FormAutocomplete/FormAutocomplete'
import  Avatar from '../Avatar/index'

import { Button } from '@mui/material'
import { TextField } from 'formik-mui'
import { AddPost, updatePost , addAvatar } from '../../containers/Posts/api/crud'
import { useMutation } from 'react-query'

import './style.css'
import { useState } from 'react'

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
			visibility : data.visibility.label,
			avatar: resultImage
		})
		handleIsOpenPost()
	}
	const handleResetForm = (resetForm) => () => {
		resetForm()
		handleIsOpenPost()
	}

	const mutation = useMutation((data) => {
		const newData = Object.keys(data).reduce((object, key) => {
			if (key !== 'avatar') {
				object[key] = data[key]
			}
			return object
		}, {})
		if (action === ADD) {
			AddPost(newData)
		}
		if (action === EDIT) {
			updatePost(post?.id, newData)
		}
		addAvatar(data.avatar , post.id)

	})

	const initialValue = {}

	if (action === EDIT) {
		initialValue.content = post?.content || ''
	}

	if (action === ADD) {
		initialValue.content = ''
	}

	const [resultImage , setResultImage] =  useState()


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
									value={options.value}
									options={options}
								/>
								<Avatar setResultImage={setResultImage}  />

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
