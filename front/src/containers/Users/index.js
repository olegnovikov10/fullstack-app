import { useQuery } from 'react-query'
import { getUsers } from './api/crud'
import Loading from '../../components/Loading'
import Users from '../../components/Users'

const UsersContainer = () => {
	const { isFetching, data} = useQuery('users', () =>
		getUsers(),
	)
	const users = data?.data || []
	return (
		<>
			{isFetching && <Loading />}
			<Users users={users} />
		</>
	)
}

export default UsersContainer
