import { getUser } from './api/crud'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Profile from '../../components/UserProfile'
import Loading from '../../components/Loading'

const UserProfileContainer = () => {
	const { id } = useParams()

	const { isFetching, data } = useQuery('userProfile', () =>
		getUser(id),
	)
	const userProfile = data?.data || {}

	return (
		<>
			{isFetching && <Loading />}
			<Profile userProfile={userProfile} />
		</>
	)
}

export default UserProfileContainer
