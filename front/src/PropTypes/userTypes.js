import PT from 'prop-types'


export const UsersPropTypes = {
	user : PT.shape({
		id: PT.number.isRequired,
		name:PT.string,
		alias:PT.string,
	})
}