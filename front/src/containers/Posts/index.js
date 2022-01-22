import { useQuery } from 'react-query'
import { getPosts } from './api/crud'

import Loading from '../../components/Loading'

import Posts from '../../components/Posts/index'

const PostContainer = () => {
	const { isFetching, data } = useQuery('posts', () => getPosts())
	const posts = data?.data || []

	return (
		<>
			{isFetching && <Loading />}
			<Posts posts={posts} />
		</>
	)
}

export default PostContainer
