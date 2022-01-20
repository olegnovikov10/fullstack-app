import React from 'react'
import userTypes from '../../PropTypes/userTypes'
import PT from 'prop-types'

const Profile = () => {
	return <div>profile</div>
}

Profile.propTypes = {
	name: PT.string.isRequired,
	age: PT.number,
	alias: PT.string,
	...userTypes,
}

export default Profile
