import { getPost } from './api/crud'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import DetailPost from '../../components/Post'
import Loading from '../../components/Loading'

const DetailPostСontainer = () => {
	const { id } = useParams()
	const { isFetching, data } = useQuery('post', () => getPost(id))

	const post = data?.data || {}
	return (
		<>
			{isFetching && <Loading />}
			<DetailPost post={post} />
		</>
	)
}

export default DetailPostСontainer
