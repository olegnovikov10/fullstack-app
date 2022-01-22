import React from 'react'

import PT from 'prop-types'

const Profile = ({ userProfile: { id, name, alias } }) => {
	return <div>{`${id} - ${name} - ${alias}`}</div>
}

Profile.propTypes = {
	userProfile: PT.shape({
		id: PT.number,
		name: PT.string,
		alias: PT.string,
		phone: PT.string,
	}).isRequired,
}

export default Profile
