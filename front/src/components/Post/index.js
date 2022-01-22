import PT from 'prop-types'

const DetailPost = ({ post: { content } }) => {
	return <div>{content}</div>
}

DetailPost.propTypes = {
	post: PT.shape({
		content: PT.string,
	}).isRequired,
}

export default DetailPost
