import React from 'react'
import PT from 'prop-types'
import { Link } from 'react-router-dom'

const Users = ({ users }) => {
	return (
			<ul>
			{users.map(({ id, name }) => {
				return (
					<li  key={id}>
							{id} - {name}
							<Link to={`/users/${id}`}> Подробнее</Link>
					</li>
				)
			})}
			</ul>
	)
}

Users.propTypes = {
	users: PT.array,
}

export default Users
