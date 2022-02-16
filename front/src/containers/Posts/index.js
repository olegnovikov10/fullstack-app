import { useQuery } from 'react-query'
import { getPosts, updatePost } from './api/crud'

import { useState } from 'react'

import Loading from '../../components/Loading'

import Posts from '../../components/Posts/index'
import PostFormContainer from '../PostForm'
import Button from '@mui/material/Button'

const PostContainer = () => {
	const { isFetching, data } = useQuery('posts', () => getPosts())
	const posts = data?.data || []

	const [isOpenForm, setIsOpenForm] = useState(false)
	const [editPost, setPost] = useState({})
	const [action, setAction] = useState('ADD')



	const handleIsOpenPost = () => {
		setIsOpenForm(!isOpenForm)
	}

	const handleIsOpenPostContainer = (payload) => ()=>{
		handleIsOpenPost()
		setAction(payload)
	}

	const handleEditPost = (post, payload) => {
		setPost(post)
		setAction(payload)
	}

	return (
		<>
			{isFetching && <Loading />}
			<Button onClick={handleIsOpenPostContainer('ADD')}> add post</Button>
			<Posts
				editPost={editPost}
				handleEditPost={handleEditPost}
				posts={posts}
				isOpenForm={isOpenForm}
				handleIsOpenPost={handleIsOpenPost}
			/>
			{isOpenForm && (
				<PostFormContainer
					handleIsOpenPost={handleIsOpenPost}
					action={action}
					post={editPost}
				/>
			)}
		</>
	)
}

export default PostContainer
