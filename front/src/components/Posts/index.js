import { Link } from 'react-router-dom'
import PT from 'prop-types'

const Posts = ({ posts }) => {
	return (
		<div>
			{posts?.map(({ id, content }) => {
				return (
					<div key={id}>
						<div>{content}</div>
						<Link to={`/posts/${id}`}> Подробнее...</Link>
					</div>
				)
			})}
		</div>
	)
}

Posts.propTypes = {
	posts : PT.array.isRequired
}




export default Posts
