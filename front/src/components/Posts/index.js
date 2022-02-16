import PT from 'prop-types'
import { Button } from '@mui/material'

const Posts = ({ posts, handleIsOpenPost, handleEditPost }) => {
	const editPost = (post) => () => {
		handleIsOpenPost()
		handleEditPost(post, 'EDIT')

	}
	const host = 'http://localhost:3002/'
	return (
		<div>
			{posts?.map((post) => {
				return (
					<div key={post.id}>
						<div>{post.content}</div>
						<div><img src={`${host}${post.avatar}`} alt=""/></div>
						<div>{post.visibility}</div>
						<Button variant="contained" onClick={editPost(post)}>
							Редактировать...
						</Button>
					</div>
				)
			})}
		</div>
	)
}

Posts.propTypes = {
	posts: PT.array.isRequired,
	handleIsOpenPost: PT.func,
	handleEditPost: PT.func,
}

export default Posts
