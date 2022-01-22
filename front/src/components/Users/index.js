import { Link } from 'react-router-dom'
import PT from 'prop-types'

const Users = ({ users  }) => {
	return (
		<div>
			<ul>
				{users.map(({ id, name }) => {
					return (
						<li key={id}>
							{id} - {name}
							<Link to={`/users/${id}`}> Подробнее</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

Users.propTypes = {
	users: PT.array,
}

export default Users
