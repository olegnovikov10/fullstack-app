import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Cropper from 'react-cropper'
import PT from 'prop-types'

import 'cropperjs/dist/cropper.css'

const Avatar = ({ setResultImage }) => {
	const fileType = 'image.*'
	const fileSize = '100000'
	const [image, setImage] = useState()
	const [cropper, setCropper] = useState()
	const handleChange = (e) => {
		e.preventDefault()
		const file = e.target.files[0]

		if (file.type.match(fileType) && file.size < fileSize) {
			const reader = new FileReader()
			reader.onload = () => {
				setImage(reader.result)
			}
			reader.readAsDataURL(file)
		} else {
			console.error('Wrong file format or size!')
		}
	}

	const cropImage = () => {
		if (typeof cropper !== 'undefined') {
			cropper.getCroppedCanvas().toBlob((blob) => {
				const formData = new FormData();
				formData.append('avatar', blob/*, 'example.png' */);
				setResultImage(formData)
			})
			setImage(null)
		}
	}
	const deleteImage = () => {
		setResultImage(null)
		setImage(null)
	}

	return (
		<Box margin={5}>
			{!image && (
				<Button variant="contained" component="label">
					change avatar
					<input type="file" hidden onChange={handleChange} />
				</Button>
			)}
			{image && (
				<Cropper
					src={image}
					onInitialized={(instance) => setCropper(instance)}
					rotatable={false}
					viewMode={1}
				/>
			)}
			{image && <Button onClick={deleteImage}>Delete</Button>}
			{image && (
				<Button variant="contained" onClick={cropImage}>
					Crop
				</Button>
			)}
		</Box>
	)
}

Avatar.PropTypes = {
	setResultImage : PT.func
}

export default Avatar
