import { useState } from 'react'
import PostForm from '../../components/PostForm'

const PostFormContainer = (props) => {

	return (
		<>
			<PostForm {...props}  />
		</>
	)
}

export default PostFormContainer
